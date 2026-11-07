# Vybd

Marketing site for [Vybd](https://github.com/vybd-commerce): bringing the cost of getting a product from maker to customer as close to zero as possible.

Built with React 19, TypeScript and Vite. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev       # local dev server
npm run lint      # eslint
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  components/   page sections (Hero, SupplyChain, Cases, Compare, ...)
  data/         copy and numbers: nav, pricing, stack costs, chapters, cases
  hooks/        useReveal (scroll-in animations)
  styles/       global.css
public/         static assets (favicon, case study images)
docs/           contributor notes
```

Most copy and pricing changes only touch `src/data/`.

## Case study images

See [docs/case-images.md](docs/case-images.md) for sizing and naming.
