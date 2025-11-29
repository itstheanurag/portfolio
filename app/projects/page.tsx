import { WORK_PROJECTS } from "@/lib/data/projects";
import ProjectList from "@/components/projects/work-projects";
import Heading from "@/components/typography/heading";
import LearningProjects from "@/components/projects/learning-project";

const Page = () => {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mt-28">
        <Heading>Projects & Case Studies</Heading>
        <p className="text-lg text-neutral-400 leading-relaxed mb-16">
          Here’s a glimpse into the things I’ve built—ranging from personal
          experiments to production-level applications. While I can’t share all
          my work-related projects due to confidentiality, these highlights
          reflect my skills, creativity, and problem-solving approach.
        </p>
      </section>

      <hr className="border-t border-neutral-600 max-w-5xl mx-auto" />

      <LearningProjects />

      <hr className="my-20 border-t border-neutral-600 max-w-5xl mx-auto" />

      <ProjectList title="Work Projects" projects={WORK_PROJECTS} />
    </>
  );
};

export default Page;
