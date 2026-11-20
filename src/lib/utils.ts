import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export function getVerificationBadgeInfo(status: string) {
  switch (status) {
    case "official":
      return { label: "Official", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" };
    case "confirmed":
      return { label: "Confirmed", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" };
    case "observed":
      return { label: "Observed in Trailer", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" };
    case "community-reported":
      return { label: "Community Research", color: "bg-amber-500/10 text-amber-400 border-amber-500/30" };
    case "speculation":
      return { label: "Speculation", color: "bg-rose-500/10 text-rose-400 border-rose-500/30" };
    default:
      return { label: "Unverified", color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30" };
  }
}

export function getSpoilerWarningText(level: number): string | null {
  switch (level) {
    case 0:
      return null;
    case 1:
      return "Minor lore spoilers ahead";
    case 2:
      return "Contains mission spoilers";
    case 3:
      return "Major story spoilers included";
    case 4:
      return "Critical ending / revelation spoiler";
    default:
      return null;
  }
}

