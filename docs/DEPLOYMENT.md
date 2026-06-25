# Deployment

## GitHub repo setup

```bash
# From the project root (cheekymedia-rebuild/)
git add -A
git commit -m "Initial proposal site"
gh repo create cheekymedia-rebuild --private --source=. --push
# or create the repo in the GitHub UI and:
# git remote add origin git@github.com:<org>/cheekymedia-rebuild.git
# git push -u origin main
```

## Vercel project setup

1. Import the GitHub repo at https://vercel.com/new.
2. Vercel auto-detects **Next.js** — accept the defaults below.

| Setting              | Value                       |
| -------------------- | --------------------------- |
| Framework preset     | Next.js                     |
| Root directory       | `./` (project root)         |
| Build command        | `pnpm build`                |
| Install command      | `pnpm install`              |
| Output directory     | *(leave blank — managed)*   |

## Root directory rules

- The repo **is** the project — root directory stays `./`.
- Do **not** add a `vercel.json` unless a specific override is needed.

## Environment variables

Set in Vercel → Project → Settings → Environment Variables:

| Variable             | Purpose                          | Required |
| -------------------- | -------------------------------- | -------- |
| `NEXT_PUBLIC_GA_ID`  | GA4 measurement ID               | optional |

Mirror locally in `.env.local` (gitignored).

## How to redeploy

- **Automatic:** push to `main` → Vercel builds and deploys.
- **Manual:** Vercel dashboard → Deployments → "Redeploy".
- **Preview:** open a PR → Vercel posts a preview URL automatically.

## Pre-deploy checklist

- [ ] `pnpm build` passes locally.
- [ ] `pnpm lint` clean.
- [ ] Env vars set in Vercel (if analytics enabled).
- [ ] Domain connected (post-approval).
