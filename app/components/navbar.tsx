"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ANIMATING_HEADING_GRADIENTS } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Skills", href: "/interests" },
  ];

  const handleContactClick = () => {
    window.open('https://linkedin.com/in/itstheanurag', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <span className={`text-2xl ${ANIMATING_HEADING_GRADIENTS}`}>
                @itstheanurag
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-300 hover:text-neutral-100 transition-colors text-sm font-medium tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={handleContactClick}
              className="inline-flex items-center text-neutral-100 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="text-sm font-medium tracking-wide">
                Get in Touch
              </span>
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-neutral-100 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-neutral-300 hover:text-neutral-100 transition-colors text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <div className="px-3 py-2 mt-4 border-t border-neutral-700">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    handleContactClick();
                  }}
                  className="inline-flex items-center text-neutral-100 hover:text-white transition-colors group w-full text-left"
                >
                  <span className="text-base font-medium tracking-wide">
                    Get in Touch
                  </span>
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;