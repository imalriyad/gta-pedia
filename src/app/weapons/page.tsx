import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/weapons" },
  title: "GTA 6 Weapons: Pistols, Rifles, Shotguns & Melee",
  description:
    "Explore weapons shown or named in Grand Theft Auto VI, including pistols, rifles, shotguns, and melee weapons, with source notes for each record.",
};

export default function WeaponsPage() {
  const weapons = getEntitiesByCategory("weapons");
  const classes = new Set(weapons.map((w) => (w as any).weaponClass));
  const named = weapons.filter(
    (w) => (w as any).nameSource === "Rockstar"
  ).length;

  return (
    <CategoryDirectoryView
      meta={categoryMeta("weapons")}
      entities={weapons}
      stats={[
        { label: "Records", value: String(weapons.length) },
        { label: "Families", value: String(classes.size) },
        { label: "Named", value: String(named) },
      ]}
      note="Most of this arsenal was identified from footage, not introduced by Rockstar. Damage, magazine and price bars are estimates; treat community working names as labels, not canon."
    />
  );
}
