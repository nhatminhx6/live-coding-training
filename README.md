
# React Live‑Coding Questions (Vite + TS + Tailwind)

A lightweight React app to host hundreds of JavaScript/algorithm live‑coding questions.
- Vite + React + TypeScript
- Tailwind CSS
- Typed local data (`src/data/questions/*.ts`)
- Search and filter by difficulty
- Expandable question details and an in-page test runner backed by `src/practice/*.ts`

## Quick Start

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:5173
```

> Node 18+ recommended.

## Add new questions

Open the matching file in `src/data/questions/` and append a new item following the `Question` interface.
Each question can define:
- `functionSignature` and `starterCode`
- `testCases` with `input` and `output`
- optional `hints`

## Notes

- Run `pnpm gen:practice` after adding data to scaffold any missing solution files.
- The runner dynamically imports the matching module from `src/practice/` and supports sync or async solutions.
