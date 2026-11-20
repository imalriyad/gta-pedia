"use client";

import { SyntheticEvent } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fallbackSrc?: string;
}

export function FallbackImage({ src, alt, className, loading, fallbackSrc }: FallbackImageProps) {
  function handleError(event: SyntheticEvent<HTMLImageElement>) {
    const image = event.currentTarget;
    if (fallbackSrc && image.src !== new URL(fallbackSrc, window.location.href).href) {
      image.src = fallbackSrc;
    } else {
      image.hidden = true;
    }
  }

  return <img src={src} alt={alt} className={className} loading={loading} onError={handleError} />;
}
