"use client";

import dynamic from "next/dynamic";
import ProfileSection from "@/components/hero";
import BlogShimmer from "@/components/shimmers/blog-shimmer";
import Footer from "@/components/footer";
import SocialsSection from "@/components/socials";
import ExperienceSection from "@/components/experience";
import GithubProfiles from "@/components/github";
import ProjectsSection from "@/components/projects";
import StackSection from "@/components/tech-stack";

const MediumBlogs = dynamic(() => import("@/components/blogs"), {
  loading: () => <BlogShimmer />,
});

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <GithubProfiles username="itstheanurag" />
      <MediumBlogs />
      <SocialsSection />
      <Footer />
    </main>
  );
}
