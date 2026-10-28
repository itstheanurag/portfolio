# itsanurag.in

Personal portfolio for Gaurav Kumar — backend engineer. Built with Next.js,
TypeScript, Tailwind CSS, and a small amount of motion.

## Local development

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Visitor counter

The site shows a total visit count without a database. The preferred store is a
GitHub Gist, which survives redeployments, preview builds, and platform changes.
If the Gist is not configured, the API falls back to a public counter service
(Abacus) so the count still works with zero setup.

### Preferred setup: GitHub Gist

1. Create a **secret** gist with a file called `visitors.json`:

   ```json
   {
     "count": 0
   }
   ```

2. Create a GitHub token that can read and write gists:
   - Fine-grained token: **Gists → Read and write**
   - Classic token: `gist` scope

3. Add the values to `.env.local` (and to Vercel for production/preview):

   ```bash
   VISITORS_GIST_ID=your_gist_id
   VISITORS_GIST_TOKEN=github_pat_...
   # optional, defaults to visitors.json
   VISITORS_GIST_FILE=visitors.json
   ```

If the Gist variables are missing, the counter falls back to Abacus with the
namespace `itsanurag-portfolio` and key `visits`. You can change those with
`VISITORS_COUNTER_NAMESPACE` and `VISITORS_COUNTER_KEY`.

### How it works

- `POST /api/visitors` increments the count once per browser session.
- `GET /api/visitors` reads the current value.
- The Gist is used when configured; otherwise the Abacus fallback is used.
- No IP addresses or personal data are stored by this site.
- Gist updates are serialized per server instance. Two requests landing on
  different instances in the same instant can occasionally miss one increment;
  for a portfolio counter this is an acceptable trade-off.

## Pages

- `/` — company work, experience, personal work, open source, toolkit, writing, contact
- `/works` — company and personal project index
- `/contributions` — GitHub activity and public pull requests

## Design notes

- **Direction:** “production log” — a dark, warm document of systems shipped.
- **Palette:** warm near-black, bone text, one copper accent. Status green is
  reserved for availability.
- **Type:** Newsreader for display, Archivo for body/UI, JetBrains Mono for
  labels and data.
- **Layout:** a central document column with a functional section index on the
  left and a live status rail on the right. Real screenshots carry the work.
- Dark theme is the default; light theme is available from the navigation.
