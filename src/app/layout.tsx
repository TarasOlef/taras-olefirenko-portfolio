import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { siteUrl } from "@/config/site";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Archivo({
  variable: "--font-display-face",
  subsets: ["latin"],
  axes: ["wdth"],
});

const text = Schibsted_Grotesk({
  variable: "--font-text",
  subsets: ["latin"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

const title = "Taras Olefirenko · IA que hace el trabajo";
const description =
  "Construyo IA que atiende, reserva, vende e informa, y te enseño cómo lo hace: herramienta, latencia y coste de cada paso. Desarrollador en Xàtiva, Valencia.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: profile.name,
    images: [{ url: profile.photo, alt: profile.name }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${text.variable} ${code.variable}`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
