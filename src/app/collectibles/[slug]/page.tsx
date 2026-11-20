import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPublishedSlugs, getEntityBySlug } from "@/content/repositories";
import { DetailPage } from "@/components/wiki/DetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPublishedSlugs("collectibles").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntityBySlug("collectibles", slug);
  if (!entity) return { title: "Collectible Not Found" };
  return {
    alternates: { canonical: entity.seo.canonicalPath ?? `/${entity.category}/${entity.slug}` },
    robots: { index: false, follow: true },
    title: entity.seo.title,
    description: entity.seo.description,
    openGraph: {
      title: entity.seo.title,
      description: entity.seo.description,
      images: entity.thumbnail ? [entity.thumbnail] : [],
    },
  };
}

export default async function CollectibleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entity = getEntityBySlug("collectibles", slug);
  if (!entity) notFound();
  return <DetailPage entity={entity} />;
}
