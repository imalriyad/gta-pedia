import type { Metadata } from "next";
import { MapExplorer } from "@/components/tools/MapExplorer";

export const metadata: Metadata = {
  alternates: { canonical: "/interactive-map" },
  title: "GTA 6 Interactive Map: Leonida Locations & Markers",
  description: "Explore the GTA VI interactive map of Leonida. Zoom, search, and filter map markers for locations, activities, vehicles, and story points.",
};

export default function InteractiveMapPage() {
  return <main className="h-[calc(100dvh-72px)] min-h-[600px] p-3 md:p-5"><MapExplorer /></main>;
}
