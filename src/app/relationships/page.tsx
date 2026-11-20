import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { RelationshipGraph } from "@/components/tools/RelationshipGraph";

export const metadata: Metadata = {
  alternates: { canonical: "/relationships" },
  title: "GTA 6 Character Relationship Map: Leonida Connections",
  description: "Explore the character connections established in Rockstar's public GTA VI profiles, with evidence notes and filters.",
};

export default function RelationshipsPage() {
  return <div className="container-x py-8 md:py-12">
    <Breadcrumbs items={[{ label: "Relationship Map", href: "/relationships" }]} />
    <header className="mb-8 mt-8 max-w-4xl"><p className="eyebrow text-coral">Cast connections · evidence-led</p><h1 className="mt-4 display text-5xl text-paper md:text-7xl">The people<br/>behind the <span className="serif italic text-coral">score.</span></h1><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">Explore the relationships named in official character biographies. Filter by connection type, search the cast, and open a character file for more context. Connections are only shown where a public source supports them; <Link className="text-coral underline decoration-coral/40 underline-offset-4 hover:text-paper" href="https://www.rockstargames.com/VI/only-in-leonida" target="_blank" rel="noreferrer">Rockstar’s character profiles</Link> are the primary reference.</p></header>
    <RelationshipGraph />
  </div>;
}
