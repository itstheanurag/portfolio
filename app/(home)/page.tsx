"use client";

import dynamic from "next/dynamic";
import ProfileSection from "@/components/hero";
import BlogShimmer from "@/components/shimmers/blog-shimmer";
import SocialsSection from "@/components/socials";
import ExperienceSection from "@/components/experience";
import GithubProfiles from "@/components/github/github";
import ProjectsSection from "@/components/projects";
import PackagesSection from "@/components/packages";
import StackSection from "@/components/tech-stack";
import WhatMakesMeStandOut from "@/components/about-me";

const MediumBlogs = dynamic(() => import("@/components/blogs"), {
  loading: () => <BlogShimmer />,
});

export default function HomePage() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ProfileSection />
      <WhatMakesMeStandOut />
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
