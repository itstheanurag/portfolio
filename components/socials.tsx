"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import Paragraph from "./typography/paragraph";
import Heading from "./typography/heading";

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
    <>
      <section className="my-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-6">
        <Heading>Socials & Coding Profiles</Heading>

        <Paragraph className="pb-6">
          You can find me sharing insights and connecting with professionals on
          LinkedIn, building and showcasing projects on GitHub, and sharpening
          my problem-solving skills on platforms like LeetCode and HackerRank.
          Each space reflects a different part of my journey as a developer.
        </Paragraph>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {SOCIALS.map((social, idx) => {
            const Icon = social.icon;
            return (
              <Link
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
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
