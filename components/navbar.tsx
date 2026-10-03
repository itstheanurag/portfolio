"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme/theme-toggle";

const navItems: { href: string; label: string }[] = [
  { href: "/works", label: "Works" },
  { href: "/contributions", label: "Contributions" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 w-full z-50 bg-neutral-100/70 dark:bg-neutral-900/60 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center relative">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Gaurav Kumar - Homepage"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700">
            <Image
              src="/icon.png"
              alt="Gaurav Kumar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 text-sm font-medium text-neutral-500">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}

          {/* GitHub Star / Code */}
          <Link
            href="https://github.com/itstheanurag/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio source code on GitHub"
            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            Code
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
