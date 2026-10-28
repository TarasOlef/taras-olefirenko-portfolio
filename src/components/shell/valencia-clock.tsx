"use client";

import { useSyncExternalStore } from "react";
import { siteTimeZone } from "@/config/site";

const format = new Intl.DateTimeFormat("es-ES", {
  timeZone: siteTimeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

const now = () => format.format(Date.now());
// En el servidor no hay hora del visitante: se pinta un hueco del mismo ancho
const serverNow = () => "--:--:--";

export function ValenciaClock({ className }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, now, serverNow);
  return (
    <time className={className}>
      {time}
    </time>
  );
}
