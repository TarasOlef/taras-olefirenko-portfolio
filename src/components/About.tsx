import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const points = [
  "PEAKR nace de una necesidad concreta, no de una idea genérica.",
  "EstilIA aplica IA a una decisión cotidiana de estilo.",
  "El sistema interno de incidencias ordena problemas reales de equipos.",
];

export function About() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeader
          eyebrow="Enfoque"
          title="Primero el problema. Después el software."
        >
          {profile.positioning}
        </SectionHeader>
        <Reveal className="grid gap-4 sm:grid-cols-3 lg:pb-3">
          {points.map((point, index) => (
            <div
              key={point}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300"
            >
              <span className="mb-5 block text-xs font-semibold text-cyan-200">
                0{index + 1}
              </span>
              {point}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
