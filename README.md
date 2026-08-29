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
- All slides use **real screenshots** of the VS Code Agents Window captured
  from `insiders.vscode.dev/agents`, resized to 992×620 to fit the frame.
  The deck has **40 slides**: intro, three "why" frames, six "open" methods
  (title bar, command palette, welcome page, terminal, browser, result), the
  five-area interface overview, active session, start-session flow, quick chat
  flow, **review flow including two new slides on leaving comments / range-based
  feedback and sending all comments to the agent**, validate locally, commit,
  multiple sessions, and customize. The trailing "Limitations & Next steps"
  slide was removed.

## Presenting

- `→` / `Space` — next frame
- `←` — previous frame
- `Esc` — overview grid
- `F` — fullscreen
- `S` — speaker notes (press to open the notes window)
