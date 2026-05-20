"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { profile } from "@/data/profile";

const accents = {
  cyan: "group-hover:border-cyan-200/30",
  violet: "group-hover:border-violet-200/30",
  blue: "group-hover:border-blue-200/30",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAida = project.slug === "aida";

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.article
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={reducedMotion ? undefined : { y: -3 }}
        className={`group relative flex min-h-[22rem] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:bg-white/[0.05] ${accents[project.accent]}`}
      >
        <div className="mb-8 flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
              {project.category}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
            0{index + 1}
          </span>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-6 grid">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center justify-between gap-4 border-t border-white/10 py-2.5 text-sm text-slate-300"
            >
              <span>{highlight}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((item) => (
            <span key={item} className="text-xs text-slate-500">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {isAida ? (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Ver case study
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <Link
              href={project.links.caseStudy}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Ver case study
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center px-5 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Cerrar aviso"
              className="absolute inset-0 cursor-default bg-slate-950/78 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="aida-modal-title"
              initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/92 p-6 shadow-2xl shadow-slate-950/60"
            >
              <div className="absolute inset-x-12 top-0 h-32 rounded-full bg-violet-300/12 blur-3xl" />
              <div className="relative">
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-200/10 text-violet-100">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar aviso"
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/80">
                  Case study en preparación
                </p>
                <h2
                  id="aida-modal-title"
                  className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl"
                >
                  AIDA se publicará cuando esté documentado al nivel que merece.
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  El proyecto está en proceso de documentación. Estoy preparando
                  arquitectura, decisiones de producto y resultados para mostrarlo
                  de forma clara, profesional y sin relleno.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    Entendido
                  </button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contactar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
