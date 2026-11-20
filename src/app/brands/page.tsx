import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/brands" },
  title: "GTA VI Brands: eCola, Pißwasser, Ammu-Nation & Parody Ads",
  description:
    "The corporations, storefronts and logos that make Leonida feel lived in — every satirical brand with an official trace in GTA VI.",
};

export default function BrandsPage() {
  const brands = getEntitiesByCategory("brands");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("brands")}
      entities={brands}
      stats={[
        { label: "Brands", value: String(brands.length) },
        { label: "Sectors", value: "6" },
        { label: "Basis", value: "Official" },
      ]}
      note="Several of these are franchise veterans returning with new packaging. The page notes what changed and what is simply a familiar logo in a new state."
    />
  );
}
