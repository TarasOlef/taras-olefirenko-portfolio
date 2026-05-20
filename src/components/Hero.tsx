"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { MagneticButton } from "./MagneticButton";

const photoChips = ["Google Play", "IA aplicada", "APIs", "Producto"];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-5 pb-12 pt-7 sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#top"
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold tracking-tight text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          Taras Olefirenko
        </a>
        <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          <a className="nav-link" href="#proyectos">
            Proyectos
          </a>
          <a className="nav-link" href="#capabilities">
            Capacidades
          </a>
          <a className="nav-link" href="#contact">
            Contacto
          </a>
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/16 bg-cyan-200/[0.055] px-3 py-1.5 text-xs font-medium text-cyan-100"
          >
            {profile.role}
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mb-4 flex items-center gap-2 text-sm text-slate-400"
          >
            <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            {profile.location}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance text-[2.45rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl sm:leading-[0.98] xl:text-7xl"
          >
            {profile.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="#proyectos">Ver proyectos reales ↓</MagneticButton>
            <MagneticButton href={profile.cv} variant="secondary" download>
              Descargar CV
            </MagneticButton>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { label: "GitHub", href: profile.github, icon: Code2 },
              { label: "LinkedIn", href: profile.linkedin, icon: ExternalLink },
              { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-200/25 hover:bg-white/[0.045] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon
                    className="h-4 w-4 text-cyan-200/75 transition group-hover:text-cyan-100"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          className="relative mx-auto h-[29rem] w-full max-w-[28rem] lg:h-[34rem]"
        >
          <div className="absolute inset-x-8 top-8 h-64 rounded-full bg-cyan-300/9 blur-3xl" />
          <div className="absolute -inset-8 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 [mask-image:radial-gradient(circle_at_center,black,transparent_68%)]" />
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-slate-950/35">
            <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-slate-950">
              <Image
                src={profile.photo}
                alt="Retrato de Taras Olefirenko"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-[50%_30%] saturate-[0.95]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(2,6,23,0.28)_100%)]" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {photoChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.08, duration: 0.4 }}
                className={`absolute rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-xl shadow-slate-950/30 backdrop-blur-md ${
                  index === 0
                    ? "-left-4 top-16"
                    : index === 1
                      ? "-right-5 top-28"
                      : index === 2
                        ? "-left-6 bottom-28"
                        : "right-2 bottom-16"
                }`}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
