import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/secrets" },
  title: "GTA VI Secrets: Hidden Locations, Signals & Epilogues",
  description:
    "Investigations into Leonida's hidden content: offshore wrecks, strange signals, alternate outcomes and the parts of the map that stay off the brochure.",
};

export default function SecretsPage() {
  const secrets = getEntitiesByCategory("secrets");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("secrets")}
      entities={secrets}
      stats={[
        { label: "Files", value: String(secrets.length) },
        { label: "Spoilers", value: "High" },
        { label: "Basis", value: "Mixed" },
      ]}
      note="Secrets are where speculation collects. Each file names its evidence and keeps theory in its own paragraph — read the label before the lore."
    />
  );
}
