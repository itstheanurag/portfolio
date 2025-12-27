"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaTools,
  FaGithub,
  FaPenNib,
  FaShareAlt,
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
  // { id: "socials", label: "Socials", icon: FaShareAlt },
];

export default function Dock() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();
  // const router = useRouter();

  // Track active section based on scroll position
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Determine active section
      for (const item of [...DOCK_ITEMS].reverse()) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname === "/works") return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-none"
    >
      <div className="flex items-center gap-1 px-2 py-2 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl shadow-lg shadow-neutral-900/5 dark:shadow-black/20 pointer-events-auto">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>

              {/* Icon Button */}
              <div
                className={`
                      relative p-3 rounded-xl transition-all duration-200
                      ${isActive
                    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
                  }
                    `}
              >
                <Icon className="w-4 h-4" />

                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
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
