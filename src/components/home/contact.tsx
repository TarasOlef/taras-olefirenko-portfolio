import { ArrowUpRight } from "lucide-react";
import { ButtonIcon, buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { CopyEmail } from "./copy-email";
import { SectionHead } from "./section-head";

export function Contact({ index, total }: { index: number; total: number }) {
  return (
    <section id="contacto" className="px-(--gutter) pt-[clamp(96px,10vw,160px)] pb-[clamp(64px,7vw,112px)]">
      <SectionHead index={index} total={total} title="Cuéntame qué quieres automatizar">
        <p>
          Escríbeme y <strong className="font-semibold text-foreground">te respondo yo</strong>, normalmente el mismo día. Si eres una agencia, te explico cómo revenderlo con tu marca.
        </p>
      </SectionHead>
      <a
        href={`mailto:${profile.email}`}
        className="display-condensed block text-[clamp(30px,6.2vw,92px)] normal-case leading-none tracking-[0.005em] break-all hover:text-tally sm:break-normal"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={buttonVariants()}>
          Escribir un correo
        </a>
        <CopyEmail email={profile.email} />
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost" })}>
          LinkedIn
          <ButtonIcon>
            <ArrowUpRight aria-hidden strokeWidth={1.75} />
          </ButtonIcon>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost" })}>
          GitHub
          <ButtonIcon>
            <ArrowUpRight aria-hidden strokeWidth={1.75} />
          </ButtonIcon>
        </a>
      </div>
    </section>
  );
}
