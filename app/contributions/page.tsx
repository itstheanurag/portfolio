import { getGithubActivity } from "@/lib/github";
import OpenSourceContributions from "@/components/github/open-source";
import GithubActivity from "@/components/github/github";
import Section from "@/components/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Public open-source contributions, pull requests, and features shipped by Gaurav Kumar across distributed repositories and developer ecosystems.",
  alternates: {
    canonical: "https://itsanurag.in/contributions",
  },
  openGraph: {
    title: "Open Source Contributions | Gaurav Kumar",
    description:
      "Public open-source contributions, pull requests, and features shipped by Gaurav Kumar across distributed repositories and developer ecosystems.",
    url: "https://itsanurag.in/contributions",
    type: "website",
  },
};

export default async function ContributionsPage() {
  const contributions = await getGithubActivity();

  return (
    <main id="main-content">
      <div className="mx-auto w-full max-w-[980px] lg:border-x lg:border-line">
        <header className="px-6 py-14 sm:px-8 md:py-20 lg:px-10">
          <p className="label-mono">Open source</p>
          <h1 className="mt-5 max-w-[14ch] text-balance font-serif text-[clamp(2.7rem,6.5vw,4.9rem)] leading-[0.97] tracking-[-0.035em] text-ink">
            Work in public.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[14.5px] leading-[1.75] text-muted">
            A record of contributions to projects I don&apos;t own: features,
            bug fixes, refactors, and the occasional pull request that took
            longer than expected.
          </p>
        </header>

        <Section
          index="01"
          title="Activity"
          note="A year at a glance, pulled from GitHub. Contributions, not just commits."
        >
          <GithubActivity username="itstheanurag" />
        </Section>

        <Section
          index="02"
          title="Contributions"
          note="Pull requests and issues opened in public repositories, grouped by project."
        >
          <OpenSourceContributions contributions={contributions} />
        </Section>
      </div>
    </main>
  );
}
