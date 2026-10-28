# Origen

Copiada de https://github.com/samuelferfort/agent-skills (skills/showcase-video),
commit 9098a0d5362df1bb7eea518d777425e711f60805 (2026-09-30), tras revisar SKILL.md y scripts
el 2026-10-28 (docs/BRIEF.md §3).

Revisión:
- Sin claves ni credenciales. El audio se sintetiza en local (synth.ts / audio.ts).
- Red: yt-dlp contra YouTube solo para estudiar referencias (analyze_refs.py) e insignias
  oficiales de App Store y Google Play (store_badges.sh). render.mjs sirve en 127.0.0.1.
- gen-icons.mjs hace eval del array de iconos de Lucide del node_modules local.
- Requiere ffmpeg, ImageMagick 7, bun, uv y Playwright con chromium-headless-shell.
