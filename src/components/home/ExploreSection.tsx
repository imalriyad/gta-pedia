import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, Play, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export function ExploreSection() {
  const exploreCards = [
    {
      label: "Profiles",
      title: "Characters",
      href: "/characters",
      image: "/images/characters/lucia-caminos-01-1920.webp",
    },
    {
      label: "Regions",
      title: "Locations",
      href: "/locations",
      image: "/images/locations/ambrosia-04-1920.webp",
    },
    {
      label: "Database",
      title: "Vehicles",
      href: "/vehicles",
      image: "/images/characters/jason-duval-02-1920.webp",
    },
    {
      label: "Arsenal",
      title: "Weapons",
      href: "/weapons",
      image: "/images/characters/lucia-caminos-04-1920.webp",
    },
    {
      label: "Interactive",
      title: "Map",
      href: "/map",
      image: "/images/map/leonida-state-map-1920.webp",
    },
    {
      label: "Latest",
      title: "Updates",
      href: "/updates",
      image: "/images/locations/port-gellhorn-01-1920.webp",
    },
  ];

  const protagonists = [
    {
      name: "Lucia",
      role: "Confirmed &bull; Protagonist",
      slug: "lucia",
      image: "/images/characters/lucia-caminos-portrait-1080.webp",
      desc: "The first female protagonist in a mainline GTA game since 1997. Lucia is a criminal with a complex backstory, showing both vulnerability and ruthless determination.",
    },
    {
      name: "Jason",
      role: "Confirmed &bull; Protagonist",
      slug: "jason-duval",
      image: "/images/characters/jason-duval-portrait-1080.webp",
      desc: "Lucia's partner in crime, Jason completes the criminal duo at the heart of GTA 6's story. Together they navigate the dangerous world of Vice City's underworld.",
    },
  ];

  const trailers = [
    {
      title: "Official Trailer II",
      tag: "Latest &bull; MAY 06, 2025",
      desc: "Jason and Lucia reunite after her release from prison, setting up their Bonnie and Clyde-inspired criminal partnership across Vice City.",
      image: "/images/locations/vice-city-01-1920.webp",
      href: "/trailers",
    },
    {
      title: "Official Trailer I",
      tag: "Reveal &bull; DEC 2023",
      desc: "The debut trailer that revealed Vice City's return and introduced Lucia as the first female protagonist in a mainline GTA game.",
      image: "/images/characters/lucia-caminos-05-1920.webp",
      href: "/trailers",
    },
  ];

  return (
    <div id="explore" className="w-full my-6 space-y-10">
      {/* 1. Explore the Wiki - 6 Card Grid matching gta-6-wiki.com */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Explore</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Explore the Wiki</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Find everything you need to know about Grand Theft Auto VI
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {exploreCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative h-40 sm:h-44 rounded-2xl overflow-hidden border border-[#28283a] hover:border-pink-500/50 shadow-md transition-all duration-300 flex flex-col justify-end p-3.5"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-pink-400 transition-colors">
                  {card.label}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. The Story / Plot Section matching gta-6-wiki.com */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">The Story</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Plot &amp; Story</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Grand Theft Auto 6 marks a return to Vice City, Rockstar&apos;s fictionalized version of Miami.
              The game features dual protagonists Lucia and Jason, inspired by the infamous criminal duo Bonnie and Clyde.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Lucia becomes the first female protagonist in a mainline GTA game since the original Grand Theft Auto.
              Set in contemporary times, the narrative explores themes of social media virality, modern crime, and the
              American dream through the lens of two outlaws navigating the criminal underworld of Vice City.
            </p>
          </div>
          <Link
            href="/gameplay"
            className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <span>Read Full Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Protagonists Section matching gta-6-wiki.com */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Protagonists</span>
            <h2 className="text-2xl font-black text-white">Characters</h2>
          </div>
          <Link
            href="/characters"
            className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {protagonists.map((char) => (
            <Link
              key={char.name}
              href={`/characters/${char.slug}`}
              className="group p-5 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all flex items-center gap-5 shadow-lg"
            >
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-zinc-700">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  sizes="120px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-emerald-400"
                  dangerouslySetInnerHTML={{ __html: char.role }}
                />
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  {char.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {char.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Official Trailers Section matching gta-6-wiki.com */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Watch</span>
            <h2 className="text-2xl font-black text-white">Official Trailers</h2>
          </div>
          <Link
            href="/trailers"
            className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trailers.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group p-4 sm:p-5 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all space-y-3 shadow-lg"
            >
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pink-600/90 group-hover:bg-pink-500 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-pink-400"
                  dangerouslySetInnerHTML={{ __html: t.tag }}
                />
                <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {t.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Community Card matching gta-6-wiki.com */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#170e28] via-[#12121f] to-[#0e1628] border border-[#2e1d48] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
            <MessageSquare className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Community</span>
            <h3 className="text-xl font-bold text-white">Join the Community</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-md">
              Connect with fellow GTA 6 fans, share theories, and stay up to date with the latest news and discussions.
            </p>
          </div>
        </div>
        <a
          href="https://discord.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/30 flex items-center gap-2 shrink-0"
        >
          <span>Join Discord Community</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
