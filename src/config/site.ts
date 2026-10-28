/** Toda URL absoluta sale de aquí (docs/BRIEF.md §14). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://taras-olefirenko-portfolio.vercel.app").replace(/\/$/, "");

export const siteTimeZone = "Europe/Madrid";
