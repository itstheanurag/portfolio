const SkillsAndInterestsShimmer = () => {
  const renderGrid = (count: number) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {[...Array(count)].map((_, idx) => (
        <div
          key={idx}
          className="flex items-center justify-start gap-2 rounded-lg border border-neutral-600 px-4 py-3 animate-pulse"
        >
          <div className="w-5 h-5 bg-neutral-800 rounded"></div>
          <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="space-y-16 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">Skills</h2>

      <p className="pb-6">
        I love exploring new technologies, building scalable solutions, and
        solving real-world problems with code. My interests span full-stack
        development, backend architectures, and creating products that make an
        impact.
      </p>

      <h3 className="text-xl font-semibold text-base-content mt-10 mb-4">
        Tools & Frameworks
      </h3>
      {renderGrid(16)}

      <h3 className="text-xl font-semibold text-base-content mt-10 mb-4">
        Programming Languages
      </h3>
      {renderGrid(4)}
    </section>
  );
};

export default SkillsAndInterestsShimmer;
