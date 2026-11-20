import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { getEntitiesByCategory } from "@/content/repositories";

export const metadata: Metadata = {
  alternates: { canonical: "/properties" }, title: "GTA 6 Properties & Businesses in Leonida", description: "A guide to known businesses, venues, and property clues across Vice City and Leonida." };

export default function PropertiesPage() {
  const locations = getEntitiesByCategory("locations");
  const businesses = getEntitiesByCategory("brands");
  return <div className="container-x py-8 md:py-12"><Breadcrumbs items={[{ label: "Properties", href: "/properties" }]} /><header className="mt-8 max-w-4xl"><div className="flex items-center gap-3"><Building2 className="h-4 w-4 text-coral"/><p className="eyebrow text-coral">Businesses · venues · real estate</p></div><h1 className="mt-4 display text-5xl text-paper md:text-7xl">The state has<br/><span className="serif italic text-coral">an address.</span></h1><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">The available material points to a lived-in commercial world: clubs, beachfront businesses, industrial sites, and homes. This index gathers places and fictional operators already documented in the archive. Purchasable properties and ownership mechanics have not been confirmed in the material catalogued here.</p></header>
    <section className="mt-10"><div className="flex items-end justify-between border-b border-line pb-3"><h2 className="font-display text-2xl text-paper">Places with a public footprint</h2><span className="eyebrow">{locations.length} location files</span></div><div className="mt-3 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{locations.map(place=><Link key={place.id} href={`/locations/${place.slug}`} className="group flex items-start justify-between gap-4 border-b border-line-soft py-4"><div><span className="eyebrow text-teal">{typeof place.locationType === "string" ? place.locationType : "Location"}</span><h3 className="mt-1 font-display text-lg text-paper group-hover:text-coral">{place.name}</h3><p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{place.summary}</p></div><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint group-hover:text-coral"/></Link>)}</div></section>
    <section className="mt-12"><div className="flex items-end justify-between border-b border-line pb-3"><h2 className="font-display text-2xl text-paper">The businesses behind the neon</h2><Link className="eyebrow text-coral hover:text-paper" href="/brands">All brand records ↗</Link></div><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{businesses.map(brand=><Link key={brand.id} href={`/brands/${brand.slug}`} className="surface group p-5"><span className="eyebrow text-gold">Brand record</span><h3 className="mt-3 font-display text-xl text-paper group-hover:text-coral">{brand.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted">{brand.summary}</p></Link>)}</div></section>
  </div>;
}
