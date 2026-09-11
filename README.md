# Home of Joy Welfare Foundation

Production frontend for [Home of Joy Welfare Foundation](https://github.com/ikramzafar0343/Homeofjoy) — a Next.js App Router site for the foundation’s mission, work areas, impact, locations, and ways to get involved across Pakistan.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js **16.3.3** (App Router) |
| UI | React 19, TypeScript (strict), Tailwind CSS 3.4 |
| Motion | GSAP 3 + `@gsap/react` + ScrollTrigger |
| Images | `next/image`, WebP only (AVIF disabled) |
| Deploy target | **Vercel** |

Backend and database folders are intentionally deferred. This repository ships the live **Frontend** only.

## Repository layout

```
Homeofjoy/
├── README.md
├── .gitignore
└── Frontend/          ← Vercel Root Directory
    ├── package.json
    ├── next.config.mjs
    ├── vercel.json
    ├── .env.example
    ├── public/
    └── src/
```

## Quick start (local)

```bash
cd Frontend
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment variables

Copy [`Frontend/.env.example`](Frontend/.env.example) to `Frontend/.env.local` (never commit real secrets).

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Public origin for canonical URLs and Open Graph (e.g. `https://your-domain.com`) |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional | Verified contact form POST URL. If empty, the form does **not** fake a successful send |
| `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` | Optional | Verified newsletter POST URL. If empty, subscribe explains that signup is not connected yet |

On Vercel: **Project → Settings → Environment Variables** → add the same keys for Production (and Preview if needed).

## Deploy on Vercel (recommended)

The empty GitHub remote is ready for import. Use these settings so deploy works on the first try:

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** `ikramzafar0343/Homeofjoy`.
2. Set **Root Directory** to `Frontend` (critical — the Next.js app lives there).
3. Framework Preset: **Next.js** (auto-detected via `Frontend/vercel.json`).
4. Build command: `npm run build` · Install: `npm install` · Output: default Next.js.
5. Add env vars from the table above (`NEXT_PUBLIC_SITE_URL` should be your Vercel URL or custom domain).
6. Deploy.

### CLI alternative

```bash
npm i -g vercel
cd Frontend
vercel
```

When linking a monorepo from the repo root, still set the project root to `Frontend`.

### After deploy

- Point a custom domain in Vercel if needed.
- Set `NEXT_PUBLIC_SITE_URL` to that domain and redeploy.
- Contact and newsletter stay honest until real endpoints are configured.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about` | Mission, founder, story, vision |
| `/our-work` | Six areas of service |
| `/impact` | Impact storytelling + partners |
| `/locations` | Where we work |
| `/contact` | Contact form |
| `/donate` | Give info → contact (no payment UI yet) |
| `/volunteer` | Volunteer info → contact |
| `/partner` | Partnership info → contact |
| `/privacy` | Privacy placeholder (legal review pending) |
| `/terms` | Terms placeholder (legal review pending) |

## Production notes

- **No invented payment, bank, or legal policy text.** Donate and legal pages stay transparent until verified details exist.
- **No Lenis / Locomotive.** Scroll motion uses GSAP ScrollTrigger only.
- **Fonts:** Nourd is loaded via `next/font/local` from `Frontend/src/fonts/`.
- **Cookie preference** is stored in `localStorage` (`hojCookieConsent`); necessary-only and accept flows are supported.
- Story “Watch” modal plays video when `storyMedia.videoSrc` is set in `Frontend/src/features/about/storyContent.ts`; until then it shows still media with an honest pending note.

## License / ownership

Private foundation project content. Code in this repository is for Home of Joy Welfare Foundation website delivery.
