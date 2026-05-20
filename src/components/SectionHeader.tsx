import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
          {children}
        </p>
      ) : null}
    </Reveal>
  );
}
