import React from "react";
import Paragraph from "../typography/paragraph";
import Heading from "../typography/heading";

const SocialsShimmer = () => {
  return (
    <section className="my-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-6">
      <Heading>Socials & Coding Profiles</Heading>

      <Paragraph className="pb-6">
        You can find me sharing insights and connecting with professionals on
        LinkedIn, building and showcasing projects on GitHub, and sharpening my
        problem-solving skills on platforms like LeetCode and HackerRank. Each
        space reflects a different part of my journey as a developer.
      </Paragraph>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-1 border-neutral-700 rounded-lg p-4 animate-pulse"
          >
            <div className="w-6 h-6 bg-neutral-800 rounded"></div>
            <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialsShimmer;
