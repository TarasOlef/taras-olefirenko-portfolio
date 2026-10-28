import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { ValenciaClock } from "./valencia-clock";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 grid h-(--bar-h) grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line bg-background/92 px-(--gutter) backdrop-blur-sm md:grid-cols-[auto_1fr_auto_auto] md:gap-7">
      <a href="#inicio" className="display-condensed flex items-center gap-2.5 text-lg tracking-[0.02em]">
        <span aria-hidden className="size-2.5 rounded-full bg-tally" />
        {profile.name}
      </a>
      <nav aria-label="Principal" className="hidden justify-center gap-7 text-sm text-muted-foreground md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors duration-150 hover:text-foreground">
            {link.label}
          </a>
        ))}
      </nav>
      <p className="hidden items-center gap-2.5 font-mono text-[13px] text-muted-foreground sm:flex">
        Valencia <ValenciaClock className="tabular font-medium text-foreground" />
      </p>
      <a href={`mailto:${profile.email}`} className={buttonVariants({ size: "sm", className: "justify-self-end" })}>
        Escríbeme
      </a>
    </header>
  );
}
