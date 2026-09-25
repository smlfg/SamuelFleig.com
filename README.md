# samuelfleig.com

Persönliche Dachseite von Samuel Fleig — ein Einstieg mit drei Türen: Arbeit, Lernen und Leben.

Live unter [https://samuelfleig.com](https://samuelfleig.com).

## Aufbau

- `index.html` — die gesamte Seite als semantisches HTML, ohne Template-Engine
- `style.css` — Styling inkl. Dark-/Light-Theme und selbst gehosteter Schriften
- `script.js` — Vanilla-JS: das Tür-System (Auf-/Zuklappen der drei Bereiche) mit ARIA-Support
- `fonts/` — selbst gehostete Webfonts (keine externen Requests, offline-fähig):
  - Instrument Serif
  - Newsreader
  - IBM Plex Mono
  - alle lizenziert unter SIL Open Font License
- `.gitignore` — private und lokale Dateien vom Repo fernhalten

## Lokal ansehen

```bash
python3 -m http.server
```

Dann im Browser die angezeigte lokale Adresse öffnen.

## Deployment

Die Seite ist ein Cloudflare Worker mit Static Assets. Deploy aus einem Ordner, der nur die Seitendateien enthält (`index.html`, `style.css`, `script.js`, `fonts/`):

```bash
npx wrangler deploy --assets . --name samuelfleig-com --compatibility-date 2026-09-25 \
  --domain samuelfleig.com --domain www.samuelfleig.com
```

## Lizenz

- **Code** (`index.html`, `style.css`, `script.js`): alle Rechte vorbehalten.
- **Fonts** (`fonts/`): SIL Open Font License (OFL).