import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { SideMissionDirectory } from "@/components/missions/SideMissionDirectory";

export const metadata: Metadata = {
  alternates: { canonical: "/missions/type/side" },
  title: "GTA 6 Side Missions: Optional Jobs & Errands",
  description: "Optional GTA VI missions and errands, with character, location, reward, and missable notes.",
};

export default function SideMissionsPage() {
  return <div>
    <header className="border-b border-line">
      <div className="container-x py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Missions", href: "/missions" }, { label: "Side Missions", href: "/missions/type/side" }]} />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <p className="eyebrow text-coral">Optional content · Leonida</p>
            <h1 className="mt-3 display text-5xl text-paper md:text-7xl">Side missions</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">Short errands and character-led jobs sit apart from the main story archive. Track your progress, search the list, and check missable notes before advancing the story.</p>
          </div>
          <Link href="/missions" className="text-[10px] uppercase tracking-widest text-coral hover:text-paper">Browse main mission files ↗</Link>
        </div>
      </div>
    </header>
    <div className="container-x py-8 md:py-10"><SideMissionDirectory /></div>
  </div>;
}
