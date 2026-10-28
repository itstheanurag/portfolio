import Hero from "@/components/hero";
import SelectedWork from "@/components/selected-work";
import Experience from "@/components/experience";
import PersonalWork from "@/components/personal-work";
import OpenSourceContributions from "@/components/open-source-contributions";
import Toolkit from "@/components/toolkit";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import { getGithubActivity } from "@/lib/github";

export default async function HomePage() {
  const contributions = await getGithubActivity();

  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <Experience />
      <PersonalWork />
      <OpenSourceContributions contributions={contributions} />
      <Toolkit />
      <Writing />
      <Contact />
    </main>
  );
}
