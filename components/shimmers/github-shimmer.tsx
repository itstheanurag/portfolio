const GitHubShimmer = () => {
  return (
    <section className="space-y-16 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        GitHub Activity
      </h2>
      <p className="pb-6">
        A visual representation of my coding activity across personal and work
        repositories.
      </p>

      <div className="space-y-16">
        {/* Shimmer for Personal Section */}
        <div className="group pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-neutral-800 rounded-full animate-pulse" />
                  <div className="h-8 bg-neutral-800 rounded w-3/4 animate-pulse"></div>
                </div>
                <div className="h-4 bg-neutral-800 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-neutral-800 rounded w-5/6 mt-2 animate-pulse"></div>
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="w-full h-40 bg-neutral-900 border border-neutral-800 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Shimmer for Work Section */}
        <div className="group border-b border-neutral-800 pb-12 last:border-b-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-neutral-800 rounded-full animate-pulse" />
                  <div className="h-8 bg-neutral-800 rounded w-3/4 animate-pulse"></div>
                </div>
                <div className="h-4 bg-neutral-800 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-neutral-800 rounded w-5/6 mt-2 animate-pulse"></div>
              </div>
            </div>
            <div className="lg:col-span-9 flex flex-col justify-center">
              <div className="w-full h-40 bg-neutral-900 border border-neutral-800 rounded-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubShimmer;
