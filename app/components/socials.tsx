"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from "react-icons/fa";

const SOCIALS = [
  { name: "Personal Github", icon: FaGithub, link: "https://github.com/itstheanurag" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourprofile",
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
  {
    name: "Medium",
    icon: FaMedium,
    link: "https://medium.com/@codecript",
  },
  { name: "Work Github", icon: FaGithub, link: "https://github.com/itsthegaurav" }
];

export default function SocialsSection() {
  return (
    <section className="m-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto space-y-6">
      <h2 className="text-4xl sm:text-5xl text-neutral-100 font-light mb-4 tracking-tight">
        Socials
      </h2>
      <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-8">
        Connect with me on these platforms to see my projects, ideas, and
        updates.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {SOCIALS.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-neutral-700 rounded-lg p-4 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
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
