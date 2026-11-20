import fs from "fs";
import path from "path";
import { BaseEntitySchema } from "../src/content/schemas/entity";

const CONTENT_DIR = path.join(process.cwd(), "content");

console.log("🔍 Starting SEO Metadata Validation...");

let hasError = false;
const titles = new Set<string>();
const descriptions = new Set<string>();

function scanDir(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(scanDir(fullPath));
    } else if (item.endsWith(".json") && !item.includes("sources.json")) {
      files.push(fullPath);
    }
  }
  return files;
}

const jsonFiles = scanDir(CONTENT_DIR);

for (const file of jsonFiles) {
  const relPath = path.relative(process.cwd(), file);
  const raw = JSON.parse(fs.readFileSync(file, "utf-8"));
  const parsed = BaseEntitySchema.safeParse(raw);

  if (!parsed.success) continue;

  const entity = parsed.data;

  // Title checks
  if (!entity.seo.title || entity.seo.title.trim().length === 0) {
    console.error(`❌ Empty SEO title in ${relPath}`);
    hasError = true;
  } else if (titles.has(entity.seo.title)) {
    console.warn(`⚠️ Warning: Duplicate SEO title found: "${entity.seo.title}" in ${relPath}`);
  } else {
    titles.add(entity.seo.title);
  }

  // Description checks
  if (!entity.seo.description || entity.seo.description.trim().length < 20) {
    console.error(`❌ SEO description too short (< 20 chars) in ${relPath}`);
    hasError = true;
  } else if (descriptions.has(entity.seo.description)) {
    console.warn(`⚠️ Warning: Duplicate SEO description in ${relPath}`);
  } else {
    descriptions.add(entity.seo.description);
  }
}

if (hasError) {
  console.error("❌ SEO validation failed with errors.");
  process.exit(1);
} else {
  console.log(`✅ SEO validation passed for all ${titles.size} content pages!`);
}

