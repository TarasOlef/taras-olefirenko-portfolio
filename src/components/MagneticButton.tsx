"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionStyle,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  download,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.45 });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.08);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const styles: MotionStyle | undefined = reducedMotion
    ? undefined
    : { x: springX, y: springY };

  return (
    <motion.a
      href={href}
      download={download}
      style={styles}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={reducedMotion ? undefined : { scale: 1.012 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      className={
        variant === "primary"
          ? "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.14)] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#05070d]"
          : "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:border-white/22 hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#05070d]"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </motion.a>
  );
}
