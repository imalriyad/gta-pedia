import MiniSearch from "minisearch";
import { getSearchDocuments } from "@/content/repositories";

let miniSearchInstance: MiniSearch | null = null;

export function getSearchIndex() {
  if (miniSearchInstance) return miniSearchInstance;

  const docs = getSearchDocuments();
  miniSearchInstance = new MiniSearch({
    fields: ["name", "aliases", "summary", "tags", "category"],
    storeFields: ["id", "name", "slug", "category", "summary", "spoilerLevel", "verificationStatus"],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { name: 3, aliases: 2, tags: 1.5, category: 1 },
    },
  });

  miniSearchInstance.addAll(docs);
  return miniSearchInstance;
}

export function searchWiki(query: string, categoryFilter?: string) {
  if (!query || query.trim() === "") return [];

  const index = getSearchIndex();
  let results = index.search(query);
  results = results.filter((r) => r.category !== "collectibles");

  if (categoryFilter && categoryFilter !== "all") {
    results = results.filter((r) => r.category === categoryFilter);
  }

  return results.slice(0, 10);
}

