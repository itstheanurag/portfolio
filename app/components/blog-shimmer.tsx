import React from "react";

interface ShimmerProps {
  count?: number; // Number of shimmer cards to render
}

const Shimmer: React.FC<ShimmerProps> = ({ count = 3 }) => {
  return (
    <div className="space-y-16">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="group border-b border-neutral-800 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image placeholder */}
            <div className="lg:col-span-5">
              <div className="aspect-video bg-neutral-900 rounded-sm animate-pulse"></div>
            </div>

            {/* Text placeholders */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="h-8 bg-neutral-800 rounded animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-5 bg-neutral-800 rounded animate-pulse"></div>
                  <div className="h-5 bg-neutral-800 rounded w-4/5 animate-pulse"></div>
                  <div className="h-5 bg-neutral-800 rounded w-3/5 animate-pulse"></div>
                </div>
              </div>

              {/* Tags/Meta placeholders */}
              <div className="flex gap-3">
                <div className="h-6 w-16 bg-neutral-800 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-neutral-800 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
