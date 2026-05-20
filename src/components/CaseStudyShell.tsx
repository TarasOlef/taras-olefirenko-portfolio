import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

const sections = [
  "Problema",
  "Solución",
  "Mi rol",
  "Stack",
  "Arquitectura",
  "Funciones clave",
  "Capturas",
  "Resultados / aprendizajes",
];

type CaseStudyShellProps = {
  project: Project;
};

export function CaseStudyShell({ project }: CaseStudyShellProps) {
  return (
    <main className="relative min-h-screen px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver
        </Link>
        <section className="py-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            Caso de estudio
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.03em] text-white sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </section>
        <section className="grid gap-4 pb-24 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">{section}</h2>
                <CheckCircle2 className="h-5 w-5 text-cyan-200/70" aria-hidden="true" />
              </div>
              <p className="text-sm leading-7 text-slate-400">
                Espacio preparado para añadir contenido real: contexto, decisiones, capturas y aprendizajes.
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
