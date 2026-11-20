import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Instrument_Serif, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { AppShell } from "@/components/layout/AppShell";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `GTA 6 Wiki, Map & Guides — ${siteConfig.brandName}`,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "GTA VI",
    "Grand Theft Auto VI",
    "Vice City",
    "Leonida",
    "GTA 6 Wiki",
    "Lucia Caminos",
    "Jason Duval",
    "GTA VI vehicles",
    "GTA VI weapons",
    "GTA VI map",
    "GTA 6 wiki",
    "GTA VI wiki",
    "Grand Theft Auto 6 wiki",
    "GTA 6 map",
    "GTA 6 missions",
    "GTA VI characters",
    "GTA 6 vehicles",
    "GTA 6 animals",
    "Vice City map",
    "Leonida map",
  ],
  authors: [{ name: siteConfig.brandName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1920,
        height: 1080,
        alt: "Vice City at sunset — Grand Theft Auto VI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TNND5WMD"
          strategy="beforeInteractive"
        />
        <Script id="google-tag-manager-datalayer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} ${inter.variable} antialiased`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
