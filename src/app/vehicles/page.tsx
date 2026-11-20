import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/vehicles" },
  title: "GTA 6 Vehicles: Cars, Motorcycles, Boats & Aircraft",
  description:
    "Browse the Grand Theft Auto 6 vehicle guide, with car, motorcycle, boat, and aircraft records, images, vehicle classes, and evidence notes.",
};

export default function VehiclesPage() {
  const vehicles = getEntitiesByCategory("vehicles");
  const classes = new Set(vehicles.map((v) => (v as any).vehicleClass));
  const named = vehicles.filter((v) =>
    ["official", "confirmed"].includes(v.verificationStatus)
  ).length;

  return (
    <CategoryDirectoryView
      meta={categoryMeta("vehicles")}
      entities={vehicles}
      stats={[
        { label: "Records", value: String(vehicles.length) },
        { label: "Classes", value: String(classes.size) },
        { label: "Named", value: String(named) },
      ]}
      note="Performance bars are pre-launch estimates read from each vehicle's real-world basis. Rockstar has not published handling or speed figures; the silhouette plates mark records with no official image."
    />
  );
}
