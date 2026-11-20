# GTA XI Wiki

## SEO-First Product Specification and Development Instructions

**Document version:** 1.0\
**Date:** November 2026\
**Product type:** Independent fan-made game encyclopedia and wiki\
**Initial architecture:** Static-first, content-driven Next.js website\
**Initial release:** Public read-only wiki, with no accounts, roles,
community editing, or database dependency

> **Naming note:** The requested product name is **GTA XI Wiki**. Keep
> this exact brand name in the interface and project configuration
> unless the owner changes it. The game coverage, article facts, and SEO
> targeting must accurately identify the actual game being documented.
> Do not use "GTA XI" as a synonym for "GTA VI" or publish misleading
> metadata. If the intended game is Grand Theft Auto VI, use accurate
> GTA VI wording in article content and search metadata while retaining
> the requested site brand only if that is intentional.

------------------------------------------------------------------------

# 1. Product vision

Build a comprehensive, fast, accessible, search-engine-friendly
encyclopedia for the Grand Theft Auto game universe, with the initial
editorial focus defined by the project owner.

The site should feel like a premium, cinematic GTA-inspired reference
platform, but function like a genuinely useful wiki. It must prioritize:

1.  Search engine discoverability and useful information.
2.  Fast page loads and excellent Core Web Vitals.
3.  Clear information architecture and internal linking.
4.  Accurate, sourced, well-organized articles.
5.  Excellent search and browsing experience.
6.  Responsive, accessible, readable UI.
7.  A content architecture that can later migrate from local files to a
    database.
8.  Maintainable, reusable, type-safe code.

This is initially a **read-only public encyclopedia**. Do not build
authentication, user profiles, permissions, community editing, comments,
moderation, or a database in v1.

## 1.1 Product principles

-   Content quality is more important than page count.
-   Never fabricate game facts, character details, statistics,
    locations, mission names, release details, or unlock requirements.
-   Clearly label confirmed information, official material, in-game
    discoveries, community findings, rumors, and speculation.
-   Do not publish leaked or unverified claims as facts.
-   Every article should have a clear purpose and add information beyond
    a short generic paragraph.
-   Avoid mass-producing thin pages for SEO.
-   Design for readers first. Search engines should be able to
    understand the same useful content that readers see.
-   Use a cinematic visual identity without sacrificing readability.
-   Keep the initial architecture simple. Do not introduce
    infrastructure that is not needed.

------------------------------------------------------------------------

# 2. Initial scope and exclusions

## 2.1 Included in v1

-   Public homepage.
-   Global search.
-   Category landing pages.
-   Individual entity pages.
-   Editorial guides and walkthroughs.
-   Secrets and Easter egg articles.
-   Story and lore reference pages.
-   Related-content recommendations.
-   Breadcrumbs and internal linking.
-   Static sitemap generation.
-   Robots.txt.
-   Canonical metadata.
-   Open Graph and social sharing metadata.
-   Structured data where appropriate.
-   Responsive navigation.
-   Spoiler warnings and spoiler controls.
-   Source and verification labels.
-   Local content files using JSON, TypeScript, and MDX.
-   Static generation for content pages.
-   Search index generated from the content collection.
-   Automated validation for content, links, metadata, and slugs.
-   Analytics integration only if explicitly configured by the owner,
    with privacy-conscious defaults.

## 2.2 Explicitly excluded from v1

Do not implement these in the first release:

-   User registration or login.
-   Authentication providers.
-   User roles and permissions.
-   Community article editing.
-   Public edit submissions.
-   Admin dashboard.
-   Database.
-   User profiles.
-   Comments and discussion threads.
-   User favorites.
-   User completion tracking.
-   Notifications.
-   Reputation and contributor badges.
-   User-generated map markers.
-   Real-time features.
-   Complex microservices.
-   A separate NestJS backend.
-   Redis, BullMQ, or a search server.

Keep future migration in mind, but do not build empty abstractions or
unused modules for these features.

------------------------------------------------------------------------

# 3. Recommended technology stack

Use the current stable versions that are compatible with one another at
implementation time. Pin dependencies and commit the lockfile.

  -----------------------------------------------------------------------
  Area                                Recommended choice
  ----------------------------------- -----------------------------------
  Framework                           Next.js App Router

  Language                            TypeScript, strict mode

  Runtime                             Current supported Node.js LTS

  Styling                             Tailwind CSS

  UI primitives                       shadcn/ui where useful

  Icons                               Lucide

  Animation                           Framer Motion only for meaningful
                                      interactions

  Content                             MDX for editorial articles,
                                      JSON/TypeScript for structured
                                      entities

  Validation                          Zod

  Search                              Fuse.js or MiniSearch

  Images                              Next.js Image component

  Fonts                               next/font with locally optimized
                                      fonts where licensing permits

  Testing                             Vitest, React Testing Library,
                                      Playwright

  Linting                             ESLint

  Formatting                          Prettier

  Hosting                             Vercel or another
                                      Next.js-compatible host

  Database                            None in v1
  -----------------------------------------------------------------------

Do not add a library merely because it is popular. Prefer native Next.js
and browser capabilities when they are sufficient.

------------------------------------------------------------------------

# 4. SEO-first requirements

SEO is a foundational requirement. It must influence the URL structure,
content model, rendering strategy, navigation, page templates,
performance budget, and release checklist from the beginning.

## 4.1 Search intent and keyword architecture

Build the information architecture around real user questions and
searchable topics, not arbitrary keyword repetition.

Example search intents:

-   GTA game character names and biographies.
-   GTA map, cities, districts, and locations.
-   Mission names and walkthroughs.
-   Vehicle names, types, and details.
-   Weapons and equipment.
-   Collectibles and their locations.
-   Secrets and Easter eggs.
-   Story explanations and timelines.
-   Gameplay activities and guides.
-   Differences between confirmed facts and theories.

For every article, define:

-   Primary topic.
-   Main search intent.
-   Primary phrase.
-   Relevant secondary phrases and synonyms.
-   The question the page answers.
-   Related entities that should link to it.
-   Whether the page is sufficiently useful to index.

Do not force a keyword into every heading. Use natural language and
descriptive titles.

## 4.2 URL strategy

Use short, stable, descriptive, lowercase, hyphen-separated URLs.

Suggested routes:

``` text
/
 /search
 /characters
 /characters/[slug]
 /locations
 /locations/[slug]
 /missions
 /missions/[slug]
 /vehicles
 /vehicles/[slug]
 /weapons
 /weapons/[slug]
 /gangs
 /gangs/[slug]
 /wildlife
 /wildlife/[slug]
 /businesses
 /businesses/[slug]
 /activities
 /activities/[slug]
 /collectibles
 /collectibles/[slug]
 /secrets
 /secrets/[slug]
 /easter-eggs
 /easter-eggs/[slug]
 /guides
 /guides/[slug]
 /walkthroughs
 /walkthroughs/[slug]
 /story
 /story/[slug]
 /timeline
 /glossary
 /about
 /sources
 /updates
 /404
```

Rules:

-   Never put dates, random IDs, or category labels that add no value in
    a slug.
-   Avoid changing a published slug.
-   If a slug must change, create a permanent redirect from the old
    path.
-   Do not create multiple URLs for the same article.
-   Query-string search and filter states should not create indexable
    duplicate pages.
-   Use canonical URLs.
-   Do not create empty category pages merely to fill the navigation.

## 4.3 Metadata

Every indexable page must have:

-   Unique title.
-   Unique meta description.
-   Canonical URL.
-   Open Graph title.
-   Open Graph description.
-   Open Graph image when available.
-   Twitter/X card metadata.
-   Correct robots directives.
-   A meaningful H1.
-   Descriptive page content.

Metadata rules:

-   Titles should clearly describe the page and topic.
-   Include the site name naturally where useful.
-   Avoid repetitive title templates that make every page look
    identical.
-   Descriptions should summarize the actual page, not promise
    unsupported information.
-   Do not keyword-stuff titles or descriptions.
-   Do not use the same generic description across all pages.
-   Do not claim the site is official.
-   Do not add unverified release dates, game features, or character
    facts to metadata.

Example title pattern:

``` text
Lucia Caminos: Biography, Story and Appearances | GTA XI Wiki
```

Example description pattern:

``` text
Explore the available information about Lucia Caminos, including biography,
story appearances, related characters, sources and verified details.
```

These are templates only. Fill them with verified page-specific
information.

## 4.4 Technical SEO

Implement:

-   Server-rendered or statically generated content pages.
-   Crawlable HTML links using standard anchors/Next.js Link.
-   XML sitemap.
-   Sitemap index if the number of URLs becomes large.
-   robots.txt.
-   Canonical metadata.
-   Correct 200, 301, 404, and 410 behavior where applicable.
-   Open Graph and social metadata.
-   Breadcrumbs.
-   Semantic HTML.
-   Descriptive image alt text.
-   Image width and height to reduce layout shift.
-   Mobile-first responsive layout.
-   Fast initial HTML response.
-   Optimized font loading.
-   Lazy loading for below-the-fold images.
-   No lazy loading for the primary above-the-fold hero image if it
    harms LCP.
-   Noindex for search result pages where appropriate, drafts, preview
    pages, and thin utility pages.
-   No accidental noindex on public articles.
-   No broken internal links.
-   No orphan pages.
-   No duplicate titles or descriptions.
-   No soft 404 pages.
-   No client-only rendering for essential article content.

Do not block important CSS, JavaScript, or images needed to render the
page in robots.txt.

## 4.5 Structured data

Use JSON-LD only when the page content genuinely matches the schema.

Potential schemas:

-   `WebSite` for the site.
-   `Organization` only for a real organization that exists and is
    accurately represented.
-   `BreadcrumbList` for breadcrumb trails.
-   `Article` or `TechArticle` for editorial guides where appropriate.
-   `FAQPage` only when the page genuinely contains qualifying FAQ
    content and current search engine rules support the use.
-   `VideoObject` only when a real video is embedded and the required
    information is available.

Do not:

-   Mark fictional characters as real people.
-   Add fake ratings or reviews.
-   Add fabricated authors.
-   Add fake publication dates.
-   Add misleading product, event, or organization schema.
-   Add FAQ schema to content that does not contain visible FAQs.
-   Expect structured data to guarantee rich results.

Validate JSON-LD and keep it consistent with visible page content.

## 4.6 Internal linking

Internal linking is a major feature of the wiki.

Every entity should be connected to relevant pages through contextual
links.

Examples:

-   Character pages link to their known missions, locations,
    relationships, and appearances.
-   Mission pages link to involved characters, starting locations,
    vehicles, and related missions.
-   Location pages link to districts, landmarks, businesses, missions,
    and discoveries.
-   Vehicle pages link to relevant missions and related vehicle
    categories.
-   Guide pages link to the entities they explain.
-   Secret pages link to the location and conditions needed to find
    them.

Rules:

-   Links must be useful and contextually relevant.
-   Avoid linking every occurrence of the same term in a paragraph.
-   Use descriptive anchor text.
-   Do not create links to nonexistent pages.
-   Use a related-content section near the end of each article.
-   Add category breadcrumbs and parent-child navigation.
-   Run a build-time link validation script.

## 4.7 Content quality and indexing rules

A page should be indexable only when it has enough useful, accurate
information.

Create a content status model:

-   `draft`: internal content, not public.
-   `published`: public and eligible for indexing if useful.
-   `needs-review`: public only if the owner explicitly permits it;
    otherwise noindex.
-   `archived`: retained for reference, with clear context.
-   `unverified`: visible with a clear label, but not represented as
    confirmed.

Do not index:

-   Empty entity records.
-   Placeholder text.
-   Duplicate pages.
-   Internal search result URLs.
-   Preview URLs.
-   Incomplete drafts.
-   Thin pages that provide no value.
-   Pages made only to target a keyword.

Do not automatically noindex every unverified page. Use editorial
judgment. A useful page explaining that a claim is unconfirmed may still
serve readers, provided its status is clear.

------------------------------------------------------------------------

# 5. Content architecture

## 5.1 Static-first content model

Store content outside UI components.

Recommended layout:

``` text
content/
  characters/
  locations/
  missions/
  vehicles/
  weapons/
  gangs/
  wildlife/
  businesses/
  activities/
  collectibles/
  secrets/
  easter-eggs/
  guides/
  walkthroughs/
  story/
  timeline/
  glossary/
  sources/
```

Use JSON or TypeScript objects for structured records. Use MDX for
long-form editorial articles and walkthroughs.

Do not place large article bodies directly inside React components.

## 5.2 Shared entity schema

Create a shared Zod schema and TypeScript type for entities.

Suggested common fields:

``` ts
type EntityStatus =
  | "draft"
  | "published"
  | "needs-review"
  | "archived";

type VerificationStatus =
  | "official"
  | "confirmed"
  | "observed"
  | "community-reported"
  | "unverified"
  | "speculation";

type SpoilerLevel = 0 | 1 | 2 | 3 | 4;

interface BaseEntity {
  id: string;
  name: string;
  slug: string;
  category: string;
  aliases: string[];
  summary: string;
  description?: string;
  contentFile?: string;
  image?: string;
  thumbnail?: string;
  gallery?: MediaItem[];
  status: EntityStatus;
  verificationStatus: VerificationStatus;
  spoilerLevel: SpoilerLevel;
  tags: string[];
  relatedEntityIds: string[];
  sourceIds: string[];
  firstPublishedAt?: string;
  lastUpdatedAt: string;
  seo: {
    title: string;
    description: string;
    canonicalPath?: string;
    noIndex?: boolean;
    ogImage?: string;
  };
}
```

The schema is a starting point. Validate all records and extend it with
category-specific types.

Do not require unknown information. Optional fields should remain
optional instead of being filled with invented values.

## 5.3 Source records

Create a source model:

``` ts
interface Source {
  id: string;
  title: string;
  url?: string;
  sourceType:
    | "official-website"
    | "official-trailer"
    | "official-screenshot"
    | "in-game"
    | "interview"
    | "reputable-publication"
    | "community-research"
    | "other";
  publisher?: string;
  publishedAt?: string;
  accessedAt?: string;
  notes?: string;
}
```

Every important factual claim should be traceable to a source when
possible.

Source quality hierarchy:

1.  Official publisher/developer material.
2.  Official trailers, screenshots, and announcements.
3.  Direct in-game evidence.
4.  Credible interviews and reputable publications.
5.  Reproducible community research.
6.  Unverified claims and speculation.

Do not cite a source that does not support the claim.

## 5.4 Entity relationships

Use IDs or stable slugs to connect entities.

Possible relationship types:

-   `APPEARS_IN`
-   `LOCATED_IN`
-   `HAS_MEMBER`
-   `MEMBER_OF`
-   `RELATED_TO`
-   `ASSOCIATED_WITH`
-   `USES`
-   `UNLOCKED_BY`
-   `PARTICIPATES_IN`
-   `DISCOVERED_AT`
-   `CONNECTED_TO`
-   `PARENT_OF`
-   `CHILD_OF`
-   `FEATURED_IN`
-   `MENTIONED_IN`

Store relationship data in content files or a central relationship file.
Do not duplicate entire entity objects inside another entity.

Example:

``` ts
interface EntityRelation {
  sourceId: string;
  targetId: string;
  type: string;
  description?: string;
  verificationStatus: VerificationStatus;
  sourceIds: string[];
}
```

Validate that every relation target exists.

------------------------------------------------------------------------

# 6. Wiki sections and required article details

Build the following sections as real content collections, not merely
decorative navigation links.

## 6.1 Characters

Directory features:

-   Character search.
-   Alphabetical navigation.
-   Category filters.
-   Featured characters.
-   Related character suggestions.
-   Verification labels.
-   Spoiler labels.

Character article template:

-   Name.
-   Portrait or representative image.
-   Short introduction.
-   Identity and known aliases.
-   Biography.
-   Background.
-   Personality, only when supported.
-   Story role.
-   Known affiliations.
-   Relationships.
-   Story appearances.
-   Mission appearances.
-   Known locations.
-   Known activities.
-   Voice actor, only when confirmed.
-   Trivia.
-   Quotes, only when legally and editorially appropriate.
-   Gallery with credits and alt text.
-   Sources.
-   Related articles.
-   Last verified date.
-   Spoiler warning.

Do not invent age, nationality, family, voice actor, or other personal
details.

## 6.2 Locations

Directory features:

-   Search and filters.
-   Region and district hierarchy.
-   Location type.
-   Map preview when available.
-   Featured locations.
-   Related discoveries.

Location article template:

-   Name.
-   Region/state/city/district.
-   Overview.
-   Geographic context.
-   Known landmarks.
-   Businesses.
-   Characters associated with the location.
-   Missions connected to it.
-   Activities.
-   Collectibles.
-   Secrets and Easter eggs.
-   Access details if confirmed.
-   Map coordinates only when a reliable in-game coordinate system
    exists.
-   Gallery.
-   Sources.
-   Related locations.

## 6.3 Missions

Mission directory:

-   Search.
-   Main story / side mission filters where known.
-   Character filters.
-   Location filters.
-   Spoiler filter.
-   Mission sequence only when confirmed.

Mission article:

-   Mission name.
-   Summary.
-   Mission type.
-   Story position or chapter, if known.
-   Prerequisites.
-   Starting location.
-   Involved characters.
-   Objectives.
-   Step-by-step walkthrough.
-   Optional objectives.
-   Choices and consequences, if confirmed.
-   Rewards.
-   Unlocks.
-   Vehicles or weapons involved.
-   Related missions.
-   Common problems and tips.
-   Sources.
-   Spoiler warning.

Do not invent mission order, objectives, or rewards.

## 6.4 Vehicles

Vehicle categories:

-   Cars.
-   Motorcycles.
-   Boats.
-   Aircraft.
-   Commercial vehicles.
-   Emergency vehicles.
-   Off-road vehicles.
-   Other confirmed vehicle classes.

Vehicle article:

-   Name.
-   Manufacturer/brand in the game.
-   Model.
-   Vehicle class.
-   Overview.
-   Known performance information.
-   Handling notes only when supported.
-   Customization.
-   Availability or acquisition.
-   Locations.
-   Mission appearances.
-   Related vehicles.
-   Gallery.
-   Sources.

Do not fabricate top speed, acceleration, handling scores, or real-world
equivalents.

## 6.5 Weapons

Weapon categories:

-   Pistols.
-   Shotguns.
-   SMGs.
-   Rifles.
-   Sniper rifles.
-   Heavy weapons.
-   Melee weapons.
-   Explosives, where appropriate and safe to describe in game context.

Weapon article:

-   Name.
-   Category.
-   Overview.
-   In-game description.
-   Known statistics.
-   Capacity, if confirmed.
-   Attachments.
-   Availability.
-   Customization.
-   Related missions.
-   Gallery.
-   Sources.

Do not invent weapon statistics.

## 6.6 Gangs and factions

Article fields:

-   Name.
-   Overview.
-   Known members.
-   Leadership, if confirmed.
-   Territory or associated locations.
-   Affiliations.
-   Rivalries.
-   Story role.
-   Mission appearances.
-   Symbols and visual identity, if confirmed.
-   Sources.
-   Related articles.

## 6.7 Wildlife

Article fields:

-   Species/name.
-   Category.
-   Overview.
-   Habitat.
-   Known behavior.
-   Locations.
-   Interactions.
-   Related activities.
-   Images.
-   Sources.

Do not claim a species is present without evidence.

## 6.8 Businesses and properties

Article fields:

-   Name.
-   Type.
-   Location.
-   Description.
-   Known services.
-   Ownership, if confirmed.
-   Related characters.
-   Mission connections.
-   Availability or purchase mechanics, if confirmed.
-   Sources.

## 6.9 Activities

Article fields:

-   Activity name.
-   Category.
-   Description.
-   Location.
-   Requirements.
-   Rules or objectives.
-   Rewards.
-   Related characters.
-   Related collectibles.
-   Tips.
-   Sources.

## 6.10 Collectibles

Article fields:

-   Name.
-   Overview.
-   Collectible type.
-   Total count only when confirmed.
-   Locations.
-   Map references.
-   Requirements.
-   Collection instructions.
-   Rewards.
-   Checklist only when the total and locations are verified.
-   Related guides.
-   Sources.

Do not publish fake totals or fabricated map coordinates.

## 6.11 Secrets

Article fields:

-   Title.
-   Short summary.
-   Spoiler warning.
-   Verification status.
-   Discovery location.
-   Prerequisites.
-   Steps to discover.
-   Evidence.
-   Conditions and timing, if known.
-   Related entities.
-   Discovery source.
-   Last verified date.

## 6.12 Easter eggs

Article fields:

-   Title.
-   Reference or subject.
-   Location.
-   Discovery method.
-   Explanation.
-   Evidence.
-   Possible interpretation, clearly labeled as interpretation.
-   Related media or franchise references.
-   Sources.
-   Spoiler warning.

Do not present fan theories as developer-confirmed explanations.

## 6.13 Guides and walkthroughs

Guide directory filters:

-   Topic.
-   Difficulty.
-   Estimated completion time.
-   Game version or update, if relevant.
-   Last verified date.

Guide article:

-   Title.
-   Summary.
-   Author/editorial attribution.
-   Last updated.
-   Difficulty.
-   Estimated time.
-   Requirements.
-   Table of contents.
-   Step-by-step instructions.
-   Images and captions.
-   Tips.
-   Common mistakes.
-   Related pages.
-   Sources.
-   Spoiler level.

Use clear headings and concise instructions. Avoid filler introductions.

## 6.14 Story, lore, and timeline

-   Story overview.
-   Characters and relationships.
-   Events.
-   Locations.
-   Timeline.
-   Chapter or sequence references only when confirmed.
-   Lore explanations.
-   Unanswered questions.
-   Theories clearly separated from confirmed facts.
-   Spoiler levels on major revelations.

## 6.15 Glossary

Include:

-   Game terminology.
-   Faction names.
-   Place names.
-   Activity terms.
-   Abbreviations.
-   Alternative spellings.
-   Common search aliases.

Every glossary entry should link to its full article when one exists.

------------------------------------------------------------------------

# 7. Search and discovery

Search should be available from the homepage and global navigation.

## 7.1 Search behavior

Support:

-   Exact name matching.
-   Partial matching.
-   Typo tolerance.
-   Aliases.
-   Category filters.
-   Search suggestions.
-   Keyboard navigation.
-   Empty-state suggestions.
-   Clear search action.
-   Result highlighting.
-   Search result thumbnails where useful.
-   Mobile search interface.

Search across:

-   Names.
-   Aliases.
-   Summaries.
-   Descriptions.
-   Tags.
-   Article headings.
-   Important body text.
-   Related entity names.

## 7.2 Initial search implementation

Use Fuse.js or MiniSearch over a generated local index.

The search index should contain only public, published records. Do not
include draft content.

Do not send every article's full body to the browser if a compact search
index is sufficient. Keep the index lean and load article content only
when the reader opens the page.

Search should not depend on a database or external API in v1.

## 7.3 Search engine SEO distinction

The site's internal search is for visitors. It is not a substitute for
indexable category and article pages.

Do not rely on Google indexing internal search result URLs. Publish
well-structured category pages and individual articles with crawlable
links.

------------------------------------------------------------------------

# 8. Spoiler system

Use spoiler levels:

-   `0`: No meaningful spoilers.
-   `1`: Minor details.
-   `2`: Mission-related spoilers.
-   `3`: Major story spoilers.
-   `4`: Ending or major revelation spoilers.

Features:

-   Spoiler warning at the beginning of relevant pages.
-   Hide spoiler blocks until the reader reveals them.
-   Optional global spoiler preference stored locally.
-   Clear labels on search results.
-   Spoiler-aware related-content cards.
-   Spoiler-aware homepage modules.
-   Spoiler-aware map markers if the map is implemented.
-   Never hide the page's entire existence from search engines solely
    because the content contains spoilers.

The default should protect readers from major spoilers without making
the site unusable.

------------------------------------------------------------------------

# 9. Design system and user experience

## 9.1 Visual direction

Create a cinematic GTA-inspired interface with a premium dark theme.

Suggested palette:

``` css
:root {
  --background: #09090d;
  --surface: #15151e;
  --surface-elevated: #1d1d29;
  --border: #2a2a38;
  --text-primary: #f5f3f7;
  --text-secondary: #a5a2b0;
  --accent-purple: #995ef7;
  --accent-pink: #f4787d;
  --accent-cyan: #70d6e8;
}
```

Use colors consistently and check contrast. Do not use neon colors for
long body text.

## 9.2 Typography

-   Display font: Space Grotesk or a similarly readable licensed font.
-   Body font: Inter or a similar neutral sans-serif.
-   Use `next/font` where possible.
-   Establish a consistent type scale.
-   Keep paragraph line length comfortable.
-   Avoid tiny body text.

## 9.3 Layout

-   Strong cinematic homepage hero.
-   Compact sticky navigation.
-   Prominent global search.
-   Clear category navigation.
-   Readable article content column.
-   Optional table of contents on long pages.
-   Right-side related information panel on desktop where useful.
-   Mobile-friendly article layout.
-   Breadcrumbs above article titles.
-   Related articles near the end.
-   Sources and verification details visible.
-   Footer with about, editorial policy, sources, contact, and
    disclaimer.

## 9.4 Homepage sections

1.  Main navigation and brand.
2.  Cinematic hero image.
3.  Main search field.
4.  Popular category shortcuts.
5.  Featured articles.
6.  Character spotlight.
7.  Location spotlight.
8.  Featured guides.
9.  Secrets and discoveries.
10. Latest verified updates.
11. Popular pages.
12. Browse all categories.
13. Community/participation section only as a future placeholder if
    needed. Do not imply that submissions are currently enabled.
14. Footer.

Avoid an endless feed. Make search and browsing the primary actions.

## 9.5 Accessibility

-   Semantic landmarks.
-   One clear H1 per page.
-   Correct heading hierarchy.
-   Keyboard-accessible menus and search.
-   Visible focus indicators.
-   Sufficient color contrast.
-   Accessible dialog and disclosure behavior.
-   Alt text for informative images.
-   Empty alt text for purely decorative images.
-   Reduced-motion support.
-   Do not convey status through color alone.
-   Ensure all controls have accessible names.

------------------------------------------------------------------------

# 10. Interactive map

The map can be a later v1.x or v2 feature. Do not block the initial
launch on it.

Potential features:

-   Pan and zoom.
-   Searchable locations.
-   Category filters.
-   Location detail popovers.
-   Links from markers to wiki pages.
-   Collectible and secret markers.
-   Spoiler filtering.
-   District boundaries.
-   Map legend.
-   Mobile touch controls.

Important implementation rules:

-   Use legally permitted map imagery or create original artwork.
-   Do not copy copyrighted game map assets without permission.
-   Do not pretend fictional map coordinates are real-world
    latitude/longitude.
-   Establish a consistent coordinate system for the map image.
-   Keep map data separate from the map UI.
-   Provide a list-based alternative for accessibility.
-   Do not publish invented locations or marker positions.

------------------------------------------------------------------------

# 11. Application architecture

## 11.1 Suggested project structure

``` text
gta-xi-wiki/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── characters/
│   │   ├── locations/
│   │   ├── vehicles/
│   │   ├── weapons/
│   │   ├── guides/
│   │   └── og/
│   ├── icons/
│   ├── fonts/
│   ├── robots.txt
│   └── favicon.ico
├── content/
│   ├── characters/
│   ├── locations/
│   ├── missions/
│   ├── vehicles/
│   ├── weapons/
│   ├── gangs/
│   ├── wildlife/
│   ├── businesses/
│   ├── activities/
│   ├── collectibles/
│   ├── secrets/
│   ├── easter-eggs/
│   ├── guides/
│   ├── walkthroughs/
│   ├── story/
│   ├── timeline/
│   ├── glossary/
│   └── sources/
├── scripts/
│   ├── validate-content.ts
│   ├── generate-search-index.ts
│   ├── validate-links.ts
│   ├── validate-seo.ts
│   └── generate-sitemaps.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── search/
│   │   ├── characters/
│   │   ├── locations/
│   │   ├── missions/
│   │   ├── vehicles/
│   │   ├── weapons/
│   │   ├── gangs/
│   │   ├── wildlife/
│   │   ├── businesses/
│   │   ├── activities/
│   │   ├── collectibles/
│   │   ├── secrets/
│   │   ├── easter-eggs/
│   │   ├── guides/
│   │   ├── walkthroughs/
│   │   ├── story/
│   │   ├── timeline/
│   │   ├── glossary/
│   │   ├── about/
│   │   ├── sources/
│   │   └── updates/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── search/
│   │   ├── home/
│   │   ├── wiki/
│   │   ├── cards/
│   │   ├── media/
│   │   ├── seo/
│   │   └── ui/
│   ├── content/
│   │   ├── loaders/
│   │   ├── schemas/
│   │   └── repositories/
│   ├── lib/
│   │   ├── seo/
│   │   ├── search/
│   │   ├── links/
│   │   ├── images/
│   │   ├── metadata/
│   │   └── utils/
│   ├── types/
│   └── config/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── README.md
└── PROJECT.md
```

Adapt the structure to the installed Next.js version. Avoid creating
empty directories or files without a purpose.

## 11.2 Rendering strategy

Use static generation for stable public articles.

-   Use `generateStaticParams` for known entity slugs.
-   Use server components by default.
-   Use client components only for interactions that require browser
    state.
-   Keep article text in the initial HTML.
-   Use static generation for category pages when practical.
-   Use server-side rendering only when genuinely needed.
-   Do not use `output: "export"` unless the deployment constraints are
    understood and intentionally accepted.
-   Keep the app compatible with future database-backed content and ISR.

## 11.3 Content repository abstraction

Do not let page components read JSON files directly.

Create repository functions:

``` ts
getAllEntities()
getEntitiesByCategory(category)
getEntityBySlug(category, slug)
getEntityById(id)
getRelatedEntities(entityId)
getAllPublishedSlugs(category)
getSearchDocuments()
getSourceById(sourceId)
```

Initially, these functions read local content files.

Later, the implementation can be replaced with database queries while
the page components continue using the same functions.

Do not build a fake database abstraction. Keep the repository small and
useful.

------------------------------------------------------------------------

# 12. Code quality and performance instructions

These rules apply to all implementation work.

## 12.1 TypeScript

-   Enable strict TypeScript.
-   Avoid `any`.
-   Use explicit types for content models and component props.
-   Validate imported content at build time.
-   Keep shared types in one place.
-   Use discriminated unions for category-specific records when useful.
-   Do not suppress TypeScript errors without a documented reason.

## 12.2 React and Next.js

-   Prefer server components.
-   Keep client component boundaries small.
-   Avoid unnecessary `useEffect`.
-   Avoid duplicating server data in client state.
-   Use stable keys.
-   Avoid prop drilling when a small composition pattern solves the
    issue.
-   Use Next.js Link for internal navigation.
-   Use the Image component for optimized images.
-   Use metadata APIs rather than manually duplicating head tags.
-   Avoid fetching the same local content repeatedly in different
    components.
-   Keep components focused and reusable.
-   Do not create a giant page component containing the entire
    application.

## 12.3 CSS and UI

-   Use design tokens.
-   Avoid scattered hardcoded colors.
-   Avoid excessive global CSS.
-   Avoid unnecessary animation.
-   Respect `prefers-reduced-motion`.
-   Avoid layout shifts.
-   Do not use huge background videos by default.
-   Ensure text remains readable over imagery.
-   Keep hover effects usable on touch devices.

## 12.4 Performance

Target strong Core Web Vitals:

-   LCP: 2.5 seconds or less.
-   INP: 200 milliseconds or less.
-   CLS: 0.1 or less.

These are target thresholds, not guaranteed outcomes.

Implementation requirements:

-   Optimize and appropriately size images.
-   Use modern image formats when supported.
-   Set image dimensions or aspect ratios.
-   Use responsive image sizes.
-   Avoid loading all gallery images immediately.
-   Lazy-load below-the-fold media.
-   Minimize third-party scripts.
-   Avoid unnecessary client-side JavaScript.
-   Split large interactive components.
-   Avoid loading the full content collection into every client page.
-   Use caching and static generation appropriately.
-   Test on mobile and slower networks.

## 12.5 Security

Even without accounts or a database:

-   Keep secrets out of source control.
-   Validate external input.
-   Sanitize any rich HTML.
-   Do not render untrusted raw HTML.
-   Use safe MDX configuration and do not execute arbitrary
    user-provided code.
-   Keep dependencies updated.
-   Set appropriate security headers.
-   Restrict remote image domains.
-   Avoid exposing private environment variables.
-   Do not add unnecessary API endpoints.

------------------------------------------------------------------------

# 13. Content management without a database

The initial content workflow is Git-based.

1.  Create or edit a content file.
2.  Validate it using the shared schema.
3.  Run link and SEO checks.
4.  Preview the page locally.
5.  Commit the changes.
6.  Deploy the updated website.

Use a consistent content naming convention:

``` text
content/
  characters/
    lucia-caminos.json
  locations/
    vice-city.mdx
  guides/
    collectibles-guide.mdx
```

Content rules:

-   Use stable IDs.
-   Use unique slugs.
-   Use ISO date strings.
-   Keep image assets in a consistent location.
-   Add source references.
-   Add alt text.
-   Add verification status.
-   Add spoiler level.
-   Add SEO metadata.
-   Do not duplicate article content across files.
-   Prefer linking entities by ID or slug.

A lightweight local editorial workflow is enough for v1. Do not build a
CMS until maintaining content through files becomes genuinely
inconvenient.

------------------------------------------------------------------------

# 14. Future database and community migration

A database can be added later without changing the overall product
direction.

When community features become necessary, consider:

-   PostgreSQL for persistent content and user data.
-   Prisma or Drizzle for data access.
-   Auth.js or a suitable managed authentication provider.
-   Role-based permissions.
-   Revision history.
-   Moderation queue.
-   User profiles.
-   Comments and discussions.
-   Reports and anti-vandalism controls.
-   Search service such as Meilisearch if local search is no longer
    sufficient.
-   Object storage for uploaded media.

Future migration principles:

-   Keep content access behind repository functions.
-   Use stable IDs and slugs.
-   Keep category-specific schemas explicit.
-   Keep relationships separate from presentation.
-   Preserve source references and revision history.
-   Avoid coupling article templates to JSON file paths.
-   Migrate content in batches and compare page output.
-   Preserve existing URLs and canonical paths.
-   Keep redirects for any URL changes.

Do not implement these features now.

------------------------------------------------------------------------

# 15. Editorial standards and legal considerations

This is an independent fan-made reference website.

-   Clearly state that the site is unofficial and not affiliated with or
    endorsed by Rockstar Games or Take-Two Interactive.
-   Do not use official logos in a way that implies endorsement.
-   Respect trademarks and copyrights.
-   Use original artwork or assets that the site has permission to use.
-   Do not assume that publicly viewable images are free to reuse.
-   Attribute third-party media where required.
-   Provide a contact method for rights holders.
-   Remove or replace material when a valid rights issue is identified.
-   Do not copy text from other wikis or publications.
-   Write original explanations and summaries.
-   Do not publish private, leaked, or unlawfully obtained material.
-   Avoid misleading branding or fake official announcements.

Suggested disclaimer:

> GTA XI Wiki is an independent fan-made reference project. It is not
> affiliated with, endorsed by, or sponsored by Rockstar Games or
> Take-Two Interactive. All game names and related trademarks belong to
> their respective owners.

Review this wording and the use of the requested brand name before
launch.

------------------------------------------------------------------------

# 16. Analytics and measurement

Analytics are optional but useful for understanding discovery.

Track, with a privacy-conscious setup:

-   Most viewed pages.
-   Internal search terms.
-   Search result clicks.
-   Zero-result searches.
-   Popular categories.
-   Landing pages from organic search.
-   Referring sources.
-   Core Web Vitals.
-   Broken links and 404 requests.

Do not collect unnecessary personal data. Do not add invasive tracking
by default.

Use Google Search Console after launch to monitor:

-   Indexed pages.
-   Indexing issues.
-   Sitemap processing.
-   Search queries.
-   Impressions.
-   Clicks.
-   Average positions.
-   Mobile usability and page experience signals where available.

Do not promise rankings or guaranteed indexing. Search engines decide
whether and when pages are indexed.

------------------------------------------------------------------------

# 17. Testing and quality assurance

## 17.1 Content validation

Automate checks for:

-   Missing required fields.
-   Invalid category values.
-   Duplicate IDs.
-   Duplicate slugs.
-   Invalid dates.
-   Missing source references where required.
-   Broken relationship targets.
-   Missing image files.
-   Missing alt text.
-   Empty summaries.
-   Invalid spoiler levels.
-   Invalid verification statuses.
-   Drafts accidentally included in public pages.
-   Invalid metadata.
-   Duplicate canonical paths.

## 17.2 SEO validation

Automate checks for:

-   Missing title.
-   Duplicate title.
-   Missing description.
-   Duplicate description.
-   Missing canonical.
-   Multiple H1 elements.
-   Missing sitemap entries for published indexable pages.
-   Drafts appearing in sitemap.
-   Broken internal links.
-   Broken image links.
-   Noindex mistakes.
-   Missing Open Graph image where one is expected.
-   Invalid structured data.

## 17.3 User experience tests

Test:

-   Desktop navigation.
-   Mobile navigation.
-   Search keyboard interaction.
-   Search empty state.
-   Search with typos.
-   Category filters.
-   Breadcrumb links.
-   Related article links.
-   Spoiler reveal.
-   Image gallery.
-   404 page.
-   Long article layout.
-   Reduced motion.
-   Keyboard-only navigation.

## 17.4 Browser testing

Use Playwright for important user journeys:

1.  Open homepage.
2.  Search for an entity.
3.  Open a result.
4.  Follow a related article link.
5.  Navigate to a category.
6.  Apply a filter.
7.  Open a guide.
8.  Test mobile navigation.

------------------------------------------------------------------------

# 18. Development roadmap

## Phase 1: Foundation

-   Initialize Next.js.
-   Configure TypeScript strict mode.
-   Configure Tailwind.
-   Set up fonts and design tokens.
-   Build layout and navigation.
-   Create content schemas.
-   Create content repository functions.
-   Add sample verified content.
-   Add validation scripts.

## Phase 2: Public wiki

-   Homepage.
-   Category directories.
-   Entity detail templates.
-   Character pages.
-   Location pages.
-   Mission pages.
-   Vehicle pages.
-   Weapon pages.
-   Other category pages.
-   Guides and walkthroughs.
-   Story and lore.
-   Sources and verification display.

## Phase 3: Search and discovery

-   Generate search index.
-   Build search interface.
-   Add typo tolerance and aliases.
-   Add category filters.
-   Add popular pages.
-   Add related content.
-   Validate internal links.

## Phase 4: SEO

-   Metadata for every page.
-   Canonical URLs.
-   Open Graph.
-   Sitemap.
-   Robots.txt.
-   Breadcrumbs.
-   Structured data.
-   Indexing rules.
-   Redirect handling.
-   SEO validation scripts.

## Phase 5: Visual polish and performance

-   Responsive refinements.
-   Image optimization.
-   Core Web Vitals checks.
-   Accessibility review.
-   Loading and empty states.
-   Error handling.
-   Browser testing.

## Phase 6: Launch

-   Production deployment.
-   Custom domain.
-   HTTPS.
-   Search Console setup.
-   Sitemap submission.
-   Analytics if desired.
-   Crawl test.
-   Broken-link test.
-   Mobile test.
-   Content accuracy review.

## Later phases

-   Interactive map.
-   Database.
-   Authentication.
-   User roles.
-   Community contributions.
-   Revision history.
-   Moderation.
-   User profiles.
-   Discussions.
-   Progress tracking.

------------------------------------------------------------------------

# 19. Definition of done for v1

The first release is ready only when:

-   All planned public sections have working pages.
-   No navigation item leads to an empty or broken page.
-   Every published entity has a valid slug and metadata.
-   Every article has a clear H1 and useful content.
-   All article content is present in crawlable HTML.
-   Internal links work.
-   Search returns relevant results.
-   Category filters work.
-   Spoiler labels and warnings work.
-   Sitemap contains only eligible public pages.
-   Robots.txt is correct.
-   Canonical URLs are correct.
-   Structured data matches visible content.
-   No placeholder content is publicly indexed.
-   Images are optimized and have appropriate alt text.
-   Mobile layout works.
-   Keyboard navigation works.
-   Build passes.
-   Type checks pass.
-   Lint passes.
-   Automated content validation passes.
-   SEO validation passes.
-   No critical accessibility or performance issue remains.
-   The site clearly identifies itself as an unofficial fan project.

------------------------------------------------------------------------

# 20. Instructions for the AI coding agent

Use this section as the implementation contract when asking an AI coding
assistant to build the project.

## 20.1 General behavior

You are building **GTA XI Wiki**, an SEO-first, static-first,
content-driven public encyclopedia.

Follow this document as the source of truth.

Before changing code:

1.  Inspect the existing repository and understand its current
    structure.
2.  Check the installed framework and package versions.
3.  Identify existing components and conventions.
4.  Avoid replacing working code without a reason.
5.  Make a concise implementation plan for large tasks.
6.  Implement in small, verifiable steps.

## 20.2 Mandatory priorities

Priority order:

1.  Correct content and accurate information.
2.  SEO and crawlability.
3.  Performance.
4.  Accessibility.
5.  Maintainable architecture.
6.  Responsive and polished design.
7.  Animation and decorative effects.

Do not sacrifice SEO, speed, accessibility, or readability for visual
effects.

## 20.3 Do not do these things

-   Do not add authentication in v1.
-   Do not add user roles in v1.
-   Do not add a database in v1.
-   Do not add an admin dashboard in v1.
-   Do not add a NestJS backend in v1.
-   Do not add unnecessary API routes.
-   Do not put all content in one component.
-   Do not hardcode article content inside UI components.
-   Do not create fake content to make pages look full.
-   Do not invent game facts, statistics, maps, or relationships.
-   Do not create keyword-stuffed pages.
-   Do not use client-side rendering for essential article content.
-   Do not add excessive dependencies.
-   Do not use huge images without optimization.
-   Do not use animations that make the site slower or harder to use.
-   Do not create dead buttons or decorative controls that appear
    functional.
-   Do not create empty links or placeholder routes.
-   Do not claim official affiliation.

## 20.4 Content implementation rules

When adding content:

1.  Verify the information from a reliable source.
2.  Record the source and verification status.
3.  Use the correct category schema.
4.  Add a unique stable ID and slug.
5.  Write an original, useful summary.
6.  Add relevant relationships.
7.  Add spoiler level.
8.  Add unique SEO metadata.
9.  Add image alt text and attribution where needed.
10. Validate the content before publishing.

If information is unknown, omit it or label it unknown. Never fill gaps
with guesses.

## 20.5 Component implementation rules

-   Build reusable page templates.
-   Keep category-specific presentation configurable.
-   Keep common UI components consistent.
-   Prefer composition over giant components.
-   Use server components by default.
-   Isolate interactive behavior in small client components.
-   Keep data fetching and content parsing outside presentation
    components.
-   Use accessible HTML elements.
-   Ensure all interactive controls work with keyboard and touch.

## 20.6 SEO implementation rules

For every new public route:

-   Decide whether it should be indexed.
-   Generate a unique title and description.
-   Set a canonical URL.
-   Add Open Graph metadata.
-   Add breadcrumbs.
-   Add relevant internal links.
-   Ensure the main content is in the HTML response.
-   Add it to the sitemap only if published and indexable.
-   Add structured data only when appropriate.
-   Check for duplicate or thin content.

## 20.7 Before completing any task

Run the relevant checks:

``` bash
npm run lint
npx tsc --noEmit
npm run build
```

Also run the content, link, and SEO validation scripts when they exist.

If a command fails:

-   Identify the actual cause.
-   Fix the issue.
-   Re-run the check.
-   Do not hide errors or claim success without verifying it.

At the end of each implementation task, report:

-   What changed.
-   Important files created or modified.
-   Tests and commands run.
-   Any remaining issues.
-   Any assumptions that require owner confirmation.

## 20.8 Work incrementally

Do not attempt to generate the entire production website in one
uncontrolled code dump.

Implement in milestones. Keep the application runnable after each
milestone. Use real, verified content where available and clearly marked
editorial placeholders only during development. Never expose development
placeholders as published facts.

------------------------------------------------------------------------

# 21. Final product direction

The initial release should be a complete public wiki with a strong
search experience and excellent technical SEO.

**Do not build the community system yet. Do not introduce a database
yet.**

Use static content files, a repository layer, static generation, and a
generated search index. This is a deliberate first-release architecture,
not a permanent limitation.

The project should be structured so that PostgreSQL, authentication,
user roles, moderation, and community contributions can be introduced
later without rewriting every page.

The most important measure of success is not how many pages exist. It is
whether a visitor can quickly find accurate information, understand it,
explore related topics, and trust the source.
