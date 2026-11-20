import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import {
  Film,
  Play,
  ExternalLink,
  Sparkles,
  Calendar,
  Eye,
  Music,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/trailers" },
  title: "GTA VI Official Trailers: Trailer 1 & Trailer 2 Breakdown & Stills",
  description:
    "Watch and analyze official Grand Theft Auto VI trailers. High-resolution 1920p engine stills, trailer breakdown, music analysis, and Lucia & Jason reveals.",
};

export default function TrailersPage() {
  const trailers = [
    {
      title: "Official Trailer II",
      releaseDate: "MAY 06, 2025",
      badge: "Latest Trailer",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      image: "/images/locations/vice-city-01-1920.webp",
      views: "120M+ Views",
      music: "Original Vice City Synthwave Score",
      description:
        "Jason and Lucia reunite following her release from prison, setting up their Bonnie and Clyde-inspired criminal partnership across Vice City, the Keys waterways, and rural Ambrosia.",
      youtubeUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
      highlights: [
        "First extensive gameplay cutscenes featuring Jason Duval in action",
        "Dual-character combat mechanics and dynamic weapon trunk retrieval",
        "High-speed highway chase sequence with LCSO helicopters",
        "Nightclub shootout inside The Malibu Club",
      ],
    },
    {
      title: "Official Trailer I (Reveal)",
      releaseDate: "DEC 04, 2023",
      badge: "Debut Reveal",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      image: "/images/characters/lucia-caminos-05-1920.webp",
      views: "210M+ Views (Guinness World Record)",
      music: "Tom Petty – 'Love Is a Long Road' (1989)",
      description:
        "The historic debut trailer that revealed Vice City's return and introduced Lucia as the first female protagonist in a mainline Grand Theft Auto title since 1997.",
      youtubeUrl: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
      highlights: [
        "Introduction to Lucia Caminos at Leonida Department of Corrections",
        "Iconic rooftop swimming pool sunset over Vice City skyline",
        "Nine1F viral social media phone captures and Florida wildlife chaos",
        "Alligator capture in a neighborhood pool and convenience store robbery",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Official Trailers", href: "/trailers" }]} />

      {/* Header */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wide">
          <Film className="w-3.5 h-3.5" />
          <span>ROCKSTAR GAMES OFFICIAL MEDIA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white">
          Grand Theft Auto VI Official Trailers & Stills
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
          Comprehensive breakdown of official Grand Theft Auto VI cinematics and in-engine reveals.
          High-definition 1920p screenshots, music tracks, and key storyline sequences.
        </p>
      </header>

      {/* Trailer Cards */}
      <div className="space-y-8">
        {trailers.map((t) => (
          <div
            key={t.title}
            className="p-6 sm:p-8 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all space-y-6 shadow-xl"
          >
            {/* Visual Thumbnail with Play Button */}
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden border border-[#2a2a3c] group">
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Play Button Overlay */}
              <a
                href={t.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                aria-label={`Play ${t.title}`}
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-pink-600/90 group-hover:bg-pink-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(244,63,133,0.6)] group-hover:scale-110 transition-all">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </a>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md font-mono">
                  1080p / 4K 60FPS In-Engine
                </span>
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-pink-400" />
                  <span>{t.views}</span>
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {t.releaseDate}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Music className="w-3.5 h-3.5 text-pink-400" />
                  <span>{t.music}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white">{t.title}</h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{t.description}</p>

              {/* Breakdown List */}
              <div className="p-4 rounded-xl bg-[#171724] border border-[#252538] space-y-2">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider block">
                  Key Sequence Highlights
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={t.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 text-xs font-bold"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/media"
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  View Screenshot Gallery &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
