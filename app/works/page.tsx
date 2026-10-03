import CurrentlyWorkingOn from "@/components/currently-working-on";
import { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Works & Projects",
  description:
    "Explore software projects, developer tools, open-source libraries, and backend applications built by Gaurav Kumar.",
  alternates: {
    canonical: "https://itsanurag.in/works",
  },
  openGraph: {
    title: "Works & Projects | Gaurav Kumar",
    description:
      "Explore software projects, developer tools, open-source libraries, and backend applications built by Gaurav Kumar.",
    url: "https://itsanurag.in/works",
    type: "website",
  },
};

export default async function WorksPage() {
  return (
    <main id="main-content" className="min-h-screen pt-12">
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

        <section className="pb-16">
          <SectionHeader title="Things i made..." />

          <div className="space-y-16">
            <CurrentlyWorkingOn />
          </div>
        </section>
      </div>
    </main>
  );
}
