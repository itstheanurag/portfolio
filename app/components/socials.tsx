"use client";
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
  },

  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/itstheanurag",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/itstheanurag",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/its.the.anurag",
  },
  { name: "Medium", icon: FaMedium, link: "https://medium.com/@codecript" },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/itstheanurag",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/itsthenaurag",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/itstheanurag",
  },
  {
    name: "Work GitHub",
    icon: FaGithub,
    link: "https://github.com/itsthegaurav",
  },
];

export default function SocialsSection() {
  return (
    <section className="mt-16 mb-8 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-6">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-4 tracking-tight">
        Socials & Coding Profiles
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {SOCIALS.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-1 border-neutral-700 rounded-lg p-4 "
            >
              <Icon className="w-6 h-6" />
              <span className="text-neutral-200 font-medium">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
