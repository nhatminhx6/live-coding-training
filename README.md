
# React Live‑Coding Questions (Vite + TS + Tailwind)

A lightweight React app to host hundreds of JavaScript/algorithm live‑coding questions.
- Vite + React + TypeScript
- Tailwind CSS
- Local JSON data (`src/data/questions.js`)
- Search, filter by difficulty
- Question page with starter code + in‑page test runner and progress saved to `localStorage`

## Quick Start

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:5173
```

> Node 18+ recommended.

## Add new questions

Open `src/data/questions.js` and append a new item following the `Question` interface.
Each question can define:
- `starterCode` exporting a function
- `testCases` with `input` and `output`
- optional `hints`

## Notes

- The test runner uses `Function` to evaluate user code **in‑page**. Do not paste untrusted code.
- For production, consider a proper sandbox (e.g., Web Worker + limited API surface).
