import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/easter-eggs" },
  title: "GTA VI Easter Eggs: Vice City Nods & Franchise References",
  description:
    "Nods, callbacks and running jokes in Grand Theft Auto VI — from 1980s Vice City tributes to the legends that refuse to die.",
};

export default function EasterEggsPage() {
  const easterEggs = getEntitiesByCategory("easter-eggs");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("easter-eggs")}
      entities={easterEggs}
      stats={[
        { label: "Entries", value: String(easterEggs.length) },
        { label: "Spoilers", value: "Low" },
        { label: "Basis", value: "Observed" },
      ]}
      note="An easter egg is a claim about intent. Where the reference is clear in official footage we say so; where it is a community reading, the entry is labelled accordingly."
    />
  );
}
