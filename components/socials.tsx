"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

const SOCIALS = [
  {
    name: "Personal GitHub",
    icon: FaGithub,
    link: "https://github.com/itstheanurag",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "group-hover:text-black dark:group-hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/itstheanurag",
    color: "text-sky-600 dark:text-sky-400",
    hover: "group-hover:text-sky-700 dark:group-hover:text-sky-300",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/itstheanurag",
    color: "text-sky-500 dark:text-sky-400",
    hover: "group-hover:text-sky-600 dark:group-hover:text-sky-300",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/its.the.anurag",
    color: "text-pink-500 dark:text-pink-400",
    hover: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
  },
  {
    name: "Medium",
    icon: FaMedium,
    link: "https://medium.com/@codecript",
    color: "text-green-700 dark:text-green-500",
    hover: "group-hover:text-green-800 dark:group-hover:text-green-400",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/itstheanurag",
    color: "text-amber-500 dark:text-amber-400",
    hover: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/itsthenaurag",
    color: "text-green-600 dark:text-green-400",
    hover: "group-hover:text-green-700 dark:group-hover:text-green-300",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/itstheanurag",
    color: "text-green-500 dark:text-green-400",
    hover: "group-hover:text-green-600 dark:group-hover:text-green-300",
  },
  {
    name: "Work GitHub",
    icon: FaGithub,
    link: "https://github.com/itsthegaurav",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "group-hover:text-black dark:group-hover:text-white",
  },
];

export default function SocialsSection() {
  return (
    <section id="socials" className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        Socials & Coding Profiles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {SOCIALS.map((social, idx) => {
          const Icon = social.icon;
          return (
            <Link
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 
        bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 
        hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-colors">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    social.color,
                    social.hover
                  )}
                />
              </div>

              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  social.hover
                )}
              >
                {social.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
