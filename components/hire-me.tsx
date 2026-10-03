import { SectionHeader } from "./section-header";

export default function HireMe() {
  return (
    <section id="hire-me" className="max-w-4xl mx-auto px-6 py-8">
      <SectionHeader title="Hire Me" />

      <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        <p>
          I&apos;m a backend engineer with{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            ~3 years of real-world experience
          </strong>{" "}
          building production software in the{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            healthcare domain
          </strong>
          . I primarily work with{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            NestJS, Node.js, Express, and Hono
          </strong>{" "}
          to design APIs, real-time systems, and scalable backend services.
        </p>

        <p>
          My experience ranges from supporting existing systems to{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            leading the development of core backend features
          </strong>
          . I&apos;ve worked directly with clients, translated business
          requirements into technical solutions, and shipped features that run
          in production and are actively used by real users.
        </p>

        <p>
          I don&apos;t claim to know everything. What I do promise is{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            ownership and problem-solving
          </strong>
          . When faced with unfamiliar systems or technologies, I dig in,
          understand how things work, and figure out reliable solutions instead
          of guessing.
        </p>

        <p>
          I&apos;m currently{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            open to full-time backend roles and freelance opportunities
          </strong>
          . I enjoy working on systems that value clean architecture,
          maintainability, and long-term thinking.
        </p>
      </div>
    </section>
  );
}
