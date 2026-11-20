import React from "react";
import Link from "next/link";
import { BaseEntity } from "@/content/schemas/entity";
import { getEntityById, getRelatedEntities, getSourcesForEntity } from "@/content/repositories";
import { categoryMeta } from "@/lib/categories";
import { VerificationTag } from "@/components/ui/VerificationTag";
import { StatBlock } from "@/components/ui/StatBar";
import { WeaponSilhouette, VehicleSilhouette } from "@/components/ui/Silhouettes";
import { GalleryGrid } from "@/components/ui/Gallery";
import { Breadcrumbs } from "./Breadcrumbs";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/FallbackImage";

const EVIDENCE_NOTE: Record<string, string> = {
  official: "Stated or published by Rockstar Games.",
  confirmed: "Stated, printed or shown directly by Rockstar Games.",
  observed: "Visible in official footage or screenshots; the label may be a community working name.",
  "community-reported": "Credible community record or outlet report, not a Rockstar statement.",
  unverified: "Circulating without a source strong enough to present as fact.",
  speculation: "Explicitly speculative. Read as a theory, not a record.",
};

function paragraphs(text?: string) {
  if (!text) return [];
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function DetailPage({ entity }: { entity: BaseEntity }) {
  const meta = categoryMeta(entity.category);
  const related = getRelatedEntities(entity.id);
  const sources = getSourcesForEntity(entity);
  const e: any = entity;

  const facts: { label: string; value: string }[] =
    e.facts && e.facts.length
      ? e.facts
      : [
          ...(e.role ? [{ label: "Role", value: e.role }] : []),
          ...(e.affiliations?.length ? [{ label: "Affiliations", value: e.affiliations.join(", ") }] : []),
          ...(e.knownLocations?.length ? [{ label: "Known locations", value: e.knownLocations.join(", ") }] : []),
          ...(e.region ? [{ label: "Region", value: e.region }] : []),
          ...(e.locationType ? [{ label: "Type", value: e.locationType }] : []),
          ...(e.landmarks?.length ? [{ label: "Landmarks", value: e.landmarks.join(", ") }] : []),
          ...(e.vehicleClass ? [{ label: "Class", value: e.vehicleClass }] : []),
          ...(e.manufacturer ? [{ label: "Manufacturer", value: e.manufacturer }] : []),
          ...(e.realWorldInspiration ? [{ label: "Real-world basis", value: e.realWorldInspiration }] : []),
          ...(e.weaponClass ? [{ label: "Category", value: e.weaponClass }] : []),
          ...(e.carriedBy ? [{ label: "Carried by", value: e.carriedBy }] : []),
          ...(e.totalCount ? [{ label: "Total", value: String(e.totalCount) }] : []),
          ...(e.difficulty ? [{ label: "Difficulty", value: e.difficulty }] : []),
        ];

  const isCharacter = entity.category === "characters";
  const isLocation = entity.category === "locations";
  const isVehicle = entity.category === "vehicles";
  const isWeapon = entity.category === "weapons";
  const wildlifeImage = entity.category === "wildlife" ? e.image || e.thumbnail || meta.image : undefined;
  const hasPhoto = Boolean(e.image || wildlifeImage);

  const visual = isCharacter ? (
    e.image ? (
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-ink-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={e.image} alt={entity.name} className="h-full w-full object-contain" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
        <span className="absolute bottom-4 left-4 tag bg-ink/60 text-coral">Official portrait</span>
      </div>
    ) : null
  ) : isLocation && hasPhoto ? (
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-ink-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={e.image} alt={entity.name} className="h-full w-full object-contain" />
      <span className="absolute bottom-3 left-3 tag bg-ink/60 text-teal">Official still</span>
    </div>
  ) : entity.category === "wildlife" && wildlifeImage ? (
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-ink-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <FallbackImage src={wildlifeImage} alt={entity.name} fallbackSrc="/images/wildlife/american-black-bear.jpg" className="h-full w-full object-cover" />
    </div>
  ) : isVehicle ? (
    <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-[#2c2853]">
      <div className="absolute inset-0 grid-lines opacity-40" />
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={e.image} alt={entity.name} className="relative h-full w-full object-contain" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-12 text-gold/70">
          <VehicleSilhouette kind={e.vehicleClass || ""} className="max-h-[75%]" />
        </div>
      )}
      <div className="absolute left-4 top-4">
        <span className="tag bg-ink/60 text-gold">{e.vehicleClass}</span>
      </div>
      <div className="absolute bottom-4 right-4">
        <span className="mono text-[9px] uppercase tracking-[0.14em] text-paper/40">
          {e.realWorldInspiration}
        </span>
      </div>
    </div>
  ) : isWeapon ? (
    <div className="relative aspect-[3/2] w-full overflow-hidden border border-line bg-[#2c2853]">
      {e.image || e.thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={e.image || e.thumbnail} alt={entity.name} className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center px-10 text-coral/80">
            <WeaponSilhouette kind={e.weaponClass || ""} className="max-h-[70%]" />
          </div>
        </>
      )}
      <div className="absolute left-4 top-4">
        <span className="tag bg-ink/60 text-coral">{e.weaponClass}</span>
      </div>
      <div className="absolute bottom-4 right-4">
        <span className="mono text-[9px] uppercase tracking-[0.14em] text-paper/40">
          {e.nameSource === "Rockstar" ? "Named by Rockstar" : "Community label"}
        </span>
      </div>
    </div>
  ) : null;

  return (
    <article>
      <header className="border-b border-line">
      <div className="container-x py-6">
          <Breadcrumbs
            items={[
              { label: meta.label, href: meta.href },
              { label: entity.name, href: `/${entity.category}/${entity.slug}` },
            ]}
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start lg:gap-10">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow" style={{ color: meta.accent }}>
                  {meta.eyebrow}
                </span>
                <span className="h-px w-8 bg-line" />
                <VerificationTag status={entity.verificationStatus} />
              </div>
              <h1 className="mt-4 display text-[clamp(2.6rem,6vw,5.2rem)] text-paper">
                {entity.name}
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper-dim/85">
                {entity.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-[10px]">
                <span className="mono uppercase tracking-[0.12em] text-faint">
                  Updated {formatDate(entity.lastUpdatedAt)}
                </span>
                {e.nameSource && (
                  <span className="mono uppercase tracking-[0.12em] text-faint">
                    Name: {e.nameSource}
                  </span>
                )}
                {entity.tags.slice(0, 3).map((t: string) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {visual && <div className="mx-auto w-full max-w-[260px] lg:justify-self-end">{visual}</div>}
          </div>
        </div>
      </header>

      <div className="container-x grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-14">
        <div className="min-w-0">
          <div className="prose-cinema">
            {paragraphs(entity.description).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {isCharacter && (e.personality || e.storyRole || e.biography || e.affiliations?.length || e.knownLocations?.length || e.voiceActor) && (
            <section className="mt-8 border border-line bg-ink-2/70 p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
                <div><p className="eyebrow text-coral">Character dossier</p><h2 className="mt-1 font-display text-2xl text-paper">Story, people & places</h2></div>
                <Link href="/relationships" className="text-[10px] uppercase tracking-widest text-coral hover:text-paper">Open cast connections ↗</Link>
              </div>
              {(e.storyRole || e.biography) && <div className="mt-4 border-t border-line pt-4"><h3 className="eyebrow text-gold">Background & story context</h3><p className="mt-2 text-xs leading-relaxed text-paper-dim">{e.storyRole || e.biography}</p></div>}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {e.personality && <div><h3 className="eyebrow text-teal">Character notes</h3><p className="mt-2 text-xs leading-relaxed text-paper-dim">{e.personality}</p></div>}
                {e.affiliations?.length > 0 && <div><h3 className="eyebrow text-gold">Affiliations & circles</h3><ul className="mt-2 space-y-1.5">{e.affiliations.map((item: string) => <li key={item} className="text-xs text-paper-dim">{item}</li>)}</ul></div>}
                {e.knownLocations?.length > 0 && <div><h3 className="eyebrow text-teal">Known places</h3><ul className="mt-2 space-y-1.5">{e.knownLocations.map((item: string) => { const place = getEntityById(item); return <li key={item} className="text-xs text-paper-dim">{place ? <Link href={`/${place.category}/${place.slug}`} className="hover:text-coral">{place.name} ↗</Link> : item}</li>; })}</ul></div>}
                {e.voiceActor && <div><h3 className="eyebrow">Voice performance</h3><p className="mt-2 text-xs text-paper-dim">{e.voiceActor}</p></div>}
              </div>
              {related.length > 0 && <p className="mt-4 border-t border-line pt-3 text-[10px] leading-relaxed text-muted">Connected files below include characters, places, vehicles, missions, and guides. A related file is an archive link and does not by itself prove a personal relationship.</p>}
            </section>
          )}

          {/* Guides: steps */}
          {e.steps?.length > 0 && (
            <section className="mt-12">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h2 className="font-display text-2xl tracking-tight text-paper">Walkthrough</h2>
                <span className="mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  {e.steps.length} steps
                </span>
              </div>
              <ol className="divide-y divide-line-soft">
                {e.steps.map((s: any) => (
                  <li key={s.stepNumber} className="grid gap-4 py-6 sm:grid-cols-[64px_1fr]">
                    <span className="display text-3xl text-coral/60">
                      {String(s.stepNumber).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-paper">{s.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.content}</p>
                      {s.tip && (
                        <p className="mt-3 border-l border-teal pl-3 text-[12px] leading-relaxed text-teal/80">
                          Tip — {s.tip}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Guides: requirements / mistakes */}
          {(e.requirements?.length > 0 || e.commonMistakes?.length > 0) && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {e.requirements?.length > 0 && (
                <div className="border border-line p-5">
                  <h3 className="eyebrow text-teal">Before you start</h3>
                  <ul className="mt-4 space-y-2">
                    {e.requirements.map((r: string) => (
                      <li key={r} className="flex gap-2 text-[12px] leading-relaxed text-muted">
                        <span className="mt-[7px] h-px w-3 shrink-0 bg-teal" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {e.commonMistakes?.length > 0 && (
                <div className="border border-line p-5">
                  <h3 className="eyebrow text-coral">Common mistakes</h3>
                  <ul className="mt-4 space-y-2">
                    {e.commonMistakes.map((r: string) => (
                      <li key={r} className="flex gap-2 text-[12px] leading-relaxed text-muted">
                        <span className="mt-[7px] h-px w-3 shrink-0 bg-coral" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Collectible specifics */}
          {e.reward && (
            <div className="mt-10 border border-line p-5">
              <span className="eyebrow text-gold">Reward</span>
              <p className="mt-2 text-[13px] leading-relaxed text-paper-dim">{e.reward}</p>
            </div>
          )}

          {/* Gallery */}
          {e.gallery?.length > 0 && (
            <section className="mt-12">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h2 className="font-display text-2xl tracking-tight text-paper">Gallery</h2>
                <span className="mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  {e.gallery.length} official stills
                </span>
              </div>
              <div className="mt-5">
                <GalleryGrid
                  images={e.gallery}
                  columns={2}
                  ratio={isCharacter ? "16/9" : "16/9"}
                />
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-14">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h2 className="font-display text-2xl tracking-tight text-paper">{isCharacter ? "Connected files & story threads" : "Read next"}</h2>
                <span className="mono text-[9px] uppercase tracking-[0.12em] text-faint">
                  Related records
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {related.slice(0, 6).map((r) => (
                  <Link
                    key={r.id}
                    href={`/${r.category}/${r.slug}`}
                    className="group border border-line p-4 transition-colors hover:border-paper/35"
                  >
                    <span className="eyebrow" style={{ color: categoryMeta(r.category).accent }}>
                      {categoryMeta(r.category).label}
                    </span>
                    <h3 className="mt-2 font-display text-[15px] leading-tight text-paper transition-colors group-hover:text-coral">
                      {r.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[10.5px] leading-relaxed text-muted">
                      {r.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {sources.length > 0 && (
            <section className="mt-12 border-t border-line pt-6">
              <h2 className="eyebrow">Sources for this record</h2>
              <ul className="mt-4 space-y-3">
                {sources.map((s) => (
                  <li key={s.id} className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[12px] text-paper-dim">
                      {s.title}
                      {s.publisher && <span className="text-faint"> — {s.publisher}</span>}
                    </span>
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.12em] text-coral hover:text-paper"
                      >
                        Open <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="border border-line bg-ink-2">
            <div className="border-b border-line px-5 py-3">
              <h2 className="eyebrow">The record</h2>
            </div>
            <dl className="divide-y divide-line-soft">
              <div className="flex items-start justify-between gap-4 px-5 py-3">
                <dt className="mono text-[9px] uppercase tracking-[0.1em] text-faint">Evidence</dt>
                <dd className="text-right">
                  <VerificationTag status={entity.verificationStatus} />
                  <p className="mt-1 max-w-[170px] text-[10px] leading-relaxed text-faint">
                    {EVIDENCE_NOTE[entity.verificationStatus]}
                  </p>
                </dd>
              </div>
              {facts.slice(0, 9).map((f) => (
                <div key={f.label} className="flex items-start justify-between gap-4 px-5 py-3">
                  <dt className="mono shrink-0 text-[9px] uppercase tracking-[0.1em] text-faint">
                    {f.label}
                  </dt>
                  <dd className="max-w-[190px] text-right text-[11px] leading-relaxed text-paper-dim">
                    {f.value}
                  </dd>
                </div>
              ))}
              <div className="flex items-start justify-between gap-4 px-5 py-3">
                <dt className="mono text-[9px] uppercase tracking-[0.1em] text-faint">Spoiler</dt>
                <dd className="text-[11px] text-paper-dim">Level {entity.spoilerLevel} / 4</dd>
              </div>
            </dl>
          </div>

          {e.stats && Object.keys(e.stats).length > 0 && (
            <div className="border border-line p-5">
              <div className="flex items-baseline justify-between">
                <h2 className="eyebrow">Pre-launch estimate</h2>
                <span className="mono text-[8px] text-faint">not official</span>
              </div>
              <div className="mt-4">
                <StatBlock
                  stats={e.stats}
                  accent={isVehicle ? "#e3b873" : "#ff5566"}
                  note="Read from the real-world basis. Rockstar has published no performance data."
                />
              </div>
              {e.stats.tier && (
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="mono text-[9px] uppercase tracking-[0.1em] text-faint">
                    Estimated class
                  </span>
                  <span className="font-display text-lg text-paper">{e.stats.tier}</span>
                </div>
              )}
            </div>
          )}

          <Link
            href={meta.href}
            className="group flex items-center justify-between border border-line px-5 py-3 text-[10px] text-muted transition-colors hover:border-paper/35 hover:text-paper"
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              All {meta.label.toLowerCase()}
            </span>
            <span className="mono text-[8px] uppercase tracking-[0.12em] text-faint">
              {meta.index}
            </span>
          </Link>
        </aside>
      </div>
    </article>
  );
}
