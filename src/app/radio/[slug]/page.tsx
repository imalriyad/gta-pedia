import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPublishedSlugs, getEntityBySlug } from "@/content/repositories";
import { DetailPage } from "@/components/wiki/DetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPublishedSlugs("radio").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntityBySlug("radio", slug);
  if (!entity) return { title: "Station Not Found" };
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

export default async function RadioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entity = getEntityBySlug("radio", slug);
  if (!entity) notFound();
  return <DetailPage entity={entity} />;
}
