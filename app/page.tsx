import { WORK_PROJECTS } from "@/lib/data/projects";
import dynamic from "next/dynamic";
import Main from "@/components/main";
import Shimmer from "@/components/blog-shimmer";
import ProjectShimmer from "@/components/shimmers/project-shimmer";
import ThingsIDoShimmer from "@/components/shimmers/things-i-do-shimmer";
import GitHubShimmer from "@/components/shimmers/github-shimmer";
import SkillsAndInterestsShimmer from "@/components/shimmers/skills-interests-shimmer";
import SocialsShimmer from "@/components/shimmers/socials-shimmer";

const ProjectList = dynamic(
  () => import("@/components/projects/work-projects"),
  {
    loading: () => <ProjectShimmer />,
  }
);

const ThingsIDo = dynamic(() => import("@/components/thingsIDo"), {
  loading: () => <ThingsIDoShimmer />,
});

const GithubProfiles = dynamic(() => import("@/components/github"), {
  loading: () => <GitHubShimmer />,
});

const MediumBlogs = dynamic(() => import("@/components/blogs"), {
  loading: () => (
    <div className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <Shimmer />
    </div>
  ),
});

const SkillsAndInterestMarquee = dynamic(
  () => import("@/components/skilsInterests"),
  {
    loading: () => <SkillsAndInterestsShimmer />,
  }
);

const SocialsSection = dynamic(() => import("@/components/socials"), {
  loading: () => <SocialsShimmer />,
});

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <Main />
      <ProjectList title="Work Projects" projects={WORK_PROJECTS} />
      <ThingsIDo />
      <GithubProfiles />
      <MediumBlogs count={3} />
      <SkillsAndInterestMarquee />
      <SocialsSection />
    </div>
  );
}
