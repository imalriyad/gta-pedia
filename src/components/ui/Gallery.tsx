"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export function GalleryGrid({
  images,
  columns = 3,
  ratio = "16/9",
}: {
  images: GalleryImage[];
  columns?: 2 | 3;
  ratio?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div
        className={clsx(
          "grid gap-3",
          columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
        )}
      >
        {images.map((img, i) => (
          <button
            key={img.url + i}
            onClick={() => setActive(i)}
            className="group relative block w-full overflow-hidden bg-ink-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-coral"
            aria-label={`Open image: ${img.alt}`}
          >
            <div className={clsx("relative w-full", ratio === "4/5" ? "aspect-[4/5]" : ratio === "3/2" ? "aspect-[3/2]" : "aspect-[16/9]")}>
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain transition-transform duration-700 ease-cinema group-hover:scale-[1.01]"
              />
            </div>
            {img.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-8 text-[10px] leading-snug text-paper/90 opacity-0 transition-opacity group-hover:opacity-100">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-ink/97 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
            <span className="mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setActive(null)}
              className="grid h-9 w-9 place-items-center border border-line text-paper transition-colors hover:border-coral hover:text-coral"
              aria-label="Close viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center p-3 sm:p-8">
            <button
              onClick={() => setActive((active - 1 + images.length) % images.length)}
              className="absolute left-2 z-10 grid h-10 w-10 place-items-center border border-line bg-ink/70 text-paper hover:border-coral hover:text-coral sm:left-6"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="relative max-h-full w-full max-w-6xl">
              <div className="relative mx-auto h-[70vh] w-full">
                <Image
                  src={images[active].url}
                  alt={images[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              {images[active].caption && (
                <p className="mx-auto mt-4 max-w-3xl text-center text-[12px] leading-relaxed text-muted">
                  {images[active].caption}
                </p>
              )}
            </div>
            <button
              onClick={() => setActive((active + 1) % images.length)}
              className="absolute right-2 z-10 grid h-10 w-10 place-items-center border border-line bg-ink/70 text-paper hover:border-coral hover:text-coral sm:right-6"
              aria-label="Next image"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
