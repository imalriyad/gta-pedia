import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/characters" },
  title: "GTA 6 Characters: Lucia, Jason & Leonida Cast",
  description:
    "Browse the GTA 6 and Grand Theft Auto VI character wiki, with profiles for Lucia Caminos, Jason Duval, and the people connected to their story in Leonida.",
};

export default function CharactersPage() {
  const characters = getEntitiesByCategory("characters");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("characters")}
      entities={characters}
      stats={[
        { label: "Profiles", value: String(characters.length) },
        { label: "Playable", value: "2" },
        { label: "Basis", value: "Official" },
      ]}
      note="Only two people are confirmed playable. Everyone else here is a named or clearly credited presence in official material; roles marked Reported are still working descriptions."
    />
  );
}
