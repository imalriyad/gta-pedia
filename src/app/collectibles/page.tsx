import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/collectibles" },
  robots: { index: false, follow: true },
  title: "GTA VI Collectibles: Packages, Murals & Stunt Jumps",
  description:
    "Checklist of every GTA VI collectible with a trace: hidden packages, graffiti murals, sunken caches and stunt jumps across Leonida.",
};

export default function CollectiblesPage() {
  const collectibles = getEntitiesByCategory("collectibles");
  const total = collectibles.reduce(
    (n, c) => n + Number((c as any).totalCount || 0),
    0
  );

  return (
    <CategoryDirectoryView
      meta={categoryMeta("collectibles")}
      entities={collectibles}
      stats={[
        { label: "Sets", value: String(collectibles.length) },
        { label: "Items", value: String(total) },
        { label: "Completion", value: "100%" },
      ]}
      note="Counts marked Observed come from footage and community mapping, not a Rockstar checklist. Where a total is unknown the page says so instead of inventing one."
    />
  );
}
