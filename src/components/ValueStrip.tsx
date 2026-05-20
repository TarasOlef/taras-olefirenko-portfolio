"use client";

import { motion, useReducedMotion } from "framer-motion";
import { impactClaims } from "@/data/profile";

export function ValueStrip() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="px-5 sm:px-8 lg:px-10">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] sm:grid-cols-4"
      >
        {impactClaims.map((claim, index) => (
          <div key={claim} className="border-white/10 px-5 py-4 text-sm font-medium text-slate-200 sm:border-r last:border-r-0">
            <span className="mr-3 text-xs text-cyan-200/70">0{index + 1}</span>
            {claim}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
