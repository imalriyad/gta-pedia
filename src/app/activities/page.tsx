import { Metadata } from "next";
import { getEntitiesByCategory } from "@/content/repositories";
import { CategoryDirectoryView } from "@/components/wiki/CategoryDirectoryView";
import { categoryMeta } from "@/lib/categories";

export const metadata: Metadata = {
  alternates: { canonical: "/activities" },
  title: "GTA 6 Activities: Sports, Mini-Games & Things to Do",
  description:
    "Find activities in GTA VI, from sports and mini-games to leisure activities across Leonida, with details and evidence notes for each listing.",
};

export default function ActivitiesPage() {
  const activities = getEntitiesByCategory("activities");

  return (
    <CategoryDirectoryView
      meta={categoryMeta("activities")}
      entities={activities}
      stats={[
        { label: "Activities", value: String(activities.length) },
        { label: "Activity types", value: "5" },
        { label: "Reported entries", value: String(activities.length) },
      ]}
      note="Entries summarize publicly reported activity listings. Details marked estimated or observed can change as more in-game information becomes available."
    />
  );
}
