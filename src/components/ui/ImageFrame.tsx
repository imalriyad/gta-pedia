import Image from "next/image";
import clsx from "clsx";
import React from "react";

const RATIO: Record<string, string> = {
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "5/4": "aspect-[5/4]",
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "2/1": "aspect-[2/1]",
  "21/9": "aspect-[21/9]",
  "1.49": "aspect-[1.49/1]",
};

export function ImageFrame({
  src,
  alt,
  ratio = "16/9",
  fit = "cover",
  position = "center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority,
  className,
  imageClassName,
  caption,
  credit,
  children,
}: {
  src: string;
  alt: string;
  ratio?: keyof typeof RATIO | string;
  fit?: "cover" | "contain";
  position?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  caption?: string;
  credit?: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className={clsx("group/figure min-w-0", className)}>
      <div
        className={clsx(
          "relative w-full overflow-hidden bg-ink-3",
          RATIO[ratio] ?? RATIO["16/9"]
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={clsx(
            "transition-transform duration-[1.2s] ease-cinema group-hover/figure:scale-[1.025]",
            fit === "contain" ? "object-contain" : "object-cover",
            imageClassName
          )}
          style={{ objectPosition: position }}
        />
        {children}
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2.5 flex items-start justify-between gap-4 text-[11px] leading-relaxed text-faint">
          {caption && <span>{caption}</span>}
          {credit && (
            <span className="mono shrink-0 text-[9px] uppercase tracking-[0.12em]">
              {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
