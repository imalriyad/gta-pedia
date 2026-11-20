import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/missions" },
  title: "GTA 6 Missions: Story Missions, Heists & Side Missions",
  description:
    "Browse GTA VI story mission and heist records, plus a separate side mission guide. Entries include available story details and spoiler labels.",
};

export default function MissionsPage() {
  const missions = getEntitiesByCategory("missions");

  return (
    <>
      <div className="container-x pt-5"><Link href="/missions/type/side" className="inline-flex border border-coral/40 bg-coral/10 px-4 py-3 text-xs text-paper transition-colors hover:bg-coral/20">Browse optional side missions ↗</Link></div>
      <CategoryDirectoryView
        meta={categoryMeta("missions")}
        entities={missions}
        stats={[
          { label: "Records", value: String(missions.length) },
          { label: "Heists", value: "2" },
          { label: "Spoilers", value: "Marked" },
        ]}
        note="Mission names and beats beyond the reveal material are working titles. Each page carries a spoiler level, so you can read the setup without losing the turn."
      />
    </>
  );
}
