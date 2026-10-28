#!/usr/bin/env node
/**
 * Capturas de verificación con Playwright.
 *   node scripts/shoot.mjs --routes /,/demos/citas/dental --widths 1440,1024,390 --out docs/screenshots/fase1
 * Opciones: --base URL, --full (página completa), --dark, --reduced (prefers-reduced-motion),
 *           --wait ms (espera tras cargar), --clinics aurora,olivo (sustituye el slug de cada ruta)
 * Falla si hay errores de consola o desbordes horizontales.
 */
import { mkdirSync } from "node:fs"
import { join } from "node:path"
import { chromium } from "playwright"

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, i, all) => {
    if (arg.startsWith("--")) acc.push([arg.slice(2), all[i + 1]?.startsWith("--") || all[i + 1] === undefined ? "true" : all[i + 1]])
    return acc
  }, []),
)

const base = args.base ?? "http://localhost:3000"
const routes = (args.routes ?? "/").split(",")
const widths = (args.widths ?? "1440,1024,390").split(",").map(Number)
const out = args.out ?? "docs/screenshots/tmp"
const wait = Number(args.wait ?? 900)
const clinics = args.clinics?.split(",")
const heights = { 1440: 900, 1024: 768, 390: 844 }

mkdirSync(out, { recursive: true })
// PW_CHROMIUM: navegador ya instalado cuando la versión de Playwright no trae el suyo
const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM })
let failures = 0

const expanded = clinics
  ? routes.flatMap((r) => clinics.map((c) => r.replace(/^\/[^/?]+/, `/${c}`)))
  : routes

for (const route of expanded) {
  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: heights[width] ?? 900 },
      deviceScaleFactor: width <= 500 ? 2 : 1,
      colorScheme: args.dark ? "dark" : "light",
      reducedMotion: args.reduced ? "reduce" : "no-preference",
      locale: "es-ES",
      timezoneId: "Europe/Madrid",
    })
    if (args.dark) await context.addInitScript(() => localStorage.setItem("theme", "dark"))
    const page = await context.newPage()
    const errors = []
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text())
    })
    page.on("pageerror", (err) => errors.push(err.message))
    await page.goto(base + route, { waitUntil: "networkidle" })
    await page.waitForTimeout(wait)
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement
      const offenders = []
      if (doc.scrollWidth > doc.clientWidth + 1) {
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect()
          if (r.right > doc.clientWidth + 1 && r.width > 0 && getComputedStyle(el).position !== "fixed") {
            offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ").slice(0, 3).join(".")} → ${Math.round(r.right)}px`)
            if (offenders.length > 4) break
          }
        }
      }
      return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, offenders }
    })
    const name = `${route.replace(/^\//, "").replace(/[/?=&]/g, "_") || "root"}-${width}${args.dark ? "-dark" : ""}.png`
    await page.screenshot({ path: join(out, name), fullPage: args.full === "true" })
    const problems = []
    if (errors.length) problems.push(`consola: ${errors.slice(0, 3).join(" | ")}`)
    if (overflow.offenders.length) problems.push(`desborde ${overflow.scrollWidth}>${overflow.clientWidth}: ${overflow.offenders.join(", ")}`)
    if (problems.length) failures++
    console.log(`${problems.length ? "✗" : "✓"} ${route} @${width} → ${name}${problems.length ? "\n   " + problems.join("\n   ") : ""}`)
    await context.close()
  }
}

await browser.close()
process.exit(failures ? 1 : 0)
