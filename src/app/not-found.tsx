import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh content-center gap-8 px-(--gutter) py-16">
      <p className="flex items-center gap-2.5 font-mono text-xs tracking-[0.05em] text-muted-foreground uppercase">
        <span aria-hidden className="size-[7px] rounded-full bg-line-2" />
        Sin señal · 404
      </p>
      <h1 className="display-condensed max-w-[14ch] text-[clamp(56px,9vw,140px)] leading-[0.86]">Esta página no existe</h1>
      <p className="max-w-[46ch] text-muted-foreground">Puede que el enlace haya cambiado. Desde la portada tienes los proyectos y el contacto.</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className={buttonVariants()}>
          Ir a la portada
        </Link>
        <Link href="/#proyectos" className={buttonVariants({ variant: "outline" })}>
          Ver proyectos
        </Link>
      </div>
    </main>
  );
}
