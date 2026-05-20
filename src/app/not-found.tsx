import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen px-5 py-8 sm:px-8 lg:px-10">
      <AnimatedBackground />
      <main className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Página no encontrada
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Esta ruta no existe en el portfolio.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Puede que el enlace haya cambiado o que el despliegue todavía no
            esté apuntando al proyecto correcto. Desde aquí puedes volver a los
            proyectos principales.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-200 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Ir al inicio
            </Link>
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Ver proyectos
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
