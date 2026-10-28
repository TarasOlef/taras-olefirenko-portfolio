import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { CopyEmail } from "./copy-email";
import { SectionHead } from "./section-head";

export function Contact({ index, total }: { index: number; total: number }) {
  return (
    <section id="contacto" className="px-(--gutter) pt-[clamp(64px,8vw,120px)] pb-[clamp(48px,6vw,96px)]">
      <SectionHead index={index} total={total} label="Contacto" title="Cuéntame qué quieres automatizar">
        <p>
          Escríbeme y <strong className="font-semibold text-foreground">te respondo yo</strong>, normalmente el mismo día. Si eres una agencia, te explico cómo revenderlo con tu marca.
        </p>
      </SectionHead>
      <a
        href={`mailto:${profile.email}`}
        className="display-condensed block text-[clamp(30px,6.2vw,92px)] normal-case leading-none tracking-[0.005em] break-all transition-colors duration-150 hover:text-tally sm:break-normal"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={buttonVariants()}>
          Escribir un correo
        </a>
        <CopyEmail email={profile.email} />
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost" })}>
          LinkedIn <ArrowUpRight aria-hidden strokeWidth={1.75} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost" })}>
          GitHub <ArrowUpRight aria-hidden strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
