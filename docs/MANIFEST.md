# Manifest — was dieses Repo veroeffentlicht (und was nicht)

## Oeffentlich (im Repo, getrackt, deploybar)

- `index.html` — die Site selbst.
- `style.css`, `script.js` — Verhalten und Aussehen.
- `fonts/*.woff2` — selbst gehostete Schriften, lizenziert unter
  SIL Open Font License (OFL).
- `README.md` — Repo-Landing.
- `docs/` — diese Doku.

## Privat / lokal (via `.gitignore` ausgeschlossen)

- `landing/` — Werkstattordner mit allen Konzept- und Polish-Varianten.
  Nicht oeffentlich; Quelle der jeweils aktiven Live-Variante.
- `PRIVATE_PROFILE.md`, `POSITIONING.md` — interne Arbeitshypothesen
  und Quell-Snapshots. Nicht veroeffentlichen.
- `Projek-Managment/` — HAI-/Agent-Artefakte, die der hauseigene
  Workflow lokal erstellt. Wird auf Anfrage angelegt und liegt
  automatisch draussen.
- `.env*`, `.dev.vars`, `*.pem`, `*.key` — Secrets, Schluessel,
  Tokens, Wrangler-Cache (`./.wrangler/`).
- `node_modules/`, `*.log` — Build- und Laufzeitabfaelle.

## Sicherheits- und Datenschutz-Grenzen

- Keine Tracker, kein Analytics, kein externes Skript.
- Externe Links sind hart begrenzt auf das, was die Site selbst nennt:
  `mailto:hallo@samuelfleig.com`,
  `github.com/smlfg*`,
  `human-agent-interface.com`,
  `medium.com/@smlflg`,
  `huggingface.co/smlflg`,
  `linktr.ee/smlflg`,
  `open.spotify.com/user/smlflg`,
  `chess.com/member/samuelflg`,
  `instagram.com/samuel_fleig`,
  `twitter.com/Samuelflg1`,
  `de.quora.com/profile/Samuel-Fleig`,
  `genius.com/SamuelFlg`.
- Keine Zahlen, keine Kundenstimmen, keine Firmen, keine Fotos von
  Personen — wo Inhalt fehlt, sichtbare Platzhalter in eckigen
  Klammern (`[Notizen folgen]`, `[Impressum folgt]`).
- Impressum folgt: bewusst als Platzhalter, nicht improvisiert.

## Lizenzlage

- **Code** (`index.html`, `style.css`, `script.js`, Doku): alle Rechte
  vorbehalten, sofern `README.md` nicht etwas anderes sagt.
- **Fonts** (`fonts/`): SIL Open Font License (OFL), entsprechend der
  Lizenzhinweise im `README.md`.
