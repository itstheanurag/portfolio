# itsanurag.in

Personal portfolio for Gaurav Kumar — backend engineer. Built with Next.js,
TypeScript, Tailwind CSS, and a small amount of motion.

## Local development

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Page views

The site shows total page views from Vercel Web Analytics. There is no database,
no custom visitor storage, and no client-side visit tracking.

### Setup

1. Enable Web Analytics in the Vercel project: **Project → Analytics → Enable**.
2. Create an access token at https://vercel.com/account/tokens.
3. Add these to `.env.local` and to the Vercel project environment variables:

   ```bash
   VERCEL_TOKEN=...
   VERCEL_PROJECT_ID=prj_...
   # only for team projects
   VERCEL_TEAM_ID=team_...
   ```

The token is server-side only. Never prefix it with `NEXT_PUBLIC_`.

### How it works

- `GET /api/pageviews` queries the Vercel Web Analytics API.
- The API result is cached for five minutes to avoid querying Vercel on every
  page load.
- The UI hides the number if the API is not configured or unavailable.
- Vercel counts page views, not session-based visits. Ad blockers and the plan's
  reporting window can affect the number.

## Pages

- `/` — company work, experience, personal work, open source, toolkit, writing, contact
- `/works` — company and personal project index
- `/contributions` — GitHub activity and public pull requests
- `/promote` — sponsorship rates and audience numbers

## Design notes

- **Direction:** “production log” — a dark, warm document of systems shipped.
- **Palette:** warm near-black, bone text, one copper accent. Status green is
  reserved for availability.
- **Type:** Newsreader for display, Archivo for body/UI, JetBrains Mono for
  labels and data.
- **Layout:** a central document column with a functional section index on the
  left and a live status rail on the right. Real screenshots carry the work.
- Dark theme is the default; light theme is available from the navigation.
