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
    <nav className="sticky top-0 w-full z-50 bg-neutral-100/70 dark:bg-neutral-900/60 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700">
            <Image
              src="/profile-pic.jpeg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </Link>

        {/* Desktop Right */}
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

          {/* GitHub Star */}
          <Link
            href="https://github.com/itstheanurag/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star this portfolio on GitHub"
            className=" inline-flex items-center gap-1.5 px-3 py-2 rounded-lg
              text-neutral-500 dark:text-neutral-300
              hover:bg-neutral-200 dark:hover:bg-neutral-800
              transition-colors duration-200"
          >
            <span className="hidden sm:inline">Code</span>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
