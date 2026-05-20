import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { EstiliaCaseStudy } from "@/components/EstiliaCaseStudy";
import { PeakrCaseStudy } from "@/components/PeakrCaseStudy";
import { TicketingCaseStudy } from "@/components/TicketingCaseStudy";
import { getProjectBySlug, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Taras Olefirenko",
    };
  }

  if (project.slug === "estilia") {
    return {
      title: "EstilIA | Web app de análisis de outfit con IA — Taras Olefirenko",
      description:
        "Case study de EstilIA, una web app con IA para analizar outfits desde una foto y convertirlos en recomendaciones claras y accionables.",
    };
  }

  return {
    title: `${project.name} | Taras Olefirenko`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <AnimatedBackground />
      {project.slug === "peakr" ? (
        <PeakrCaseStudy />
      ) : project.slug === "estilia" ? (
        <EstiliaCaseStudy />
      ) : project.slug === "internal-ticketing" ? (
        <TicketingCaseStudy />
      ) : (
        <CaseStudyShell project={project} />
      )}
    </>
  );
}
