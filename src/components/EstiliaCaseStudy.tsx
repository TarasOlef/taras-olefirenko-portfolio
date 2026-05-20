"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  History,
  ImageUp,
  Layers3,
  Palette,
  RefreshCw,
  Sparkles,
  Store,
  User,
  Wand2,
} from "lucide-react";
import { profile } from "@/data/profile";

const liveUrl = "https://estilia.es";

const chips = [
  "IA aplicada",
  "Fashion tech",
  "Web app",
  "UX simple",
  "Recomendaciones",
  "Producto digital",
];

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "APIs de IA",
  "Procesamiento JSON",
  "Estados de carga y error",
  "Validaciones",
  "UX orientada a producto",
  "Web app responsive",
];

const solutionCards = [
  {
    title: "Foto como punto de partida",
    text: "El usuario parte de algo natural: una imagen real de su outfit.",
    icon: Camera,
  },
  {
    title: "IA aplicada al análisis",
    text: "La IA interpreta el look y transforma una imagen en feedback estructurado.",
    icon: Wand2,
  },
  {
    title: "Recomendaciones prácticas",
    text: "El resultado no es genérico: busca ser claro, accionable y fácil de aplicar.",
    icon: CheckCircle2,
  },
];

const flow = [
  "Subir foto",
  "Analizar outfit",
  "Recibir feedback",
  "Revisar historial",
  "Explorar mejoras, precios, afiliados y ayuda",
];

const features = [
  {
    title: "Análisis de outfit con IA",
    text: "El producto interpreta una foto y genera feedback útil sobre el look.",
    icon: Sparkles,
  },
  {
    title: "Historial",
    text: "El usuario puede volver a análisis anteriores y consultar su evolución.",
    icon: History,
  },
  {
    title: "Precios",
    text: "Estructura preparada para monetización y planes.",
    icon: CreditCard,
  },
  {
    title: "Afiliados",
    text: "Sistema pensado para crecimiento, recomendaciones o colaboraciones comerciales.",
    icon: Store,
  },
  {
    title: "Ayuda",
    text: "Sección de soporte para resolver dudas y hacer más clara la experiencia.",
    icon: HelpCircle,
  },
  {
    title: "Experiencia responsive",
    text: "Diseño pensado para usarse de forma rápida desde cualquier dispositivo.",
    icon: Layers3,
  },
];

const roleItems = [
  "Definición del concepto de producto y problema principal.",
  "Diseño de una experiencia simple desde foto hasta recomendación.",
  "Desarrollo de la web app y estructura de navegación.",
  "Integración de IA para transformar input visual en feedback útil.",
  "Gestión de estados de carga, errores, validaciones y respuesta del sistema.",
  "Preparación de páginas de soporte, precios, historial y afiliados para convertir la herramienta en producto real.",
];

const architecture = [
  { title: "Usuario", text: "Busca mejorar un look real.", icon: User },
  { title: "Web app", text: "Experiencia responsive y guiada.", icon: Layers3 },
  { title: "Input de imagen", text: "Foto como entrada principal.", icon: ImageUp },
  { title: "Servicio IA", text: "Análisis visual y criterio de estilo.", icon: Sparkles },
  { title: "Respuesta estructurada", text: "Feedback ordenado y accionable.", icon: RefreshCw },
  { title: "Resultado e historial", text: "Mejora, revisión y soporte.", icon: History },
];

const decisions = [
  {
    title: "Reducir fricción",
    text: "El flujo parte de una foto, no de formularios largos.",
  },
  {
    title: "Feedback útil",
    text: "La IA debía aportar claridad, no respuestas genéricas.",
  },
  {
    title: "Producto escalable",
    text: "La estructura incluye historial, precios, afiliados y ayuda.",
  },
  {
    title: "UX sin juicio",
    text: "El tono debía ayudar al usuario a mejorar sin hacerlo sentir evaluado.",
  },
];

const results = [
  "Web app en producción",
  "IA aplicada a un problema real",
  "Flujo simple y accionable",
  "Estructura preparada para crecimiento",
  "Producto orientado a usuario final",
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
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-200">
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

function ProductMockup() {
  return (
    <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-slate-950/40">
      <div className="absolute inset-x-12 top-4 h-56 rounded-full bg-fuchsia-300/12 blur-3xl" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/72 p-5">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/75">
              Preview de producto
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
              Plan de mejora
            </h2>
          </div>
          <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
            82/100
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="flex min-h-64 flex-col justify-between rounded-3xl border border-white/10 bg-[linear-gradient(145deg,rgba(244,114,182,0.14),rgba(45,212,191,0.06))] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Palette className="h-5 w-5 text-fuchsia-100" aria-hidden="true" />
            </div>
            <div>
              <div className="h-2 w-20 rounded-full bg-white/55" />
              <div className="mt-3 h-2 w-28 rounded-full bg-white/25" />
              <div className="mt-3 h-2 w-16 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="grid gap-3">
            {[
              "Unificar colores",
              "Ajustar proporciones",
              "Priorizar contexto",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-fuchsia-100">
                    0{index + 1}
                  </span>
                  <span className="h-1.5 w-14 rounded-full bg-gradient-to-r from-fuchsia-200/80 to-cyan-200/40" />
                </div>
                <p className="text-sm font-semibold text-white">{item}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Recomendación clara y aplicable al momento.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-200">
              Producto digital con IA / Web app / Fashion tech
            </p>
            <h1 className="text-balance text-6xl font-semibold tracking-[-0.055em] text-white sm:text-8xl">
              EstilIA
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Web app de análisis de outfit con IA
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              Diseñé y desarrollé EstilIA como una web app para ayudar a
              usuarios a mejorar sus outfits a partir de una foto. El objetivo
              era convertir una decisión subjetiva, qué ponerse y cómo mejorar
              un look, en una experiencia guiada, clara y accionable mediante IA.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {chips.map((item) => (
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
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Web en producción
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#flujo-producto"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Ver flujo del producto
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ProductMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionBlock() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
            El problema
          </p>
          <p className="text-lg leading-8 text-slate-300">
            Elegir bien un outfit no siempre es fácil. Muchas personas saben que
            algo no termina de funcionar, pero no saben si el problema está en
            los colores, las proporciones, las prendas, el contexto o la
            combinación general. El reto era crear una herramienta que diera
            claridad sin juzgar al usuario ni cambiar su estilo.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
            La solución
          </p>
          <p className="text-lg leading-8 text-slate-300">
            EstilIA permite analizar un outfit desde una foto y convertir esa
            imagen en recomendaciones claras: qué funciona, qué se puede mejorar
            y cómo tomar mejores decisiones de estilo.
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
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-200/20 hover:bg-white/[0.045]"
            >
              <Icon className="mb-7 h-5 w-5 text-fuchsia-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProductFlow() {
  return (
    <section id="flujo-producto" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Flujo de producto"
          title="De una foto a una decisión más clara."
          text="Diseñé el flujo para reducir fricción: una acción sencilla, un resultado útil y una estructura preparada para retención, monetización y soporte."
        />
        <div className="grid gap-3 lg:grid-cols-5">
          {flow.map((step, index) => (
            <Reveal key={step} delay={index * 0.04} className="relative">
              {index > 0 ? (
                <div className="absolute -left-3 top-1/2 hidden h-px w-3 bg-fuchsia-200/25 lg:block" />
              ) : null}
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-200/20 hover:bg-white/[0.045]">
                <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-200/20 bg-fuchsia-200/10 text-sm font-semibold text-fuchsia-100">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Funcionalidades principales"
          title="Una web app planteada como producto real."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={index * 0.03}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-200/20 hover:bg-white/[0.045]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-fuchsia-100" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.text}</p>
              </Reveal>
            );
          })}
        </div>
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
          title="Producto, UX e IA aplicada a una decisión cotidiana."
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

function ArchitectureFlow() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Arquitectura de producto"
          title="Un flujo de IA conectado a una experiencia usable."
          text="EstilIA está planteada como producto digital, no solo como experimento: tiene flujo principal, páginas de soporte, estructura de monetización, historial y una experiencia preparada para iterar."
        />
        <div className="grid gap-3 lg:grid-cols-6">
          {architecture.map((block, index) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={index * 0.04} className="relative">
                {index > 0 ? (
                  <div className="absolute -left-3 top-1/2 hidden h-px w-3 bg-fuchsia-200/25 lg:block" />
                ) : null}
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-200/20 hover:bg-white/[0.045]">
                  <Icon className="mb-8 h-5 w-5 text-fuchsia-100" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{block.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ProductDecisions() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Decisiones importantes" title="IA con criterio de producto." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {decisions.map((decision, index) => (
            <Reveal
              key={decision.title}
              delay={index * 0.04}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-fuchsia-200/20 hover:bg-white/[0.045]"
            >
              <span className="mb-8 block text-xs font-semibold text-fuchsia-200/70">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{decision.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{decision.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Resultado"
          title="Una herramienta con IA aplicada a una necesidad real."
          text="EstilIA me permitió trabajar en un producto con IA aplicado a una necesidad cotidiana: convertir una imagen en orientación útil. El valor no estaba solo en integrar IA, sino en diseñar una experiencia donde el usuario entiende rápido qué hacer después."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {results.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.03}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="mb-8 block text-xs font-semibold text-fuchsia-200/70">
                0{index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-white">{item}</p>
            </Reveal>
          ))}
        </div>
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
              Producto en producción
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              ¿Quieres ver el producto?
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Abrir EstilIA
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Volver a proyectos
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function EstiliaCaseStudy() {
  return (
    <main className="relative min-h-screen">
      <ProjectHero />
      <ProblemSolutionBlock />
      <ProductFlow />
      <FeatureGrid />
      <RoleSection />
      <ArchitectureFlow />
      <ProductDecisions />
      <ResultSection />
      <ProjectCTA />
    </main>
  );
}
