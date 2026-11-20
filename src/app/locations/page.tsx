import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/locations" },
  title: "GTA 6 Map & Locations: Vice City, Leonida & Regions",
  description:
    "Explore the GTA 6 map and locations across Leonida, including Vice City, the Keys, wetlands, Port Gellhorn, Mount Kalaga, and other named regions.",
};

export default function LocationsPage() {
  const locations = getEntitiesByCategory("locations");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("locations")}
      entities={locations}
      stats={[
        { label: "Regions", value: String(locations.length) },
        { label: "State", value: "Leonida" },
        { label: "Basis", value: "Official" },
      ]}
      note="Leonida is one state, not a set of disconnected levels. The six regions interlock: the wetlands drain toward Vice City, the Keys trail south, and Mount Kalaga anchors the northern horizon."
    />
  );
}
