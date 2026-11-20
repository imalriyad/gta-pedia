"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { PointerEvent, WheelEvent } from "react";
import { Activity, AudioLines, BookOpen, Check, Crosshair, Expand, Fuel, MapPin, Minus, Plus, Search, Shirt, Utensils, X } from "lucide-react";

type MapPoint = {
  id: string;
  name: string;
  kind: "Location" | "Vehicle" | "Food & drink" | "Clothing" | "Activity" | "Weapon" | "Radio" | "Story";
  region: string;
  summary: string;
  href: string;
  x: number;
  y: number;
};

const points: MapPoint[] = [
  { id: "port-gellhorn", name: "Port Gellhorn & western shore", kind: "Location", region: "Western Leonida", summary: "Explore the western coastal region and its location file. The icon is a regional archive shortcut, not a street address.", href: "/locations/port-gellhorn", x: 40.2, y: 35.2 },
  { id: "mount-kalaga", name: "Mount Kalaga region", kind: "Location", region: "Northern Leonida", summary: "Open the northern wilderness file for the named region and its map context.", href: "/locations/mount-kalaga", x: 60.8, y: 42.8 },
  { id: "weapon-index", name: "Weapon archive", kind: "Weapon", region: "Statewide", summary: "Browse the weapon index and open individual weapon records. This category icon does not mark a confirmed pickup location.", href: "/weapons", x: 63.4, y: 36.3 },
  { id: "food-index", name: "Food & consumables", kind: "Food & drink", region: "Statewide", summary: "Browse consumables and food references in the archive.", href: "/consumables", x: 73.5, y: 43.5 },
  { id: "vehicles-index", name: "Vehicle archive", kind: "Vehicle", region: "Statewide", summary: "Browse vehicle files, classes, and named models. The fuel icons are category shortcuts, not confirmed garages.", href: "/vehicles", x: 52.7, y: 52.6 },
  { id: "vehicle-brands", name: "Vehicle makes & tuning", kind: "Vehicle", region: "Statewide", summary: "See vehicle manufacturers and customization references.", href: "/brands", x: 46.2, y: 59.1 },
  { id: "vice-city", name: "Vice City", kind: "Location", region: "Southeast Leonida", summary: "Open the city file for its districts, landmarks, and confirmed visual references.", href: "/locations/vice-city", x: 66.2, y: 59.4 },
  { id: "malibu-club", name: "Malibu Club & nightlife", kind: "Location", region: "Vice City", summary: "Read the venue record and its links to Vice City's nightlife and cast.", href: "/locations/malibu-club", x: 75.1, y: 51.4 },
  { id: "fashion", name: "Clothing & personal style", kind: "Clothing", region: "Vice City", summary: "Open the archive's gameplay and character references for style and clothing.", href: "/gameplay", x: 90.6, y: 49.8 },
  { id: "character-files", name: "Character files", kind: "Story", region: "Leonida", summary: "Meet the known cast and follow each profile's documented connections and story context.", href: "/characters", x: 89.2, y: 57.9 },
  { id: "activities-index", name: "Activities & challenges", kind: "Activity", region: "Statewide", summary: "Browse activity records, including fishing, airboat racing, mud bogging, and stunt jumps.", href: "/activities", x: 78.1, y: 58.9 },
  { id: "eight-ball", name: "Sports & leisure", kind: "Activity", region: "Vice City", summary: "A broad activity shortcut for sports and leisure entries. Exact venues remain unconfirmed in this archive.", href: "/activities", x: 91.3, y: 64.4 },
  { id: "bars-index", name: "Venues & nightlife", kind: "Food & drink", region: "Vice City", summary: "Explore known venues and related property records.", href: "/properties", x: 75.7, y: 67.7 },
  { id: "radio-index", name: "Radio & soundtrack", kind: "Radio", region: "Leonida", summary: "Browse station profiles and soundtrack records tied to the game's music identity.", href: "/radio", x: 66.9, y: 74.3 },
  { id: "story-guide", name: "Story & walkthroughs", kind: "Story", region: "Leonida", summary: "Read mission files and practical guides. Story outcomes are kept separate from confirmed details.", href: "/guides", x: 57.0, y: 79.8 },
  { id: "properties-index", name: "Properties & businesses", kind: "Location", region: "Statewide", summary: "Browse businesses, property clues, and places connected to the known cast. This icon is a category shortcut.", href: "/properties", x: 59.1, y: 70.2 },
  { id: "leonida-keys", name: "Leonida Keys", kind: "Location", region: "Southern Leonida", summary: "Open the Keys file for regional geography and its documented Jason, Brian, and Cal connections.", href: "/locations/the-leonida-keys", x: 69.9, y: 85.2 },
  { id: "secrets", name: "Secrets & Easter eggs", kind: "Story", region: "Statewide", summary: "Follow researched secrets, callbacks, and evidence notes in the archive.", href: "/secrets", x: 46.3, y: 93.4 },
  { id: "clothing-index", name: "Clothing records", kind: "Clothing", region: "Statewide", summary: "Open gameplay notes and character files for documented personal-style references.", href: "/gameplay", x: 63.7, y: 91.8 },
];

const kinds: MapPoint["kind"][] = ["Location", "Vehicle", "Food & drink", "Clothing", "Activity", "Weapon", "Radio", "Story"];
const kindIcon = { Location: MapPin, Vehicle: Fuel, "Food & drink": Utensils, Clothing: Shirt, Activity, Weapon: Crosshair, Radio: AudioLines, Story: BookOpen };
const minZoom = 1;
const maxZoom = 4;
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export function MapExplorer() {
  const [selectedId, setSelectedId] = useState("vice-city");
  const [enabledKinds, setEnabledKinds] = useState<MapPoint["kind"][]>(kinds);
  const [visited, setVisited] = useState<string[]>([]);
  const [hideVisited, setHideVisited] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [query, setQuery] = useState("");
  const [fullScreen, setFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [ready, setReady] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointIds = useMemo(() => new Set(points.map((point) => point.id)), []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("leonida-map-progress") || "[]");
      setVisited(Array.isArray(saved) ? saved.filter((id): id is string => typeof id === "string" && pointIds.has(id)) : []);
    }
    catch { setVisited([]); }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem("leonida-map-progress", JSON.stringify(visited)); }, [visited, ready]);
  useEffect(() => {
    if (!fullScreen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setFullScreen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); };
  }, [fullScreen]);

  const filtered = useMemo(() => points.filter((point) => enabledKinds.includes(point.kind)
    && (!hideVisited || !visited.includes(point.id))
    && `${point.name} ${point.region} ${point.summary}`.toLowerCase().includes(query.toLowerCase())), [enabledKinds, hideVisited, visited, query]);
  const selected = points.find((point) => point.id === selectedId) || points[0];
  const visibleIds = new Set(filtered.map((point) => point.id));
  const toggleVisited = (id: string) => setVisited((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);
  const toggleKind = (kind: MapPoint["kind"]) => setEnabledKinds((old) => old.includes(kind) ? old.filter((item) => item !== kind) : [...old, kind]);
  const clampOffset = (x: number, y: number, scale: number) => {
    const width = viewportRef.current?.clientWidth || 0;
    const height = viewportRef.current?.clientHeight || 0;
    const maxX = width * (scale - 1) / 2;
    const maxY = height * (scale - 1) / 2;
    return { x: clamp(x, -maxX, maxX), y: clamp(y, -maxY, maxY) };
  };
  const setScale = (next: number) => {
    const scale = clamp(next, minZoom, maxZoom);
    setZoom(scale);
    setOffset((old) => clampOffset(old.x, old.y, scale));
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const cursorX = event.clientX - rect.left - rect.width / 2;
    const cursorY = event.clientY - rect.top - rect.height / 2;
    const next = clamp(zoom * (event.deltaY < 0 ? 1.15 : 1 / 1.15), minZoom, maxZoom);
    const ratio = next / zoom;
    const nextOffset = { x: cursorX - (cursorX - offset.x) * ratio, y: cursorY - (cursorY - offset.y) * ratio };
    setOffset(clampOffset(nextOffset.x, nextOffset.y, next));
    setZoom(next);
  };
  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || zoom <= 1) return;
    pointerRef.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = event.clientX - pointerRef.current.x;
    const dy = event.clientY - pointerRef.current.y;
    pointerRef.current = { x: event.clientX, y: event.clientY };
    setOffset((old) => clampOffset(old.x + dx, old.y + dy, zoom));
  };
  const endDrag = () => setDragging(false);

  const map = <div className={`grid gap-3 ${fullScreen ? "h-full min-h-0 grid-rows-[minmax(0,1fr)_minmax(0,.9fr)] lg:grid-cols-[300px_minmax(0,1fr)] lg:grid-rows-1" : "lg:h-full lg:min-h-0 lg:grid-cols-[300px_minmax(0,1fr)]"}`}>
    <aside className={`order-2 border border-line bg-ink-2 lg:order-1 ${fullScreen ? "min-h-0 overflow-y-auto" : "lg:min-h-0 lg:overflow-y-auto"}`}>
      <div className="flex items-center justify-between gap-3 border-b border-line p-4"><div><p className="eyebrow text-coral">GTA6Pedia field map</p><h2 className="mt-1 font-display text-lg text-paper">Leonida atlas</h2></div><Link href="/map" className="shrink-0 text-[9px] uppercase tracking-widest text-muted hover:text-paper">Standard map ↗</Link></div>
      <div className="border-b border-line p-4">
        <div className="flex items-center justify-between"><h2 className="font-display text-lg text-paper">Map progress</h2><button onClick={() => setVisited([])} className="mono text-[9px] uppercase tracking-widest text-coral hover:text-paper">Reset</button></div>
        <p className="mt-2 text-xs text-muted">{visited.length} of {points.length} points visited</p>
        <div className="mt-3 h-1 bg-paper/10"><div className="h-full bg-coral transition-[width]" style={{ width: `${visited.length / points.length * 100}%` }}/></div>
        <label className="mt-4 flex items-center gap-2 text-xs text-paper-dim"><input type="checkbox" checked={hideVisited} onChange={(event) => setHideVisited(event.target.checked)} className="accent-[#ff5566]"/> Hide visited</label>
        <label className="mt-2 flex items-center gap-2 text-xs text-paper-dim"><input type="checkbox" checked={showLabels} onChange={(event) => setShowLabels(event.target.checked)} className="accent-[#ff5566]"/> Show map labels</label>
      </div>
      <div className="border-b border-line p-4">
        <label className="flex h-9 items-center gap-2 border border-line px-3"><Search className="h-3.5 w-3.5 text-faint"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search map points" className="min-w-0 flex-1 bg-transparent text-xs text-paper outline-none placeholder:text-faint"/></label>
        <div className="mt-4 grid grid-cols-2 gap-2">{kinds.map((kind) => { const Icon = kindIcon[kind]; return <label key={kind} className="flex items-center gap-1.5 text-[10px] text-paper-dim"><input type="checkbox" checked={enabledKinds.includes(kind)} onChange={() => toggleKind(kind)} className="accent-[#ff5566]"/><Icon className="h-3.5 w-3.5 shrink-0 text-coral"/>{kind}</label>; })}</div>
      </div>
      <div className="max-h-[310px] overflow-y-auto p-2">{filtered.length ? filtered.map((point) => { const Icon = kindIcon[point.kind]; return <div key={point.id} className={`flex items-center justify-between gap-2 border-b border-line-soft px-3 py-2 ${selectedId === point.id ? "bg-paper/[.06]" : "hover:bg-paper/[.03]"}`}>
        <button onClick={() => setSelectedId(point.id)} className="flex min-w-0 flex-1 items-center gap-2 text-left"><Icon className="h-4 w-4 shrink-0 text-coral"/><span className="min-w-0"><span className="block truncate font-display text-sm text-paper">{point.name}</span><span className="mt-0.5 block eyebrow">{point.kind} · {point.region}</span></span></button>
        <button onClick={() => toggleVisited(point.id)} aria-pressed={visited.includes(point.id)} aria-label={`${visited.includes(point.id) ? "Unmark" : "Mark"} ${point.name} visited`} className={`grid h-7 w-7 shrink-0 place-items-center border ${visited.includes(point.id) ? "border-teal bg-teal/15 text-teal" : "border-line text-transparent hover:border-teal"}`}><Check className="h-3.5 w-3.5"/></button>
      </div>; }) : <p className="p-4 text-xs text-muted">No map points match.</p>}</div>
      <div className="border-t border-line p-4"><p className="eyebrow text-coral">Selected point</p><div className="mt-2 flex items-center gap-2">{(() => { const Icon = kindIcon[selected.kind]; return <Icon className="h-5 w-5 text-coral"/>; })()}<h3 className="font-display text-xl text-paper">{selected.name}</h3></div><p className="mt-1 eyebrow">{selected.kind} · {selected.region}</p><p className="mt-2 text-xs leading-relaxed text-muted">{selected.summary}</p><Link href={selected.href} className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-coral hover:text-paper">Open archive file <MapPin className="h-3 w-3"/></Link></div>
    </aside>
    <div className="order-1 min-w-0 lg:order-2">
      <div ref={viewportRef} onWheel={onWheel} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag} className={`relative overflow-hidden border border-[#1e5c91] bg-[#2d6da7] ${fullScreen ? "h-full min-h-0" : "h-[70vh] min-h-[460px] lg:h-full lg:min-h-[560px]"} ${dragging ? "cursor-grabbing" : zoom > 1 ? "cursor-grab" : "cursor-zoom-in"}`} style={{ touchAction: "none" }}>
        <div className="absolute inset-0 flex items-center justify-center select-none" aria-label="Pan and zoom illustrated Leonida map">
          <div className="relative h-full max-w-full aspect-[31/32] shrink-0" style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`, transformOrigin: "center", transition: dragging ? "none" : "transform 120ms ease-out" }}>
            <Image src="/images/map/leonida-map-interactive-reference.png" alt="Illustrated map of Leonida with activity and category icons" fill priority sizes="(max-width: 1024px) min(100vw, 70vh), 70vh" draggable={false} className="pointer-events-none object-contain" />
            {filtered.map((point) => {
              return <button key={point.id} onPointerDown={(event) => event.stopPropagation()} onClick={() => setSelectedId(point.id)} aria-label={`Open ${point.name} map marker`} aria-pressed={selectedId === point.id} title={point.name} className={`absolute z-10 h-[6.8%] w-[7.4%] -translate-x-1/2 -translate-y-1/2 rounded-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${selectedId === point.id ? "border-2 border-white bg-fuchsia-400/20 shadow-[0_0_0_4px_rgba(232,72,205,.55)]" : "border-2 border-transparent hover:border-white/80 hover:bg-white/10"}`} style={{ left: `${point.x}%`, top: `${point.y}%` }}>
                {showLabels && <span className="absolute left-1/2 top-full z-20 mt-1 -translate-x-1/2 whitespace-nowrap rounded border border-white/40 bg-[#183d65]/95 px-2 py-1 text-[8px] font-semibold text-white shadow-lg">{point.name}</span>}
              </button>;
            })}
            {points.filter((point) => !visibleIds.has(point.id)).map((point) => <span key={`hidden-${point.id}`} aria-hidden="true" className="pointer-events-none absolute z-10 h-[6.8%] w-[7.4%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#2d6da7]/95" style={{ left: `${point.x}%`, top: `${point.y}%` }}/>) }
          </div>
        </div>
        <div className="absolute right-3 top-3 z-20 flex gap-1 border border-white/35 bg-[#173b61]/95 p-1 text-white shadow-lg">
          <button onPointerDown={(event) => event.stopPropagation()} onClick={() => setScale(zoom - 0.25)} className="grid h-8 w-8 place-items-center text-paper hover:text-coral" aria-label="Zoom out"><Minus className="h-4 w-4"/></button>
          <span className="grid min-w-[48px] place-items-center mono text-[9px] text-muted">{Math.round(zoom * 100)}%</span>
          <button onPointerDown={(event) => event.stopPropagation()} onClick={() => setScale(zoom + 0.25)} className="grid h-8 w-8 place-items-center text-paper hover:text-coral" aria-label="Zoom in"><Plus className="h-4 w-4"/></button>
          <button onPointerDown={(event) => event.stopPropagation()} onClick={() => { setScale(1); setOffset({ x: 0, y: 0 }); }} className="px-2 mono text-[9px] uppercase text-muted hover:text-paper">Reset</button>
          <button onPointerDown={(event) => event.stopPropagation()} onClick={() => setFullScreen(true)} className="grid h-8 w-8 place-items-center text-paper hover:text-coral" aria-label="Open full screen map"><Expand className="h-4 w-4"/></button>
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 border border-white/35 bg-[#173b61]/95 px-3 py-2 text-[9px] text-white shadow-lg">{filtered.length} visible pins · drag to pan · scroll to zoom</div>
      </div>
      <p className="mt-3 text-[10px] leading-relaxed text-faint">Map pins link to archive entries. Regional, wildlife, activity, and category markers are approximate browsing aids; the archive does not claim exact in-game coordinates unless a specific location record provides them.</p>
    </div>
  </div>;

  if (fullScreen && typeof document !== "undefined") return createPortal(<div className="fixed inset-0 z-[9999] bg-ink p-3 md:p-5" style={{ backgroundColor: "#201b3d", isolation: "isolate" }} role="dialog" aria-modal="true" aria-label="Full screen interactive Leonida map"><div className="flex h-full min-h-0 flex-col"><div className="mb-3 flex shrink-0 justify-end"><button onClick={() => setFullScreen(false)} className="grid h-10 w-10 place-items-center border border-line bg-ink-2 text-paper hover:border-coral" aria-label="Close full screen map"><X className="h-5 w-5"/></button></div><div className="min-h-0 flex-1">{map}</div></div></div>, document.body);
  return map;
}
