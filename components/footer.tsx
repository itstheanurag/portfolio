import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-40 w-full border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Socials */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="https://instagram.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiInstagram className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.youtube.com/@code_cript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiYoutube className="w-4 h-4" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Gaurav Kumar
        </p>
      </div>
    </footer>
  );
}
