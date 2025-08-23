"use client";

import MediumBlogs from "../components/blogs";

export default function Page() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mt-28">
        <h1 className="text-5xl sm:text-6xl font-light text-neutral-100 tracking-tight mb-6">
          My Thoughts in Writing
        </h1>
        <p className="text-lg text-neutral-400 leading-relaxed mb-16">
          Here’s where I share what I learn, what I build, and what excites me
          in the world of technology. Consider this a peek into my notes,
          experiments, and creative ideas. You’ll find everything from deep
          technical dives to quick tips and personal insights—crafted to help,
          inspire, and spark curiosity.
        </p>

        {/* Render all blogs without count limit */}
      </section>
      <MediumBlogs />
    </>
  );
}
