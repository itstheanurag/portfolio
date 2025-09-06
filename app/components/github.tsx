"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Heading from "./typography/heading";
import Paragraph from "./typography/paragraph";

interface GitHubGraphProps {
  username: string;
}

function GitHubGraph({ username }: GitHubGraphProps) {
  const [graphUrl, setGraphUrl] = useState<string>("");

  useEffect(() => {
    setGraphUrl(`https://ghchart.rshah.org/${username}`);
  }, [username]);

  return (
    <div className="w-full">
      {graphUrl && (
        <div className="border border-neutral-700 rounded-sm p-6 transition-all duration-300 hover:border-neutral-600">
          <Image
            src={graphUrl}
            alt={`${username}'s GitHub Activity Graph`}
            className="w-full rounded-sm transition-all duration-500 grayscale hover:grayscale-0"
            width={500}
            height={200}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}

export default function GithubProfiles() {
  return (
    <>
      <section className="mt-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <Heading>GitHub Activity</Heading>
        <Paragraph className="pb-6">
          A visual representation of my coding activity across personal and work
          repositories.
        </Paragraph>

        <div className="space-y-16">
          {/* Personal */}
          <div className="group  pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-3 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                <GitHubGraph username="itstheanurag" />
              </div>
            </div>
          </div>

          {/* Work */}
          <div className="group border-b border-neutral-800 pb-12 last:border-b-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-3 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                <GitHubGraph username="itsthegaurav" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" border-b border-neutral-800 pb-12 last:border-b-0 max-w-6xl mx-auto"></div>
    </>
  );
}
