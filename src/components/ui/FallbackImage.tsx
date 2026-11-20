"use client";

import { SyntheticEvent } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fallbackSrc?: string;
  sizes?: string;
}

export function FallbackImage({ src, alt, className, loading = "lazy", fallbackSrc, sizes = "(max-width: 768px) 100vw, 50vw" }: FallbackImageProps) {
  function handleError(event: SyntheticEvent<HTMLImageElement>) {
    const image = event.currentTarget;
    if (fallbackSrc && image.dataset.fallbackApplied !== "true") {
      image.dataset.fallbackApplied = "true";
      image.src = fallbackSrc;
    } else {
      image.hidden = true;
    }
  }

  return <Image src={src} alt={alt} fill sizes={sizes} quality={72} className={className} loading={loading} onError={handleError} />;
}
