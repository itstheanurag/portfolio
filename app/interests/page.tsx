"use client";

import React from "react";
import ThingsIDo from "@/components/thingsIDo";
import { ALL_THINGS_I_DO_PAGE } from "@/lib/data/thingsiDo";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";
import SkillsAndInterests from "@/components/skilsInterests";

const Page = () => {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mt-28">
        {/* Heading */}
        <Heading>Skills & Interests</Heading>
        {/* <h1 className="text-5xl sm:text-6xl font-light text-neutral-100 tracking-tight mb-6"></h1> */}

        {/* Intro Paragraph */}
        <Paragraph>
          A mix of technical expertise and personal curiosity. These are the
          skills I’ve honed over time, along with areas that keep me motivated
          and always learning.
        </Paragraph>
      </section>
      <ThingsIDo elements={ALL_THINGS_I_DO_PAGE} />
      <SkillsAndInterests />
    </>
  );
};

export default Page;
