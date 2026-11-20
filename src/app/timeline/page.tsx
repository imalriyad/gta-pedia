import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import {
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Film,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/timeline" },
  title: "GTA 6 Timeline: Release Date, Trailers & Updates",
  description:
    "Follow major Grand Theft Auto VI announcements, trailers, release milestones, and updates in chronological order, with source links for each entry.",
};

interface Milestone {
  date: string;
  title: string;
  category: "Trailer" | "Official Statement" | "Corporate Earnings" | "Milestone";
  source: string;
  summary: string;
  details: string;
  link?: string;
  badgeColor: string;
}

export default function TimelinePage() {
  const milestones: Milestone[] = [
    {
      date: "May 2024",
      title: "Take-Two Confirms Fall 2025 Release Window",
      category: "Corporate Earnings",
      source: "Take-Two Interactive Q4 Earnings Call",
      summary: "Publisher Take-Two Interactive narrows GTA VI launch from calendar 2025 to Fall 2025 across PlayStation 5 and Xbox Series X|S.",
      details: "In their fourth-quarter financial results presentation, Take-Two reaffirmed their supreme confidence in Rockstar Games delivering an unprecedented commercial entertainment experience during the Fall 2025 calendar window.",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      date: "December 4, 2023",
      title: "Official Trailer 1 Debuts Worldwide",
      category: "Trailer",
      source: "Rockstar Games YouTube & Newswire",
      summary: "Rockstar releases the debut 90-second reveal trailer for Grand Theft Auto VI set to Tom Petty's 'Love Is a Long Road', shattering Guinness World Records.",
      details: "Trailer 1 confirmed the return to modern Vice City in the State of Leonida, introduced protagonists Lucia and Jason, showcased next-generation water and crowd physics, and achieved over 93 million views in its first 24 hours.",
      link: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    },
    {
      date: "November 8, 2023",
      title: "Rockstar Games Announces 25th Anniversary Reveal",
      category: "Official Statement",
      source: "Sam Houser Statement / Rockstar Games",
      summary: "Rockstar co-founder Sam Houser officially announces that the first trailer for the next Grand Theft Auto will premiere in early December.",
      details: "Published on the official Rockstar Newswire celebrating the studio's 25th anniversary, the brief statement sent gaming and financial media into global speculation.",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      date: "February 4, 2022",
      title: "Active Development Officially Confirmed",
      category: "Official Statement",
      source: "Grand Theft Auto Community Update",
      summary: "Rockstar Games formally confirms that active development for the next entry in the Grand Theft Auto series is well underway.",
      details: "Ending years of industry rumors, Rockstar stated: 'With the unprecedented longevity of GTAV, we know many of you have been asking about a new entry... we are pleased to confirm that active development for the next entry in the series is well underway.'",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      <Breadcrumbs items={[{ label: "Official Timeline", href: "/timeline" }]} />

      {/* Header */}
      <header className="pb-6 border-b border-[#222233] space-y-3">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
            <Clock className="w-6 h-6" />
          </span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Official GTA VI News & Milestone Timeline
            </h1>
            <p className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strictly official verified communications &bull; Zero rumors or unauthorized leaks</span>
            </p>
          </div>
        </div>
      </header>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-[#28283c] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        {milestones.map((item, index) => (
          <div key={item.title} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#2c2853] border-2 border-pink-500 group-hover:bg-pink-500 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(244,63,133,0.5)]" />

            <div className="p-5 sm:p-6 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/40 transition-all space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                  {item.category}
                </span>
                <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {item.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                {item.title}
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.summary}
              </p>

              <div className="p-3.5 rounded-xl bg-[#171724] border border-[#252538] text-xs text-zinc-300 leading-relaxed">
                {item.details}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-zinc-500">
                <span>Source: <strong className="text-zinc-300">{item.source}</strong></span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 font-semibold"
                  >
                    <span>Watch Official Trailer</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Database Navigation Footer Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#351b42] to-pink-950/40 border border-[#2c2242] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Explore the Complete Database</h3>
          <p className="text-xs text-zinc-400 mt-1">
            Browse all 88+ verified characters, locations, vehicles, weapons, and wildlife entries.
          </p>
        </div>
        <Link
          href="/characters"
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-lg shadow-pink-600/30 flex items-center gap-2 shrink-0"
        >
          <span>View Characters</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
