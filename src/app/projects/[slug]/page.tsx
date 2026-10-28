import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PeakrCaseStudy } from "@/components/PeakrCaseStudy";
import { getProjectBySlug, projects } from "@/data/projects";

// Casos con página propia; el de Encía llega en la fase 2 (docs/BRIEF.md §11.2)
const caseStudies: Record<string, () => React.ReactNode> = {
  peakr: () => <PeakrCaseStudy />,
};

export function generateStaticParams() {
  return projects.filter((project) => caseStudies[project.slug]).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proyecto no encontrado · Taras Olefirenko" };
  return { title: `${project.name} · Taras Olefirenko`, description: project.description };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const render = caseStudies[slug];
  if (!render) notFound();

  return (
    <>
      <AnimatedBackground />
      {render()}
    </>
  );
}
