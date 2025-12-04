import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Socials */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiLinkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@code_cript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <SiYoutube className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-neutral-400 font-light">
          © {new Date().getFullYear()} Gaurav Kumar
        </p>
      </div>
    </footer>
  );
}
