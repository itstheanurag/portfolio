"use client";
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
    <div className="min-h-screen w-full relative overflow-hidden bg-neutral-950 flex flex-col items-center justify-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />

      {/* Radial Gradient for Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center space-y-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 border border-neutral-800 rounded-full bg-neutral-900/50 backdrop-blur-md w-fit text-xs sm:text-sm shadow-sm hover:border-neutral-700 transition-colors duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-neutral-300 font-medium">
            Available for backend learning opportunities
          </span>
        </div>

        {/* Animated Gradient Heading */}
        <div className="space-y-2">
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter ${ANIMATING_HEADING_GRADIENTS} bg-clip-text text-transparent`}
          >
            Backend Developer
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Building reliable and high-performance backend systems with
            <span className="font-medium text-neutral-200"> Node.js</span>,
            <span className="font-medium text-neutral-200"> NestJS</span>,
            <span className="font-medium text-neutral-200"> Express</span>, and
            <span className="font-medium text-neutral-200"> Hono</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          {/* Contact Me Button */}
          <Link
            href="https://linkedin.com/in/itstheanurag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-neutral-100 rounded-full border border-neutral-700 bg-neutral-800/80 backdrop-blur-sm hover:bg-neutral-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-3 text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-neutral-800/50 rounded-full transition-all duration-300 border border-transparent hover:border-neutral-800"
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
