import Image from "next/image";

interface GitHubGraphProps {
  username: string;
  accentColor?: string;
}

function GitHubGraph({ username, accentColor = "blue" }: GitHubGraphProps) {
  const graphUrl = `https://ghchart.rshah.org/${username}`;

  // Color variants for different accents
  const colorVariants = {
    blue: {
      filter: "hue-rotate-80deg saturate-50%", // Makes whites more blue-ish
    },
    green: {
      filter: "hue-rotate-80deg saturate-50%", // Makes whites more green-ish
    },
  };

  const colors =
    colorVariants[accentColor as keyof typeof colorVariants] ||
    colorVariants.blue;

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <Image
          src={graphUrl}
          alt={`${username}'s GitHub Activity Graph`}
          className="w-full mix-blend-multiply dark:mix-blend-screen"
          style={{ filter: colors.filter }}
          width={500}
          height={200}
          unoptimized
        />
      </div>
    </div>
  );
}

export default function GithubProfiles({ username }: { username: string }) {
  return (
    <section id="github" className="max-w-4xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Featured GitHub Activity
          </h2>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-[10px] font-medium text-green-700 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          2025 Contributions
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <GitHubGraph username={username} accentColor="green" />
        <div className="flex justify-end items-center gap-2 mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-sm bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-green-200 dark:bg-green-900/40"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-green-400 dark:bg-green-700/60"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-green-600 dark:bg-green-500"></div>
            <div className="w-2.5 h-2.5 rounded-sm bg-green-800 dark:bg-green-300"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
