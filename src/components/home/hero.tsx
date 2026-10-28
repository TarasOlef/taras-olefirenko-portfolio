import { ArrowDown } from "lucide-react";
import { ButtonIcon, buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Chyron } from "./chyron";

const [firstName, lastName] = profile.name.split(" ");

const status = projects.map((project) => ({ text: project.name, detail: project.category, status: project.status }));

export function Hero() {
  return (
    <section
      id="inicio"
      className="grid grid-rows-[auto_1fr_auto_auto] md:min-h-[calc(100svh-var(--bar-h))] px-(--gutter) pt-[clamp(28px,4vw,56px)]"
    >
      <p className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.04em] text-muted-foreground uppercase">
        <span className="text-foreground">Portfolio · 2026</span>
        <span>{profile.location}</span>
      </p>

      <h1 translate="no" className="display-condensed mt-7 self-end text-[clamp(56px,15.6vw,236px)] leading-[0.82] tracking-[-0.01em] md:mt-[clamp(20px,3vw,40px)]">
        <span className="block">{firstName}</span>
        <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--faint)]">{lastName}</span>
      </h1>

      <div className="mt-[clamp(24px,3vw,40px)] grid items-end gap-[18px] pb-[clamp(28px,3vw,40px)] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-[clamp(24px,4vw,72px)]">
        <p className="max-w-[20ch] text-[clamp(26px,2.6vw,40px)] leading-[1.12] font-semibold tracking-[-0.02em] text-balance">
          Construyo software con IA que hace el trabajo. <span className="text-tally">De la idea a producción.</span>
        </p>
        <div>
          <p className="mb-[22px] max-w-[46ch] text-muted-foreground">
            Apps, webs y herramientas con IA, desde el primer boceto hasta que la gente las usa. Te respondo yo, sin intermediarios.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#proyectos" className={buttonVariants()}>
              Ver proyectos
              <ButtonIcon direction="down">
                <ArrowDown aria-hidden strokeWidth={1.75} />
              </ButtonIcon>
            </a>
            <a href="#contacto" className={buttonVariants({ variant: "outline" })}>
              Hablemos
            </a>
          </div>
        </div>
      </div>

      <Chyron label="En marcha" items={status} />
    </section>
  );
}
