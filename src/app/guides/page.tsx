import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "GTA VI Guides: 100% Completion, Heists & Systems",
  description:
    "Practical, sourced GTA VI guides: completion checklists, police evasion, helicopter spawns, storage, money and the systems behind them. No invented codes.",
};

export default function GuidesPage() {
  const guides = getEntitiesByCategory("guides");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("guides")}
      entities={guides}
      stats={[
        { label: "Manuals", value: String(guides.length) },
        { label: "Format", value: "Sourced" },
        { label: "Updated", value: "Nov 2026" },
      ]}
      note="Every guide separates what Rockstar has confirmed from what is reported or still unknown. Nothing here repeats fabricated code lists or stat sheets."
    />
  );
}
