import { WORK_PROJECTS } from "@/lib/data/projects";
import MediumBlogs from "./components/blogs";
import GithubProfiles from "./components/github";
import Main from "./components/main";
import ProjectList from "./components/projects";
import ThingsIDo from "./components/thingsIDo";
import SkillsAndInterestMarquee from "./components/skilsInterests";
import SocialsSection from "./components/socials";
export default function Home() {
  return (
    <div className="">
      <Main />
      <ProjectList title="Work Projects" projects={WORK_PROJECTS} />
      <ThingsIDo/>
      <GithubProfiles />
      <MediumBlogs count={3} />
      <SkillsAndInterestMarquee />
      <SocialsSection />
    </div>
  );
}
