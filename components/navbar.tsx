"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#writing", label: "Writing" },
  { href: "/contributions", label: "Contributions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur-md"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="block size-[30px] overflow-hidden border border-line-strong bg-raised">
            <Image
              src="/icon.png"
              alt=""
              width={60}
              height={60}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </span>
          <span className="font-serif text-[19px] leading-none tracking-[-0.01em] text-ink">
            Gaurav Kumar
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-mono px-3 py-2 text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="mailto:gauravanurag36@gmail.com"
            className="label-mono ml-2 hidden border border-line-strong px-3 py-2 text-ink transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Email
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 inline-flex size-9 items-center justify-center text-muted transition-colors hover:text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-base md:hidden">
          <div className="mx-auto flex w-full max-w-[1160px] flex-col px-4 py-4 sm:px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-3 font-serif text-xl text-ink"
              >
                {item.label}
                <span className="label-mono">0{index + 1}</span>
              </Link>
            ))}
            <a
              href="mailto:gauravanurag36@gmail.com"
              className="label-mono mt-5 inline-flex w-fit items-center gap-2 bg-accent px-4 py-2.5 text-accent-fg"
            >
              Get in touch
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
