import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHead } from "./section-head";

// Solo lo terminado sale en la web (docs/BRIEF.md §5)
const finished = projects.filter((project) => !project.status.toLowerCase().includes("preparación"));

const covers: Record<string, { src: string; alt: string }> = {
  peakr: { src: "/projects/peakr/peakr-home.png", alt: "Pantalla de inicio de PEAKR" },
};

export function Projects({ index, total }: { index: number; total: number }) {
  return (
    <section id="proyectos" className="px-(--gutter) pt-[clamp(64px,8vw,120px)] pb-[clamp(48px,6vw,96px)]">
      <SectionHead index={index} total={total} label="Proyectos" title="Lo que ya está en la calle">
        <p>
          Productos que he llevado de la idea a producción. <strong className="font-semibold text-foreground">Las tres demos de IA</strong> se suman aquí en cuanto funcionan de verdad.
        </p>
      </SectionHead>

      <ul className="grid gap-2.5 lg:grid-cols-3">
        {finished.map((project) => {
          const cover = covers[project.slug];
          const live = Boolean(project.links.live);
          return (
            <li key={project.slug} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-line bg-tile">
              <div className="flex flex-1 flex-col gap-4 p-5">
                {cover && (
                  <div className="relative -mx-5 -mt-5 mb-1 h-56 overflow-hidden border-b border-line bg-tile-2">
                    <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
                  </div>
                )}
                <h3 className="display-condensed text-[clamp(32px,3vw,44px)] leading-[0.92] text-balance">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <p className="text-[15px] text-foreground/90">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2 font-mono text-[11px] text-muted-foreground">
                  {project.stack.slice(0, 6).map((tech) => (
                    <li key={tech} className="rounded-sm border border-line px-1.5 py-0.5">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex h-11 items-center justify-between gap-3 border-t border-line bg-[#0b0b0b] px-3 font-mono text-[11px] tracking-[0.05em] uppercase">
                <span className={live ? "flex items-center gap-2 text-foreground" : "flex items-center gap-2 text-muted-foreground"}>
                  <span aria-hidden className={live ? "size-[7px] rounded-full bg-tally" : "size-[7px] rounded-full bg-line-2"} />
                  {project.status}
                </span>
                <span className="flex gap-4">
                  <Link href={project.links.caseStudy} className="transition-colors duration-150 hover:text-tally">
                    Caso
                  </Link>
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-tally">
                      Abrir <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={1.75} />
                    </a>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
