# AMR solutions — Showcase Landing Page

Production-ready marketing site for **AMR solutions**, an offline-first AIoT precision agriculture platform.

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- TypeScript
- Tailwind CSS v4 (light & dark themes via `next-themes`)
- [next-intl](https://next-intl.dev/) — English, French, Arabic (RTL)
- [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) (also `/fr`, `/ar`).

Use the navbar controls to switch **language** and **light/dark** theme.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── messages/
│   ├── en.json
│   ├── fr.json
│   └── ar.json
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
├── components/
│   ├── LocaleSwitcher.tsx
│   ├── ThemeToggle.tsx
│   └── providers/Providers.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SolutionOverview.tsx
│   ├── CompetitiveEdge.tsx
│   ├── QuoteCalculator.tsx
│   ├── WaitlistForm.tsx
│   └── AboutSection.tsx
└── lib/
    ├── quote.ts
    └── scroll.ts
```
