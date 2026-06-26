/**
 * Single source of truth for the proposal content.
 * Edit values here to retarget price, scope, timeline or copy —
 * section components are presentational and read from this file.
 */

export const client = {
  name: "Cheeky Media",
  site: "cheekymediaworld.com",
  tagline: "Your brand is more than a logo. It's a story — and we're here to tell it.",
  positioning: "Culture engineers, audience whisperers, and storytellers with purpose.",
  email: "admin@cheekymedia.co.za",
  phone: "011 258 4465",
  address: "43 Central St, Houghton Estate, Johannesburg, 2198",
} as const;

export const author = {
  company: "Broadbrand",
  contactName: "Shakier",
  email: "Shakierg@broadbrand.co.za",
  phone: "0861 374 374",
  domain: "broadbrand.co.za",
  strapline: "Connecting brands across borders with unified digital experiences.",
  logo: "/images/broadbrand-white.png",
  preparedFor: "Cheeky Media",
  date: "June 2026",
  validForDays: 30,
} as const;

export const investment = {
  amount: "R30,000",
  label: "Fixed fee",
  note: "Once-off. No surprises. Covers everything in the scope below.",
  terms: [
    "50% to begin, 50% on launch",
    "Fixed scope, fixed price",
    "Quote valid for 30 days",
  ],
} as const;

export const hero = {
  eyebrow: "Website rebuild proposal",
  headline: "A website as bold as the work you make.",
  sub: "Cheeky Media tells brand stories for a living. Your own site should be the loudest one in the room — fast, striking, and built to turn visitors into briefs. Here's how we get there.",
  primaryCta: "See the scope",
  secondaryCta: "Talk to us",
} as const;

/** The case for change — honest, specific, not insulting. */
export const problems = [
  {
    title: "The current site under-sells the work",
    body: "The portfolio is the strongest asset Cheeky Media has — yet it's buried behind a dated layout that doesn't match the calibre of the productions inside it.",
  },
  {
    title: "Slow, heavy, and not mobile-first",
    body: "Most of your audience arrives on a phone. A modern build loads in under a second and looks deliberate on every screen size.",
  },
  {
    title: "Hard to update, hard to grow",
    body: "Adding a new project or service shouldn't need a developer every time. The rebuild makes content changes simple and the structure easy to extend.",
  },
  {
    title: "No clear path to a brief",
    body: "Visitors admire the work, then leave. A focused enquiry flow and clear calls to action turn that attention into conversations.",
  },
] as const;

export const services = [
  { name: "Digital Media", desc: "Content that travels — built for the feeds your audience actually lives in." },
  { name: "Brand Integration", desc: "Stories woven into culture, not bolted onto it." },
  { name: "Design", desc: "Identity and craft that makes a brand impossible to ignore." },
  { name: "Development", desc: "The technical muscle to ship what design promises." },
  { name: "Branding", desc: "Positioning, voice and the throughline that holds it all together." },
] as const;

export const deliverables = [
  {
    title: "Custom, responsive build",
    body: "Mobile-first design on Next.js + Tailwind. Up to 5 core page templates: Home, About, Services, Portfolio, Contact.",
  },
  {
    title: "Filterable portfolio",
    body: "A showcase that does the work justice — filterable by Commercials, Corporate, Digital, Film and TV.",
  },
  {
    title: "Reusable component library",
    body: "A consistent system of sections and components so the site stays on-brand as it grows.",
  },
  {
    title: "SEO foundations",
    body: "Semantic markup, meta and Open Graph tags, sitemap and clean URLs so you're found and shareable.",
  },
  {
    title: "Lead capture + routing",
    body: "A contact and enquiry flow that routes straight to your inbox — every visitor a potential brief.",
  },
  {
    title: "Analytics + launch",
    body: "GA4 and Vercel Analytics wired in, deployed to Vercel with your domain connected.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discovery & sign-off",
    body: "Kick-off call, confirm scope, gather assets and lock the sitemap.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design direction",
    body: "Homepage concept and core component styling — approved before we build a single page.",
    duration: "Week 1–2",
  },
  {
    step: "03",
    title: "Build",
    body: "All pages developed against the approved direction, fully responsive.",
    duration: "Week 2–3",
  },
  {
    step: "04",
    title: "Content & review",
    body: "Real content loaded, one structured review round per page.",
    duration: "Week 4",
  },
  {
    step: "05",
    title: "QA & launch",
    body: "Cross-device QA, analytics live, deployed to production on your domain.",
    duration: "Week 4",
  },
] as const;

export const included = [
  "Custom responsive design (mobile-first)",
  "Up to 5 core page templates",
  "Reusable shadcn/ui component library",
  "On-page SEO basics (meta, OG, sitemap)",
  "Contact form with email/lead routing",
  "GA4 + Vercel Analytics setup",
  "Vercel deployment + domain connection",
  "One revision round per page",
] as const;

export const excluded = [
  "E-commerce / payments",
  "Custom or headless CMS build",
  "Copywriting & photo/video production",
  "Bespoke third-party / API integrations",
  "Ongoing maintenance or retainer support",
  "Brand identity / logo redesign",
] as const;

export const whyUs = [
  {
    stat: "< 1s",
    label: "Target load time",
    body: "Built on Next.js + Vercel's edge network — fast by default.",
  },
  {
    stat: "5",
    label: "Page templates",
    body: "A complete, cohesive site — not a one-page placeholder.",
  },
  {
    stat: "4 wks",
    label: "To launch",
    body: "A tight, milestone-driven timeline from kick-off to live.",
  },
  {
    stat: "100%",
    label: "Fixed price",
    body: "One number. No scope creep, no hourly surprises.",
  },
] as const;

export const faqs = [
  {
    q: "Why R30,000 — what's included?",
    a: "It's a fixed fee covering everything in the scope: design, build, up to 5 page templates, SEO basics, lead capture, analytics and launch. The full breakdown is in the deliverables above.",
  },
  {
    q: "Who writes the content?",
    a: "You own the words and visuals — you know your work best. We handle structure, light editing and how it's presented. Full copywriting or photo/video production can be added as a separate line item.",
  },
  {
    q: "Can we update it ourselves afterwards?",
    a: "Yes. The build is structured so adding a project or editing a service is straightforward. If you'd like a full visual CMS, we can scope that separately.",
  },
  {
    q: "What about hosting and the domain?",
    a: "The site deploys to Vercel (fast, reliable, generous free tier). We connect your existing domain at launch — you keep full ownership of both domain and accounts.",
  },
  {
    q: "How long until we're live?",
    a: "Roughly four weeks from kick-off, assuming content and feedback arrive on schedule. The timeline above shows each milestone.",
  },
  {
    q: "What happens after launch?",
    a: "The site is yours. We can hand over cleanly, or set up an ongoing support arrangement — quoted separately if you'd like it.",
  },
] as const;

export const nav = [
  { label: "The case", href: "#case" },
  { label: "Scope", href: "#scope" },
  { label: "Process", href: "#process" },
  { label: "Investment", href: "#investment" },
  { label: "FAQ", href: "#faq" },
] as const;
