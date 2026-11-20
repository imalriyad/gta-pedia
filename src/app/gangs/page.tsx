import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/gangs" },
  title: "GTA VI Gangs & Factions: Crews, Cartels & Territory",
  description:
    "Who runs which blocks in Leonida: street crews, outlaw clubs and cartel networks, and what it costs to cross them in GTA VI.",
};

export default function GangsPage() {
  const gangs = getEntitiesByCategory("gangs");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("gangs")}
      entities={gangs}
      stats={[
        { label: "Factions", value: String(gangs.length) },
        { label: "Territory", value: "Leonida" },
        { label: "Basis", value: "Mixed" },
      ]}
      note="Gang names in GTA VI are mostly community working titles built from dialogue and signage. Treat the structure as a map of pressure, not an org chart."
    />
  );
}
