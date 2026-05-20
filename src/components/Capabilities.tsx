"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillClusters } from "@/data/skills";

export function Capabilities() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="capabilities" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="mb-8 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200"
        >
          CAPACIDADES
        </motion.h2>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
          {skillClusters.map((cluster, index) => {
            const Icon = cluster.icon;

            return (
              <motion.div
                key={cluster.title}
                className="group grid gap-5 border-b border-white/10 px-5 py-5 transition hover:bg-white/[0.035] last:border-b-0 sm:px-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.5fr)] lg:items-center"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/14 bg-cyan-200/[0.06] text-cyan-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
                      {cluster.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {cluster.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/25 px-3.5 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
