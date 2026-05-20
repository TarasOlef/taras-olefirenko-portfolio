import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProjects() {
  return (
    <section id="proyectos" data-section="projects" className="px-5 py-24 sm:px-8 lg:px-10">
      <span id="projects" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Proyectos" title="Problemas reales convertidos en producto.">
          PEAKR, EstilIA, ticketing y operaciones internas muestran producto, IA aplicada y software empresarial real.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
