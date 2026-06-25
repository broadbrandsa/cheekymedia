# Structure

## Folder structure

```
cheekymedia-rebuild/
├── docs/                      # Project documentation (this folder)
├── public/
│   └── images/                # Static images / assets for the proposal
├── src/
│   ├── app/                   # Next.js App Router (routes, layout, globals.css)
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives (button, card, badge, …)
│   │   └── sections/          # Proposal page sections (hero, scope, pricing, …)
│   ├── content/               # Structured content (data that drives sections)
│   └── lib/                   # Utilities (cn helper, etc.)
└── …config files
```

## Section composition rules

- Each major block of the proposal is a **section component** in
  `src/components/sections/`, named in kebab-case (e.g. `hero-section.tsx`).
- Sections are **presentational** and pull their data from `src/content/`.
- Sections compose **shadcn/ui primitives** from `src/components/ui/` — do not
  reinvent buttons, cards, badges, etc.
- The route file (`src/app/page.tsx`) imports and orders sections; it owns layout
  flow, sections own their internal markup.

## Content management approach

- Editable content lives in `src/content/` as typed TypeScript objects/arrays
  (e.g. `proposal.ts`). Copy, pricing, scope items and timeline are data, not
  hard-coded JSX.
- To update the proposal (price, dates, scope), edit `src/content/*` — no need to
  touch section markup.
- This keeps the proposal easy to re-skin or re-target for future clients.

## Naming conventions

- **Files:** kebab-case (`pricing-section.tsx`, `proposal.ts`).
- **Components:** PascalCase exports (`PricingSection`).
- **Imports:** use the `@/*` alias for everything under `src/`.
