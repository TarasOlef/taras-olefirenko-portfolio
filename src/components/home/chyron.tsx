import { ArrowDown } from "lucide-react";

type ChyronItem = { time?: string; text: string; highlight?: string };

/**
 * Rótulo inferior de emisión. Desde la fase 1 lo alimentan los eventos reales de las demos;
 * hasta entonces, el estado real de los proyectos publicados.
 */
export function Chyron({ label, items }: { label: string; items: ChyronItem[] }) {
  // Repetido para que una mitad siempre llene el ancho del rótulo
  const row = [...items, ...items].map((item, i) => (
    <span key={i} className="pr-11">
      {item.time && <b className="tabular font-medium text-foreground">{item.time} · </b>}
      {item.text}
      {item.highlight && <b className="font-medium text-tally"> {item.highlight}</b>}
    </span>
  ));

  return (
    <div className="-mx-(--gutter) grid h-[52px] grid-cols-[auto_1fr] overflow-hidden border-y border-line md:grid-cols-[auto_1fr_auto]">
      <p className="display-condensed flex items-center gap-2.5 bg-tally pr-5 pl-(--gutter) text-lg tracking-[0.04em] text-tally-foreground">
        <span aria-hidden className="size-2 animate-[tally-blink_1.2s_steps(1)_infinite] rounded-full bg-tally-foreground" />
        {label}
      </p>
      <div className="group flex items-center overflow-hidden mask-r-from-85% pl-5 font-mono text-[13px] whitespace-nowrap text-muted-foreground">
        <div className="flex w-max animate-[chyron-roll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          <div className="flex">{row}</div>
          <div className="flex" aria-hidden>
            {row}
          </div>
        </div>
      </div>
      <a
        href="#proyectos"
        className="hidden items-center gap-2 border-l border-line px-(--gutter) text-[13px] text-muted-foreground transition-colors duration-150 hover:text-foreground md:flex"
      >
        Desliza
        <ArrowDown aria-hidden className="size-3.5" strokeWidth={1.75} />
      </a>
    </div>
  );
}
