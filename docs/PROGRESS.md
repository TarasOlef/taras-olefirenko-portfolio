# Progreso

| Fase | Estado |
|---|---|
| 0 · Arranque | En verificación (rama `fase-0`). Hecho: dirección A, `PRODUCT.md`, stack, tokens, shell, showcase-video. Pendiente de Taras: organización de Supabase y dominios de red |
| 1 · Base + chat | Pendiente |
| 2 · Web + vídeo 1 | Pendiente |
| 3 · Voz + Pruébalo | Pendiente |
| 4 · Demo 2 | Pendiente |
| 5 · Demo 3 | Pendiente |
| 6 · Cierre | Pendiente |

## Fase 0 · estado

Hecho:
- Dirección visual A «En directo» (maquetas en `.impeccable/mocks/decision/`, contrato en `.impeccable/surfaces/src-app-page-tsx.md`).
- `PRODUCT.md` a partir del brief.
- Stack: Next 16.4.3, React 19.3, `motion` (fuera framer-motion), Base UI + cva + `cn`, Tailwind v4 por Turbopack, knip, Playwright, `scripts/shoot.mjs` (de Encía), `components.json` base-nova.
- Tokens de la dirección A en `src/app/globals.css`; fuentes Archivo (eje de anchura), Schibsted Grotesk y JetBrains Mono.
- Shell: barra con reloj de Valencia (también en móvil), hero con rótulo (un elemento cada vez, pausable), proyectos en multipantalla, contacto con «Copiar correo», pie con reloj y «Volver arriba», 404, enlace para saltar al contenido.
- Proyectos (pedido de Taras): Encía (encia.app, en desarrollo), PEAKR y PreRox (en desarrollo). Capturas reales: Encía a 2× desde la app (Hoy, visor 3D, WhatsApp); PreRox, las de App Store Connect (`01-welcome`, `02-goal`; las de `retired-rights-blocked` no se usan).
- Revisión final de impeccable: dos rondas (veredicto «fix»); todos los arreglos aplicados y comprobados. `DESIGN.md` y `.impeccable/design.json` escritos desde el código; el detector no encuentra nada.
- `showcase-video` revisada y copiada en `.claude/skills/showcase-video` (ver `SOURCE.md`).

Pendiente:
- Supabase: Taras crea una organización gratuita nueva (la de «Cie» ya tiene 2 proyectos, el máximo del plan gratuito); después se crea el proyecto `portfolio` desde aquí.
- Red de la sesión: permitir `ericduro.com`, `bencho.dev`, `impeccable.style`, `api.openai.com` y `ai-gateway.vercel.sh`.
- Animaciones de scroll como ericduro.com y diseño de bencho.dev (pedido por Taras; bloqueado por la red).
- Fila de cifras: fuera hasta que Taras confirme los números.
- Herramientas para vídeo: faltan ImageMagick 7 y yt-dlp (se instalan en la fase 2).
- Capturas de tienda de PEAKR (Google Play) y PreRox (App Store): Taras no quiere las actuales; las tiendas están bloqueadas por la red. Esperando acceso al repo, los dominios o que las suba.
- Tema claro de las demos: comprometido en el brief, todavía sin tokens (fase 1).

## Decisiones

- 2026-10-28: alcance aprobado en el documento «Portfolio IA: alcance de las demos». La web toma ericduro.com como referencia, pero centrada en los proyectos (§11.1 del brief).
- 2026-10-28: dirección visual **A · En directo** (realización de TV en directo: multipantalla, piloto rojo, rótulo con eventos, código de tiempo). Descartadas B «Panel de salidas» y C «Prueba de imprenta». Maquetas en `.impeccable/mocks/decision/`, contrato en `.impeccable/surfaces/src-app-page-tsx.md`.
- 2026-10-28: Taras pide además las animaciones de scroll de ericduro.com y diseño de bencho.dev. Bloqueado: la red de la sesión no llega a ericduro.com, bencho.dev, impeccable.style, api.openai.com ni ai-gateway.vercel.sh. Pendiente de que Taras permita los dominios o mande grabaciones.
- 2026-10-28: el §16 dice merge a `main`; se sigue el §2 y la instrucción de Taras: merge a `portfolio-ia`, `main` no se toca.
- 2026-10-28: el ejemplo del brief «jueves 6 de noviembre» no cuadra en 2026 (el 6 es viernes); los datos de ejemplo usan fechas reales del calendario.
- 2026-10-28: Next 16.4.0 (la versión de Encía) tiene avisos críticos (RCE en Image Optimization y en `use cache`); se usa 16.4.3. **Encía también está en 16.4.0 y debería actualizarse.**
- 2026-10-28: `profile.ts` decía «L’Olleria / Valencia»; el brief dice Xàtiva. Se pone Xàtiva (pendiente de que Taras lo confirme).
- 2026-10-28: los casos antiguos (`/projects/[slug]`) siguen con su aspecto anterior, ya con `motion/react`, hasta rehacerlos como «Otros proyectos» en la fase 2. «Fábrica de muebles» no sale en la portada (caso en preparación). El botón «Descargar CV» de los casos apunta a `/TarasOlefirenkoCV.pdf`, que no existe en `public/`.
- 2026-10-28: hasta que existan las demos, el rótulo del hero muestra el estado real de los proyectos publicados, no eventos inventados.
- 2026-10-28: Taras quita EstilIA, el ticketing (y fábrica de muebles) y pide Encía, el asistente de voz de encia.app y PreRox «tal cual están». En el repo de Encía no hay código de voz (ni Realtime ni WebRTC): la ficha dice «asistente de IA» hasta que Taras confirme la voz.
- 2026-10-28: la etiqueta «Portfolio · 2026» sobre el nombre se mantiene porque la pide el brief (§11.1), aunque impeccable la desaconseja.
- 2026-10-28: Taras pide aplicar una skill «Clean Design V2» contra el AI slop. No existe; la más cercana es `high-end-visual-design`. Se aplica solo lo compatible con el brief (flecha del CTA en su propio círculo, más aire entre secciones). Se descarta lo que el brief prohíbe: orbes morados, cristal con blur, etiquetas sobre los titulares, entradas de 800 ms con blur, barra flotante de cristal, tarjetas con doble bisel y sombras, Phosphor en vez de Lucide.
