"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Check, Search } from "lucide-react";

type SideMission = {
  id: string;
  title: string;
  character: "Jason" | "Lucia";
  giver: string;
  place: string;
  summary: string;
  reward: string;
  image: string;
  missable?: string;
};

const missions: SideMission[] = [
  { id: "buy-flowers", title: "Buy Flowers", character: "Jason", giver: "Lucia Caminos", place: "Key Lento", summary: "Pick a bouquet from a flower vendor for Lucia.", reward: "Relationship increase", image: "/images/locations/leonida-keys/leonida-keys-03-1200.webp" },
  { id: "buy-lucia-a-necklace", title: "Buy Lucia a Necklace", character: "Jason", giver: "Lucia Caminos", place: "The Siren’s Chest · Key Lento", summary: "Order Lucia a custom necklace at the jewelry store.", reward: "$475 purchase · relationship increase", image: "/images/locations/leonida-keys/leonida-keys-01-1200.webp" },
  { id: "get-shirleys-rum", title: "Get Shirley’s Rum", character: "Jason", giver: "Shirley", place: "Three Sheets Liquor · Key Lento", summary: "Fetch a bottle of rum for Jason’s neighbor and bring it back.", reward: "Focus and Professional Criminal rating increase", image: "/images/locations/leonida-keys/leonida-keys-04-1200.webp", missable: "Reported missable after the Chapter 1 story advances to Tourist Trap." },
  { id: "get-the-chop", title: "Get The Chop", character: "Jason", giver: "Lucia Caminos", place: "Barnacle Beauties · Key Lento", summary: "Visit the barber before Lucia returns and choose a fresh haircut or beard trim.", reward: "Relationship increase", image: "/images/characters/jason-duval/jason-duval-02-1200.webp" },
  { id: "pick-up-groceries", title: "Pick Up Groceries", character: "Jason", giver: "Lucia Caminos", place: "Key Lento", summary: "Choose groceries at the marked store and bring the bag back home.", reward: "Relationship increase", image: "/images/characters/jason-duval/jason-duval-01-1200.webp" },
];

const storageKey = "gta6pedia-side-mission-progress";

export function SideMissionDirectory() {
  const [query, setQuery] = useState("");
  const [character, setCharacter] = useState<"All" | "Jason" | "Lucia">("All");
  const [hideDone, setHideDone] = useState(false);
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(saved)) setDone(saved.filter((id): id is string => typeof id === "string" && missions.some((mission) => mission.id === id)));
    } catch { setDone([]); }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem(storageKey, JSON.stringify(done)); }, [done, ready]);

  const visible = useMemo(() => missions.filter((mission) =>
    (character === "All" || mission.character === character)
    && (!hideDone || !done.includes(mission.id))
    && `${mission.title} ${mission.character} ${mission.giver} ${mission.place} ${mission.summary}`.toLowerCase().includes(query.toLowerCase())), [character, done, hideDone, query]);
  const toggle = (id: string) => setDone((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);

  return <>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border border-line bg-ink-2/80 p-4">
      <div className="flex items-center gap-2" role="group" aria-label="Filter side missions by character">
        {(["All", "Jason", "Lucia"] as const).map((option) => <button key={option} onClick={() => setCharacter(option)} className={`border px-3 py-2 text-xs transition-colors ${character === option ? "border-coral bg-coral/15 text-paper" : "border-line text-muted hover:text-paper"}`}>{option}</button>)}
        <span className="ml-2 text-[10px] text-muted">{done.length} of {missions.length} done</span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-xs text-muted"><input type="checkbox" checked={hideDone} onChange={(event) => setHideDone(event.target.checked)} className="accent-[#f05bc7]"/> Hide done</label>
        <label className="flex h-9 w-64 max-w-full items-center gap-2 border border-line px-3"><Search className="h-3.5 w-3.5 text-faint"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search side missions" className="min-w-0 flex-1 bg-transparent text-xs text-paper outline-none placeholder:text-faint"/></label>
      </div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {visible.map((mission) => <article key={mission.id} className="flex min-w-0 flex-col overflow-hidden border border-line bg-ink-2">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink-3"><Image src={mission.image} alt={`${mission.place}, illustrative location image`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent"/><span className="absolute bottom-3 left-3 eyebrow text-sun">Side mission · {mission.place}</span></div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-3"><h2 className="font-display text-xl text-paper">{mission.title}</h2><span className="shrink-0 border border-line px-2 py-1 text-[9px] text-muted">{mission.character}</span></div>
          <p className="mt-3 text-xs leading-relaxed text-paper-dim">{mission.summary}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-3 text-[10px]"><div><dt className="eyebrow">Giver</dt><dd className="mt-1 text-paper-dim">{mission.giver}</dd></div><div><dt className="eyebrow">Reward</dt><dd className="mt-1 text-paper-dim">{mission.reward}</dd></div></dl>
          {mission.missable && <p className="mt-3 border-l-2 border-sun pl-2 text-[10px] leading-relaxed text-sun">Missable note: {mission.missable}</p>}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
            <button onClick={() => toggle(mission.id)} aria-pressed={done.includes(mission.id)} className={`inline-flex items-center gap-2 border px-3 py-2 text-[10px] transition-colors ${done.includes(mission.id) ? "border-teal/50 bg-teal/10 text-teal" : "border-line text-muted hover:border-teal/50 hover:text-paper"}`}><Check className="h-3.5 w-3.5"/>{done.includes(mission.id) ? "Done" : "Mark done"}</button>
          </div>
        </div>
      </article>)}
      {!visible.length && <p className="col-span-full border border-line p-10 text-center text-sm text-muted">No side missions match that search.</p>}
    </div>
    <p className="mt-5 text-[10px] leading-relaxed text-faint">This page is a growing side-mission index. Mission availability and rewards can depend on story progress; confirm the in-game mission state as you play.</p>
  </>;
}
