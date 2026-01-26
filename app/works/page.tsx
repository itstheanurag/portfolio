
import CurrentlyWorkingOn from "@/components/currently-working-on";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | itstheanurag",
  description:
    "What I am currently working on and my open source contributions.",
};

export default async function WorksPage() {
  return (
    <main className="min-h-screen pt-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
            Works.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A real-time snapshot of what I am currently building and exploring.
            This includes open-source contributions, personal experiments, and
            learning projects that I treat like production work.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-8">
            Things i made...
          </h2>

          <div className="space-y-16">
            <CurrentlyWorkingOn />
          </div>
        </section>
      </div>
    </main>
  );
}
