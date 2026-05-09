# Window to Nature

A full-screen, browser-based nature viewer built for focus and rest. Open it in a spare monitor or browser tab during deep work — beautiful photography, live wildlife cam streams, and ambient nature sounds, with a built-in focus timer.

**Live:** [window-to-nature.vercel.app](https://window-to-nature.vercel.app)

---

## What it is

Window to Nature is designed for moments at your computer when you need to think, write, or problem-solve without distractions. It sits quietly in the background — something beautiful to rest your eyes on between tasks.

- **Stills** — curated high-resolution nature photography from around the world
- **Live** — live wildlife cam streams from African nature reserves (via Africam)
- **Sounds** — ambient nature recordings: forests, rivers, rain, insects
- **Focus Timer** — a flexible Pomodoro-style timer with task tracking

---

## Features

### Stills & Live modes
Toggle between photography and live streams with the mode buttons at the top, or press `S`. Images are shuffled on every load so the experience feels fresh each visit. Navigate with the arrow buttons or `←` `→` keys.

### Ambient sounds
Eight Creative Commons ambient tracks — bird songs, mountain streams, rain, insects. The audio player expands from the top-right corner when active. Use `M` to toggle.

### Focus Timer
A flexible focus timer accessible via the clock icon (top right):

- Add up to three tasks and drag them into priority order
- Set any duration (default 25 min, adjustable from 1–180 min)
- A pill shows the current task name and countdown while the timer runs
- When the session ends, a gentle audio ping plays and ambient sounds pause
- Choose to take a break or keep going — no forced break countdown
- Tick off completed tasks as you go (they slide to the bottom with a strikethrough)

### Other
- **Fullscreen** — button top-left or press `F`
- **Auto-hiding UI** — controls fade after 3.5s of inactivity and return on any input
- **Frosted glass frame** — decorative window frame on desktop that animates in with the UI

---

## Photography & content credits

- **Photography** — [Unsplash](https://unsplash.com) (free licence, attribution shown in-app)
- **Live streams** — [Africam](https://www.africam.com/) via YouTube embeds
- **Ambient sounds** — Creative Commons licensed recordings

Photographer credit and location are shown bottom-left for every image.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `←` / `→` | Previous / next |
| `S` | Toggle Stills / Live mode |
| `M` | Toggle ambient sound |
| `F` | Toggle fullscreen |
| `Esc` | Close any open panel |

---

## Technical notes

Pure static HTML/CSS/JS — no framework, no build step, no dependencies. Works by opening `index.html` directly or serving from any static host.

```
window-to-nature/
├── index.html          Entry point
├── css/styles.css      All styles
├── js/app.js           All logic + content libraries
├── sounds/             Local ambient audio (.mp3, 160kbps stereo)
├── assets/             OG image for social sharing
└── W2N-favicon.svg     Favicon
```

Images are served directly from the Unsplash CDN. Live streams are YouTube embeds with click-through and fullscreen blocked. The focus timer uses the Web Audio API to generate its end-of-session ping — no audio file required.

---

## Made by

**[Calumma](https://www.calumma.design/)** — design studio by Emil Blūm.

---

## License

[MIT](LICENSE)
