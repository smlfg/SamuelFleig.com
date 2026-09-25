# Repository Map — SamuelFleig.com

Stand: lokale Repo-Sicht. Pfade sind aus `git ls-files` und
`tree -L 2` abgeleitet, nichts ist erfunden.

## Zweck

`samuelfleig.com` ist die persoenliche Dachseite von Samuel Fleig.
Diese Repo enthaelt genau den statischen Source, der ueber den
Cloudflare-Worker `samuelfleig-com` ausgeliefert wird. Kein Build,
kein Framework, keine externen Skripte, keine externen Fonts.

## Top-Level-Pfade

| Pfad           | Rolle                                                              | Oeffentlich? |
| -------------- | ------------------------------------------------------------------ | ------------ |
| `index.html`   | Die gesamte Seite (semantisches HTML, einzige Page)                | ja           |
| `style.css`    | Styling, Light/Dark-Theme, selbst gehostete Fonts via `@font-face` | ja           |
| `script.js`    | Vanilla-JS: das Tuer-System mit ARIA, ohne JS ist alles offen      | ja           |
| `fonts/`       | Selbst gehostete Webfonts (Instrument Serif, Newsreader, IBM Plex Mono), alle OFL | ja           |
| `README.md`    | Landing-Page fuer das Repo                                         | ja           |
| `docs/`        | Doku (diese Datei, `MANIFEST.md`, Inhaltsverzeichnis)              | ja           |
| `.gitignore`   | Haelt private Werkstatt und lokale Agent-Artefakte draussen       | Konfig       |

## Was bewusst NICHT in diesem Repo liegt

Diese Pfade existieren lokal und sind ueber `.gitignore` vom
oeffentlichen Repo getrennt:

- `landing/` — Werkstatt mit sechs Konzeptvarianten (v1..v6) und
  Polish-Runden. Quelle der Live-Variante, nicht selbst Teil der Site.
- `POSITIONING.md`, `PRIVATE_PROFILE.md` — interne Arbeitshypothesen.
  Nicht veroeffentlichen.
- `Projek-Managment/` — HAI-/Agent-Artefakte, die der hauseigene
  Workflow lokal ablegt. Wird bei Bedarf angelegt und liegt
  automatisch draussen.

## Wie die Repo-Inhalte zur Live-Site werden

1. Source liegt unter den oben gelisteten oeffentlichen Pfaden.
2. Build: keiner. Statische Dateien werden direkt deployt.
3. Deploy ueber den Cloudflare-Worker `samuelfleig-com`
   (`npx wrangler deploy --assets . --name samuelfleig-com ...`),
   Domains `samuelfleig.com` und `www.samuelfleig.com`.

## Drift-Risiken

- Wenn `index.html` und `landing/v6-tueren/index.html` auseinanderlaufen,
  verliert die Werkstatt ihren Bezug zur Live-Site. Sanity-Check:
  `diff -q index.html landing/v6-tueren/index.html`.
- Wenn `fonts/` waechst, ohne dass `style.css` ein passendes
  `@font-face` mitbringt, gibt es toten Asset-Code (kein sichtbarer
  Schaden, aber unnoetige Bytes).
- Wenn jemand `landing/` oder `PRIVATE_PROFILE.md` aus dem `.gitignore`
  nimmt, landen Werkstatt- und Privatinhalte im public Repo.

## Siehe auch

- `../README.md` — Einstieg.
- `MANIFEST.md` — was veroeffentlicht wird und was nicht.
