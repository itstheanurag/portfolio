"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "react-icons/si";
import { BiDownArrowCircle } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/itstheanurag",
    icon: SiGithub,
    hover: "hover:text-neutral-900 dark:hover:text-neutral-100",
  },
  {
    label: "X",
    href: "https://x.com/itstheanurag",
    icon: SiX,
    hover: "hover:text-black dark:hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/itstheanurag",
    icon: SiLinkedin,
    hover: "hover:text-[#0A66C2]",
  },
  {
    label: "Peerlist",
    href: "https://peerlist.io/itstheanurag",
    icon: SiPeerlist,
    hover: "hover:text-[#00AA45]",
  },
];

// Words to morph
const words = [
  "Content Creator",
  "Techie & Yapper",
  "Backend Developer",
  "Daily Gym Goer",
  "Anime is my Jam",
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
    <section id="hero" className="max-w-4xl mx-auto px-6 pt-32 pb-8">
      <div className="flex flex-col space-y-10">
        {/* TOP: Image + Title on same line (md+) */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-6 md:space-y-0">
          {/* Profile Image */}
          <div className="relative shrink-0">
            <div className="size-40 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-neutral-400 dark:border-neutral-800">
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
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 w-full flex items-center gap-4">
              Hi, I&apos;m Gaurav{" "}
              <span className="inline-flex relative min-w-[12ch] h-[1em] align-middle text-neutral-400">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute left-0 top-0 whitespace-nowrap"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              I build scalable backend systems and APIs using{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiTypescript className="mr-1 w-3 h-3" color="#3178C6" />{" "}
                TypeScript
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiNestjs className="mr-1 w-3 h-3" color="#E0234E" /> NestJS
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiExpress className="mr-1 w-3 h-3" color="#000000" /> Express
              </Badge>
              ,{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiPostgresql className="mr-1 w-3 h-3" color="#336791" />{" "}
                Postgres
              </Badge>
              , and{" "}
              <Badge variant="neutral" className="align-middle mx-1 rounded-md">
                <SiBun className="mr-1 w-3 h-3" color="#F9D71C" /> Bun
              </Badge>
              . Focused on clean architecture, performance, and reliable backend
              infrastructure.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          {/* Primary actions */}

          <div className="gap-3 flex flex-wrap items-center justify-center">
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
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-md text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${hover}`}
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
