# WebMedic - Agencia de Marketing Médico

## Stack
- Astro 6 (static output)
- TypeScript (strict)
- Tailwind CSS 4 (via @tailwindcss/vite)

## Commands
- `npm run dev` — Development server
- `npm run build` — Production build (output: dist/)
- `npm run preview` — Preview production build

## Project Structure
```
src/
├── components/
│   ├── layout/     → Header, Footer, SEO
│   ├── ui/         → Button, ServiceCard
│   └── sections/   → HeroSection, FeaturesSection, CTASection
├── data/           → Content data (services.ts)
├── layouts/        → BaseLayout.astro
├── pages/          → index, servicios, 404
└── styles/         → global.css (Tailwind config + theme)
```

## Conventions
- Component names: PascalCase
- Data files: camelCase
- All content/copy lives in `src/data/` — never hardcode in components
- Colors: `primary-*` (blue) and `accent-*` (teal) defined in global.css @theme
- Layout: max-w-6xl centered, px-4 sm:px-6 lg:px-8
- SEO: use the SEO.astro component via BaseLayout props

## Deployment
- Static output, ready for Vercel or Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
