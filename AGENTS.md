# AGENTS.md

Single-package Vite SPA (React 19 + Tailwind 4 + DaisyUI 5), deployed as static files to Firebase Hosting and Vercel. No backend.

## Commands

- `npm run dev` / `npm run build` / `npm run preview` / `npm run lint`. There is **no** test or typecheck script (no test runner, no TypeScript project) — don't invent one; verify with `npm run lint` + `npm run build`.
- ESLint 9 flat config (`eslint.config.js`) only checks `**/*.{js,jsx}`; `dist/**` ignored. `no-unused-vars` and `react-refresh/only-export-components` are warnings; `react/prop-types` and `react-in-jsx-scope` are off — no PropTypes needed.

## Setup gotcha

- Contact form needs three Vite env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` (read in `src/lib/publicApi.js`). `.env` and `.env.local` are gitignored; Vite loads either.
- README and `publicApi.js` mention `.env.example`, but that file is **not in the repo** — create `.env` manually with those keys. Without them `sendContactMessage` throws "not configured yet".

## Where things are wired

- Entry: `src/main.jsx`; routes in `src/router/router.jsx` under `MainLayout`: `/`, `/about`, `/projects`, `/projects/:id`, `/contact`. Only Projects and ProjectDetails are lazy-loaded (Suspense fallback `SiteLoader`); keep that pattern for new heavy pages.
- Project content lives in `src/components/data/projects.js`; `src/lib/publicApi.js` maps it (accepts `techStack`/`features` as arrays or comma-separated strings). Screenshots: `src/assets/Project-img/`. Several images are still placeholders (`// TODO: replace ...`) and some `challenges`/`futurePlans` are marked `// verify` — don't treat their text as confirmed fact.
- Skills: `src/components/SkillBar.jsx`. Resume URL/filename constants: `src/lib/resume.js`; the PDF must be `public/Md-Abu-Hanif-Resume.pdf` (exact name).
- `src/components/ChatBot/ChatBot.jsx` is a rule-based keyword FAQ with hard-coded answers — no AI/backend. `firebase` is a dependency but only used as a skill label (`src/lib/techIcons.js`) and for Hosting; there are no Firebase SDK imports in `src`. Edit FAQ data there for bot answers.
- `@/` resolves to `src/` in both `vite.config.js` and `jsconfig.json`. `vite.config.js` pins React/Router and framer-motion into `manualChunks` for caching — avoid moving those imports casually.

## Styling / build quirks

- Tailwind CSS 4 via the `@tailwindcss/vite` plugin; styles start at `src/index.css` (`@import "tailwindcss"; @plugin "daisyui";`). There is **no** `tailwind.config.js` (`components.json` sets `"config": ""`) — theme/config edits go in CSS. Fonts are `<link>`ed in `index.html`, not CSS `@import`.
- Both `firebase.json` (`public: dist`, SPA rewrite) and `vercel.json` (SPA rewrite) exist. README documents Firebase only; keep both rewrite configs in sync when adding routes.

## Performance conventions

- `src/lib/perf.js` computes `isLowEnd`, `isLiteMode`, `canHover` once at startup and `applyPerfClasses()` (called in `main.jsx`) sets `.perf-lite` / `.perf-low` on `<html>`. Heavy effects (pointer tracking, tilt, canvas, ambient loops) are gated on those flags in Banner, SiteBackground, BorderGlow, MagicBento, ProjectStack, etc. Any new animation/canvas effect must honor these flags or the matching CSS classes in `src/index.css`.

## Stale docs

- `main.jsx` claims Google Analytics gtag is loaded in `index.html`; no gtag snippet exists there. Don't add a "second" tracker based on that comment.
