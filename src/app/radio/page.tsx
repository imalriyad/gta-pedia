import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/radio" },
  title: "GTA VI Radio: Stations, DJs & Confirmed Soundtrack",
  description:
    "The sound of Leonida: confirmed radio stations, hosts, and the music that scores the drive between jobs in Grand Theft Auto VI.",
};

export default function RadioPage() {
  const stations = getEntitiesByCategory("radio");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("radio")}
      entities={stations}
      stats={[
        { label: "Stations", value: String(stations.length) },
        { label: "Confirmed", value: "1" },
        { label: "Format", value: "FM / Streaming" },
      ]}
      note="Only a handful of stations and tracks are confirmed. Everything else is a working frequency — the dial is wider than the evidence."
    />
  );
}
