import { WORK_PROJECTS } from "@/lib/data/projects";
import MediumBlogs from "./components/Blogs";
import GithubProfiles from "./components/github";
import Main from "./components/main";
import ProjectList from "./components/projects";
import ThingsIDo from "./components/thingsIDo";
export default function Home() {
  return (
    <div className="">
      <Main />
      <ProjectList title="Work Projects" projects={WORK_PROJECTS} />
      <ThingsIDo />
      <MediumBlogs />

      <GithubProfiles />
    </div>
  );
}
