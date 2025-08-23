const ANIMATING_HEADING_GRADIENTS = `bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-300 via-green-600 via-blue-400 to-purple-500 animate-gradient`;

const Main = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 text-center space-y-6">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-1 border border-gray-700 rounded-full bg-neutral-800 w-fit text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-white font-medium">
            Available for backend learning opportunities
          </span>
        </div>

        {/* Animated Gradient Heading */}
        <h1
          className={`text-4xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text ${ANIMATING_HEADING_GRADIENTS}`}
        >
          Backend Developer
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-400 max-w-lg sm:max-w-2xl mx-auto">
          Building reliable and high-performance backend systems with
          <span className="font-semibold text-white"> Node.js</span>,
          <span className="font-semibold text-white"> NestJS</span>,
          <span className="font-semibold text-white"> Express</span>, and
          <span className="font-semibold text-white"> Hono</span> to power
          modern web applications
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Contact Me Button */}
          <button
            className="px-6 py-2 text-white rounded-lg border border-gray-700 hover:opacity-90 hover:scale-105 transition ease-in-out duration-300 max-w-[200px] sm:max-w-none w-auto"
          >
            Contact Me
          </button>

          {/* Download Resume Button */}
          <button className="px-6 py-2 text-white rounded-lg hover:bg-neutral-800 transition ease-in-out duration-300 max-w-[200px] sm:max-w-none w-auto">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
