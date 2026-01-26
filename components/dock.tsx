"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaTools,
  FaGithub,
  FaPenNib,
} from "react-icons/fa";

interface DockItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DOCK_ITEMS: DockItem[] = [
  { id: "hero", label: "About", icon: FaUser },
  { id: "experience", label: "Experience", icon: FaBriefcase },
  { id: "projects", label: "Projects", icon: FaCode },
  { id: "stack", label: "Stack", icon: FaTools },
  { id: "github", label: "GitHub", icon: FaGithub },
  { id: "blogs", label: "Blogs", icon: FaPenNib },
];

export default function Dock() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // ❌ Dock should exist ONLY on home
  if (pathname !== "/") return null;

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      for (const item of [...DOCK_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter) {
          setActiveSection(item.id);
          return;
        }
      }
    };

    // Run immediately on mount
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_OFFSET = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg pointer-events-auto">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              className="relative"
            >
              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>

              <div
                className={[
                  "p-3 rounded-xl transition-colors duration-200",
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60",
                ].join(" ")}
              >
                <Icon className="w-4 h-4" />

                {isActive && (
                  <motion.div
                    layoutId="dock-active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900 dark:bg-neutral-100"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
