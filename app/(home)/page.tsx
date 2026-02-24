import ProfileSection from "@/components/hero";
import SocialsSection from "@/components/socials";
import ExperienceSection from "@/components/experience";
import GithubProfiles from "@/components/github/github";
import ProjectsSection from "@/components/projects";
import PackagesSection from "@/components/packages";
import StackSection from "@/components/tech-stack";
import HireMe from "@/components/hire-me";
import MediumBlogs from "@/components/blogs";

export default function HomePage() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ProfileSection />
      <HireMe />
      <ExperienceSection />
      <ProjectsSection />
      <PackagesSection />
      <StackSection />
      <GithubProfiles username="itstheanurag" />
      <MediumBlogs />
      <SocialsSection />
    </main>
  );
}
