import React from "react";
import Image from "next/image";
import { BaseEntity } from "@/content/schemas/entity";
import { VerificationBadge } from "./VerificationBadge";
import { SpoilerShield } from "./SpoilerShield";
import { Breadcrumbs } from "./Breadcrumbs";
import { RelatedContent } from "./RelatedContent";
import { SourceCitations } from "./SourceCitations";
import { getRelatedEntities, getSourcesForEntity } from "@/content/repositories";
import { formatDate } from "@/lib/utils";
import { Calendar, Tag } from "lucide-react";

interface EntityDetailViewProps {
  entity: BaseEntity;
  extraMeta?: React.ReactNode;
}

export function EntityDetailView({ entity, extraMeta }: EntityDetailViewProps) {
  const related = getRelatedEntities(entity.id);
  const sources = getSourcesForEntity(entity);

  return (
    <article className="w-full max-w-5xl mx-auto py-6">
      <Breadcrumbs
        items={[
          { label: entity.category, href: `/${entity.category}` },
          { label: entity.name, href: `/${entity.category}/${entity.slug}` },
        ]}
      />

      {/* Main Header */}
      <header className="my-4 space-y-3 pb-6 border-b border-[#222233]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/30">
            {entity.category}
          </span>
          <VerificationBadge status={entity.verificationStatus} />
          {entity.aliases.length > 0 && (
            <span className="text-xs text-zinc-400">
              Also known as: <span className="text-zinc-200">{entity.aliases.join(", ")}</span>
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {entity.name}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
            <span>Updated: {formatDate(entity.lastUpdatedAt)}</span>
          </div>
          {entity.tags.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-zinc-500" />
              {entity.tags.map((t) => (
                <span
                  key={t}
                  className="bg-[#3d376f] px-2 py-0.5 rounded text-[11px] text-zinc-300 border border-zinc-800"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero / Thumbnail Image if available */}
      {entity.image && (
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden my-6 border border-[#272738]">
          <Image
            src={entity.image}
            alt={entity.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />
        </div>
      )}

      {/* Grid Layout: Content Column + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        <div className="lg:col-span-8 space-y-6">
          {/* Summary Callout */}
          <div className="p-5 rounded-2xl bg-[#351b42] border-l-4 border-pink-500 text-sm sm:text-base text-zinc-200 leading-relaxed shadow-sm">
            {entity.summary}
          </div>

          {/* Description & Detailed Content */}
          {entity.description && (
            <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
              <h2 className="text-xl font-bold text-white border-b border-zinc-800 pb-2">
                Overview & Background
              </h2>
              <p className="whitespace-pre-line">{entity.description}</p>
            </div>
          )}

          {/* Protected Spoilers Section */}
          <SpoilerShield spoilerLevel={entity.spoilerLevel}>
            <div className="space-y-4">
              <h3 className="text-base font-bold text-amber-300">
                Story Revelations & Deep Lore
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Specific mission arcs and character encounters involving {entity.name}
                impact key events throughout Leonida. Make sure your preparation and crew
                alliances are aligned before initiating these sequences.
              </p>
            </div>
          </SpoilerShield>

          {/* Sources and citations */}
          <SourceCitations sources={sources} />
        </div>

        {/* Sidebar Info Card */}
        <aside className="lg:col-span-4 space-y-5">
          <div className="p-5 rounded-2xl bg-[#2c2853] border border-[#60416c] space-y-4">
            <h3 className="text-xs uppercase font-bold text-pink-400 tracking-wider">
              Quick Facts
            </h3>

            <dl className="space-y-3 text-xs">
              <div>
                <dt className="text-zinc-500">Category</dt>
                <dd className="font-semibold text-zinc-200 capitalize mt-0.5">
                  {entity.category}
                </dd>
              </div>

              <div>
                <dt className="text-zinc-500">Verification</dt>
                <dd className="mt-1">
                  <VerificationBadge status={entity.verificationStatus} />
                </dd>
              </div>

              <div>
                <dt className="text-zinc-500">Spoiler Rating</dt>
                <dd className="font-semibold text-zinc-200 mt-0.5">
                  Level {entity.spoilerLevel} / 4
                </dd>
              </div>

              {extraMeta}
            </dl>
          </div>
        </aside>
      </div>

      {/* Related Content */}
      <RelatedContent entities={related} />
    </article>
  );
}

