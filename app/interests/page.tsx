"use client";

import React from "react";
import ThingsIDo from "../components/thingsIDo";
import { ALL_THINGS_I_DO_PAGE, HOME_PAGE_SKILL_I_DO } from "@/lib/data/thingsiDo";

const Page = () => {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mt-24">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-light text-neutral-100 tracking-tight mb-6">
          Skills & Interests
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-neutral-400 leading-relaxed mb-16">
          A mix of technical expertise and personal curiosity. These are the
          skills I’ve honed over time, along with areas that keep me motivated
          and always learning.
        </p>
      </section>
      <ThingsIDo elements={ALL_THINGS_I_DO_PAGE as unknown as any} />
    </>
  );
};

export default Page;
