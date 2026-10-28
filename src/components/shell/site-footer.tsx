import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { ValenciaClock } from "./valencia-clock";

export function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line px-(--gutter) py-6 font-mono text-xs text-muted-foreground">
      <span>
        © 2026 {profile.name} · {profile.location}
      </span>
      <span className="flex items-center gap-2">
        Ahora en Valencia <ValenciaClock className="tabular text-foreground" />
      </span>
      <a href="#inicio" className="inline-flex items-center gap-1.5 hover:text-foreground">
        Volver arriba <ArrowUp aria-hidden className="size-3.5" strokeWidth={1.75} />
      </a>
    </footer>
  );
}
