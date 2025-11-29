'use client'
import { ANIMATING_HEADING_GRADIENTS } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";

const Main = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "gaurav-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 text-center space-y-6">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1 border border-neutral-700 rounded-full bg-neutral-800/80 backdrop-blur-sm w-fit text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-neutral-100 font-medium">
            Available for backend learning opportunities
          </span>
        </div>

        {/* Animated Gradient Heading */}
        <h1
          className={`text-4xl sm:text-4xl md:text-6xl font-light tracking-tight ${ANIMATING_HEADING_GRADIENTS}`}
        >
          Backend Developer
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-lg sm:max-w-2xl mx-auto leading-relaxed">
          Building reliable and high-performance backend systems with
          <span className="font-medium text-neutral-100"> Node.js</span>,
          <span className="font-medium text-neutral-100"> NestJS</span>,
          <span className="font-medium text-neutral-100"> Express</span>, and
          <span className="font-medium text-neutral-100"> Hono</span> to power
          modern web applications
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Contact Me Button */}
          <Link
            href="https://linkedin.com/in/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-neutral-100 rounded-lg border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/50 hover:scale-105 transition ease-in-out duration-300 max-w-[200px] sm:max-w-none w-auto inline-flex justify-center"
          >
            Contact Me
          </Link>
          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-100 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/50 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
