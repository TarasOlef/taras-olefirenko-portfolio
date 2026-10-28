# Product

<!-- impeccable:product-schema 1 -->

> Escrito a partir de `docs/BRIEF.md` (fuente de verdad, aprobada por Taras el 2026-10-28). No hubo entrevista aparte: Taras pidió no preguntar salvo dirección visual, vídeo, claves o migraciones.

## Platform

web

## Users

- **Agencias de marketing que no ofrecen IA** y quieren revenderla en marca blanca a sus clientes (clínicas, talleres, inmobiliarias). Llegan desde un mensaje de Taras, miran la web en el portátil o en el móvil, y deciden si vale la pena una videollamada.
- **Dueños de negocios pequeños** (clínica dental, taller, inmobiliaria) que llegan directamente y quieren ver si un asistente puede atender y reservar por ellos.

## Product Purpose

Una web con el nombre de Taras Olefirenko que enseña tres demos de IA que funcionan de verdad en el navegador:

1. Asistente que reserva citas (chat y voz) y las anota en la agenda.
2. Del anuncio a la venta: motor de leads con simulador de campaña y retorno por anuncio.
3. Copiloto de agencia: informes, alertas, auditorías y anuncios.

El objetivo es vender, no hacer currículum. Éxito: que una agencia reserve la videollamada de 20 minutos con Taras.

## Positioning

La IA hace cosas de verdad (crea la cita, mueve el lead, escribe el informe), el visitante lo ve pasar en directo en un panel al lado, y se enseñan las tripas: herramienta llamada, latencia y coste de cada interacción. Contactar ya es una demostración: el chatbot de la esquina reserva la llamada con Taras.

## Operating Context

- Las demos usan negocios de ejemplo inventados (Clínica Dental Nácar, Talleres Bielsa, Puerta Norte Inmobiliaria) con sandbox por visitante de 24 h.
- Marca blanca: con `?marca=` no aparece Taras en ninguna parte.
- Referencia de estructura, ritmo y gestos: ericduro.com (no se copian textos, marca ni recursos).

## Capabilities and Constraints

- Next.js 16, React 19, Tailwind v4, shadcn/ui sobre Base UI, Motion, Vercel AI SDK, OpenAI Realtime, Supabase.
- Español de España, horas en 24 h, euros con `formatEUR`. La web habla de tú.
- Nada de «Próximamente»: lo que no está terminado no sale.
- Insignia «Demo · datos ficticios» siempre visible en las demos.
- Cada pantalla a 1440, 1024 y 390 px.

## Brand Commitments

- Nombre: Taras Olefirenko, 20 años, desarrollador en solitario en Xàtiva (Valencia). Datos en `src/data/profile.ts`.
- Web: oscura casi negra, sobria y editorial, con un único color de acento.
- Tipografía display con carácter para titulares, sans de texto muy legible y una mono para las tripas (coste, latencia, herramienta).
- Números tabulares en importes y horas.
- Prohibido: degradados morados, glassmorphism decorativo, emojis, bordes laterales de color, sombras duras, robots de chatbot, logos de terceros.
- Movimiento por debajo de 300 ms, solo transform y opacity al entrar, alternativa con reduced motion.
- Tono directo, en primera persona, frases cortas, sin intermediarios («te respondo yo»).
- Las demos llevan tema claro de serie (enseñan negocios reales) y en marca blanca toman el color de la agencia.

## Evidence on Hand

- Encía, programa de gestión para clínicas dentales (repo `TarasOlef/dental-demo-front`).
- Casos de la web actual: PEAKR (en Google Play), EstilIA, Fábrica de muebles, ticketing interno (`src/data/projects.ts`).
- Foto de Taras: `public/images/taras-profile.png`.
- Precios orientativos para agencias (§1 del brief).
- **No hay** testimonios, clientes ni cifras de negocio: no se inventan. Las cifras de la fila de números las confirma Taras.

## Product Principles

1. Demostrar, no prometer: cada proyecto es la demo funcionando dentro de la página.
2. Enseñar las tripas: coste, latencia y herramienta, visibles.
3. Honestidad: datos ficticios etiquetados, sin cifras inventadas.
4. Una regla, un sitio: el chat y la voz usan las mismas herramientas y las mismas reglas.

## Accessibility & Inclusion

- WCAG AA de contraste; `prefers-reduced-motion`; el mapa de stack tiene una lista como alternativa accesible.
