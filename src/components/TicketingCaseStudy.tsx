"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  ListChecks,
  Server,
  ShieldCheck,
  Timer,
  Users,
  Workflow,
} from "lucide-react";
import { profile } from "@/data/profile";

const repoUrl = "https://github.com/TarasOlef/picdaTicketing.git";

const stack = [
  "C#",
  "ASP.NET Core Razor Pages",
  "Entity Framework Core",
  "SQL Server",
  "Roles",
  "Auditoría",
  "Métricas",
];

const solutionCards = [
  {
    title: "Control por roles",
    text: "Accesos diferenciados para quien solicita, quien resuelve y quien administra.",
    icon: ShieldCheck,
  },
  {
    title: "Seguimiento completo",
    text: "Cada ticket mantiene estado, prioridad, responsable, comentarios y trabajo realizado.",
    icon: ListChecks,
  },
  {
    title: "Métricas y trazabilidad",
    text: "Tiempos clave y cambios relevantes quedan registrados para analizar el proceso.",
    icon: Activity,
  },
];

const features = [
  {
    title: "Roles y permisos",
    text: "Requester, Technician y Admin, cada uno con acceso y responsabilidades diferenciadas.",
    icon: Users,
  },
  {
    title: "Ciclo completo del ticket",
    text: "Creación, asignación, estado, prioridad, categoría, comentarios, worklogs y cierre.",
    icon: Workflow,
  },
  {
    title: "Auditoría de cambios",
    text: "Registro de cambios relevantes en estado, prioridad, asignación, categoría, título y descripción.",
    icon: GitBranch,
  },
  {
    title: "Métricas automáticas",
    text: "Seguimiento de primera respuesta, resolución y cierre para medir la eficiencia del proceso.",
    icon: Timer,
  },
  {
    title: "Base de datos relacional",
    text: "SQL Server y EF Core con migraciones, relaciones y estructura preparada para mantenimiento futuro.",
    icon: Database,
  },
  {
    title: "Códigos únicos seguros",
    text: "Generación incremental de tickets con formato tipo TCK-000001 y control de concurrencia.",
    icon: Code2,
  },
];

const roleItems = [
  "Diseño de la estructura funcional del sistema y flujo de usuarios.",
  "Desarrollo backend con C#, ASP.NET Core Razor Pages y Entity Framework Core.",
  "Modelado de base de datos con SQL Server, migraciones y relaciones entre entidades.",
  "Implementación de roles, permisos, autenticación y separación de responsabilidades.",
  "Creación de métricas, auditoría, generación de códigos de ticket y lógica de seguimiento.",
  "Documentación, pruebas manuales, depuración y preparación para evolución futura.",
];

const architecture = [
  { title: "Usuario", text: "Solicita o gestiona incidencias.", icon: Users },
  { title: "Razor Pages UI", text: "Interfaz operativa y formularios.", icon: ListChecks },
  { title: "ASP.NET Core", text: "Control de rutas, seguridad y reglas.", icon: Server },
  { title: "Servicios de negocio", text: "Auditoría, métricas y códigos.", icon: Workflow },
  { title: "EF Core", text: "Persistencia y relaciones.", icon: GitBranch },
  { title: "SQL Server", text: "Datos estructurados y mantenibles.", icon: Database },
];

const architectureSupport = [
  "Identity / Roles",
  "Ticket Audit Service",
  "Ticket Metrics Service",
  "Ticket Code Generator",
  "DbSeed / Migrations",
];

const impactHighlights = [
  "Incidencias centralizadas",
  "Responsables claros",
  "Historial trazable",
  "Métricas de respuesta y resolución",
  "Sistema preparado para crecer",
];

const dashboardStats = [
  { label: "Tickets abiertos", value: "42", detail: "priorizados por estado" },
  { label: "Primera respuesta", value: "1h 18m", detail: "media simulada" },
  { label: "Resolución", value: "6h 40m", detail: "media simulada" },
];

const ticketFlow = ["Nuevo", "En proceso", "Resuelto", "Cerrado"];

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
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
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
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">
              Herramienta interna empresarial / software de gestión operativa
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Sistema interno de ticketing
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Una herramienta empresarial para ordenar incidencias, técnicos,
              estados, métricas y trazabilidad en un único sistema.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
              Desarrollé un sistema interno de ticketing para centralizar
              incidencias, asignarlas a técnicos, controlar estados, registrar
              actividad y medir tiempos clave del proceso. El objetivo era
              sustituir una gestión dispersa por una herramienta clara,
              mantenible y preparada para crecer.
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
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Ver repositorio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/#projects"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Volver a proyectos
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-slate-950/40">
              <div className="absolute inset-x-12 top-8 h-48 rounded-full bg-blue-300/10 blur-3xl" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/75">
                      Panel operativo
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Tickets y métricas
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
                    Activo
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {dashboardStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs text-slate-400">{stat.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-xs text-slate-500">{stat.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3">
                  {ticketFlow.map((state, index) => (
                    <div
                      key={state}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-200/10 text-xs font-semibold text-cyan-100">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-white">{state}</span>
                      <span className="ml-auto h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-200/70 to-blue-300/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
            El problema
          </p>
          <p className="text-lg leading-8 text-slate-300">
            En muchas organizaciones, las incidencias acaban repartidas entre
            correos, mensajes, llamadas y hojas sueltas. Eso hace difícil saber
            qué está abierto, quién es responsable, qué prioridad tiene cada caso
            y cuánto tarda realmente en resolverse.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
            La solución
          </p>
          <p className="text-lg leading-8 text-slate-300">
            Construí una aplicación interna para centralizar todo el ciclo de
            vida de una incidencia: creación, asignación, prioridad, estado,
            comentarios, trabajo realizado, métricas y auditoría de cambios.
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
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-200/20 hover:bg-white/[0.045]"
            >
              <Icon className="mb-7 h-5 w-5 text-blue-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{card.text}</p>
            </Reveal>
          );
        })}
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
          title="Piezas de producto que sostienen un flujo operativo real."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.title}
                delay={index * 0.03}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-200/20 hover:bg-white/[0.045]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-blue-100" aria-hidden="true" />
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
          title="Diseño funcional, backend y lógica empresarial."
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
          eyebrow="Arquitectura del sistema"
          title="Separación clara entre interfaz, negocio y datos."
          text="El proyecto está estructurado para separar interfaz, lógica de negocio, persistencia, métricas y auditoría, facilitando mantenimiento y futuras ampliaciones."
        />
        <div className="grid gap-3 lg:grid-cols-6">
          {architecture.map((block, index) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={index * 0.04} className="relative">
                {index > 0 ? (
                  <div className="absolute -left-3 top-1/2 hidden h-px w-3 bg-blue-200/25 lg:block" />
                ) : null}
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-200/20 hover:bg-white/[0.045]">
                  <Icon className="mb-8 h-5 w-5 text-blue-100" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{block.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-5 flex flex-wrap gap-2">
          {architectureSupport.map((item) => (
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

function SystemVisualization() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Visualización conceptual"
          title="Sin capturas: flujo, métricas y módulos del sistema."
          text="La representación visual usa cards abstractas y datos simulados para explicar el producto sin crear pantallas falsas."
        />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-8 flex items-center gap-3">
              <Workflow className="h-5 w-5 text-cyan-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Flujo del ticket</h3>
            </div>
            <div className="grid gap-3">
              {ticketFlow.map((state, index) => (
                <div key={state} className="relative flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-sm font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-sm font-semibold text-white">{state}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {index === 0
                        ? "Entrada y categorización"
                        : index === 1
                          ? "Asignación y trabajo técnico"
                          : index === 2
                            ? "Validación de resolución"
                            : "Cierre con historial completo"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-8 flex items-center gap-3">
              <Activity className="h-5 w-5 text-cyan-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Panel de módulos</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Tickets", "Prioridad, estado y responsable"],
                ["Comentarios", "Contexto y comunicación interna"],
                ["Worklogs", "Trabajo realizado por técnicos"],
                ["Auditoría", "Cambios relevantes con trazabilidad"],
                ["Métricas", "Respuesta, resolución y cierre"],
                ["Administración", "Usuarios, roles y mantenimiento"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ImpactHighlights() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Impacto del proyecto"
          title="De incidencias dispersas a trabajo trazable."
          text="El sistema convierte una gestión desordenada de incidencias en un flujo claro y medible. Permite saber qué ocurre, quién lo gestiona, en qué estado está cada caso y qué cambios se han realizado durante todo el proceso."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {impactHighlights.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.03}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="mb-8 block text-xs font-semibold text-blue-200/70">
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
              Cierre
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Software interno pensado para uso real
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Este proyecto me permitió trabajar problemas típicos de software
              empresarial: permisos, trazabilidad, datos relacionales, métricas,
              auditoría, estados, roles y mantenimiento. Más que construir
              pantallas, el reto fue diseñar un sistema claro para ordenar
              trabajo real dentro de una organización.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Ver repositorio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Contactar
            </a>
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Volver a proyectos
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function TicketingCaseStudy() {
  return (
    <main className="relative min-h-screen">
      <ProjectHero />
      <ProblemSolutionBlock />
      <FeatureGrid />
      <RoleSection />
      <ArchitectureFlow />
      <SystemVisualization />
      <ImpactHighlights />
      <ProjectCTA />
    </main>
  );
}
