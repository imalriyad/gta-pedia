import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLatestUpdates } from "@/content/repositories";
import { Breadcrumbs } from "@/components/wiki/Breadcrumbs";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/updates" },
  title: "GTA 6 Wiki Updates & Changelog",
  description: "Recent additions, expansions, and verified edits to the Grand Theft Auto VI encyclopedia.",
};

export default function UpdatesPage() {
  const updates = getLatestUpdates();

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />

      <header className="my-6 pb-6 border-b border-[#222233] space-y-2">
        <h1 className="text-3xl font-black text-white">Changelog & Latest Updates</h1>
        <p className="text-sm text-zinc-400">
          Track newly documented locations, updated guide revisions, and expanded secret breakdowns.
        </p>
      </header>

      <div className="space-y-4">
        {updates.map((item) => (
          <Link
            key={item.id}
            href={`/${item.category}/${item.slug}`}
            className="group flex items-center justify-between p-4 rounded-2xl bg-[#2c2853] border border-[#60416c] hover:border-pink-500/50 hover:bg-[#3b1e48] transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wide">
                  [{item.type}]
                </span>
                <h2 className="text-base font-bold text-white group-hover:text-pink-300 truncate">
                  {item.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

