import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/section";
import {
  PROMO_MONTHLY_AVERAGE,
  PROMO_MONTHLY_IMPRESSIONS,
  PROMO_MONTH_LABEL,
  PROMO_RATES,
  PROMO_STATS,
} from "@/lib/data/promotions";

export const metadata: Metadata = {
  title: "Promote",
  description:
    "Sponsor a post, quote, repost, or bio feature on Gaurav Kumar's X account. Audience numbers and starting rates.",
  alternates: {
    canonical: "https://itsanurag.in/promote",
  },
  openGraph: {
    title: "Promote | Gaurav Kumar",
    description:
      "Sponsor a post, quote, repost, or bio feature on Gaurav Kumar's X account. Audience numbers and starting rates.",
    url: "https://itsanurag.in/promote",
    type: "website",
  },
};

const STEPS = [
  {
    title: "Send the brief",
    body: "Product link, what you want people to notice, and the date you have in mind.",
  },
  {
    title: "I write the draft",
    body: "I write it in my voice and send it over. You get one round of edits.",
  },
  {
    title: "It goes live",
    body: "I publish at the agreed time, mark it #ad, and send you the post link.",
  },
  {
    title: "48-hour report",
    body: "A screenshot of impressions and engagement after the post has had time to breathe.",
  },
];

export default function PromotePage() {
  return (
    <main id="main-content">
      <div className="mx-auto w-full max-w-[860px] lg:border-x lg:border-line">
        <header className="px-6 py-14 sm:px-8 md:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10 lg:items-center">
            <div>
              <p className="label-mono">Promote</p>
              <h1 className="mt-5 max-w-[15ch] text-balance font-serif text-[clamp(2.6rem,5.8vw,4.2rem)] leading-[0.97] tracking-[-0.035em] text-ink">
                Put your project in front of{" "}
                <em className="italic text-accent">my audience</em>.
              </h1>
              <p className="mt-6 max-w-[54ch] text-[14.5px] leading-[1.75] text-muted">
                I write about backend systems, developer tools, and building
                products. A small number of sponsored placements each week
                keeps the feed useful for the people who read it.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:gauravanurag36@gmail.com?subject=Promotion%20enquiry"
                  className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-fg transition-colors hover:bg-accent-strong"
                >
                  Check availability
                  <ArrowUpRight className="size-3.5" />
                </a>
                <a
                  href="https://x.com/itstheanurag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  DM on X
                  <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <aside className="border border-line bg-surface/50 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="label-mono">Monthly reach</p>
                <span className="size-1.5 rounded-full bg-status" />
              </div>

              <p className="mt-4 font-serif text-[42px] leading-none tracking-[-0.03em] text-ink">
                {PROMO_MONTHLY_IMPRESSIONS}
              </p>
              <p className="label-mono mt-1">Impressions</p>

              <div className="mt-5 flex items-baseline justify-between border-t border-line pt-3">
                <p className="label-mono">{PROMO_MONTH_LABEL}</p>
                <p className="label-mono">≈{PROMO_MONTHLY_AVERAGE} / day</p>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-muted">
                1–28 Oct 2026. Source: X account analytics.
              </p>
            </aside>
          </div>
        </header>

        <Section
          index="01"
          title="Rates"
          note="One placement, clear scope. Custom threads and integrations are quoted separately."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {PROMO_RATES.filter((rate) => !rate.popular).map((rate, index) => (
              <article
                key={rate.name}
                className="group flex flex-col justify-between border border-line bg-surface/50 p-5 transition-colors duration-200 hover:border-line-strong sm:p-6"
              >
                <div>
                  <p className="label-mono">0{index + 1} — Placement</p>

                  <h3 className="mt-3 font-serif text-[24px] leading-tight tracking-[-0.015em] text-ink">
                    {rate.name}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.7] text-muted">
                    {rate.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-line pt-3">
                    {rate.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[11.5px] leading-relaxed text-muted"
                      >
                        <span aria-hidden className="shrink-0 text-accent">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
                  <div>
                    {rate.prefix && (
                      <p className="label-mono">{rate.prefix}</p>
                    )}
                    <p className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink">
                      {rate.price}
                    </p>
                    <p className="label-mono mt-1">{rate.unit}</p>
                  </div>

                  <a
                    href={`mailto:gauravanurag36@gmail.com?subject=${encodeURIComponent(
                      `Promotion enquiry — ${rate.name}`,
                    )}`}
                    className="group/link inline-flex items-center gap-1 border-b border-line-strong pb-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    Enquire
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {PROMO_RATES.filter((rate) => rate.popular).map((rate) => (
            <article
              key={rate.name}
              className="mt-4 border border-accent/40 bg-accent-soft p-5 sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <p className="label-mono text-accent-strong">
                      {String(PROMO_RATES.length).padStart(2, "0")} — Launch bundle
                    </p>
                    <span className="border border-accent/40 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-accent-strong">
                      Best value
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-[28px] leading-tight tracking-[-0.02em] text-ink">
                    {rate.name}
                  </h3>

                  <p className="mt-2 max-w-[62ch] text-[13px] leading-[1.7] text-muted">
                    {rate.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {rate.includes.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:text-right">
                  <p className="label-mono">Package</p>
                  <p className="mt-1 font-serif text-[38px] leading-none tracking-[-0.03em] text-ink">
                    {rate.price}
                  </p>
                  <a
                    href={`mailto:gauravanurag36@gmail.com?subject=${encodeURIComponent(
                      `Promotion enquiry — ${rate.name}`,
                    )}`}
                    className="mt-4 inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-fg transition-colors hover:bg-accent-strong"
                  >
                    Claim a launch slot
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          <p className="mt-6 max-w-[62ch] text-[12px] leading-relaxed text-muted">
            Rates are in USD. Final scope is confirmed before booking. I only
            take products I&apos;d use or recommend.
          </p>
        </Section>

        <Section
          index="02"
          title="Audience"
          note="October 2026, from my X account. Sponsored reach varies; no impressions or conversions are guaranteed."
        >
          <dl className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {PROMO_STATS.map((stat) => (
              <div key={stat.label} className="bg-base p-5 sm:p-6">
                <dd className="font-serif text-[30px] leading-none tracking-[-0.02em] text-ink">
                  {stat.value}
                </dd>
                <dt className="label-mono mt-2">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <p className="mt-4 max-w-[62ch] text-[12px] leading-relaxed text-muted">
            1–28 Oct 2026 · Source: X account analytics.
          </p>
        </Section>

        <Section
          index="03"
          title="How it works"
          note="No retainers. No surprise add-ons. One clear scope per placement."
        >
          <div className="grid gap-8 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <div key={step.title}>
                <p className="font-mono text-[9px] tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-[20px] leading-tight tracking-[-0.01em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          index="04"
          title="Availability"
          note="A small number of sponsored placements each week, so the feed stays useful."
        >
          <div className="border-t border-line pt-6">
            <p className="font-serif text-[clamp(1.75rem,4vw,2.4rem)] leading-tight tracking-[-0.02em] text-ink">
              Have something worth promoting?
            </p>
            <p className="mt-3 max-w-[58ch] text-[13.5px] leading-[1.75] text-muted">
              Send the product link and a sentence about what you want people
              to notice. I&apos;ll reply with availability and the smallest
              package that makes sense.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:gauravanurag36@gmail.com?subject=Promotion%20enquiry"
                className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-fg transition-colors hover:bg-accent-strong"
              >
                Email me
                <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="https://x.com/itstheanurag"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                DM on X
                <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <p className="label-mono mt-6">
              Sponsored placements are disclosed as #ad.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
