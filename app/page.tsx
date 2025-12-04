"use client";

import dynamic from "next/dynamic";
import ProfileSection from "@/components/hero";
import BlogShimmer from "@/components/shimmers/blog-shimmer";
import ProjectShimmer from "@/components/shimmers/project-shimmer";
import SkillsAndInterestsShimmer from "@/components/shimmers/skills-interests-shimmer";
import GithubShimmer from "@/components/shimmers/github-shimmer";

const ExperienceSection = dynamic(() => import("@/components/experience"), {
  loading: () => <div className="space-y-16 max-w-4xl mx-auto" />,
});

const StackSection = dynamic(() => import("@/components/tech-stack"), {
  loading: () => <SkillsAndInterestsShimmer />,
});

const ProjectsSection = dynamic(() => import("@/components/projects"), {
  loading: () => <ProjectShimmer />,
});

const GithubProfiles = dynamic(() => import("@/components/github"), {
  loading: () => <GithubShimmer />,
});

const MediumBlogs = dynamic(() => import("@/components/blogs"), {
  loading: () => <BlogShimmer />,
});

const SocialsSection = dynamic(() => import("@/components/socials"), {
  loading: () => <div className="space-y-16 max-w-4xl mx-auto" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <GithubProfiles username="itstheanurag" />
      <MediumBlogs />
      <SocialsSection />
    </main>
  );
}
