export type CategoryKey =
  | "characters"
  | "locations"
  | "vehicles"
  | "weapons"
  | "collectibles"
  | "guides"
  | "missions"
  | "secrets"
  | "easter-eggs"
  | "wildlife"
  | "radio"
  | "brands"
  | "gangs"
  | "activities";

export interface CategoryMeta {
  key: string;
  label: string;
  singular: string;
  href: string;
  eyebrow: string;
  description: string;
  accent: string;
  accentClass: string;
  image?: string;
  index: string;
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  characters: {
    key: "characters",
    label: "Characters",
    singular: "Character",
    href: "/characters",
    eyebrow: "The Cast",
    description:
      "The people who move through Leonida — protagonists, fixers, crew, and the voices on the other end of the phone.",
    accent: "#ff5566",
    accentClass: "text-coral",
    image: "/images/characters/lucia-caminos/lucia-caminos-02-1920.webp",
    index: "01",
  },
  locations: {
    key: "locations",
    label: "Locations",
    singular: "Location",
    href: "/locations",
    eyebrow: "The State",
    description:
      "Six regions, one coastline, and a lot of water in between. A field guide to Vice City and the state of Leonida.",
    accent: "#58c9c1",
    accentClass: "text-teal",
    image: "/images/locations/vice-city/vice-city-01-1920.webp",
    index: "02",
  },
  vehicles: {
    key: "vehicles",
    label: "Vehicles",
    singular: "Vehicle",
    href: "/vehicles",
    eyebrow: "The Garage",
    description:
      "Every car, bike, boat and aircraft with a trace in official material — filed by class, badge and real-world basis.",
    accent: "#e3b873",
    accentClass: "text-gold",
    image: "/images/editions/grotti-grotti-cheetah-95/grotti-grotti-cheetah-95-01-1200.webp",
    index: "03",
  },
  weapons: {
    key: "weapons",
    label: "Weapons",
    singular: "Weapon",
    href: "/weapons",
    eyebrow: "The Arsenal",
    description:
      "The firearms Rockstar has named or shown, the loadout system behind them, and the questions nobody outside the studio can answer yet.",
    accent: "#ff5566",
    accentClass: "text-coral",
    index: "04",
  },
  collectibles: {
    key: "collectibles",
    label: "Collectibles",
    singular: "Collectible",
    href: "/collectibles",
    eyebrow: "The Checklist",
    description:
      "Packages, stunts, murals and field recordings. What is needed for completion, and what is still only expected.",
    accent: "#e3b873",
    accentClass: "text-gold",
    index: "05",
  },
  guides: {
    key: "guides",
    label: "Guides",
    singular: "Guide",
    href: "/guides",
    eyebrow: "The Field Manual",
    description:
      "Practical, sourced walkthroughs. No invented code lists, no fabricated stats — just what is known and how to use it.",
    accent: "#58c9c1",
    accentClass: "text-teal",
    index: "06",
  },
  missions: {
    key: "missions",
    label: "Missions",
    singular: "Mission",
    href: "/missions",
    eyebrow: "The Job",
    description:
      "Story beats, heist setups and the moments that turn a partnership into a conspiracy.",
    accent: "#ff5566",
    accentClass: "text-coral",
    index: "07",
  },
  secrets: {
    key: "secrets",
    label: "Secrets",
    singular: "Secret",
    href: "/secrets",
    eyebrow: "The Underground",
    description:
      "Hidden content, strange signals and the parts of Leonida that do not appear on the tourist map.",
    accent: "#9a86ff",
    accentClass: "text-violet",
    index: "08",
  },
  "easter-eggs": {
    key: "easter-eggs",
    label: "Easter Eggs",
    singular: "Easter Egg",
    href: "/easter-eggs",
    eyebrow: "The Margins",
    description:
      "Nods, callbacks and running jokes tucked into the corners of the state.",
    accent: "#9a86ff",
    accentClass: "text-violet",
    index: "09",
  },
  wildlife: {
    key: "wildlife",
    label: "Animals",
    singular: "Species",
    href: "/animals",
    eyebrow: "The Ecosystem",
    description:
      "Animal profiles, habitat notes and evidence from the living ecosystem of Leonida.",
    accent: "#58c9c1",
    accentClass: "text-teal",
    image: "/images/wildlife/american-black-bear.jpg",
    index: "10",
  },
  radio: {
    key: "radio",
    label: "Radio",
    singular: "Station",
    href: "/radio",
    eyebrow: "The Frequency",
    description:
      "Stations, DJs and the music that scores the drive between jobs.",
    accent: "#ff5566",
    accentClass: "text-coral",
    index: "11",
  },
  brands: {
    key: "brands",
    label: "Brands",
    singular: "Brand",
    href: "/brands",
    eyebrow: "The Ad Break",
    description:
      "The fictional corporations, storefronts and logos that make Leonida feel lived in.",
    accent: "#e3b873",
    accentClass: "text-gold",
    index: "12",
  },
  gangs: {
    key: "gangs",
    label: "Gangs",
    singular: "Gang",
    href: "/gangs",
    eyebrow: "The Territory",
    description:
      "Crews, cartels and clubs — who runs which blocks, and what it costs to cross them.",
    accent: "#ff5566",
    accentClass: "text-coral",
    index: "13",
  },
  activities: {
    key: "activities",
    label: "Activities",
    singular: "Activity",
    href: "/activities",
    eyebrow: "The Off Hours",
    description:
      "Fishing, racing, diving and everything else worth doing when the story can wait.",
    accent: "#58c9c1",
    accentClass: "text-teal",
    index: "14",
  },
  consumables: {
    key: "consumables",
    label: "Consumables",
    singular: "Supply",
    href: "/consumables",
    eyebrow: "The Corner Store",
    description: "Food, drink and usable supplies shown across Leonida, with gameplay effects separated from confirmed evidence.",
    accent: "#58c9c1",
    accentClass: "text-teal",
    index: "15",
  },
  properties: {
    key: "properties",
    label: "Properties & Businesses",
    singular: "Property",
    href: "/properties",
    eyebrow: "The Real Estate",
    description: "Venues, businesses and property clues around Leonida, collected from public material.",
    accent: "#e3b873",
    accentClass: "text-gold",
    index: "16",
  },
};

export function categoryMeta(key: string): CategoryMeta {
  return (
    CATEGORIES[key] ?? {
      key,
      label: key.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      singular: "Entry",
      href: `/${key}`,
      eyebrow: "The Archive",
      description: "",
      accent: "#f2e9dc",
      accentClass: "text-paper",
      index: "00",
    }
  );
}
