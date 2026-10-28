export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  /** Estado real, tal cual (docs/BRIEF.md §11.1) */
  status: string;
  live: boolean;
  /** Capturas reales; la primera es la principal */
  media: { src: string; alt: string; label: string }[];
  links: {
    caseStudy?: string;
    site?: { href: string; label: string };
  };
};

export const projects: Project[] = [
  {
    slug: "encia",
    name: "Encía",
    category: "Plataforma para clínicas dentales con asistente de IA",
    description:
      "Agenda, fichas, presupuestos, visor 3D y WhatsApp con asistente para una clínica dental. Enseña los euros que se escapan cada día y los recupera con un clic. Cada clínica recibe su demo personalizada en encia.app.",
    stack: ["Next.js", "React", "TypeScript", "AI SDK", "Supabase", "Tailwind"],
    status: "En desarrollo",
    live: true,
    media: [
      {
        src: "/projects/encia/encia-hoy.webp",
        alt: "Pantalla Hoy de Encía: euros en juego por presupuestos, cobros, huecos y revisiones, con acciones por WhatsApp",
        label: "Hoy · € en juego · datos ficticios",
      },
      {
        src: "/projects/encia/encia-visor-3d.webp",
        alt: "Visor 3D de Encía con la arcada dental y la lista de piezas",
        label: "Visor 3D",
      },
      {
        src: "/projects/encia/encia-whatsapp.webp",
        alt: "Mensajes de WhatsApp de Encía con recordatorios y respuestas del asistente",
        label: "WhatsApp con asistente",
      },
    ],
    links: {
      site: { href: "https://encia.app", label: "encia.app" },
    },
  },
  {
    slug: "peakr",
    name: "PEAKR",
    category: "App móvil con IA publicada en Google Play",
    description:
      "Aplicación móvil para controlar calorías, hábitos y progreso personal con una experiencia clara, IA aplicada y arquitectura full-stack.",
    stack: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Edge Functions", "IA"],
    status: "Publicada en Google Play",
    live: true,
    media: [{ src: "/projects/peakr/peakr-home.png", alt: "Pantalla de inicio de PEAKR", label: "Inicio" }],
    links: {
      caseStudy: "/projects/peakr",
      site: { href: "https://play.google.com/store/apps/details?id=com.taras.peakr", label: "Google Play" },
    },
  },
  {
    slug: "prerox",
    name: "PreRox",
    category: "App móvil para preparar HYROX",
    description:
      "Plan de preparación para HYROX con un motor de entrenamiento determinista, las ocho estaciones y un reproductor de sesiones que funciona sin conexión. En español e inglés.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "Edge Functions"],
    status: "En desarrollo",
    live: false,
    media: [
      { src: "/projects/prerox/prerox-bienvenida.webp", alt: "Bienvenida de PreRox", label: "Bienvenida" },
      { src: "/projects/prerox/prerox-objetivo.webp", alt: "PreRox pregunta el objetivo de la carrera", label: "Tu carrera" },
    ],
    links: {},
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
