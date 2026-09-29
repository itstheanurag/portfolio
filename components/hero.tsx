"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  SiTypescript,
  SiBun,
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiGithub,
  SiLinkedin,
  SiX,
  SiPeerlist,
  SiYoutube,
} from "react-icons/si";
import { BiDownArrowCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";

const socials = [
  {
    label: "Youtube",
    href: "https://youtube.com/@itstheanurag",
    icon: SiYoutube,
    color: "text-red-600 dark:text-red-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/itstheanurag",
    icon: SiGithub,
    color: "text-neutral-900 dark:text-neutral-100",
  },
  {
    label: "X",
    href: "https://x.com/itstheanurag",
    icon: SiX,
    color: "text-black dark:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/itstheanurag",
    icon: SiLinkedin,
    color: "text-[#0A66C2]",
  },
  {
    label: "Peerlist",
    href: "https://peerlist.io/itstheanurag",
    icon: SiPeerlist,
    color: "text-[#00AA45]",
  },
  {
    label: "instagram",
    href: "https://instagram.com/its.the.anurag",
    icon: FaInstagram,
    color: "text-[#E4405F]",
  },
];

// Words to morph
const words = [
  "Backend Developer",
  "Techie & Yapper",
  "Anime & Algorithms",
  "Golang is Great",
  "System Design",
  "Always on Arrays",
  "Debugging at 2AM",
  "Coffee & Commits",
  "One More Refactor",
  "Occasional Overthinker",
  "69th Redesign",
];

export default function ProfileSection() {
  const [index, setIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col space-y-10">
        {/* TOP: Image + Title always side-by-side */}
        <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-8">
          {/* Profile Image */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-neutral-400 dark:border-neutral-800">
              <Image
                src="/profile-pic.jpeg"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-md"
                priority
              />
            </div>
          </div>

          {/* Heading + Morphing Span */}
          <div className="flex-1 min-w-0 space-y-3">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-200">
              Hi, I&apos;m Gaurav,
              <span className="block relative h-[1em] text-neutral-400 mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{
                      opacity: 0,
                      y: 6,
                      filter: "blur(4px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                      filter: "blur(4px)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="absolute left-0 top-0 whitespace-nowrap"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I build scalable backend systems and APIs using{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiTypescript className="mr-1 w-3 h-3" color="#3178C6" />
                TypeScript
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiNestjs className="mr-1 w-3 h-3" color="#E0234E" />
                NestJS
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiExpress className="mr-1 w-3 h-3" color="#000000" />
                Express
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiPostgresql className="mr-1 w-3 h-3" color="#336791" />
                Postgres
              </Badge>
              , and{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiBun className="mr-1 w-3 h-3" color="#F9D71C" />
                Bun
              </Badge>
              . Focused on clean architecture, performance, and reliable backend
              infrastructure.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Primary actions */}
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <a
              href="/gaurav-resume.pdf"
              download="gaurav-resume.pdf"
              className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 hover:bg-neutral-400 dark:hover:bg-neutral-800 transition-colors text-sm font-medium"
            >
              <BiDownArrowCircle className="w-4 h-4 mr-2" />
              Resume / CV
            </a>

            <Link
              href="mailto:gauravanurag36@gmail.com"
              className="inline-flex items-center px-4 py-2 rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-800 hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <CgMail className="w-4 h-4 mr-2" />
              Get in touch
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-1">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-md transition-colors ${color} hover:text-neutral-600 dark:hover:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800`}
              >
                <Icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
