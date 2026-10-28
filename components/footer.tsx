import { PageViewCount } from "@/components/pageviews";

const links = [
  { href: "https://github.com/itstheanurag", label: "GitHub" },
  { href: "https://linkedin.com/in/itstheanurag", label: "LinkedIn" },
  { href: "https://x.com/itstheanurag", label: "X" },
  { href: "mailto:gauravanurag36@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1160px] px-4 py-7 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl leading-none tracking-[-0.01em]">
            Gaurav Kumar
          </p>

          <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group inline-flex items-center gap-1 text-[12.5px] font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span
                  aria-hidden
                  className="text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <p className="label-mono text-faint">© {new Date().getFullYear()} Gaurav Kumar</p>
          <PageViewCount className="label-mono text-muted" showLabel />
        </div>
      </div>
    </footer>
  );
}
