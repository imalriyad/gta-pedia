import { z } from "zod";

export const EntityStatusSchema = z.enum(["draft", "published", "needs-review", "archived"]);
export type EntityStatus = z.infer<typeof EntityStatusSchema>;

export const VerificationStatusSchema = z.enum([
  "official",
  "confirmed",
  "observed",
  "community-reported",
  "unverified",
  "speculation",
]);
export type VerificationStatus = z.infer<typeof VerificationStatusSchema>;

export const SpoilerLevelSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);
export type SpoilerLevel = z.infer<typeof SpoilerLevelSchema>;

export const MediaItemSchema = z.object({
  url: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  credit: z.string().optional(),
});
export type MediaItem = z.infer<typeof MediaItemSchema>;

export const SourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string().optional(),
  sourceType: z.enum([
    "official-website",
    "official-trailer",
    "official-screenshot",
    "in-game",
    "interview",
    "reputable-publication",
    "community-research",
    "other",
  ]),
  publisher: z.string().optional(),
  publishedAt: z.string().optional(),
  notes: z.string().optional(),
});
export type Source = z.infer<typeof SourceSchema>;

export const FactSchema = z.object({
  label: z.string(),
  value: z.string(),
});
export type Fact = z.infer<typeof FactSchema>;

export const BaseEntitySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  aliases: z.array(z.string()).default([]),
  summary: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  thumbnail: z.string().optional(),
  gallery: z.array(MediaItemSchema).optional(),
  stats: z.record(z.union([z.number(), z.string()])).optional(),
  facts: z.array(FactSchema).optional(),
  accent: z.string().optional(),
  status: EntityStatusSchema,
  verificationStatus: VerificationStatusSchema,
  spoilerLevel: SpoilerLevelSchema,
  tags: z.array(z.string()).default([]),
  relatedEntityIds: z.array(z.string()).default([]),
  sourceIds: z.array(z.string()).default([]),
  firstPublishedAt: z.string().optional(),
  lastUpdatedAt: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    canonicalPath: z.string().optional(),
    noIndex: z.boolean().optional(),
    ogImage: z.string().optional(),
  }),
}).passthrough();
export type BaseEntity = z.infer<typeof BaseEntitySchema>;

// Character Schema
export const CharacterSchema = BaseEntitySchema.extend({
  category: z.literal("characters"),
  role: z.string().optional(), // Protagonist, Antagonist, Supporting, Associate
  affiliations: z.array(z.string()).default([]),
  knownLocations: z.array(z.string()).default([]),
  voiceActor: z.string().optional(),
  personality: z.string().optional(),
  biography: z.string().optional(),
  storyRole: z.string().optional(),
});
export type CharacterEntity = z.infer<typeof CharacterSchema>;

// Location Schema
export const LocationSchema = BaseEntitySchema.extend({
  category: z.literal("locations"),
  region: z.string(), // Vice City, Leonida State, Port Gellhorn, etc.
  district: z.string().optional(),
  locationType: z.string(), // City, District, Landmark, Club, Island, Beach
  landmarks: z.array(z.string()).default([]),
  businesses: z.array(z.string()).default([]),
  activities: z.array(z.string()).default([]),
});
export type LocationEntity = z.infer<typeof LocationSchema>;

// Guide & Walkthrough Schema
export const GuideSchema = BaseEntitySchema.extend({
  category: z.literal("guides"),
  difficulty: z.enum(["Easy", "Medium", "Hard", "Advanced"]).default("Medium"),
  estimatedTime: z.string().optional(),
  steps: z
    .array(
      z.object({
        stepNumber: z.number(),
        title: z.string(),
        content: z.string(),
        tip: z.string().optional(),
      })
    )
    .default([]),
  requirements: z.array(z.string()).default([]),
  commonMistakes: z.array(z.string()).default([]),
});
export type GuideEntity = z.infer<typeof GuideSchema>;

// Secret & Easter Egg Schema
export const SecretSchema = BaseEntitySchema.extend({
  category: z.enum(["secrets", "easter-eggs"]),
  discoveryMethod: z.string().optional(),
  discoveryLocation: z.string().optional(),
  prerequisites: z.string().optional(),
  evidence: z.string().optional(),
  interpretation: z.string().optional(),
});
export type SecretEntity = z.infer<typeof SecretSchema>;

// Collectible Schema
export const CollectibleSchema = BaseEntitySchema.extend({
  category: z.literal("collectibles"),
  collectibleType: z.string(),
  totalCount: z.number().optional(),
  reward: z.string().optional(),
  locationsSummary: z.string().optional(),
});
export type CollectibleEntity = z.infer<typeof CollectibleSchema>;

// Vehicle Schema
export const VehicleSchema = BaseEntitySchema.extend({
  category: z.literal("vehicles"),
  manufacturer: z.string().optional(),
  vehicleClass: z.string(), // Sports, Muscle, Super, Helicopter, Boat, Motorcycle
  realWorldInspiration: z.string().optional(),
});
export type VehicleEntity = z.infer<typeof VehicleSchema>;

// Weapon Schema
export const WeaponSchema = BaseEntitySchema.extend({
  category: z.literal("weapons"),
  weaponClass: z.string(), // Pistol, Shotgun, SMG, Assault Rifle, Sniper, Heavy, Melee
  capacity: z.string().optional(),
});
export type WeaponEntity = z.infer<typeof WeaponSchema>;

