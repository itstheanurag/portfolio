import Image from "next/image";
import Heading from "./typography/heading";
import Paragraph from "./typography/paragraph";

interface GitHubGraphProps {
  username: string;
  accentColor?: string;
}

function GitHubGraph({ username, accentColor = "blue" }: GitHubGraphProps) {
  const graphUrl = `https://ghchart.rshah.org/${username}`;
  
  // Color variants for different accents
  const colorVariants = {
    blue: {
      border: "group-hover:border-blue-500/50",
      glow: "from-blue-500/10 via-purple-500/5 to-blue-500/10",
      shine: "from-blue-500/20 via-transparent to-purple-500/20",
      filter: "hue-rotate-80deg saturate-50%", // Makes whites more blue-ish
    },
    green: {
      border: "group-hover:border-green-500/50",
      glow: "from-green-500/10 via-teal-500/5 to-green-500/10",
      shine: "from-green-500/20 via-transparent to-teal-500/20",
      filter: "hue-rotate-80deg saturate-50%", // Makes whites more green-ish
    },
  };

  const colors = colorVariants[accentColor as keyof typeof colorVariants] || colorVariants.blue;

  return (
    <div className="w-full">
      <div className={`relative overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-8 rounded-xl transition-all duration-300 ${colors.border}`}>
        {/* Colored gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} pointer-events-none`} />
        
        {/* Dark overlay to reduce white box intensity */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-transparent to-neutral-900/60 pointer-events-none" />
        
        {/* Animated shine effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.shine} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
        
        {/* Corner accents */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.glow} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${colors.glow} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
        
        <div className="relative">
          <Image
            src={graphUrl}
            alt={`${username}'s GitHub Activity Graph`}
            className="w-full mix-blend-screen opacity-90"
            style={{ filter: colors.filter }}
            width={500}
            height={200}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default function GithubProfiles() {
  return (
    <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <Heading>GitHub Activity</Heading>
      <Paragraph className="pb-6">
        A visual representation of my coding activity across personal and work
        repositories.
      </Paragraph>

      <div className="space-y-16">
        {/* Personal */}
        <div className="group pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 tracking-tight">
                    Personal
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Open source contributions and personal projects.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 flex flex-col justify-center">
              <GitHubGraph username="itstheanurag" accentColor="blue" />
            </div>
          </div>
        </div>

        {/* Work */}
        <div className="group border-b border-neutral-800 pb-12 last:border-b-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                  <h3 className="text-2xl sm:text-3xl font-medium text-neutral-100 tracking-tight">
                    Work
                  </h3>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Professional development and team collaborations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-9 flex flex-col justify-center">
              <GitHubGraph username="itsthegaurav" accentColor="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}