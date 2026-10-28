"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";

type ChyronItem = { time?: string; text: string; status?: string };

const HOLD_MS = 4000;

/**
 * Rótulo inferior de emisión: un elemento cada vez, que entra al cambiar.
 * Desde la fase 1 lo alimentan los eventos reales de las demos; hasta entonces, el estado real de los proyectos.
 */
export function Chyron({ label, items }: { label: string; items: ChyronItem[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(() => setCurrent((i) => (i + 1) % items.length), HOLD_MS);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  const item = items[current];

  return (
    <div className="-mx-(--gutter) grid h-[52px] grid-cols-[auto_minmax(0,1fr)_auto] overflow-hidden border-y border-line md:grid-cols-[auto_minmax(0,1fr)_auto_auto]">
      <p className="display-condensed flex items-center gap-2.5 bg-tally pr-5 pl-(--gutter) text-lg tracking-[0.04em] text-tally-foreground">
        <span aria-hidden className="size-2 animate-[tally-blink_1.2s_steps(1)_infinite] rounded-full bg-tally-foreground" />
        {label}
      </p>

      {/* Para lectores de pantalla, la lista completa y quieta */}
      <ul className="sr-only">
        {items.map((entry) => (
          <li key={entry.text}>
            {entry.text}
            {entry.status && `: ${entry.status}`}
          </li>
        ))}
      </ul>
      <p aria-hidden className="flex min-w-0 items-center overflow-hidden px-5 font-mono text-[13px] text-muted-foreground">
        <span key={current} className="block min-w-0 animate-[caption-in_220ms_var(--ease-out)_both] truncate">
          {item.time && <b className="tabular font-medium text-foreground">{item.time} · </b>}
          {item.text}
          {item.status && <b className="font-medium text-foreground"> · {item.status}</b>}
        </span>
      </p>

      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Reanudar el rótulo" : "Pausar el rótulo"}
        aria-pressed={paused}
        className="grid w-12 place-items-center border-l border-line text-muted-foreground hover:text-foreground"
      >
        {paused ? <Play aria-hidden className="size-3.5" strokeWidth={1.75} /> : <Pause aria-hidden className="size-3.5" strokeWidth={1.75} />}
      </button>
      <a href="#proyectos" className="hidden items-center gap-2 border-l border-line px-(--gutter) text-[13px] text-muted-foreground hover:text-foreground md:flex">
        Desliza
        <ArrowDown aria-hidden className="size-3.5" strokeWidth={1.75} />
      </a>
    </div>
  );
}
