import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPublishedSlugs, getEntityBySlug } from "@/content/repositories";
import { DetailPage } from "@/components/wiki/DetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPublishedSlugs("brands").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntityBySlug("brands", slug);
  if (!entity) return { title: "Brand Not Found" };
  return {
    alternates: { canonical: entity.seo.canonicalPath ?? `/${entity.category}/${entity.slug}` },
    title: entity.seo.title,
    description: entity.seo.description,
    openGraph: {
      title: entity.seo.title,
      description: entity.seo.description,
      images: entity.thumbnail ? [entity.thumbnail] : [],
    },
  };
}

export default async function BrandDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entity = getEntityBySlug("brands", slug);
  if (!entity) notFound();
  return <DetailPage entity={entity} />;
}
