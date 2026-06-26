/**
 * Single source of truth for the proposal content.
 * Edit values here to retarget price, scope, timeline or copy —
 * section components are presentational and read from this file.
 */

export const client = {
  name: "Cheeky Media",
  site: "cheekymediaworld.com",
  logo: "/images/cheeky-media-white.png",
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
  "Original photo / video shoots",
  "Bespoke third-party / API integrations",
  "Ongoing maintenance or retainer support",
  "Brand identity / logo redesign",
] as const;

/** Things Broadbrand can take care of if Cheeky Media needs them. */
export const weCanHelpWith = [
  {
    title: "Copywriting — if you need it",
    body: "You know your work best, so you're welcome to supply the words. But if you'd rather we handle it, we can write the site copy for you. Just say the word.",
  },
  {
    title: "Stock photography",
    body: "Where you don't have imagery, we'll source and licence high-quality stock photography that fits the brand and fills the gaps.",
  },
] as const;

/** What Cheeky Media supplies so we can hit the ground running. */
export const clientProvides = [
  {
    title: "CI / brand guidelines",
    body: "Your corporate identity guide — colours, typography, tone and usage rules — so the rebuild stays true to the brand.",
  },
  {
    title: "Logo files",
    body: "Logo assets in all formats (vector preferred: SVG / EPS / PDF, plus PNG), including any variations.",
  },
  {
    title: "Work-done assets",
    body: "Your portfolio pieces — project stills, video, client names and any details you want featured across Commercials, Corporate, Digital, Film and TV.",
  },
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
    a: "You're welcome to supply the words — you know your work best — but if you'd rather not, we can do the copywriting for you. Same with imagery: where you don't have your own, we'll source and licence stock photography that fits the brand. We'll just need your CI guidelines, logo files and portfolio (work-done) assets to build around.",
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

export const hosting = {
  intro:
    "This site is hosted on Vercel, a managed platform used to deliver fast, secure websites to a global audience. Hosting is billed monthly, so the running cost stays predictable and easy to manage.",
  plans: [
    {
      name: "Hobby",
      tag: "Free",
      recommended: false,
      price: "Free",
      priceNote: "",
      features: [
        "1 million edge requests per month",
        "100 GB fast data transfer per month",
        "1 million function invocations per month",
        "5,000 image transformations per month",
        "Global CDN, HTTPS/SSL, DDoS mitigation, Web Application Firewall",
        "Automatic CI/CD and unlimited deployments",
      ],
      limitation:
        "Not licensed for commercial or client sites, so it is not suitable as the live hosting plan for this project. Useful only for testing and previews.",
    },
    {
      name: "Pro",
      tag: "Recommended",
      recommended: true,
      price: "$20 / month",
      priceNote: "includes $20 of usage credit",
      features: [
        "10 million edge requests per month included, then $2 per 1 million",
        "1 TB fast data transfer per month included, then $0.15 per GB",
        "1 million function invocations per month included, then $0.60 per 1 million",
        "5,000 image transformations per month included",
        "Global CDN, HTTPS/SSL, DDoS mitigation, Web Application Firewall",
        "Faster builds with no queues, team collaboration, advanced spend management",
        "Licensed for commercial and client use",
      ],
      limitation: "",
    },
  ],
  recommendation:
    "Pro is the right plan for a live client site, because the free Hobby tier is not licensed for commercial use. For a marketing site of this size, normal monthly traffic sits comfortably inside the included Pro allowances, so the realistic ongoing hosting cost is the $20 per month base. Overage charges only apply at high traffic volumes, and a spend limit can be set so costs never exceed an agreed monthly cap.",
  currencyNote:
    "Pricing is shown in USD. Read these figures as an approximate ZAR equivalent at the current exchange rate: [ZAR PLACEHOLDER].",
} as const;

export const nav = [
  { label: "The case", href: "#case" },
  { label: "Scope", href: "#scope" },
  { label: "Process", href: "#process" },
  { label: "Investment", href: "#investment" },
  { label: "Hosting", href: "#hosting" },
  { label: "FAQ", href: "#faq" },
] as const;
