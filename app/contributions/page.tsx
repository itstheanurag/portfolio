import { getGithubActivity } from "@/lib/github";
import OpenSourceContributions from "@/components/github/open-source";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source | itstheanurag",
  description:
    "Public open source contributions across real-world projects. Features, fixes, and refactors shipped in collaboration with global maintainers.",
};

export default async function ContributionsPage() {
  const contributions = await getGithubActivity();

  return (
    <main className="min-h-screen pt-12 transition-colors duration-300">
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

        <section className="">
          <OpenSourceContributions contributions={contributions} />
        </section>
      </div>

    </main>
  );
}
