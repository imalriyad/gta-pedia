import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { VerificationTag } from "@/components/ui/VerificationTag";
import { VehicleSilhouette, WeaponSilhouette } from "@/components/ui/Silhouettes";
import { categoryMeta } from "@/lib/categories";
import { FallbackImage } from "@/components/ui/FallbackImage";

type Entity = {
  id: string;
  name: string;
  slug: string;
  category: string;
  summary: string;
  image?: string;
  thumbnail?: string;
  verificationStatus: string;
  vehicleClass?: string;
  manufacturer?: string;
  weaponClass?: string;
  realWorldInspiration?: string;
  totalCount?: number;
  collectibleType?: string;
  role?: string;
  difficulty?: string;
};

export function CharacterCard({ item, index }: { item: Entity; index: number }) {
  const src = item.thumbnail || item.image;
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group relative block border border-line bg-ink-2 transition-colors hover:border-paper/35"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-3">
        {src ? (
          <Image
            src={src}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={72}
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.035]"
          />
        ) : (
          <div className="grid h-full place-items-center text-faint">
            <span className="serif text-6xl italic">{item.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/90 to-transparent" />
        <span className="absolute left-3 top-3 mono text-[9px] tracking-[0.14em] text-paper/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute right-3 top-3">
          <VerificationTag status={item.verificationStatus} showLabel={false} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="eyebrow text-coral">{item.role || "Character"}</span>
            <h3 className="mt-1.5 font-display text-[19px] font-semibold leading-tight tracking-tight text-paper transition-colors group-hover:text-coral">
              {item.name}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
        </div>
        <p className="mt-2 line-clamp-3 text-[11.5px] leading-relaxed text-muted">
          {item.summary}
        </p>
      </div>
    </Link>
  );
}

export function LocationCard({ item, index }: { item: Entity; index: number }) {
  const src = item.image || item.thumbnail;
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group block border border-line bg-ink-2 transition-colors hover:border-paper/35"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-3">
        {src && (
          <Image
            src={src}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            className="h-full w-full object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.035]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-3 mono text-[9px] tracking-[0.14em] text-paper/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
          <h3 className="font-display text-[24px] font-semibold leading-none tracking-tight text-paper">
            {item.name}
          </h3>
          <VerificationTag status={item.verificationStatus} showLabel={false} />
        </div>
      </div>
      <div className="p-4">
        <p className="line-clamp-2 text-[11.5px] leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-3 flex items-center justify-between border-t border-line-soft pt-2.5">
          <span className="eyebrow">{item.category === "locations" ? "Region record" : "Guide"}</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
        </div>
      </div>
    </Link>
  );
}

export function VehicleCard({ item, index }: { item: Entity; index: number }) {
  const hasPhoto = Boolean(item.image);
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex flex-col border border-line bg-ink-2 transition-colors hover:border-paper/35"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-[#2c2853]">
        <div className="absolute inset-0 grid-lines opacity-40" />
        {hasPhoto ? (
          <Image
            src={item.image!}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            className="relative h-full w-full object-contain transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-8 text-gold/70">
            <VehicleSilhouette kind={item.vehicleClass || ""} className="max-h-[78%]" />
          </div>
        )}
        <span className="absolute left-3 top-3 mono text-[9px] tracking-[0.14em] text-paper/50">
          {String(index + 1).padStart(3, "0")}
        </span>
        <span className="absolute right-3 top-3 tag bg-ink/60">{item.vehicleClass}</span>
        {hasPhoto && (
          <span className="absolute bottom-2 right-3 tag bg-ink/70 text-teal">Official image</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="eyebrow text-gold">{item.manufacturer}</span>
            <h3 className="mt-1 font-display text-[17px] font-semibold leading-tight tracking-tight text-paper transition-colors group-hover:text-gold">
              {item.name}
            </h3>
          </div>
          <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
        </div>
        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-muted">
          {item.summary}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line-soft pt-2.5 text-[10px]">
          <span className="text-faint">{item.realWorldInspiration}</span>
          <VerificationTag status={item.verificationStatus} showLabel={false} />
        </div>
      </div>
    </Link>
  );
}

export function WeaponCard({ item, index }: { item: Entity; index: number }) {
  const src = item.image || item.thumbnail;
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex flex-col border border-line bg-ink-2 transition-colors hover:border-paper/35"
    >
      <div className="relative aspect-[3/2] overflow-hidden border-b border-line bg-[#2c2853]">
        {src ? (
          <Image src={src} alt={item.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={72} className="object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.035]" />
        ) : (
          <>
            <div className="absolute inset-0 grid-lines opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center px-7 text-coral/75">
              <WeaponSilhouette kind={item.weaponClass || ""} className="max-h-[72%]" />
            </div>
          </>
        )}
        <span className="absolute left-3 top-3 mono text-[9px] tracking-[0.14em] text-paper/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-3 top-3 tag bg-ink/60">{item.weaponClass}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-[18px] font-semibold leading-tight tracking-tight text-paper transition-colors group-hover:text-coral">
            {item.name}
          </h3>
          <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
        </div>
        <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-auto flex items-center justify-between border-t border-line-soft pt-2.5 text-[10px]">
          <span className="text-faint">{item.realWorldInspiration}</span>
          <VerificationTag status={item.verificationStatus} showLabel />
        </div>
      </div>
    </Link>
  );
}

export function GuideCard({ item, index }: { item: Entity; index: number }) {
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t border-line py-5 transition-colors hover:border-coral/60"
    >
      <span className="mono pt-1 text-[10px] tracking-[0.12em] text-faint">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow text-teal">Guide</span>
          {item.difficulty && <span className="tag">{item.difficulty}</span>}
        </div>
        <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-paper transition-colors group-hover:text-coral">
          {item.name}
        </h3>
        <p className="mt-1.5 max-w-2xl text-[12px] leading-relaxed text-muted line-clamp-2">
          {item.summary}
        </p>
      </div>
      <ArrowUpRight className="mt-2 h-4 w-4 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
    </Link>
  );
}

export function CollectibleCard({ item, index }: { item: Entity; index: number }) {
  const meta = categoryMeta(item.category);
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex flex-col border border-line bg-ink-2 p-5 transition-colors hover:border-gold/50"
    >
      <div className="flex items-start justify-between">
        <span className="mono text-[9px] tracking-[0.14em] text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="tag text-gold">{item.collectibleType}</span>
      </div>
      <div className="my-6 flex items-end gap-3">
        <span className="display text-[54px] leading-none text-paper">
          {item.totalCount ?? "—"}
        </span>
        <span className="pb-2 mono text-[9px] uppercase tracking-[0.14em] text-faint">
          items
        </span>
      </div>
      <h3 className="font-display text-[19px] font-semibold tracking-tight text-paper transition-colors group-hover:text-gold">
        {item.name}
      </h3>
      <p className="mt-2 text-[11.5px] leading-relaxed text-muted line-clamp-3">{item.summary}</p>
      <div className="mt-auto flex items-center justify-between border-t border-line-soft pt-3">
        <span className="mono text-[9px] uppercase tracking-[0.12em] text-gold">Checklist</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
      </div>
    </Link>
  );
}

export function GenericCard({ item, index }: { item: Entity; index: number }) {
  const meta = categoryMeta(item.category);
  const image = item.image || item.thumbnail || (item.category === "wildlife" ? meta.image : undefined);
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex flex-col overflow-hidden border border-line bg-ink-2 transition-colors hover:border-paper/35"
    >
      {image ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-ink-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <FallbackImage src={image} alt={item.name} fallbackSrc={item.category === "wildlife" ? "/images/wildlife/american-black-bear.jpg" : undefined} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-[1.1s] ease-cinema group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-4 eyebrow" style={{ color: meta.accent }}>{meta.label}</span>
          <span className="absolute right-3 top-3 mono text-[9px] text-paper/75">{String(index + 1).padStart(2, "0")}</span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        {!item.image && !item.thumbnail && <div className="flex items-center justify-between"><span className="eyebrow" style={{ color: meta.accent }}>{meta.label}</span><span className="mono text-[9px] text-faint">{String(index + 1).padStart(2, "0")}</span></div>}
        <h3 className="mt-2 font-display text-[20px] font-semibold tracking-tight text-paper transition-colors group-hover:text-coral">{item.name}</h3>
        <p className="mt-2 line-clamp-3 text-[11.5px] leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line-soft pt-3">
          <VerificationTag status={item.verificationStatus} />
          <ArrowUpRight className="h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral" />
        </div>
      </div>
    </Link>
  );
}

export function MiniRow({ item, index }: { item: Entity; index: number }) {
  return (
    <Link
      href={`/${item.category}/${item.slug}`}
      className="group flex items-center justify-between gap-4 border-b border-line-soft py-3.5 transition-colors hover:border-paper/30"
    >
      <div className="flex min-w-0 items-baseline gap-4">
        <span className="mono w-7 shrink-0 text-[9px] text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate font-display text-[15px] text-paper group-hover:text-coral">
          {item.name}
        </span>
      </div>
      <span className="shrink-0 mono text-[9px] uppercase tracking-[0.12em] text-faint">
        {item.vehicleClass || item.weaponClass || item.category}
      </span>
    </Link>
  );
}
