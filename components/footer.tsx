import { VisitorCount } from "@/components/visitor-count";

const links = [
  { href: "https://github.com/itstheanurag", label: "GitHub" },
  { href: "https://linkedin.com/in/itstheanurag", label: "LinkedIn" },
  { href: "https://x.com/itstheanurag", label: "X" },
  { href: "mailto:gauravanurag36@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1160px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-serif text-2xl leading-none tracking-[-0.01em]">
              Gaurav Kumar
            </p>
            <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">
              Backend engineer. Building quiet systems that hold up.
            </p>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-2">
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
                className="label-mono group inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
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

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">© {new Date().getFullYear()} Gaurav Kumar</p>
          <VisitorCount className="label-mono text-muted" showLabel />
          <p className="label-mono">Built with Next.js · Vercel</p>
          <a
            href="#top"
            className="label-mono text-faint transition-colors hover:text-ink"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
