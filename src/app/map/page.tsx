import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ScanLine } from "lucide-react";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "/map" },
  title: "GTA 6 Map: Leonida, Vice City & Regions",
  description: "View the Grand Theft Auto 6 map of Leonida and browse its named regions, including Vice City, Port Gellhorn, the Keys, and Mount Kalaga.",
};

const regions = [
  { name: "Vice City", href: "/locations/vice-city", image: "/images/locations/vice-city-01-1920.webp", note: "The neon-lit heart of Leonida." },
  { name: "Leonida Keys", href: "/locations/the-leonida-keys", image: "/images/locations/leonida-keys/leonida-keys-01-1200.webp", note: "Island communities and open water." },
  { name: "Grassrivers", href: "/locations/the-grassrivers", image: "/images/locations/grassrivers-01-1920.webp", note: "Wetlands, waterways, and wild country." },
  { name: "Ambrosia", href: "/locations/ambrosia", image: "/images/locations/ambrosia/ambrosia-01-1200.webp", note: "An industrial town in the state interior." },
  { name: "Port Gellhorn", href: "/locations/port-gellhorn", image: "/images/locations/leonida-keys/leonida-keys-04-1200.webp", note: "A Gulf coast town and working port." },
  { name: "Mount Kalaga", href: "/locations/mount-kalaga", image: "/images/locations/mount-kalaga/mount-kalaga-01-1200.webp", note: "Northern wilderness and high ground." },
];

export default function MapPage() {
  return <div className="container-x py-8 md:py-12">
    <Breadcrumbs items={[{ label: "Leonida Map", href: "/map" }]} />
    <header className="mb-8 mt-8 flex flex-wrap items-end justify-between gap-5">
      <div className="max-w-3xl">
        <p className="eyebrow text-coral">The standard map · Leonida</p>
        <h1 className="mt-4 display text-5xl text-paper md:text-7xl">A state<br/><span className="serif italic text-coral">in full view.</span></h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">Browse Leonida region by region. Each field card opens its location file; use the separate interactive map to explore the illustrated state map with filters and clickable pins.</p>
      </div>
      <Link href="/interactive-map" className="btn btn-coral"><ScanLine className="h-3.5 w-3.5"/> Open interactive map</Link>
    </header>

    <section className="mt-2">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3"><div><p className="eyebrow text-teal">Regional files</p><h2 className="mt-2 font-display text-2xl text-paper">Explore Leonida</h2></div><span className="eyebrow">6 location cards</span></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{regions.map((region)=><Link key={region.href} href={region.href} className="group overflow-hidden border border-line bg-ink-2 transition-colors hover:border-coral/70">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-3"><Image src={region.image} alt={`${region.name}, Leonida`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"/><div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"/><span className="absolute bottom-3 left-3 eyebrow text-white">Leonida · regional file</span></div>
        <div className="flex min-h-[82px] items-center justify-between gap-3 p-4"><span><span className="block font-display text-lg text-paper group-hover:text-coral">{region.name}</span><span className="mt-1 block text-xs text-muted">{region.note}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-faint group-hover:text-coral"/></div>
      </Link>)}</div>
      <a href="https://www.rockstargames.com/VI/media" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-coral hover:text-paper">Rockstar media page <ArrowUpRight className="h-3 w-3"/></a>
    </section>
  </div>;
}
