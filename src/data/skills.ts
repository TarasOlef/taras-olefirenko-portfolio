import {
  Bot,
  Database,
  FlaskConical,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

export const skillClusters = [
  {
    title: "Producto",
    summary: "Problema, usuario y flujo.",
    icon: Layers3,
    items: ["Problemas reales", "Flujos simples", "Usuarios", "Iteración"],
  },
  {
    title: "Frontend y mobile",
    summary: "Interfaces claras y rápidas.",
    icon: MonitorSmartphone,
    items: ["React", "Next.js", "Flutter", "TypeScript"],
  },
  {
    title: "Backend y datos",
    summary: "Datos, auth y APIs.",
    icon: Database,
    items: ["Supabase", "PostgreSQL", "REST APIs", "Edge Functions"],
  },
  {
    title: "IA aplicada",
    summary: "Automatizar sin añadir ruido.",
    icon: Bot,
    items: ["LLMs", "Prompts", "Automatización", "Flujos con IA"],
  },
  {
    title: "Testing y release",
    summary: "Probar, publicar y mejorar.",
    icon: FlaskConical,
    items: ["QA", "Testing", "Analítica", "Google Play", "CI/CD"],
  },
] as const;

export const processSteps = [
  "Detectar el problema",
  "Entender al usuario",
  "Diseñar el flujo",
  "Construir la solución",
  "Innovar siempre con criterio",
  "Publicar",
  "Mejorar con feedback",
] as const;
