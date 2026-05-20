"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070d]"
    >
      <motion.div
        className="absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.055] blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.55, 0.8, 0.55] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[-10rem] top-24 h-[38rem] w-[38rem] rounded-full bg-indigo-500/[0.045] blur-3xl"
        animate={reducedMotion ? undefined : { opacity: [0.45, 0.75, 0.45] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:radial-gradient(ellipse_at_top,black_0%,transparent_66%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.055),transparent_38%),linear-gradient(to_bottom,transparent,rgba(5,7,13,0.94)_82%)]" />
    </div>
  );
}
