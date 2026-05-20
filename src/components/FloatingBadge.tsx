"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingBadgeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingBadge({ children, className = "", delay = 0 }: FloatingBadgeProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute rounded-full border border-white/12 bg-white/[0.07] px-3.5 py-2 text-xs font-medium text-slate-100 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl ${className}`}
      initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reducedMotion ? undefined : { y: -4, scale: 1.03 }}
    >
      {children}
    </motion.div>
  );
}
