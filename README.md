# VS Code Agents Window (Preview) — Presentation

A slide deck for developers introducing the **VS Code Agents Window (Preview)**.
Built with [reveal.js](https://revealjs.com/) and hosted for free on **GitHub Pages**.

Content mirrors the official docs:
https://code.visualstudio.com/docs/agents/run/agents-window.

## View the deck

Open `index.html` in any browser, or serve locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Host on GitHub Pages (free)

1. Push this repo to GitHub (already configured: `origin` →
   `romanstetsenko/VS-Code-Agents-Window-Preview-`).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the branch (`agents/github-hosted-presentation-setup` or `main`) and the
   **/ (root)** folder, then **Save**.
5. Wait ~1 minute. The deck is live at:
   `https://<user>.github.io/<repo>/`

No build step needed — `index.html` loads reveal.js from a CDN.

## Structure

- `index.html` — the full deck. Each feature is decomposed into discrete
  **transition frames** (one visual change per slide) plus a **result frame**
  with benefit bullets, per the presentation spec.
- Official VS Code screenshot URLs are used directly from
  `code.visualstudio.com/assets/docs/agents/agents-window/...`.
  Frames without an official screenshot use a styled placeholder describing the
  image to generate.

## Presenting

- `→` / `Space` — next frame
- `←` — previous frame
- `Esc` — overview grid
- `F` — fullscreen
- `S` — speaker notes (none yet)
