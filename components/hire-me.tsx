import { SectionHeader } from "./section-header";

export default function HireMe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <SectionHeader title="Hire Me" />

      <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <p>
          I’m a backend engineer with ~3 years of real-world experience building
          production software in the healthcare domain. I primarily work with
          NestJS, Node.js, Express, and Hono to design APIs, real-time systems,
          and scalable backend services.
        </p>

        <p>
          My experience ranges from supporting existing systems to leading the
          development of core backend features. I’ve worked directly with
          clients, translated business requirements into technical solutions,
          and shipped features that run in production and are actively used by
          real users.
        </p>

        <p>
          I don’t claim to know everything. What I do promise is ownership and
          problem-solving. When faced with unfamiliar systems or technologies, I
          dig in, understand how things work, and figure out reliable solutions
          instead of guessing.
        </p>

        <p>
          I’m currently open to full-time backend roles and freelance
          opportunities. I enjoy working on systems that value clean
          architecture, maintainability, and long-term thinking.
        </p>
      </div>
    </section>
  );
}
