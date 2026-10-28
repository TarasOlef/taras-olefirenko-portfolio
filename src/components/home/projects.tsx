import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "cn";
import { type Project, projects } from "@/data/projects";
import { SectionHead } from "./section-head";

export function Projects({ index, total }: { index: number; total: number }) {
  const [programme, ...previews] = projects;
  return (
    <section id="proyectos" className="px-(--gutter) pt-[clamp(64px,8vw,120px)] pb-[clamp(48px,6vw,96px)]">
      <SectionHead index={index} total={total} title="Lo que construyo">
        <p>
          Lo que tengo publicado y lo que estoy construyendo ahora, <strong className="font-semibold text-foreground">con su estado real</strong>.
        </p>
      </SectionHead>

      <ul className="grid gap-2.5 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        <ProjectSlab project={programme} feed="PGM" className="lg:col-span-2 lg:row-span-2" />
        {previews.map((project) => (
          <ProjectSlab key={project.slug} project={project} feed="PVW" />
        ))}
      </ul>
    </section>
  );
}

function ProjectSlab({ project, feed, className }: { project: Project; feed: "PGM" | "PVW"; className?: string }) {
  const programme = feed === "PGM";
  return (
    <li className={cn("flex min-w-0 flex-col overflow-hidden rounded-md border border-line bg-tile", className)}>
      {programme ? <ProgrammeMedia media={project.media} /> : <PreviewMedia media={project.media} />}
      <div className={cn("flex flex-col gap-3 p-5", !programme && "flex-1")}>
        <h3 translate="no" className={cn("display-condensed leading-[0.92] normal-case wrap-anywhere", programme ? "text-[clamp(40px,4.4vw,64px)]" : "text-[clamp(32px,2.6vw,40px)]")}>
          {project.name}
        </h3>
        <p className="text-sm text-muted-foreground">{project.category}</p>
        <p className={cn("text-foreground/90", programme ? "max-w-[60ch] text-base" : "text-[15px]")}>{project.description}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2 font-mono text-[11px] text-muted-foreground">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-sm border border-line px-1.5 py-0.5">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-11 items-center justify-between gap-3 border-t border-line bg-[#0b0b0b] px-3 font-mono text-[11px] tracking-[0.05em] uppercase">
        <span className={cn("flex min-w-0 items-center gap-2", project.live ? "text-foreground" : "text-muted-foreground")}>
          <span aria-hidden className={cn("size-[7px] shrink-0 rounded-full", project.live ? "bg-tally" : "bg-line-2")} />
          <span className="shrink-0 text-faint">{feed}</span>
          <span className="truncate">{project.status}</span>
        </span>
        <span className="flex shrink-0 gap-4">
          {project.links.caseStudy && (
            <Link href={project.links.caseStudy} className="hover:text-tally">
              Caso
            </Link>
          )}
          {project.links.site && (
            <a href={project.links.site.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-tally">
              {project.links.site.label}
              <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={1.75} />
            </a>
          )}
        </span>
      </div>
    </li>
  );
}

function ProgrammeMedia({ media }: { media: Project["media"] }) {
  const [main, ...rest] = media;
  return (
    <div className="flex flex-col gap-px border-b border-line bg-line lg:flex-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#050505] lg:aspect-auto lg:min-h-[380px] lg:flex-1">
        <Image src={main.src} alt={main.alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover object-top-left" />
      </div>
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-px">
          {rest.map((item) => (
            <figure key={item.src} className="relative bg-[#050505]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover object-top-left" />
              </div>
              <figcaption className="flex h-7 min-w-0 items-center gap-2 bg-[#0b0b0b] px-2.5 font-mono text-[10.5px] tracking-[0.05em] whitespace-nowrap text-muted-foreground uppercase">
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-line-2" />
                <span className="truncate">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

function PreviewMedia({ media }: { media: Project["media"] }) {
  // Una sola captura (ya trae su marco) va a sangre; varias, como teléfonos uno al lado del otro
  if (media.length === 1) {
    const [item] = media;
    return (
      <div className="relative h-64 overflow-hidden border-b border-line bg-[#050505]">
        <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-top" />
      </div>
    );
  }
  return (
    <div className="flex h-64 justify-center gap-3 overflow-hidden border-b border-line bg-[#050505] px-5 pt-5">
      {media.map((item) => (
        <div key={item.src} className="relative w-[150px] shrink-0 overflow-hidden rounded-t-[18px] border border-b-0 border-line-2">
          <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1024px) 16vw, 45vw" className="object-cover object-top" />
        </div>
      ))}
    </div>
  );
}
