---
name: Taras Olefirenko
description: Software con IA, de la idea a producción, contado como una emisión en directo desde la sala de realización.
colors:
  tally: "#ff4a2b"
  tally-foreground: "#140603"
  background: "#080808"
  tile: "#101010"
  tile-2: "#161616"
  label-strip: "#0b0b0b"
  media-well: "#050505"
  line: "#242424"
  line-2: "#323232"
  foreground: "#eeebe5"
  muted-foreground: "#a39f97"
  faint: "#6e6b66"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(56px, 15.6vw, 236px)"
    fontWeight: 850
    lineHeight: 0.82
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(48px, 6.4vw, 96px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 64px)"
    fontWeight: 850
    lineHeight: 0.92
    fontVariation: "'wdth' 62"
  title-sm:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(32px, 2.6vw, 40px)"
    fontWeight: 850
    lineHeight: 0.92
    fontVariation: "'wdth' 62"
  statement:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 40px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.04em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  strip:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  sm: "3.6px"
  md: "4.8px"
  device: "18px"
  pill: "9999px"
spacing:
  hairline: "1px"
  slab-gap: "10px"
  cluster: "12px"
  slab-pad: "20px"
  gutter: "clamp(16px, 3.2vw, 48px)"
  bar: "73px"
  section-top: "clamp(64px, 8vw, 120px)"
  section-bottom: "clamp(48px, 6vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.tally}"
    textColor: "{colors.tally-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "color-mix(in oklch, #ff4a2b, white 10%)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.tile-2}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.tile-2}"
    textColor: "{colors.foreground}"
  button-sm:
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "40px"
  header-bar:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted-foreground}"
    height: "{spacing.bar}"
    padding: "0 {spacing.gutter}"
  slab:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "{spacing.slab-pad}"
  slab-strip:
    backgroundColor: "{colors.label-strip}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.strip}"
    height: "44px"
    padding: "0 12px"
  feed-label:
    backgroundColor: "{colors.label-strip}"
    textColor: "{colors.muted-foreground}"
    height: "28px"
    padding: "0 10px"
  chyron:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.data}"
    height: "52px"
  chyron-label:
    backgroundColor: "{colors.tally}"
    textColor: "{colors.tally-foreground}"
    padding: "0 20px 0 {spacing.gutter}"
  stack-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.strip}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
---

# Design System: Taras Olefirenko

## Overview

**Creative North Star: "La sala de realización"**

La web es una realización de televisión en directo vista desde el control: un plató negro, una pared de multipantalla donde cada proyecto es una señal con su etiqueta y su piloto, y un rótulo inferior que va pasando lo que ocurre. El visitante no lee una promesa, mira la emisión. Todo lo que no es señal (fondos, losas, filetes) se retira hacia el negro para que la imagen y el piloto rojo manden.

La densidad es de mesa de mezclas: bloques grandes y rotundos de nombre y titular en Archivo condensada, y alrededor una capa fina de datos en mono (código de tiempo, escaleta, estado, etiqueta de pantalla) que da la sensación de que esto está funcionando ahora. Hay un solo color con voz, el rojo de emisión; el resto es una escala de grises neutros sobre tinta cálida. Sin sombras, sin degradados, sin cristal: la profundidad la ponen las losas un punto más claras que el plató y los filetes de 1px.

El mismo sistema viste las demos con tema claro de serie (enseñan negocios reales) y, en marca blanca, con el color de la agencia en lugar del rojo. Ese tema claro está comprometido en el brief pero todavía no existe en el código: no hay tokens `.light` en `globals.css`, y no deben inventarse aquí antes de construirlo.

**Key Characteristics:**
- Plató casi negro con losas tonales y filetes de 1px, nunca sombras.
- Un único acento, el piloto rojo de emisión, reservado a lo que está en antena y a la acción principal.
- Archivo condensada al 62 % de anchura y peso 850, en mayúsculas, como voz de rótulo.
- Datos y etiquetas en JetBrains Mono, con cifras tabulares en horas e índices.
- Multipantalla: cada pieza de contenido es una señal con su tira de etiqueta inferior y su piloto.
- Un rótulo inferior a sangre que cambia de elemento cada 4 s y se puede pausar.

## Colors

Negro de plató neutro con tinta ligeramente cálida y un solo rojo de emisión saturado.

### Primary
- **Rojo de emisión** (tally): el piloto «en antena». Enciende el punto del nombre en la barra, el bloque de etiqueta del rótulo inferior, los pilotos de las señales vivas, el botón principal, el anillo de foco, la selección de texto y el cambio de color al pasar por enlaces de dato (correo grande, «Caso», enlace del proyecto). Contraste sobre el plató de 5,98:1.
- **Tinta sobre rojo** (tally-foreground): marrón casi negro para el texto y el punto parpadeante que van encima del rojo (5,93:1).

### Neutral
- **Negro de plató** (background): el suelo de toda la página, la barra fija y el rótulo inferior. También el `theme-color` del navegador.
- **Losa** (tile): fondo de cada señal de la multipantalla.
- **Losa encendida** (tile-2): fondo de hover de los botones de contorno y fantasma; también `muted`, `secondary` y `accent` en la capa shadcn.
- **Tira de etiqueta** (label-strip): la franja inferior de cada señal y de cada pantalla secundaria, un punto más oscura que la losa. Hoy está escrita como literal en los componentes, no como propiedad personalizada.
- **Pozo de imagen** (media-well): el fondo detrás de las capturas, más negro que el plató, para que la imagen se lea como pantalla apagada a su alrededor. También literal en los componentes.
- **Filete** (line): bordes de losa, separadores de la barra, del rótulo y de las secciones, y la rejilla de 1px entre pantallas.
- **Filete fuerte** (line-2): borde de los botones de contorno y de los inputs, marco de los teléfonos y piloto apagado.
- **Tinta cálida** (foreground): texto principal y nombre (16,8:1).
- **Tinta secundaria** (muted-foreground): textos de apoyo, navegación, datos del rótulo y etiquetas (7,6:1).
- **Tinta apagada** (faint): el contorno de OLEFIRENKO y el código de señal PGM/PVW. Solo llega a 3,7:1 sobre la tira de etiqueta.

### Named Rules
**The Tally Rule.** El rojo significa «en antena» o «esta es la acción». Se usa en pilotos de lo que está vivo, en la acción principal de cada bloque y como respuesta a interacción (foco, selección, hover de enlace de dato). Hay una sola excepción, aprobada por Taras al elegir la dirección A: la segunda línea de la frase del hero va en rojo, como titular en antena. Fuera de eso, si un elemento rojo no está emitiendo ni es la acción principal, sobra.

**The Dark Switch Rule.** Un piloto apagado es `line-2` (#323232), nunca rojo atenuado ni gris de texto. Encendido o apagado, no hay término medio.

## Typography

**Display Font:** Archivo (eje de anchura `wdth`), con Arial Narrow de respaldo
**Body Font:** Schibsted Grotesk, con system-ui de respaldo
**Label/Mono Font:** JetBrains Mono, con ui-monospace de respaldo

**Character:** Archivo comprimida al 62 % y muy negra es la tipografía de rótulo de televisión: el nombre, los titulares y los nombres de proyecto caben a todo el ancho y se leen desde lejos. Schibsted Grotesk es el texto de la presentadora, claro y directo. JetBrains Mono es la máquina: código de tiempo, escaleta, estado y etiqueta de pantalla.

### Hierarchy
- **Display** (850, clamp(56px, 15.6vw, 236px), 0.82): solo el nombre en el primer viewport, en dos líneas, la primera maciza y la segunda en contorno de 1,5px en `faint`. El 404 usa la misma voz a clamp(56px, 9vw, 140px) con interlineado 0.86.
- **Headline** (800, clamp(48px, 6.4vw, 96px), 0.9, anchura 68 %): títulos de sección, en mayúsculas, con `text-wrap: balance`. Es el único lugar donde la anchura se abre del 62 al 68 %.
- **Title** (850, clamp(40px, 4.4vw, 64px), 0.92): nombre del proyecto en la señal de programa. En las señales de previo baja a clamp(32px, 2.6vw, 40px). El correo grande de contacto usa la misma voz a clamp(30px, 6.2vw, 92px).
- **Statement** (600, clamp(26px, 2.6vw, 40px), 1.12, -0.02em): la frase en primera persona del hero, máximo 20ch.
- **Lead** (400, 17px): el texto que acompaña a cada título de sección, en tinta secundaria, máximo 48ch.
- **Body** (400, 16px): texto corrido, máximo 46–60ch. Las descripciones de las señales de previo bajan a 15px.
- **Label** (400, 12px, 0.04em, mayúsculas): la fila meta del hero, la escaleta de sección y el pie.
- **Data** (400, 13px, cifras tabulares): reloj de Valencia y texto del rótulo inferior.
- **Strip** (400, 11px, 0.05em, mayúsculas): tiras de etiqueta de las señales; las etiquetas de pantalla secundaria bajan a 10,5px y los chips de stack usan 11px sin mayúsculas.

### Named Rules
**The Rótulo Rule.** Archivo condensada va siempre en mayúsculas, salvo cuando escribe un nombre propio de producto o un correo: Encía, PEAKR, PreRox y la dirección de correo conservan su propia caja.

**The Tabular Rule.** Toda hora, índice de escaleta e importe lleva cifras tabulares, para que el reloj y los contadores no bailen.

## Layout

Una sola columna a todo el ancho con margen lateral fluido (`gutter`, de 16px en móvil a 48px en escritorio). La barra superior es fija, de 73px, y el `scroll-padding` deja 16px más para que las anclas no queden tapadas.

El primer viewport se construye como una rejilla de cuatro filas que ocupa la altura de la pantalla menos la barra (solo desde 768px): fila meta en mono, nombre a todo el ancho pegado al fondo de su fila, la frase y las llamadas en dos columnas (1,15fr / 1fr) y, cerrando, el rótulo inferior a sangre, que rompe el margen con margen negativo igual al `gutter`.

Cada sección abre con un filete superior y la escaleta en mono (`01 / 02`), luego título y texto de apoyo en dos columnas alineadas por abajo desde 768px. Las secciones respiran clamp(64px, 8vw, 120px) arriba y clamp(48px, 6vw, 96px) abajo.

La multipantalla es una rejilla de tres columnas desde 1024px: la señal de programa ocupa dos columnas y dos filas, y las de previo se apilan a la derecha. Entre losas, 10px. Dentro de la señal de programa, las pantallas se separan con 1px de rejilla del color del filete (hueco de 1px sobre fondo `line`), como una pared de monitores. Por debajo de 1024px todo se apila en una columna.

Puntos de corte: 640px (el reloj pierde los segundos y la palabra «Valencia», el rótulo pasa a dos líneas y suelta el detalle), 768px (aparece la navegación y «Desliza», el hero toma toda la altura) y 1024px (multipantalla en tres columnas). Se verifica a 1440, 1024 y 390px.

## Elevation & Depth

Sistema plano. No hay ninguna `box-shadow`. La profundidad es tonal y de filete: plató (#080808) por debajo, losa (#101010) por encima, tira de etiqueta y pozo de imagen un punto por debajo de la losa, y filetes de 1px que dibujan cada borde. La barra fija se separa del contenido con su filete inferior y fondo opaco, sin desenfoque.

### Named Rules
**The Monitor Wall Rule.** Las pantallas no flotan: se encajan. Se separan con 1px de filete o con 10px de plató, nunca con sombra, brillo ni cristal.

## Shapes

Esquinas casi rectas en lo estructural y redondas solo en lo que se pulsa o se enciende. Las losas tienen un redondeo mínimo (4,8px) y los chips de stack aún menos (3,6px), lo justo para que no corten. Botones y el enlace de «Saltar al contenido» son píldoras completas. Los pilotos son círculos: 10px en el nombre de la barra, 8px en el rótulo, 7px en las tiras de señal y 6px en las etiquetas de pantalla. Las capturas de móvil se recortan con el canto superior del teléfono (18px arriba, abiertas por abajo) y se sangran por el borde inferior del pozo.

## Components

### Buttons
Pulsadores de mesa: píldoras compactas, firmes al pulsar.
- **Shape:** píldora completa, 44px de alto (40px en la barra, 48px en grande), 18px de relleno lateral, 15px en Schibsted Grotesk 600, icono de 16px a 10px del texto.
- **Primary:** rojo de emisión con tinta sobre rojo. Uno por bloque: «Escríbeme» en la barra, «Ver proyectos» en el hero, «Escribir un correo» en contacto, «Ir a la portada» en el 404.
- **Hover / Focus:** el primario se aclara un 10 % hacia blanco en OKLCH; el foco es un anillo de 2px en rojo a 3px de distancia, común a todo el sitio. Al pulsar, escala a 0,97 en 150ms con ease-out.
- **Outline:** borde de 1px `line-2`, texto en tinta cálida, fondo `tile-2` al pasar. Es la segunda acción («Hablemos», «Copiar correo», «Ver proyectos» en el 404).
- **Ghost:** sin borde ni fondo, en tinta secundaria; al pasar toma `tile-2` y tinta cálida. Para salidas a terceros (LinkedIn, GitHub) con flecha diagonal.

### Chips
- **Style:** chip de stack en mono 11px, borde de 1px `line`, redondeo de 3,6px, sin fondo, tinta secundaria. Solo informativo, no se pulsa.

### Cards / Containers
- **Corner Style:** 4,8px.
- **Background:** losa (`tile`), con el pozo de imagen (`media-well`) detrás de las capturas.
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1px `line` alrededor; filete interior entre imagen, cuerpo y tira.
- **Internal Padding:** 20px en el cuerpo; 12px a los lados de la tira.

### Navigation
- **Barra fija:** 73px, fondo de plató opaco, filete inferior. A la izquierda el nombre en Archivo condensada de 18px con su piloto rojo; en el centro dos anclas en Schibsted 14px en tinta secundaria que pasan a tinta cálida al pasar; a la derecha el reloj de Valencia en mono 13px tabular y el botón primario pequeño. En móvil desaparecen las anclas y el reloj se queda en horas y minutos.
- **Pie:** filete superior, mono 12px en tinta secundaria: firma, reloj de Valencia y «Volver arriba».

### Señal de multipantalla (signature)
La pieza que define el sistema. Cada proyecto es una losa con su imagen arriba, el cuerpo (nombre en Archivo, categoría, descripción y chips de stack) y, cerrando, una tira de etiqueta de 44px en mono 11px mayúsculas con el piloto, el código de señal (PGM para programa, PVW para previo) y el estado real del proyecto, y a la derecha los enlaces de dato que se encienden en rojo al pasar. El piloto se enciende en rojo cuando el proyecto está vivo y se queda en `line-2` cuando no.

Dentro de la señal de programa, cada pantalla lleva su etiqueta inferior de 28px (la UMD del monitor) con su propio piloto de 6px y el nombre de lo que muestra.

### Rótulo inferior (signature)
Barra de 52px a sangre entre dos filetes. A la izquierda, bloque rojo con la etiqueta en Archivo condensada de 18px y un punto que parpadea en pasos (1,2s, opacidad a 0,2). En el centro, un elemento cada vez en mono 13px: entra desde abajo (`translateY(100%)` y opacidad) en 220ms con ease-out fuerte y se sostiene 4s. A la derecha, pausa/reanudar con `aria-pressed` y, desde 768px, el enlace «Desliza». Los lectores de pantalla reciben la lista completa y quieta.

### Movimiento
Dos curvas: `ease-out` (cubic-bezier(0.23, 1, 0.32, 1)) para entrar y `ease-in-out` (cubic-bezier(0.77, 0, 0.175, 1)) para mover. Todo por debajo de 300ms y solo `transform` y `opacity`. Con `prefers-reduced-motion` las animaciones y transiciones se reducen a un instante y el desplazamiento suave se desactiva.

## Do's and Don'ts

### Do:
- **Do** reservar el rojo de emisión (#ff4a2b) para pilotos de lo que está vivo, la acción principal de cada bloque y la respuesta a foco, selección y hover de enlaces de dato.
- **Do** presentar cada pieza de contenido como una señal de multipantalla: losa #101010, filete de 1px #242424, tira de etiqueta inferior en mono con piloto y estado real.
- **Do** separar pantallas con 1px de filete o 10px de plató; la profundidad es tonal.
- **Do** escribir nombres, titulares y cifras grandes en Archivo condensada (62 % de anchura, 850) en mayúsculas, conservando la caja de los nombres de producto y del correo.
- **Do** poner horas, índices y estados en JetBrains Mono con cifras tabulares.
- **Do** abrir cada sección con filete superior y escaleta `NN / NN` en mono.
- **Do** mantener el movimiento por debajo de 300ms, con `transform` y `opacity`, y dar alternativa con `prefers-reduced-motion`.

### Don't:
- **Don't** usar sombras, degradados morados, glassmorphism ni brillos para separar capas.
- **Don't** introducir un segundo color de acento en la web oscura; en las demos, el acento lo cambia solo la marca blanca.
- **Don't** usar el rojo como color decorativo de texto o de fondo de sección (la segunda línea de la frase del hero es la única excepción).
- **Don't** encender un piloto en rojo para algo que no está vivo; el piloto apagado es #323232.
- **Don't** poner bordes laterales de color en las losas ni marcas de categoría sobre los titulares: la fila meta y la escaleta solo llevan datos (lugar, año, índice, estado).
- **Don't** usar logos de terceros ni emojis; iconos de trazo de 1,75 y texto.
- **Don't** usar la tinta apagada (#6e6b66) para texto que haya que leer a tamaño pequeño.
