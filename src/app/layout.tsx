import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = "https://taras-olefirenko-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Taras Olefirenko | Desarrollador Full-Stack con IA y automatización",
  description:
    "Portfolio de Taras Olefirenko: proyectos reales de software, apps móviles, IA aplicada, automatización, backend, frontend y productos publicados en producción.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "Taras Olefirenko | Desarrollador Full-Stack con IA y automatización",
    description:
      "Portfolio de Taras Olefirenko: proyectos reales de software, apps móviles, IA aplicada, automatización, backend, frontend y productos publicados en producción.",
    url: siteUrl,
    siteName: "Taras Olefirenko",
    images: [
      {
        url: profile.photo,
        width: 1200,
        height: 630,
        alt: "Portfolio de Taras Olefirenko",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taras Olefirenko | Desarrollador Full-Stack con IA y automatización",
    description:
      "Proyectos reales de software, apps móviles, IA aplicada, automatización y producto.",
    images: [profile.photo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
