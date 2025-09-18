import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 bg-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
        
        {/* Left - Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link
            href="https://github.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-right">
          <p className="text-neutral-500">
            Created by <span className="text-neutral-300">Gaurav Kumar</span> &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
