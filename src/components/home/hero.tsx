import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Chyron } from "./chyron";

const [firstName, lastName] = profile.name.split(" ");

const published = projects
  .filter((project) => project.links.live)
  .map((project) => ({ text: `${project.name} · ${project.category}`, highlight: project.status.toLowerCase() }));

export function Hero() {
  return (
    <section
      id="inicio"
      className="grid grid-rows-[auto_1fr_auto_auto] md:min-h-[calc(100svh-var(--bar-h))] px-(--gutter) pt-[clamp(28px,4vw,56px)]"
    >
      <p className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.04em] text-muted-foreground uppercase">
        <span className="text-foreground">Portfolio · 2026</span>
        <span>{profile.location}</span>
        <span>IA que hace el trabajo</span>
      </p>

      <h1 className="display-condensed mt-7 self-end text-[clamp(56px,15.6vw,236px)] leading-[0.82] tracking-[-0.01em] md:mt-[clamp(20px,3vw,40px)]">
        <span className="block">{firstName}</span>
        <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--faint)]">{lastName}</span>
      </h1>

      <div className="mt-[clamp(24px,3vw,40px)] grid items-end gap-[18px] pb-[clamp(28px,3vw,40px)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-[clamp(24px,4vw,72px)]">
        <p className="max-w-[20ch] text-[clamp(26px,2.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em] text-balance">
          Construyo IA que atiende, reserva y vende. <span className="text-tally">Y te enseño cómo lo hace.</span>
        </p>
        <div>
          <p className="mb-[22px] max-w-[46ch] text-muted-foreground">
            Software que hace el trabajo de verdad, con cada paso a la vista: qué herramienta usa, cuánto tarda y cuánto cuesta. Te respondo yo, sin intermediarios.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#proyectos" className={buttonVariants()}>
              Ver proyectos
              <ArrowDown aria-hidden strokeWidth={1.75} />
            </a>
            <a href="#contacto" className={buttonVariants({ variant: "outline" })}>
              Hablemos
            </a>
          </div>
        </div>
      </div>

      <Chyron label="En marcha" items={published} />
    </section>
  );
}
