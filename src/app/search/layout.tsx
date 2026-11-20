import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search GTA6Pedia",
  description: "Search across all verified GTA VI characters, locations, missions, weapons, vehicles, activities, and guides.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
