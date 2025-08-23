"use client";

import { Download } from "lucide-react";

const ANIMATING_HEADING_GRADIENTS = `bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-300 via-green-600 via-blue-400 to-purple-500 animate-gradient`;

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
    <div className="min-h-screen w-full">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 text-center space-y-6">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1 border border-neutral-700 rounded-full bg-neutral-800 w-fit text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-neutral-100 font-medium">
            Available for backend learning opportunities
          </span>
        </div>

        {/* Animated Gradient Heading */}
        <h1
          className={`text-4xl sm:text-4xl md:text-6xl font-light tracking-tight text-transparent bg-clip-text ${ANIMATING_HEADING_GRADIENTS}`}
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
          <button className="px-6 py-2 text-neutral-100 rounded-lg border border-neutral-700 hover:opacity-90 hover:scale-105 transition ease-in-out duration-300 max-w-[200px] sm:max-w-none w-auto">
            Contact Me
          </button>

          {/* Download Resume Button */}

          <button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-900 rounded-lg transition-colors"
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
