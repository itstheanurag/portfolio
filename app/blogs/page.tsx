import MediumBlogs from "@/components/blogs";
import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";

export default function Page() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto mt-28">
        <Heading>My Thoughts in Writing</Heading>
        <Paragraph>
          Here’s where I share what I learn, what I build, and what excites me
          in the world of technology. Consider this a peek into my notes,
          experiments, and creative ideas. You’ll find everything from deep
          technical dives to quick tips and personal insights—crafted to help,
          inspire, and spark curiosity.
        </Paragraph>

        {/* Render all blogs without count limit */}
      </section>
      <MediumBlogs />
    </>
  );
}
