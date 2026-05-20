"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Lightbulb,
  Code2,
  Rocket,
  Route,
  ScanSearch,
} from "lucide-react";
import { processSteps } from "@/data/skills";

const icons = [ScanSearch, Route, Code2, BadgeCheck, Lightbulb, Rocket, Boxes];

export function ProcessTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200"
        >
          CÓMO CONSTRUYO
        </motion.h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {processSteps.map((step, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={step}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: index * 0.035,
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-200/18 hover:bg-white/[0.045]"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      0{index + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-200/14 bg-cyan-200/[0.06] text-cyan-100">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-5 text-white">
                    {step}
                  </h3>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
