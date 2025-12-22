import { getGithubActivity } from "@/lib/github";
import GithubContributions from "@/components/github-contributions";
import Footer from "@/components/footer";
import CurrentlyWorkingOn from "@/components/currently-working-on";

export const metadata = {
  title: "Works | itstheanurag",
  description: "What I am currently working on and my open source contributions.",
};

export default async function WorksPage() {
  const contributions = await getGithubActivity();

  return (
    <main className="min-h-screen pt-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Works.
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A real-time look into what I am currently working on. The Open Source projects, the personal projects, and learning projects. Unfortunately, i don't have any client projects right now. 
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
            Currently Working On
          </h2>
          
          <div className="space-y-16">
            <CurrentlyWorkingOn />
          </div>
        </section>
        
        <GithubContributions contributions={contributions} />
      </div>
      <Footer />
    </main>
  );
}
