import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  MapPin,
  Calendar,
  Radio,
  ShieldCheck,
  Search,
  CarFront,
  Crosshair,
  BookOpen,
  Flag,
  Eye,
  Sparkles,
  PawPrint,
  Tag,
  UsersRound,
  Activity,
  Package,
  Building2,
  type LucideIcon,
} from "lucide-react";
import {
  getEntitiesByCategory,
  getLatestUpdates,
  getFeaturedGuide,
} from "@/content/repositories";
import { categoryMeta, CATEGORIES } from "@/lib/categories";
import { SectionHead } from "@/components/ui/SectionHead";
import { VerificationTag } from "@/components/ui/VerificationTag";
import { VehicleSilhouette, WeaponSilhouette } from "@/components/ui/Silhouettes";

export const metadata: Metadata = {
  title: { absolute: "GTA 6 Wiki & Encyclopedia | GTA6Pedia" },
  description: "Explore the GTA 6 (GTA VI) wiki: character profiles, the Leonida and Vice City map, missions, vehicles, weapons, animals, activities, secrets, and guides.",
  alternates: { canonical: "/" },
};

const DATABASE_KEYS = [
  "characters",
  "locations",
  "vehicles",
  "weapons",
  "guides",
  "missions",
  "secrets",
  "easter-eggs",
  "wildlife",
  "radio",
  "brands",
  "gangs",
  "activities",
  "consumables",
  "properties",
];

const INDEX_ICONS: Record<string, LucideIcon> = {
  characters: UsersRound,
  locations: MapPin,
  vehicles: CarFront,
  weapons: Crosshair,
  guides: BookOpen,
  missions: Flag,
  secrets: Eye,
  "easter-eggs": Sparkles,
  wildlife: PawPrint,
  radio: Radio,
  brands: Tag,
  gangs: UsersRound,
  activities: Activity,
  consumables: Package,
  properties: Building2,
};

export default function HomePage() {
  const characters = getEntitiesByCategory("characters");
  const locations = getEntitiesByCategory("locations");
  const vehicles = getEntitiesByCategory("vehicles");
  const weapons = getEntitiesByCategory("weapons");
  const guides = getEntitiesByCategory("guides");
  const featuredGuide = getFeaturedGuide();
  const updates = getLatestUpdates();

  const lucia = characters.find((c) => c.slug === "lucia");
  const jason = characters.find((c) => c.slug === "jason-duval");
  const viceCity = locations.find((l) => l.slug === "vice-city");
  const keys = locations.find((l) => l.slug === "the-leonida-keys");
  const grassrivers = locations.find((l) => l.slug === "the-grassrivers");
  const showcaseVehicles = vehicles.filter((v: any) => v.image).slice(0, 4);
  const featuredWeapons = weapons.slice(0, 4);

  return (
    <div>
      {/* ————————————————————— HERO ————————————————————— */}
      <section className="relative isolate min-h-[min(560px,calc(100svh-72px))] overflow-hidden bg-[#211735] sm:min-h-[min(700px,calc(100svh-72px))] lg:min-h-[calc(100svh-72px)]">
          <Image
            src="/images/hero/gta6pedia-leonida-hero.jpg"
            alt="Lucia and Jason in Leonida at sunset, with a car and roadside storefront"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="z-0 scale-105 object-cover object-[68%_36%] opacity-55 blur-[3px]"
          />
          <Image
            src="/images/hero/gta6pedia-leonida-hero.jpg"
            alt="Lucia and Jason standing together in Leonida at sunset"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="z-[1] object-contain object-right [mask-image:linear-gradient(90deg,transparent_0%,transparent_17%,black_32%,black_100%)]"
          />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(29,11,27,.96)_0%,rgba(39,15,38,.86)_27%,rgba(43,18,43,.60)_43%,rgba(35,15,42,.22)_63%,transparent_82%)]" />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(27,12,29,.46)_0%,transparent_22%,transparent_82%,rgba(32,14,36,.16)_100%)]" />
          <div className="container-x relative z-20 flex min-h-[min(560px,calc(100svh-72px))] items-center py-7 sm:min-h-[min(700px,calc(100svh-72px))] sm:py-10 lg:min-h-[calc(100svh-72px)]">
            <div className="w-full max-w-3xl">
              <p className="eyebrow text-sun">GTA6Pedia · The Ultimate GTA VI Encyclopedia</p>
              <h1 className="mt-3 display text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[.95] text-paper">
                Leonida, <span className="serif italic text-sun">on record.</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper-dim md:text-[15px]">
                Explore the cast, map, missions, vehicles, and wildlife of Grand Theft Auto VI. Every file separates confirmed details from observations and reports.
              </p>
              <form action="/search" method="get" className="mt-4 flex max-w-md gap-2">
                <label className="relative min-w-0 flex-1">
                  <span className="sr-only">Search the encyclopedia</span>
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/50" />
                  <input name="q" type="search" placeholder="Search characters, places, missions…" className="h-11 w-full rounded-none border border-white/25 bg-[#110f22]/75 pl-10 pr-3 text-sm text-paper outline-none backdrop-blur-sm placeholder:text-paper/55 focus:border-[#ed68d2]" />
                </label>
                <button type="submit" className="btn btn-coral h-11 min-h-0 !rounded-none px-5">Search</button>
              </form>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href="/interactive-map" className="btn btn-coral">Explore Leonida <ArrowRight className="h-3.5 w-3.5" /></Link>
                <span className="flex items-center gap-1.5 text-[10px] text-paper/70"><ShieldCheck className="h-3.5 w-3.5 text-teal"/>Evidence labeled by source</span>
                <Link href="/locations" className="inline-flex items-center gap-1 text-[10px] text-paper/75 hover:text-sun">Location files <ArrowUpRight className="h-3 w-3"/></Link>
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-white/20 pt-3">
                {[[String(characters.length), "Cast files"], [String(locations.length), "Places mapped"], [String(vehicles.length), "Vehicle records"]].map(([count, label]) => <div key={label} className="flex items-baseline gap-2"><span className="display text-lg text-paper">{count}</span><span className="mono text-[8px] uppercase tracking-[0.12em] text-paper/65">{label}</span></div>)}
              </div>
            </div>
          </div>
      </section>

      {/* ————————————————————— INDEX ————————————————————— */}
      <section className="border-b border-line">
        <div className="container-x py-8 sm:py-14 md:py-20">
          <SectionHead
            index="01 / 08"
            eyebrow="The index"
            title={
              <>
                Sixteen chapters.
                <br className="hidden sm:block" />
                One state.
              </>
            }
            dek="The archive is organised like a field manual: people, places, machines, then everything in the margins."
            className="gap-3 pb-3 [&_h2]:mt-1 [&_h2]:text-[1.65rem] [&_p]:mt-1 [&_p]:text-[11px] sm:[&_h2]:text-[clamp(1.7rem,3.4vw,2.6rem)] sm:[&_p]:text-[13px]"
          />

          <div className="mt-3 grid grid-cols-2 gap-x-3 sm:mt-8 sm:gap-x-10 lg:grid-cols-3">
            {DATABASE_KEYS.map((key) => {
              const meta = categoryMeta(key);
              const IndexIcon = INDEX_ICONS[key] || BookOpen;
              const count =
                key === "vehicles"
                  ? vehicles.length
                  : key === "weapons"
                  ? weapons.length
                  : key === "characters"
                  ? characters.length
                  : key === "locations"
                  ? locations.length
                  : key === "guides"
                  ? guides.length
                  : null;

              return (
                <Link
                  key={key}
                  href={meta.href}
                  className="group flex min-w-0 items-baseline justify-between gap-2 border-b border-line-soft py-3 transition-colors hover:border-paper/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:gap-4 sm:py-4"
                >
                  <span className="flex min-w-0 items-baseline gap-2 sm:gap-4">
                    <span className="mono shrink-0 text-[8px] tracking-[0.1em] text-faint sm:text-[9px] sm:tracking-[0.14em]">
                      {meta.index}
                    </span>
                    <IndexIcon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-[#ec73d3] transition-colors group-hover:text-coral sm:h-4 sm:w-4" aria-hidden="true" />
                    <span className="min-w-0 font-display text-[13px] font-medium leading-tight tracking-tight text-paper transition-colors group-hover:text-coral sm:text-[19px]">
                      {meta.label}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-baseline gap-3">
                    {count !== null && (
                      <span className="mono text-[9px] tabular-nums text-faint">
                        {count}
                      </span>
                    )}
                    <ArrowUpRight className="h-3 w-3 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral sm:h-3.5 sm:w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ————————————————————— CAST ————————————————————— */}
      <section className="border-b border-line">
        <div className="container-x py-8 sm:py-14 md:py-20">
          <SectionHead
            index="02 / 08"
            eyebrow="The cast"
            title={
              <>
                Two people.
                <br />
                One very long con.
              </>
            }
            dek="Lucia and Jason are the only confirmed playable characters. Their partnership is the spine of the story."
            href="/characters"
            linkLabel="All characters"
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_1fr_1fr]">
            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden border border-line bg-ink-2 p-6 md:p-8">
              <div className="absolute inset-0 grid-lines opacity-50" />
              <div className="relative">
                <span className="eyebrow text-coral">The lead pair</span>
                <p className="mt-5 font-display text-[clamp(1.7rem,2.5vw,2.3rem)] leading-[1.05] tracking-tight text-paper">
                  “Trust is the only thing they haven't learned to steal yet.”
                </p>
              </div>
              <div className="relative mt-10">
                <p className="max-w-sm text-[12px] leading-relaxed text-muted">
                  A released inmate and a drifting ex-soldier, bound by the same
                  promise: the next job is the last one. Leonida has heard that
                  before.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="tag">Dual protagonist</span>
                  <span className="tag">Heists</span>
                  <span className="tag">State of Leonida</span>
                </div>
              </div>
            </div>

            {[lucia, jason].map(
              (person) =>
                person && (
                  <Link
                    key={person.id}
                    href={`/characters/${person.slug}`}
                    className="group relative block overflow-hidden border border-line bg-ink-3"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={(person as any).image || person.thumbnail || ""}
                        alt={person.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-[1.2s] ease-cinema group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <span className="eyebrow text-coral">
                          {(person as any).role || "Protagonist"}
                        </span>
                        <h3 className="mt-1 display text-[clamp(1.8rem,3vw,2.4rem)] text-paper">
                          {person.name}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-paper/65">
                          {person.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* ————————————————————— VICE CITY FEATURE ————————————————————— */}
      {viceCity && (
        <section className="border-b border-line">
          <div className="container-x py-14 md:py-20">
            <SectionHead
              index="03 / 08"
              eyebrow="Region file"
              title="Vice City is the argument."
              dek="The city is not a backdrop. It is the thing everyone is trying to afford."
              href="/locations/vice-city"
              linkLabel="Open the region"
            />

            <Link
              href={`/locations/${viceCity.slug}`}
              className="group relative mt-8 block overflow-hidden border border-line"
            >
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={(viceCity as any).image || (viceCity as any).thumbnail}
                  alt={viceCity.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-cinema group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-6 md:p-10">
                  <div>
                    <span className="mono text-[9px] uppercase tracking-[0.18em] text-teal">
                      Region 01 · Metro
                    </span>
                    <h3 className="mt-2 display text-[clamp(2.4rem,6vw,5rem)] text-paper">
                      Vice City
                    </h3>
                    <p className="mt-2 max-w-xl text-[12.5px] leading-relaxed text-paper/70">
                      {viceCity.summary}
                    </p>
                  </div>
                  <span className="btn btn-ghost border-paper/30 bg-ink/40">
                    Region file <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {[keys, grassrivers, locations.find((l) => l.slug === "mount-kalaga")]
                .filter(Boolean)
                .map((loc: any) => (
                  <Link
                    key={loc.id}
                    href={`/locations/${loc.slug}`}
                    className="group border border-line bg-ink-2 transition-colors hover:border-paper/40"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={loc.image || loc.thumbnail}
                        alt={loc.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                      <span className="absolute bottom-3 left-4 font-display text-xl text-paper">
                        {loc.name}
                      </span>
                    </div>
                    <p className="line-clamp-2 p-4 text-[11px] leading-relaxed text-muted">
                      {loc.summary}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ————————————————————— GARAGE ————————————————————— */}
      <section className="border-b border-line bg-ink-2/40">
        <div className="container-x py-14 md:py-20">
          <SectionHead
            index="04 / 08"
            eyebrow="The garage"
            title={`${vehicles.length} machines, one coastline.`}
            dek="Supercars for the photo, muscle for the job, boats for the exit. Class, badge and real-world basis on every record."
            href="/vehicles"
            linkLabel="All vehicles"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseVehicles.map((v: any) => (
              <Link
                key={v.id}
                href={`/vehicles/${v.slug}`}
                className="group border border-line bg-ink-2 transition-colors hover:border-gold/50"
              >
                <div className="relative aspect-[3/2] overflow-hidden border-b border-line bg-[#2c2853]">
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="relative object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 tag bg-ink/60 text-gold">
                    {v.vehicleClass}
                  </span>
                </div>
                <div className="p-4">
                  <span className="eyebrow text-gold">{v.manufacturer}</span>
                  <h3 className="mt-1 font-display text-[17px] tracking-tight text-paper transition-colors group-hover:text-gold">
                    {v.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between border-t border-line-soft pt-2.5">
                    <span className="mono text-[8.5px] uppercase tracking-[0.1em] text-faint">
                      {v.realWorldInspiration}
                    </span>
                    <VerificationTag status={v.verificationStatus} showLabel={false} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <div className="relative overflow-hidden border border-line bg-[#2c2853] p-6">
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <span className="eyebrow text-gold">Pre-launch estimate</span>
                  <p className="mt-2 font-display text-xl text-paper">
                    Every class, from Compacts to Aircraft
                  </p>
                </div>
                <span className="display text-5xl text-gold/70 md:text-6xl">
                  {vehicles.length}
                </span>
              </div>
              <div className="relative mt-6 flex h-28 items-center justify-center text-gold/60">
                <VehicleSilhouette kind="supercar" className="max-h-full" />
              </div>
              <Link
                href="/vehicles"
                className="relative mt-4 inline-flex items-center gap-2 mono text-[9px] uppercase tracking-[0.14em] text-gold hover:text-paper"
              >
                Browse the garage <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="relative overflow-hidden border border-line bg-ink-2 p-6">
              <span className="eyebrow text-coral">The arsenal</span>
              <h3 className="mt-2 font-display text-2xl text-paper">
                Named, shown, or still a rumour
              </h3>
              <div className="mt-5 divide-y divide-line-soft">
                {featuredWeapons.map((w: any) => (
                  <Link
                    key={w.id}
                    href={`/weapons/${w.slug}`}
                    className="group flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="mono text-[8px] text-faint">
                        {String(w.weaponClass).slice(0, 3)}
                      </span>
                      <span className="truncate font-display text-[14px] text-paper group-hover:text-coral">
                        {w.name}
                      </span>
                    </span>
                    <VerificationTag status={w.verificationStatus} showLabel={false} />
                  </Link>
                ))}
              </div>
              <Link
                href="/weapons"
                className="mt-4 inline-flex items-center gap-2 mono text-[9px] uppercase tracking-[0.14em] text-coral hover:text-paper"
              >
                Open the armory <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— FIELD MANUAL ————————————————————— */}
      <section className="border-b border-line">
        <div className="container-x py-14 md:py-20">
          <SectionHead
            index="05 / 08"
            eyebrow="Field manual"
            title="Read this before the job."
            dek="Completion routes, police evasion, storage, money. Sourced, practical, and honest about what is still unknown."
            href="/guides"
            linkLabel="All guides"
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            {featuredGuide && (
              <Link
                href={`/guides/${featuredGuide.slug}`}
                className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden border border-line bg-ink-2 p-6 md:p-8"
              >
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="pointer-events-none absolute -bottom-10 -right-6 select-none display text-[12rem] leading-none text-paper/[0.045]">
                  100
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-teal">Featured manual</span>
                    <span className="tag">{(featuredGuide as any).difficulty}</span>
                  </div>
                  <h3 className="mt-5 max-w-md font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] tracking-tight text-paper transition-colors group-hover:text-coral">
                    {featuredGuide.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[12px] leading-relaxed text-muted">
                    {featuredGuide.summary}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center justify-between border-t border-line pt-4">
                  <span className="mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    {(featuredGuide as any).estimatedTime || "Full route"}
                  </span>
                  <span className="inline-flex items-center gap-2 mono text-[9px] uppercase tracking-[0.14em] text-teal">
                    Open manual <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            )}

            <div>
              {guides.slice(0, 6).map((g: any, i) => (
                <Link
                  key={g.id}
                  href={`/guides/${g.slug}`}
                  className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-line py-4 first:border-t first:border-line"
                >
                  <span className="mono pt-1 text-[9px] text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-[16px] tracking-tight text-paper transition-colors group-hover:text-coral">
                        {g.name}
                      </h3>
                      {g.difficulty && <span className="tag">{g.difficulty}</span>}
                    </div>
                    <p className="mt-1 line-clamp-1 text-[11px] text-muted">{g.summary}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— TRAILERS ————————————————————— */}
      <section className="border-b border-line bg-ink-2/40">
        <div className="container-x py-14 md:py-20">
          <SectionHead
            index="06 / 08"
            eyebrow="Official media"
            title="The footage we actually have."
            dek="Two trailers, a handful of screenshots, and a lot of community freeze-frames. We keep the difference visible."
            href="/trailers"
            linkLabel="All trailers"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Trailer II",
                date: "May 06, 2025",
                image: "/images/locations/vice-city/vice-city-02-1920.webp",
                blurb:
                  "Jason and Lucia, the Keys, Ambrosia, and the first long look at how the two of them move through a job.",
                href: "/trailers",
              },
              {
                title: "Trailer I",
                date: "Dec 04, 2023",
                image: "/images/characters/lucia-caminos-05-1920.webp",
                blurb:
                  "The reveal: Lucia leaves Leonida Correctional, Vice City returns, and the tone lands somewhere between sunstroke and a countdown.",
                href: "/trailers",
              },
            ].map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group relative block overflow-hidden border border-line"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.3s] ease-cinema group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-paper/30 bg-ink/50 text-paper backdrop-blur-sm transition-colors group-hover:border-coral group-hover:text-coral">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <span className="mono text-[9px] uppercase tracking-[0.14em] text-paper/50">
                        {t.date}
                      </span>
                      <h3 className="mt-1 display text-3xl text-paper">{t.title}</h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-paper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
                <p className="p-5 text-[11.5px] leading-relaxed text-muted">{t.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ————————————————————— CHECKLIST + DISPATCH ————————————————————— */}
      <section className="border-b border-line">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHead
                index="07 / 08"
                eyebrow="Field guide"
                title="Plan your Leonida run."
              />
              <Link
                href="/guides"
                className="group mt-6 flex items-end justify-between gap-6 border border-line bg-ink-2 p-6 transition-colors hover:border-gold/50"
              >
                <div>
                  <span className="eyebrow text-gold">Walkthroughs</span>
                  <p className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-none text-paper">
                    Story, secrets, side jobs
                  </p>
                  <p className="mt-3 max-w-sm text-[11.5px] leading-relaxed text-muted">
                    Practical guides for missions, exploration, and the details scattered across Leonida.
                  </p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-line text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["Story", "Mission files"],
                  ["Statewide", "Exploration"],
                  ["Sourced", "Field notes"],
                ].map(([v, l]) => (
                  <div key={l} className="border border-line p-4">
                    <span className="display text-2xl text-paper">{v}</span>
                    <p className="mt-1 mono text-[8px] uppercase tracking-[0.12em] text-faint">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHead
                index="08 / 08"
                eyebrow="Dispatches"
                title="The latest from Leonida."
                href="/updates"
                linkLabel="All updates"
              />
              <div className="mt-6">
                {updates.map((u) => (
                  <Link
                    key={u.id}
                    href={u.category === "gameplay" ? "/gameplay" : `/${u.category}`}
                    className="group grid grid-cols-[92px_1fr_auto] items-center gap-4 border-b border-line py-3.5"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                      <Image
                        src={u.thumbnail}
                        alt=""
                        fill
                        sizes="92px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="mono text-[8px] uppercase tracking-[0.14em] text-coral">
                          {u.type}
                        </span>
                        <span className="mono text-[8px] uppercase tracking-[0.12em] text-faint">
                          {u.timeAgo}
                        </span>
                      </div>
                      <h3 className="mt-1 line-clamp-1 font-display text-[15px] text-paper transition-colors group-hover:text-coral">
                        {u.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["/release-date", "/editions", "/map", "/gameplay"].map((href) => {
                  const meta = {
                    "/release-date": ["Release date", Calendar],
                    "/editions": ["Editions", ShieldCheck],
                    "/map": ["The map", MapPin],
                    "/gameplay": ["Gameplay", Radio],
                  }[href] as [string, any];
                  const Icon = meta[1];
                  return (
                    <Link key={href} href={href} className="btn btn-ghost">
                      <Icon className="h-3.5 w-3.5" />
                      {meta[0]}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————————————————————— CLOSING ————————————————————— */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/locations/grassrivers/grassrivers-01-1920.webp"
          alt="Grassrivers airboat crew at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="container-x relative py-16 md:py-24">
          <span className="eyebrow text-teal">The archive is open</span>
          <h2 className="mt-4 max-w-2xl display text-[clamp(2.4rem,5.5vw,4.6rem)] text-paper">
            Leonida rewards the people who read the fine print.
          </h2>
          <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-paper/65">
            Every record carries an evidence tier: Confirmed, Observed, Reported or
            Rumor. Start with what is known, and keep the rest where you can see it.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/search" className="btn btn-coral">
              Search the archive <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/guides/100-percent-completion-guide" className="btn btn-ghost border-paper/25">Read the completion guide</Link>
            <Link href="/relationships" className="btn btn-ghost border-paper/25">Trace the cast</Link>
            <Link href="/about" className="btn btn-ghost border-paper/25">
              How this wiki works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
