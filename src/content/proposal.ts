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
  phone: "+27 73 388 8810",
  domain: "broadbrand.co.za",
  strapline: "Connecting brands across borders with unified digital experiences.",
  logo: "/images/broadbrand-white.png",
  preparedFor: "Cheeky Media",
  date: "June 2026",
  validForDays: 30,
} as const;

export const sow = {
  label: "Download the SOW (PDF)",
  file: "/cheeky-media-statement-of-work.pdf",
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
    body: "Mobile-first design on Next.js + Tailwind. Up to 15 core page templates, such as Home, About, Services, Portfolio and Contact.",
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
  "Up to 15 core page templates",
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
    stat: "15",
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
    a: "It's a fixed fee covering everything in the scope: design, build, up to 15 page templates, SEO basics, lead capture, analytics and launch. The full breakdown is in the deliverables above.",
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

export const audit = {
  intro:
    "Your current site is built on WordPress using the Elementor page builder. The foundations are in place: it loads over a secure connection, it is mobile-ready at a basic level, and it can be found by Google. The opportunities lie in finishing, performance, and turning visitors into enquiries.",
  builtOn: ["WordPress", "Elementor"],
  issues: [
    {
      title: "First impressions and credibility",
      have:
        'The main "Why Cheeky Media" introduction on the homepage ends part way through a sentence, and the browser and Google title simply reads "Cheeky Media" with no description.',
      problem:
        "For an agency that sells storytelling, an unfinished sentence on the homepage undermines confidence immediately, and a bare title weakens how you appear in search results.",
      solve:
        "A rebuilt homepage with complete, polished copy and a proper title and description tuned for search and for your Johannesburg market.",
    },
    {
      title: "Turning visitors into enquiries",
      have:
        "The contact form accepts empty submissions, there is no clear call to action near the top of the page, and your phone number and email are plain text rather than clickable.",
      problem:
        "You lose leads. Visitors are not guided toward making contact, mobile users cannot tap to call or email, and incomplete form submissions create junk enquiries.",
      solve:
        "A clear, repeated call to action throughout the page, validated form fields that capture clean leads, and tap-to-call and tap-to-email links for mobile visitors.",
    },
    {
      title: "Broken and missing elements",
      have:
        'The "Services" menu link leads nowhere, and the social media icons in the footer are not linked to any profiles.',
      problem:
        "Clicking a dead link or a dead social icon erodes trust and makes the site feel unfinished.",
      solve:
        "Every link checked and working, with social icons connected to your live profiles.",
    },
  ],
} as const;

export const digitalAudit = {
  meta: "June 2026 · Production company · Johannesburg, SA",
  overall: {
    score: 38,
    max: 100,
    label: "Overall digital health score",
    status: "Needs urgent attention",
    note: "Significant gaps across all platforms",
  },
  platformScores: [
    { label: "Website", score: 40 },
    { label: "Facebook", score: 35 },
    { label: "LinkedIn", score: 30 },
    { label: "Instagram", score: 35 },
    { label: "YouTube", score: 45 },
    { label: "X / Twitter", score: 25 },
    { label: "SEO", score: 40 },
    { label: "Brand identity", score: 55 },
  ],
  groups: [
    {
      title: "Website",
      metrics: [
        { label: "Domain split", value: "2 URLs", note: "Fragmented" },
        { label: "Copyright year", value: "2023", note: "Stale" },
        { label: "Robots.txt", value: "Blocks crawlers", note: "SEO issue" },
        { label: "Contact email", value: "social@ / admin@", note: "Inconsistent" },
      ],
      findings: [
        {
          text:
            "Two active domains: cheekymedia.co.za and cheeky-media.com. This splits SEO authority, confuses visitors, and dilutes brand recognition. Content appears to live primarily on cheeky-media.com.",
          priority: "critical",
        },
        {
          text:
            "Robots.txt blocks automated access, likely also blocking search engine crawlers and SEO auditing tools. A media company actively harming its own discoverability.",
          priority: "high",
        },
        {
          text:
            "Copyright footer shows 2023. Outdated footers signal site neglect to visitors and search engines alike.",
          priority: "medium",
        },
        {
          text:
            "Contact email varies across pages (social@, admin@, social@). No single point of contact creates confusion for potential clients.",
          priority: "low",
        },
      ],
    },
    {
      title: "Social media",
      metrics: [
        { label: "Facebook likes", value: "1,644", note: "Very low" },
        { label: "Instagram handle", value: "@cheekymediatv", note: "Not verified" },
        { label: "LinkedIn followers", value: "105", note: "Critical" },
        { label: "YouTube", value: "@CheekyMedia", note: "Exists" },
        { label: "X / Twitter", value: "@CheekyMediaSA", note: "Inactive" },
      ],
      findings: [
        {
          text:
            "105 LinkedIn followers for an award-winning production company is critically low. This is the primary B2B discovery platform for brand clients and media buyers.",
          priority: "critical",
        },
        {
          text:
            'Facebook page shows only 1,644 likes with just 1 person "talking about this", a near-dead engagement signal. Last visible post referenced April 2022 data.',
          priority: "critical",
        },
        {
          text:
            "Instagram (@cheekymediatv) exists but there is no publicly visible follower count or recent post data, which suggests either very low activity or a private/restricted profile.",
          priority: "high",
        },
        {
          text:
            "X/Twitter (@CheekyMediaSA) appears inactive, with no accessible post data or recent activity. Dormant accounts harm brand perception.",
          priority: "high",
        },
        {
          text:
            "No TikTok presence detected. Given South Africa's digital landscape (TikTok is the #2 favourite platform at 23.8%), this is a significant missed opportunity for a media/content company.",
          priority: "medium",
        },
      ],
    },
    {
      title: "SEO & discoverability",
      metrics: [],
      findings: [
        {
          text:
            "Robots.txt actively blocks search engine bots. This is potentially the single biggest SEO issue, as the site may not be indexed at all.",
          priority: "critical",
        },
        {
          text:
            "Split domain authority (cheekymedia.co.za vs cheeky-media.com) means backlinks and page rank are divided, reducing search visibility for both domains.",
          priority: "high",
        },
        {
          text:
            "No visible content marketing strategy: no blog, case studies, or thought leadership articles. This leaves significant organic search traffic on the table in a competitive media market.",
          priority: "high",
        },
        {
          text:
            "Google Business Profile status unknown, with no evidence of a verified listing for their Sandton/Houghton office. Critical for local discoverability.",
          priority: "medium",
        },
      ],
    },
  ],
  strengths: [
    "Strong production portfolio: multiple SAFTA nominations, long-running e.tv Morning Show contract, work with McDonald's, MTN, Nedbank, ASUS. The underlying product is credible.",
    'Clear brand positioning: the "sweating marketing assets" model is differentiated and client ROI-focused. This messaging is compelling but buried on the website.',
    "Content repurposing capability (TV to social to podcast) is genuinely valuable and ahead of many SA competitors. Proven with real client examples (Business Beat with Odette for ASUS).",
    "Spotify podcast channel exists, a relatively rare capability for a SA production house. Not prominently promoted.",
  ],
  recommendations: [
    {
      n: "01",
      title: "Fix robots.txt immediately",
      body:
        "Allow search engines to crawl the site. A media company that can't be found on Google is fighting with one hand tied behind its back. Do this today.",
    },
    {
      n: "02",
      title: "Consolidate to one domain",
      body:
        "Redirect cheeky-media.com to cheekymedia.co.za (or vice versa). Consolidate all content, backlinks, and SEO equity under a single authoritative URL.",
    },
    {
      n: "03",
      title: "Revive LinkedIn with a content strategy",
      body:
        "105 followers is dire for a B2B media company. Post weekly case studies, awards, client wins, and behind-the-scenes content. LinkedIn is where brand buyers and media agencies live in SA.",
    },
    {
      n: "04",
      title: "Launch on TikTok",
      body:
        "TikTok is South Africa's second-most popular platform. A production company has more raw content capability than almost anyone: behind-the-scenes clips, show reels, and crew culture content are all easy wins.",
    },
    {
      n: "05",
      title: "Build a case study library",
      body:
        "The ASUS/Business Beat repurposing example is gold. Turn every major client project into a published case study with metrics. This drives SEO, credibility, and inbound leads.",
    },
    {
      n: "06",
      title: "Verify Google Business Profile",
      body:
        "Claim and optimise the listing for both Houghton and Sandton offices. Add photos, awards, and show reels. Essential for local search visibility.",
    },
  ],
} as const;

export const hosting = {
  intro:
    "This site is hosted on Vercel, a managed platform used to deliver fast, secure websites to a global audience. Hosting is billed monthly, so the running cost stays predictable and easy to manage.",
  paidDirect:
    "This monthly hosting cost is paid by Cheeky Media directly to Vercel, on your own Vercel account. It is not paid to Broadbrand and is separate from the once-off build fee. Broadbrand sets the account up and connects your domain, then you keep full ownership and control of the account and billing.",
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
  { label: "Audit", href: "#audit" },
  { label: "Scope", href: "#scope" },
  { label: "Process", href: "#process" },
  { label: "Investment", href: "#investment" },
  { label: "Hosting", href: "#hosting" },
  { label: "FAQ", href: "#faq" },
] as const;
