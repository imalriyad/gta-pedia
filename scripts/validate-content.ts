import fs from "fs";
import path from "path";
import { BaseEntitySchema, SourceSchema } from "../src/content/schemas/entity";

const CONTENT_DIR = path.join(process.cwd(), "content");

console.log("🔍 Starting Content Validation...");

let hasError = false;
const entityIds = new Set<string>();
const entitySlugs = new Set<string>();
const allRelatedTargets: string[] = [];

// Recursive file scanner
function scanDir(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(scanDir(fullPath));
    } else if (item.endsWith(".json")) {
      files.push(fullPath);
    }
  }
  return files;
}

const jsonFiles = scanDir(CONTENT_DIR);
console.log(`Found ${jsonFiles.length} content files.`);

for (const file of jsonFiles) {
  const relPath = path.relative(process.cwd(), file);
  try {
    const raw = JSON.parse(fs.readFileSync(file, "utf-8"));

    if (relPath.includes("sources.json")) {
      for (const src of raw) {
        const parsed = SourceSchema.safeParse(src);
        if (!parsed.success) {
          console.error(`❌ Source validation error in ${relPath}:`, parsed.error.format());
          hasError = true;
        }
      }
      continue;
    }

    const parsed = BaseEntitySchema.safeParse(raw);
    if (!parsed.success) {
      console.error(`❌ Entity validation error in ${relPath}:`, parsed.error.format());
      hasError = true;
      continue;
    }

    const entity = parsed.data;

    // Duplicate ID check
    if (entityIds.has(entity.id)) {
      console.error(`❌ Duplicate Entity ID found: "${entity.id}" in ${relPath}`);
      hasError = true;
    } else {
      entityIds.add(entity.id);
    }

    // Duplicate slug check per category
    const slugKey = `${entity.category}/${entity.slug}`;
    if (entitySlugs.has(slugKey)) {
      console.error(`❌ Duplicate Slug found: "${slugKey}" in ${relPath}`);
      hasError = true;
    } else {
      entitySlugs.add(slugKey);
    }

    if (entity.relatedEntityIds) {
      allRelatedTargets.push(...entity.relatedEntityIds);
    }
  } catch (err) {
    console.error(`❌ Failed to parse JSON file: ${relPath}`, err);
    hasError = true;
  }
}

// Broken relationships check
for (const targetId of allRelatedTargets) {
  if (!entityIds.has(targetId)) {
    console.warn(`⚠️ Warning: Relation target ID "${targetId}" is referenced but not found in loaded content.`);
  }
}

if (hasError) {
  console.error("❌ Content validation failed with errors.");
  process.exit(1);
} else {
  console.log(`✅ All ${entityIds.size} entities and content files validated successfully!`);
}

