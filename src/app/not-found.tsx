import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-lg mx-auto py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mx-auto text-pink-400">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-pink-500 tracking-wider">
          404 ERROR
        </span>
        <h1 className="text-3xl font-black text-white">Out of Bounds</h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          The requested coordinate or wiki article doesn&apos;t exist in Vice City records.
        </p>
      </div>

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold shadow-lg shadow-pink-600/30 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

