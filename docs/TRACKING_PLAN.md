# Tracking Plan

Measurement plan for the proposal site (and the pattern carried into the rebuild).

## Google Analytics (GA4)

- **Placeholder:** `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`) set via env var.
- Loaded in `src/app/layout.tsx` only when the env var is present.
- Until a real ID is supplied, analytics stays disabled (no-op).

## Event tracking placeholders

Track intent signals on the proposal:

| Event                | Trigger                                          |
| -------------------- | ------------------------------------------------ |
| `view_pricing`       | Pricing section enters viewport.                 |
| `cta_click`          | Any "Approve / Get started" CTA click.           |
| `scope_expand`       | Accordion item in scope/FAQ opened.              |
| `contact_click`      | Email / phone link clicked.                      |
| `form_submit`        | Enquiry form submitted (see below).              |

Implement as a thin `track(event, params)` wrapper that forwards to GA4 + Vercel
Analytics; safe no-op when neither is configured.

## Form submission tracking

- On successful submit, fire `form_submit` with `{ form: "proposal_enquiry" }`.
- Capture source/UTM params if present on the URL and pass them through.

## Vercel Analytics (option)

- `@vercel/analytics` + `@vercel/speed-insights` can be enabled with one component
  in the root layout. Recommended — zero-config, privacy-friendly, free on Vercel.

## Conversion goals (placeholder)

1. **Primary:** proposal approval / "Get started" CTA click.
2. **Secondary:** enquiry form submission.
3. **Micro:** pricing viewed, scope expanded, contact clicked.

> All IDs and goal definitions are placeholders until the client confirms which
> analytics accounts to use.
