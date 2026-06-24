# 📋 CHANGELOG — Demo Clínica Aurora
> Registro de versiones. El número de versión es **visible en la demo** (pantalla de inicio + etiqueta en la esquina). Regla: cada ajuste sube de versión y se anota aquí. Así se descartan modelos anteriores de un vistazo.
> Enlace: https://lualeji7509-del.github.io/clinica-aurora-demo/

## v2.2 — 2026-06-24 (ACTUAL ✅)
- 🎬 **Vídeo real en el acto emocional** (clips Pexels, gratis y de uso comercial libre, sin atribución): primer plano de sonrisa → mujer segura en reunión → persona segura. Verticales, <0,25 MB cada uno (`img/aurora_emo0-3.mp4`).
- 🎯 **Sincronía exacta palabra↔imagen↔voz:** cada frase del acto muestra SU clip (motor cambiado a `lifeShow(ti)`, una imagen por paso). 1 "sonríe sin taparse" → sonrisa; "primera impresión" → reunión; "confianza en uno mismo" → retrato seguro.
- 🔌 **Snippet de incrustación** (`embed/aurora-widget.js`) + web de clínica de ejemplo (`embed/ejemplo-clinica.html`): botón flotante "▶ Tour con voz" que abre la demo en popup sobre CUALQUIER web existente, con UNA línea de código.

## v2.1 — 2026-06-24
- 🅰️🅱️ **Gancho A/B elegible en el inicio:** dos botones. **B** = aversión a la pérdida ("tu web pierde pacientes"). **A** = promesa ("consigue más pacientes / convierte más visitas"). Cada uno usa su propio audio (B = voz/0.mp3, A = voz/0a.mp3); el resto del tour es idéntico. Sirve para comparar y luego quedarnos con el que más convierta.
- 🗂️ Copias archivadas en `versiones/` (index-v2.0.html, index-v2.1.html) — no se sobrescriben modelos anteriores.

## v2.0 — 2026-06-24
- ⏱️ **Ritmo más ágil:** pausa en pasos "toca aquí" 7 s → 2,3 s; hueco entre frases 0,85 s → 0,34 s.
- 🔇 **Silencio recortado** de inicio/cola en los 23 audios (sin tocar pausas internas). Narración ≈ 1,8 min.
- 💰 **Gancho nuevo (aversión a la pérdida):** "Ahora mismo, tu web deja escapar pacientes cada día… deja que te enseñe a recuperarlos."
- 👁️ **Antes/después pulido:** paneles en degradado (frío→cálido), subtítulos, slider elegante. Emojis conservados.
- ✨ Transición entre pantallas más viva (0,6 s → 0,42 s).
- 🏷️ Añadido número de versión visible.

## v1.0 — 2026-06-24
- Primera versión. 10 escenas / 23 pasos. Marca teal + champán, logo "A", voz Ximena, titulares serif.
- Arco: intro → home paciente → tratamientos → antes/después → financiación → pedir cita → confirmación → acto "El número" → emocional → cierre con CTA.

---
### Pendiente de decidir (variantes)
- **Gancho A/B:** existe solo el B (aversión a la pérdida). Falta producir el A (promesa/curiosidad) para comparar y elegir. → al hacerlo: v2.1-A.
