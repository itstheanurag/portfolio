"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme/theme-toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-neutral-100/70 dark:bg-neutral-900/60 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center relative">
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
        <div className="flex items-center gap-3">
          <Link href="/works">
            <span className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Works
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
