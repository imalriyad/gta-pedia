import {
  BaseEntity,
  BaseEntitySchema,
  Source,
  SourceSchema,
} from "../schemas/entity";

// Characters
import luciaData from "../../../content/characters/lucia.json";
import jasonData from "../../../content/characters/jason-duval.json";
import stefanieData from "../../../content/characters/stefanie-gates.json";
import calHamptonData from "../../../content/characters/cal-hampton.json";
import brianHederData from "../../../content/characters/brian-heder.json";
import boobieIkeData from "../../../content/characters/boobie-ike.json";
import dreQuanData from "../../../content/characters/dre-quan-priest.json";
import raulBautistaData from "../../../content/characters/raul-bautista.json";
import realDimezData from "../../../content/characters/real-dimez.json";

// Locations
import viceCityData from "../../../content/locations/vice-city.json";
import malibuData from "../../../content/locations/malibu-club.json";
import oceanBeachData from "../../../content/locations/ocean-beach.json";
import keysData from "../../../content/locations/leonida-keys.json";
import grassriversData from "../../../content/locations/grassrivers.json";
import ambrosiaData from "../../../content/locations/ambrosia.json";
import portGellhornData from "../../../content/locations/port-gellhorn.json";
import mountKalagaData from "../../../content/locations/mount-kalaga.json";

// Guides
import guide100Data from "../../../content/guides/100-percent-completion-guide.json";
import guideHelicopterData from "../../../content/guides/helicopter-locations-guide.json";
import guideSwitchingData from "../../../content/guides/character-switching-guide.json";
import guideInventoryData from "../../../content/guides/inventory-and-trunk-storage-guide.json";
import guideWantedData from "../../../content/guides/wanted-system-and-police-evasion.json";
import guideGrassriversData from "../../../content/guides/grassrivers-swamp-survival.json";

// Weapons (aggregate dataset)
import weaponsData from "../../../content/data/weapons.json";

// Vehicles (aggregate dataset)
import vehiclesData from "../../../content/data/vehicles.json";

// Collectibles & Secrets
import allCollectiblesData from "../../../content/collectibles/all-collectibles.json";
import hiddenPackagesData from "../../../content/collectibles/hidden-packages.json";
import secretEndingData from "../../../content/secrets/secret-ending-guide.json";
import nostalgiaEasterEggData from "../../../content/easter-eggs/classic-vice-city-nostalgia.json";

// Missions
import prisonPrologueData from "../../../content/missions/prison-break-prologue.json";
import keysHeistData from "../../../content/missions/keys-heist-setup.json";
import stashHouseData from "../../../content/missions/stash-house-raid.json";
import highwayChaseData from "../../../content/missions/highway-police-chase.json";
import malibuHeistData from "../../../content/missions/malibu-club-heist.json";

// Gangs
import vcStreetData from "../../../content/gangs/vice-city-street-gang.json";
import ambrosiaGangData from "../../../content/gangs/ambrosia-biker-gang.json";
import leonidaCartelData from "../../../content/gangs/leonida-cartel.json";

// Activities
import activity8BallPool from "../../../content/activities/8-ball-pool.json";
import activityAirboating from "../../../content/activities/airboating.json";
import activityAmericanFootball from "../../../content/activities/american-football.json";
import activityBaseJumping from "../../../content/activities/base-jumping.json";
import activityBasketball from "../../../content/activities/basketball.json";
import activityCageFighting from "../../../content/activities/cage-fighting.json";
import activityDirtBiking from "../../../content/activities/dirt-biking.json";
import activityFishing from "../../../content/activities/fishing.json";
import activityGym from "../../../content/activities/gym.json";
import activityHunting from "../../../content/activities/hunting.json";
import activityJetSkiing from "../../../content/activities/jet-skiing.json";
import activityKayaking from "../../../content/activities/kayaking.json";
import activityMiniGolf from "../../../content/activities/mini-golf.json";
import activityOffRoadRacing from "../../../content/activities/off-road-racing.json";
import activityScubaDiving from "../../../content/activities/scuba-diving.json";
import activityShootingRange from "../../../content/activities/shooting-range.json";
import activityStripClubs from "../../../content/activities/strip-clubs.json";
import activityWrestling from "../../../content/activities/wrestling.json";

// Additional Guides
import guideMoneyData from "../../../content/guides/money-making-guide.json";
import guideWeaponCustomData from "../../../content/guides/weapon-customization-guide.json";
import guideVehicleTuneData from "../../../content/guides/vehicle-tuning-guide.json";
import guideCheatsData from "../../../content/guides/cheats.json";
import guideTrophiesData from "../../../content/guides/trophies-and-achievements.json";
import guidePcVersionData from "../../../content/guides/pc-version.json";

// Additional Secrets & Easter Eggs
import ufoSightingData from "../../../content/secrets/alien-ufo-sighting.json";
import vcCallbackData from "../../../content/easter-eggs/vice-city-callback.json";
import bigfootData from "../../../content/easter-eggs/bigfoot-grassrivers.json";

// Wildlife & Fauna
import faunaAlligatorData from "../../../content/wildlife/american-alligator.json";
import faunaFlamingoData from "../../../content/wildlife/pink-flamingo.json";
import faunaDolphinData from "../../../content/wildlife/bottlenose-dolphin.json";
import faunaDeerData from "../../../content/wildlife/white-tailed-deer.json";
import faunaSharkData from "../../../content/wildlife/hammerhead-shark.json";
import faunaIguanaData from "../../../content/wildlife/green-iguana.json";
import faunaCattleData from "../../../content/wildlife/holstein-cattle.json";
import faunaSnapperData from "../../../content/wildlife/yellowtail-snapper.json";
import faunaParrotfishData from "../../../content/wildlife/spotlight-parrotfish.json";
import faunaMackerelData from "../../../content/wildlife/atlantic-spanish-mackerel.json";
import faunaBlackBearData from "../../../content/wildlife/american-black-bear.json";
import faunaRaccoonData from "../../../content/wildlife/northern-raccoon.json";
import faunaArmadilloData from "../../../content/wildlife/nine-banded-armadillo.json";
import san4sanData from "../../../content/gangs/san4san.json";
import finalChapterData from "../../../content/gangs/final-chapter-mc.json";

// Radio & Soundtrack
import radioVcFmData from "../../../content/radio/vice-city-fm.json";
import radioFlashFmData from "../../../content/radio/flash-fm.json";
import radioSound4SoundData from "../../../content/radio/sound-4-sound.json";
import radioEmotionData from "../../../content/radio/emotion-983.json";
import songLoveRoadData from "../../../content/radio/love-is-a-long-road.json";
import radioLeonidaRockData from "../../../content/radio/leonida-rock-radio.json";

// Brands & Corporations
import brandEcolaData from "../../../content/brands/ecola.json";
import brandPisswasserData from "../../../content/brands/pisswasser.json";
import brandPatriotData from "../../../content/brands/patriot-beer.json";
import brandNine1fData from "../../../content/brands/nine1f.json";
import brandRideoutData from "../../../content/brands/rideout-customs.json";
import brandAmmuNationData from "../../../content/brands/ammu-nation.json";
import brandGruppeSechsData from "../../../content/brands/gruppe-sechs.json";

// Sources
import sourcesData from "../../../content/sources/sources.json";

// Raw content list
const RAW_ENTITIES = [
  // Characters
  luciaData,
  jasonData,
  stefanieData,
  calHamptonData,
  brianHederData,
  boobieIkeData,
  dreQuanData,
  raulBautistaData,
  realDimezData,

  // Locations
  viceCityData,
  malibuData,
  oceanBeachData,
  keysData,
  grassriversData,
  ambrosiaData,
  portGellhornData,
  mountKalagaData,

  // Guides
  guide100Data,
  guideHelicopterData,
  guideSwitchingData,
  guideInventoryData,
  guideWantedData,
  guideGrassriversData,

  // Weapons
  ...(weaponsData as unknown[]),

  // Vehicles
  ...(vehiclesData as unknown[]),

  // Collectibles & Secrets
  allCollectiblesData,
  hiddenPackagesData,
  secretEndingData,
  nostalgiaEasterEggData,

  // Missions
  prisonPrologueData,
  keysHeistData,
  stashHouseData,
  highwayChaseData,
  malibuHeistData,

  // Gangs
  vcStreetData,
  ambrosiaGangData,
  leonidaCartelData,
  san4sanData,
  finalChapterData,

  // Activities
  activity8BallPool,
  activityAirboating,
  activityAmericanFootball,
  activityBaseJumping,
  activityBasketball,
  activityCageFighting,
  activityDirtBiking,
  activityFishing,
  activityGym,
  activityHunting,
  activityJetSkiing,
  activityKayaking,
  activityMiniGolf,
  activityOffRoadRacing,
  activityScubaDiving,
  activityShootingRange,
  activityStripClubs,
  activityWrestling,

  // Additional Guides
  guideMoneyData,
  guideWeaponCustomData,
  guideVehicleTuneData,
  guideCheatsData,
  guideTrophiesData,
  guidePcVersionData,

  // Additional Secrets & Easter Eggs
  ufoSightingData,
  vcCallbackData,
  bigfootData,

  // Wildlife & Fauna
  faunaAlligatorData,
  faunaFlamingoData,
  faunaDolphinData,
  faunaDeerData,
  faunaSharkData,
  faunaIguanaData,
  faunaCattleData,
  faunaSnapperData,
  faunaParrotfishData,
  faunaMackerelData,
  faunaBlackBearData,
  faunaRaccoonData,
  faunaArmadilloData,

  // Radio & Soundtrack
  radioVcFmData,
  radioFlashFmData,
  radioSound4SoundData,
  radioEmotionData,
  songLoveRoadData,
  radioLeonidaRockData,

  // Brands & Corporations
  brandEcolaData,
  brandPisswasserData,
  brandPatriotData,
  brandNine1fData,
  brandRideoutData,
  brandAmmuNationData,
  brandGruppeSechsData,
];

// Validated entities
export const ALL_ENTITIES: BaseEntity[] = RAW_ENTITIES.map((raw) => {
  const result = BaseEntitySchema.safeParse(raw);
  if (!result.success) {
    console.error(`Validation failed for entity ID: ${(raw as Record<string, unknown>).id}`, result.error);
    return raw as unknown as BaseEntity;
  }
  return result.data as BaseEntity;
});

// Sources
export const ALL_SOURCES: Source[] = (sourcesData as unknown[]).map((raw) => {
  const result = SourceSchema.safeParse(raw);
  if (!result.success) {
    console.error(`Validation failed for source ID: ${(raw as Record<string, unknown>).id}`, result.error);
    return raw as unknown as Source;
  }
  return result.data;
});

export function getAllEntities(): BaseEntity[] {
  return ALL_ENTITIES.filter((e) => e.status === "published");
}

export function getEntitiesByCategory(category: string): BaseEntity[] {
  return getAllEntities().filter((e) => e.category === category);
}

export function getEntityBySlug(category: string, slug: string): BaseEntity | undefined {
  return getAllEntities().find((e) => e.category === category && e.slug === slug);
}

export function getEntityById(id: string): BaseEntity | undefined {
  return getAllEntities().find((e) => e.id === id);
}

export function getRelatedEntities(entityId: string): BaseEntity[] {
  const entity = getEntityById(entityId);
  if (!entity) return [];
  return entity.relatedEntityIds
    .map((id) => getEntityById(id))
    .filter((e): e is BaseEntity => Boolean(e));
}

export function getAllPublishedSlugs(category: string): string[] {
  return getEntitiesByCategory(category).map((e) => e.slug);
}

export function getSourceById(sourceId: string): Source | undefined {
  return ALL_SOURCES.find((s) => s.id === sourceId);
}

export function getSourcesForEntity(entity: BaseEntity): Source[] {
  return entity.sourceIds
    .map((id) => getSourceById(id))
    .filter((s): s is Source => Boolean(s));
}

export interface UpdateFeedItem {
  id: string;
  type: "Updated" | "Added" | "Expanded";
  title: string;
  category: string;
  slug: string;
  timeAgo: string;
  thumbnail: string;
}

export function getLatestUpdates(): UpdateFeedItem[] {
  return [
    {
      id: "up-1",
      type: "Updated",
      title: "Rockstar Shows GTA 6 Extended Gameplay",
      category: "gameplay",
      slug: "",
      timeAgo: "AUG 27, 2026",
      thumbnail: "/images/characters/jason-duval-02-1920.webp",
    },
    {
      title: "Summer Marketing & Trailer 3 Watch",
      id: "up-2",
      type: "Added",
      category: "trailers",
      slug: "",
      timeAgo: "JUL 09, 2026",
      thumbnail: "/images/locations/vice-city-01-1920.webp",
    },
    {
      id: "up-3",
      type: "Expanded",
      title: "Pre-Orders Open at $79.99 (Standard & Ultimate)",
      category: "editions",
      slug: "",
      timeAgo: "JUN 25, 2026",
      thumbnail: "/images/locations/vice-city-02-1920.webp",
    },
  ];
}

export function getFeaturedGuide(): BaseEntity | undefined {
  return getEntityById("guide-100-completion");
}

export interface PopularPageItem {
  rank: number;
  title: string;
  category: string;
  slug: string;
  thumbnail: string;
}

export function getPopularPages(): PopularPageItem[] {
  return [
    {
      rank: 1,
      title: "Vice City",
      category: "locations",
      slug: "vice-city",
      thumbnail: "/images/cards/pop-vice-city.png",
    },
    {
      rank: 2,
      title: "Lucia",
      category: "characters",
      slug: "lucia",
      thumbnail: "/images/cards/pop-lucia.png",
    },
    {
      rank: 3,
      title: "Jason Duval",
      category: "characters",
      slug: "jason-duval",
      thumbnail: "/images/cards/pop-jason.png",
    },
    {
      rank: 4,
      title: "All Collectibles",
      category: "collectibles",
      slug: "all-collectibles",
      thumbnail: "/images/cards/pop-collectibles.png",
    },
    {
      rank: 5,
      title: "Secret Endings",
      category: "secrets",
      slug: "secret-ending-guide",
      thumbnail: "/images/cards/pop-secrets.png",
    },
  ];
}

export function getSearchDocuments() {
  return getAllEntities().map((e) => ({
    id: e.id,
    name: e.name,
    slug: e.slug,
    category: e.category,
    aliases: e.aliases.join(" "),
    summary: e.summary,
    tags: e.tags.join(" "),
    spoilerLevel: e.spoilerLevel,
    verificationStatus: e.verificationStatus,
  }));
}
