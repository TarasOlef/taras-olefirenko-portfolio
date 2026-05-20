import { Code2, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
              Contacto
            </p>
            <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              ¿Tienes un problema real? Hablemos.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Software útil, simple y preparado para crecer.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <MagneticButton href={`mailto:${profile.email}`}>Enviar email</MagneticButton>
            <MagneticButton href={profile.cv} variant="secondary" download>
              Descargar CV
            </MagneticButton>
          </div>
        </div>
        <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            {profile.email}
          </a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
