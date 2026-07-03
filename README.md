# Elevate

A product-grade e-learning marketing site built as a portfolio demo. Elevate presents a credible online course platform for developers and designers—with structured catalogs, course detail pages, pricing, creator onboarding, and a student dashboard preview.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **React Router 6** for client-side routing
- **react-hook-form** + **zod** for form validation
- **Sonner** for toast notifications

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Deploy to Vercel

1. Connect this repository to [Vercel](https://vercel.com).
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. SPA routing is handled by `vercel.json` rewrites.

No environment variables are required for the current static demo.

## Demo scope

This is a **front-end prototype**. Auth, enrollment, and payments show polished UI with honest "preview mode" toasts—they are not connected to a backend. Course and instructor data live in `src/data/`.

## Project structure

```
src/
  components/   # Shared UI (Navigation, Footer, CourseCard, etc.)
  data/         # Courses, instructors, pricing, stats
  hooks/        # usePageTitle
  pages/        # Route-level pages
```

## Author

Built by Jimcarry Ombak.
