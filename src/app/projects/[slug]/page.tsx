import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CaseStudyShell } from "@/components/CaseStudyShell";
import { PeakrCaseStudy } from "@/components/PeakrCaseStudy";
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
      ) : (
        <CaseStudyShell project={project} />
      )}
    </>
  );
}
