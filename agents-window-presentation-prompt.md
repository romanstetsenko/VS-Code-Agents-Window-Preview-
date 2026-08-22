Create a slide presentation titled "VS Code Agents Window (Preview)".
Audience: developers. Language: English. Tone: clear, professional, demo-oriented.

Source content: mirror the structure and facts from
https://code.visualstudio.com/docs/agents/run/agents-window (do not invent features).

GENERAL RULE — frame-by-frame state transitions:
- Decompose EVERY feature into discrete visual STATE TRANSITIONS. Each transition (a change in what's on screen) = its own slide/frame.
- Each frame: one MAIN UI image (screenshot or generated) as the slide background/center.
- Add a POPUP / CALLOUT overlay pointing at the exact UI element that changes or is acted on. Popup = one short verb phrase (e.g. "Click Open in Agents", "Select New", "Choose harness").
- Keep text MINIMAL per frame — one idea, one change. This makes the deck easy to present and lets frames be sequenced into animation (each frame = one animation step).
- After a sequence of action frames, include a RESULT frame: the end state + 2-4 bullets on HOW IT HELPS the developer (benefit, time saved, durability of context, parallel work).
- So a feature = [action frame 1 -> action frame 2 -> ... -> result frame], not just 2 slides.

Deck order (each feature = sequence of transition frames + a result frame, except intro/closing):
1. Intro: What the Agents window is (dedicated VS Code window, agent-first, works across workspaces). Single slide.
2. Why use it — SPLIT INTO 3 SEPARATE SLIDES, one per benefit (not combined):
   a. Orchestrate work across projects from one place (manage sessions for all workspaces without separate windows).
   b. Work agent-first, not code-first (describe outcome in high-level requirements; agent figures out implementation).
   c. Switch freely between surfaces (move to Chat view anytime; shared sessions/settings/keybindings, no lost context).
   Each slide: short statement of the benefit + one line on how it helps.
3. Open the Agents window — break into transition frames, one per visual change:
   a. Frame: main editor window, "Open in Agents" button in title bar highlighted (popup: "Click Open in Agents").
   b. Frame: Command Palette open with "Chat: Open Agents Window" (popup: "Ctrl+Shift+P -> Chat: Open Agents Window").
   c. Frame: welcome page "Try out the new Agents window" link (popup).
   d. Frame: terminal with `code --agents` typed (popup).
   e. Frame: browser at insiders.vscode.dev/agents (popup).
   f. Result frame: dedicated Agents window opens, already signed in if GitHub connected + how it helps (one window for agents, no context switch).
4. Interface overview — frames pointing out each of the 5 areas (Sessions list, Customizations panel, Chat area, Changes panel, Files panel) one at a time, then result frame explaining what each area is for.
5. Understand the active session — frame: select a session in the list -> result frame: Chat/Files/Changes/Terminal/Tasks/Browser update to that session; active session highlighted + how it helps (focus one project at a time).
6. Start an agent session — frames: New (Ctrl+N) -> hover workspace + -> pick workspace -> choose harness (Copilot, Claude, Codex) -> type prompt + Enter -> result frame: agent works, Files & Changes update live; can run in background (Alt+Enter) + how it helps.
7. Start a quick chat — frames: + on Chats header (Ctrl+K Ctrl+N) -> choose harness -> type prompt -> result frame: lightweight chat not scoped to a workspace, appears in Chats group + how it helps.
8. Review & finish — split into:
   a. Inspect files & changes — frames: select Files / Changes -> pick diff -> result frame: review diffs, leave range feedback + how it helps.
   b. Validate locally — frames: open integrated browser / Add Task (build/test) -> result frame: verify changes don't break project, run dev server + how it helps.
   c. Commit changes — frame: Commit Changes in Changes view -> result frame: VS Code generates commit message, commits all current changes + how it helps.
9. Work with multiple sessions — frames: Open to the Side / drag / Alt+click -> result frame: compare results, Ctrl+1..9 to focus, pin views + how it helps.
10. Customize & configure — frames: Customizations panel / settings scope / extensions.supportAgentsWindow -> result frame: agents, skills, instructions, hooks, MCP; settings carry over, can override per window + how it helps.
11. Limitations & Next steps — single closing slide (preview caveats; links to Chat overview, manage sessions, review edits, remote sessions).

Style rules:
- Keep each frame uncluttered; one idea / one visual change per frame.
- Popups must clearly point to the exact UI element (arrow/connector).
- Use the official VS Code screenshot URLs from the docs where available; otherwise describe the image to generate.
- No invented features; if unsure, omit rather than guess.
- Frames can be sequenced into animation; each frame = one animation step.
