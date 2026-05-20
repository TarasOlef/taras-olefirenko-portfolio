"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  Flame,
  LineChart,
  ShieldCheck,
  Smartphone,
  User,
} from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

const stack = [
  "Flutter",
  "Dart",
  "Supabase",
  "PostgreSQL",
  "Edge Functions",
  "APIs",
  "IA",
  "PostHog",
  "RevenueCat",
  "Google Play",
  "Testing / QA",
  "Release",
];

const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.taras.peakr";

const solutionCards = [
  {
    title: "Registro sencillo",
    text: "Menos pasos para mantener el hábito.",
    icon: Flame,
  },
  {
    title: "IA aplicada",
    text: "Asistencia útil en momentos de fricción.",
    icon: BrainCircuit,
  },
  {
    title: "Progreso visible",
    text: "Datos claros para sostener motivación.",
    icon: LineChart,
  },
];

const roleItems = [
  "Definición del producto, flujos principales y experiencia de usuario.",
  "Desarrollo móvil con Flutter y arquitectura de pantallas.",
  "Integración con Supabase, autenticación, base de datos y Edge Functions.",
  "Funciones con IA para análisis, respuestas y automatización de flujos.",
  "Analítica, pagos, validaciones, control de errores y publicación.",
  "Testing, QA, corrección de bugs y mejora continua con feedback real.",
];

const architecture = [
  { title: "Usuario", text: "Hábitos, comidas y progreso.", icon: User },
  { title: "App Flutter", text: "Experiencia móvil clara.", icon: Smartphone },
  { title: "Supabase", text: "Auth, datos y persistencia.", icon: Database },
  { title: "Edge Functions", text: "Lógica backend segura.", icon: ShieldCheck },
  { title: "IA / APIs", text: "Análisis y asistencia.", icon: BrainCircuit },
  { title: "Analytics / RevenueCat", text: "Medición y monetización.", icon: BarChart3 },
];

const features = [
  "Control de calorías y hábitos",
  "Flujos guiados de usuario",
  "IA aplicada al análisis",
  "Progreso y métricas",
  "Sistema premium / suscripciones",
  "Publicación y mantenimiento",
];

const decisions = [
  "Reducir fricción en registros diarios.",
  "IA para aportar claridad, no ruido.",
  "Experiencia visual simple y premium.",
  "Preparación para usuarios reales.",
  "Validación antes de publicación.",
];

const results = [
  "Producto publicado en Google Play.",
  "Arquitectura full-stack.",
  "IA integrada en flujos reales.",
  "Validación, QA y mejora continua.",
  "Experiencia completa de 0 a producción.",
];

const screenshotStory = [
  {
    eyebrow: "01 / Claridad",
    title: "Complejidad fuera. Claridad dentro.",
    text: "Diseñé PEAKR para que registrar calorías, hábitos y progreso fuese simple, visible y fácil de mantener.",
    src: "/projects/peakr/peakr-home.png",
    alt: "Pantalla home de PEAKR con calorías, macros, agua y registro reciente",
    chips: ["Calorías", "Hábitos", "Progreso"],
  },
  {
    eyebrow: "02 / IA aplicada",
    title: "IA útil, no decorativa.",
    text: "La cámara y el análisis visual convierten el registro de comida en una acción mucho más rápida, natural y práctica.",
    src: "/projects/peakr/peakr-camera.png",
    alt: "Pantalla de cámara de PEAKR escaneando comida con etiquetas visuales",
    chips: ["Escaneo visual", "Menos fricción", "IA aplicada"],
  },
  {
    eyebrow: "03 / Resultado",
    title: "Del dato al cambio real.",
    text: "PEAKR no solo registra información: ayuda a sostener hábitos, visualizar avance y reforzar el progreso real del usuario.",
    src: "/projects/peakr/peakr-transformation.png",
    alt: "Pantalla de progreso de PEAKR con transformación antes y después",
    chips: ["Antes / después", "Motivación", "Resultado"],
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

function ScreenshotImage({
  src,
  alt,
  priority = false,
  showPath = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  showPath?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative flex aspect-[9/19] w-full max-w-[24rem] items-center justify-center overflow-hidden rounded-[2.4rem] border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-8 text-center shadow-2xl shadow-slate-950/35">
        <div className="absolute inset-x-10 top-16 h-40 rounded-full bg-cyan-200/10 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-semibold text-white">Captura pendiente</p>
          {showPath ? (
            <>
              <p className="mt-3 text-xs leading-5 text-slate-400">
                Coloca el PNG real en:
              </p>
              <p className="mx-auto mt-3 max-w-[13rem] break-all font-mono text-[0.68rem] leading-5 text-cyan-100/85">
                {src}
              </p>
            </>
          ) : (
            <p className="mt-3 text-xs leading-5 text-slate-400">
              Lista para reemplazar por imagen real.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={760}
      height={1540}
      priority={priority}
      unoptimized
      onError={() => setFailed(true)}
      className="h-auto w-full max-w-[24rem] drop-shadow-[0_34px_70px_rgba(0,0,0,0.42)] transition duration-500 group-hover:scale-[1.012]"
    />
  );
}

function ProjectHero() {
  return (
    <section className="px-5 pb-24 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver a proyectos
        </Link>

        <div className="grid gap-12 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              App móvil con IA publicada en Google Play
            </p>
            <h1 className="text-balance text-6xl font-semibold tracking-[-0.055em] text-white sm:text-8xl">
              PEAKR
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Diseñé y desarrollé PEAKR de principio a fin: una app móvil real
              para controlar calorías, hábitos y progreso personal mediante una
              experiencia sencilla, IA aplicada y arquitectura full-stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Ver en Google Play
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#peakr-en-uso"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Ver capturas
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="absolute inset-x-16 top-16 h-72 rounded-full bg-cyan-200/10 blur-3xl" />
            <div className="relative mx-auto grid max-w-[42rem] grid-cols-3 items-end gap-4">
              {screenshotStory.map((shot, index) => (
                <div
                  key={shot.src}
                  className={index === 1 ? "translate-y-8" : index === 2 ? "translate-y-3" : ""}
                >
                  <ScreenshotImage
                    src={shot.src}
                    alt={shot.alt}
                    priority={index === 0}
                    showPath={false}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            El problema
          </p>
          <p className="text-lg leading-8 text-slate-300">
            Muchas personas quieren mejorar hábitos, controlar calorías o avanzar
            hacia un objetivo físico, pero se pierden entre registros manuales,
            apps complicadas y falta de claridad.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            La solución
          </p>
          <p className="text-lg leading-8 text-slate-300">
            PEAKR centraliza hábitos, calorías, progreso e IA en una app clara,
            pensada para reducir fricción y ayudar a decidir mejor cada día.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto mt-5 grid max-w-7xl gap-5 md:grid-cols-3">
        {solutionCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal
              key={card.title}
              delay={index * 0.04}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-200/20 hover:bg-white/[0.045]"
            >
              <Icon className="mb-7 h-5 w-5 text-cyan-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Mi papel"
          title="De idea a producción."
          text="Desarrollo completo del producto: UX, frontend, backend, IA, analítica, pagos, testing y release."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {roleItems.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.03}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300"
            >
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
              {item}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Arquitectura full-stack"
          title="Producto real, no demo."
          text="Autenticación, datos persistentes, lógica backend, IA, analítica, monetización, validaciones y preparación para producción."
        />
        <div className="grid gap-3 lg:grid-cols-6">
          {architecture.map((block, index) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={index * 0.04} className="relative">
                {index > 0 ? (
                  <div className="absolute -left-3 top-1/2 hidden h-px w-3 bg-cyan-200/25 lg:block" />
                ) : null}
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-200/20 hover:bg-white/[0.045]">
                  <Icon className="mb-8 h-5 w-5 text-cyan-100" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{block.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Funcionalidades" title="Lo esencial para que el producto funcione." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              key={feature}
              delay={index * 0.03}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:border-cyan-200/20 hover:bg-white/[0.045]"
            >
              <span className="mb-8 block text-xs font-semibold text-cyan-200/70">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold">{feature}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotNarrativeBlock({
  item,
  index,
}: {
  item: (typeof screenshotStory)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <Reveal>
      <article
        className={`group grid min-h-[42rem] gap-10 py-16 lg:grid-cols-2 lg:items-center ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="relative flex justify-center">
          <div className="absolute inset-x-16 top-1/4 h-72 rounded-full bg-cyan-200/10 blur-3xl" />
          <ScreenshotImage src={item.src} alt={item.alt} />
        </div>
        <div className={reverse ? "lg:pr-14" : "lg:pl-14"}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            {item.eyebrow}
          </p>
          <h3 className="max-w-xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            {item.title}
          </h3>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
            {item.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProductStory() {
  return (
    <section id="peakr-en-uso" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Producto en acción"
          title="De problema real a solución real."
        />
        <div className="relative">
          <div className="absolute left-1/2 top-24 hidden h-[calc(100%-12rem)] w-px bg-gradient-to-b from-transparent via-cyan-200/18 to-transparent lg:block" />
          {screenshotStory.map((item, index) => (
            <ScreenshotNarrativeBlock key={item.src} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionsAndResult() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Decisiones importantes
          </p>
          <div className="grid gap-3">
            {decisions.map((decision) => (
              <div key={decision} className="border-t border-white/10 pt-3 text-sm leading-7 text-slate-300">
                {decision}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Resultado
          </p>
          <p className="text-lg leading-8 text-slate-300">
            PEAKR me permitió trabajar como product builder completo: producto,
            UX, backend, IA, analítica, pagos, testing y publicación real.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {results.map((result) => (
              <span
                key={result}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
              >
                {result}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCTA() {
  return (
    <section className="px-5 pb-24 pt-10 sm:px-8 lg:px-10">
      <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Siguiente paso
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              ¿Quieres ver cómo construyo producto real?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Volver a proyectos
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Contactar
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PeakrCaseStudy() {
  return (
    <main className="relative min-h-screen">
      <ProjectHero />
      <ProblemSolution />
      <RoleSection />
      <ArchitectureDiagram />
      <FeatureGrid />
      <ProductStory />
      <DecisionsAndResult />
      <ProjectCTA />
    </main>
  );
}
