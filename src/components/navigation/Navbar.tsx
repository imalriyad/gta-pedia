"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, ArrowUpRight, Map, Network, BriefcaseBusiness, Package } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import clsx from "clsx";

const wikiCategories = [
  { label: "Vehicles", href: "/vehicles", image: "/images/editions/grotti-grotti-cheetah-95/grotti-grotti-cheetah-95-01-1200.webp" },
  { label: "Weapons", href: "/weapons", image: "https://gta6bible.com/wp-content/uploads/2026/04/M4-gtavi-1024x576.jpg" },
  { label: "Characters", href: "/characters", image: "/images/characters/lucia-caminos-portrait-1080.webp" },
  { label: "Locations", href: "/locations", image: "/images/locations/vice-city-01-1920.webp" },
  { label: "Activities", href: "/activities", image: "/images/locations/leonida-keys/leonida-keys-03-1200.webp" },
  { label: "Gangs & Factions", href: "/gangs", image: "/images/characters/boobie-ike/boobie-ike-01-1200.webp" },
  { label: "Consumables", href: "/consumables", image: "/images/locations/ambrosia/ambrosia-01-1200.webp" },
  { label: "Radio Stations", href: "/radio", image: "/images/hero/neon-vice-city-hero.png" },
  { label: "Properties", href: "/properties", image: "/images/locations/vice-city-02-1920.webp" },
  { label: "Animals", href: "/animals", image: "/images/wildlife/american-black-bear.jpg" },
  { label: "Missions", href: "/missions", image: "/images/characters/jason-duval-portrait-1080.webp" },
  { label: "Secrets & Easter Eggs", href: "/secrets", image: "/images/locations/mount-kalaga/mount-kalaga-05-1200.webp" },
  { label: "Guides", href: "/guides", image: "/images/locations/ambrosia/ambrosia-03-1200.webp" },
];

const toolLinks = [
  { label: "Standard Map", detail: "Browse the illustrated Leonida map", href: "/map", icon: Map },
  { label: "Interactive Map", detail: "Pan, zoom and open map pins", href: "/interactive-map", icon: Map },
  { label: "Relationship Map", detail: "See documented cast connections", href: "/relationships", icon: Network },
  { label: "Properties & Businesses", detail: "Browse owned and operated locations", href: "/properties", icon: BriefcaseBusiness },
  { label: "Consumables Index", detail: "Food, drinks and usable items", href: "/consumables", icon: Package },
];

const missionLinks = [
  { label: "All Mission Files", detail: "Browse the mission archive", href: "/missions" },
  { label: "Side Missions", detail: "Optional jobs and encounters", href: "/missions/type/side" },
  { label: "Story Walkthroughs", detail: "Practical mission and progression guides", href: "/guides" },
  { label: "Completion Guide", detail: "Plan a thorough Leonida playthrough", href: "/guides/100-percent-completion-guide" },
];

export function Navbar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  const menuButton = (label: string, key: string) => (
    <button onClick={() => setActiveMenu(activeMenu === key ? null : key)} aria-expanded={activeMenu === key} className={clsx("flex items-center gap-1 px-4 py-2 text-[15px] transition-colors", activeMenu === key ? "text-paper" : "text-paper/75 hover:text-paper")}>
      {label}<ChevronDown className={clsx("h-4 w-4 transition-transform", activeMenu === key && "rotate-180")}/>
    </button>
  );

  return <>
    <header style={{ zIndex: 200, backgroundColor: "#201b3d", isolation: "isolate" }} className="sticky top-0 border-b border-line bg-ink" onKeyDown={(event) => { if (event.key === "Escape") setActiveMenu(null); }}>
      <div className="container-x flex h-[72px] items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative" onMouseEnter={() => setActiveMenu("wiki")} onMouseLeave={() => setActiveMenu(null)}>
            {menuButton("Wiki", "wiki")}
            {activeMenu === "wiki" && <div style={{ backgroundColor: "#2c2853", opacity: 1 }} className="absolute left-1/2 top-full z-[210] w-[min(920px,calc(100vw-32px))] -translate-x-1/2 overflow-y-auto rounded-2xl border border-line p-3 shadow-2xl max-h-[calc(100vh-88px)]" onMouseEnter={() => setActiveMenu("wiki")}>
              <div className="mb-3 flex items-center justify-between px-1 pt-1"><span className="eyebrow">GTA6Pedia · The ultimate GTA VI encyclopedia</span><span className="mono text-[9px] text-faint">{wikiCategories.length} sections</span></div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {wikiCategories.map((item) => <Link key={item.href} href={item.href} onClick={() => setActiveMenu(null)} className={clsx("group relative aspect-video overflow-hidden rounded-xl border border-line bg-ink-2", isActive(item.href) && "border-gold")}>
                  <Image src={item.image} alt="" fill sizes="(max-width: 960px) 30vw, 300px" quality={68} className="object-cover opacity-65 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-90" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className={clsx("absolute bottom-2 left-2 font-display text-sm sm:text-base", isActive(item.href) ? "text-gold" : "text-paper group-hover:text-gold")}>{item.label}</span>
                </Link>)}
              </div>
            </div>}
          </div>
          <div className="relative" onMouseEnter={() => setActiveMenu("tools")} onMouseLeave={() => setActiveMenu(null)}>
            {menuButton("Tools", "tools")}
            {activeMenu === "tools" && <div style={{ backgroundColor: "#2c2853", opacity: 1 }} className="absolute left-1/2 top-full z-[210] w-[360px] -translate-x-1/2 rounded-2xl border border-line p-4 shadow-2xl" onMouseEnter={() => setActiveMenu("tools")}>
              <span className="eyebrow px-1">Field tools</span>
              {toolLinks.map(({ label, detail, href, icon: Icon }) => <Link key={href} href={href} onClick={() => setActiveMenu(null)} className={clsx("mt-1 flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-paper/[.05]", isActive(href) && "bg-paper/[.05]")}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ink-3 text-gold"><Icon className="h-4 w-4"/></span><span className="min-w-0"><span className="block font-display text-base text-paper">{label}</span><span className="mt-0.5 block text-[11px] text-muted">{detail}</span></span><ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-faint"/>
              </Link>)}
            </div>}
          </div>
          <div className="relative" onMouseEnter={() => setActiveMenu("missions")} onMouseLeave={() => setActiveMenu(null)}>
            {menuButton("Missions", "missions")}
            {activeMenu === "missions" && <div style={{ backgroundColor: "#2c2853", opacity: 1 }} className="absolute left-1/2 top-full z-[210] w-[340px] -translate-x-1/2 rounded-2xl border border-line p-4 shadow-2xl" onMouseEnter={() => setActiveMenu("missions")}>
              <span className="eyebrow px-1">Mission desk</span>
              {missionLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setActiveMenu(null)} className="mt-1 flex items-center justify-between rounded-lg px-2 py-3 hover:bg-paper/[.05]"><span><span className="block font-display text-base text-paper">{item.label}</span><span className="mt-0.5 block text-[11px] text-muted">{item.detail}</span></span><ArrowUpRight className="h-3.5 w-3.5 text-faint"/></Link>)}
            </div>}
          </div>
          <Link href="/characters" className="hidden px-2 py-2 text-[13px] text-paper/75 transition-colors hover:text-paper xl:inline-flex">Characters</Link>
          <Link href="/map" className="hidden px-2 py-2 text-[13px] text-paper/75 transition-colors hover:text-paper xl:inline-flex">Map</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenSearch} className="flex h-9 items-center gap-2 border border-line px-2.5 text-muted transition-colors hover:border-paper/40 hover:text-paper sm:px-3" aria-label="Search the archive"><Search className="h-3.5 w-3.5"/><span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] sm:inline">Search</span><kbd className="hidden border border-line px-1 py-0.5 font-mono text-[8px] text-faint md:inline">⌘K</kbd></button>
          <Link href="/editions" className="btn btn-coral hidden h-9 min-h-0 px-3 text-[9px] md:inline-flex">Editions</Link>
          <button onClick={() => setMobileOpen(true)} className="grid h-9 w-9 place-items-center text-paper lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5"/></button>
        </div>
      </div>
    </header>

    {mobileOpen && <div className="fixed inset-0 z-[65] overflow-y-auto bg-ink lg:hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4"><Logo/><button onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center border border-line text-paper" aria-label="Close menu"><X className="h-5 w-5"/></button></div>
      <div className="px-5 py-7">
        <span className="eyebrow">Wiki</span><div className="mt-3 grid grid-cols-2 gap-x-5">{wikiCategories.map((item, i) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-line py-3 font-display text-base text-paper"><span>{item.label}</span><span className="mono text-[8px] text-faint">{String(i + 1).padStart(2, "0")}</span></Link>)}</div>
        <span className="eyebrow mt-8 block">Tools</span><div className="mt-3 grid grid-cols-2 gap-x-5">{toolLinks.slice(0, 3).map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="border-b border-line py-3 font-display text-base text-paper">{item.label}</Link>)}</div>
        <span className="eyebrow mt-8 block">Missions</span><div className="mt-3 grid grid-cols-2 gap-x-5">{missionLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="border-b border-line py-3 font-display text-base text-paper">{item.label}</Link>)}</div>
        <div className="mt-8 border border-line p-5"><span className="eyebrow text-coral">Release</span><p className="mt-2 font-display text-2xl text-paper">November 19, 2026</p><p className="mt-1 text-[12px] text-muted">PS5 · Xbox Series X|S</p><Link href="/editions" onClick={() => setMobileOpen(false)} className="btn btn-coral mt-4 w-full">Compare editions</Link></div>
      </div>
    </div>}
  </>;
}
