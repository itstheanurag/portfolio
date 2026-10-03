import { getGithubActivity } from "@/lib/github";
import OpenSourceContributions from "@/components/github/open-source";
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
    <main id="main-content" className="min-h-screen pt-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
            Open Source.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A record of my contributions to open source projects. This includes
            feature development, bug fixes, refactoring efforts, and maintenance
            work done in collaboration with distributed teams.
          </p>
        </header>

        <section className="pb-16">
          <OpenSourceContributions contributions={contributions} />
        </section>
      </div>
    </main>
  );
}
