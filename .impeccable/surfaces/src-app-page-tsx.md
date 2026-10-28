---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

## Scope

Portada del portfolio (`/`, una sola página con scroll) y, por extensión, la cabecera y el bloque de proyecto de `/demos/*`. Modo: Persuade.

## Audience and job

Agencias de marketing sin IA y pequeños negocios. Tienen que entender en segundos que la IA hace cosas de verdad y verla trabajar; acción principal: probar el asistente en la propia página y reservar 20 min con Taras.

## Direction contract

THESIS: La web es una realización en directo: el visitante no lee promesas, mira la emisión de lo que la IA está haciendo. Rechaza el hero de titular + subtítulo + botón sobre una fila de tarjetas iguales.

OWN-WORLD: Negro de plató #080808, losas #101010 con filete #242424, tinta cálida #EEEBE5. Un único acento rojo de emisión (piloto «en antena») solo para lo que está pasando ahora y la acción principal. Archivo condensada muy negra en mayúsculas para nombre, titulares y cifras; Schibsted Grotesk para texto; JetBrains Mono para código de tiempo, tripas y etiquetas de pantalla. Losas de multipantalla con etiqueta inferior (UMD) y piloto.

STORY: Ve el nombre y el rótulo EN DIRECTO con eventos reales, entiende que son demos funcionando, prueba el chat en el bloque de la demo 1, ve la cita caer en la agenda, el mensaje en el móvil y el coste, y reserva la llamada.

FIRST VIEWPORT: Barra fija con nombre, anclas, reloj de Valencia en mono y «Reservar 20 min» en rojo. Fila meta en mono. Nombre a todo el ancho, TARAS macizo y OLEFIRENKO en contorno. Debajo, titular en primera persona a la izquierda y texto + dos llamadas a la derecha. Cierra el viewport el rótulo EN DIRECTO a sangre con los últimos eventos y «Desliza».

FORM: Realización de televisión en directo (multipantalla, piloto, código de tiempo, rótulos, escaleta 01 / 07), candidato 5 de 7. seed: none (unavailable). Firma: el rótulo inferior que entra con cada evento y las losas de multipantalla cuyo piloto se enciende cuando cambia algo.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Decisions

- 2026-10-28: Taras elige A «En directo» frente a B «Panel de salidas» y C «Prueba de imprenta». Tirada degradada (sin red a impeccable.style). Ruta de construcción: código directo.
- La maqueta de referencia está en `.impeccable/mocks/decision/a-en-directo.html`.
- Las demos usan el mismo sistema con tema claro dentro de la losa del negocio; el panel «Lo que pasa dentro» va en el mundo oscuro.

## Open

- Cifras de la fila de números: pendientes de confirmar por Taras.
