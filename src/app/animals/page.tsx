import type { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/animals" },
  title: "GTA 6 Animals: Wildlife, Species & Habitats in Leonida",
  description: "Browse animals in Grand Theft Auto 6, with wildlife profiles, habitat notes, and images for the species documented across Leonida.",
};

export default function AnimalsPage() {
  const animals = getEntitiesByCategory("wildlife");
  return <CategoryDirectoryView
    meta={categoryMeta("wildlife")}
    entities={animals}
    stats={[{ label: "Species files", value: String(animals.length) }, { label: "State", value: "Leonida" }, { label: "Evidence", value: "Tagged per entry" }]}
    note="Species records include observed or reported evidence and habitat notes. Broad habitat references are not exact spawn coordinates."
  />;
}
