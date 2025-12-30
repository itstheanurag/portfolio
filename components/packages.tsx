"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { NPM_PACKAGES, PackageItem } from "@/lib/data/packages";
import { SiGithub, SiNpm } from "react-icons/si";
import { FiExternalLink, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

/* -------------------------------------------------------
   Component: PackageCard
------------------------------------------------------- */

export function PackageCard({ pkg }: { pkg: PackageItem }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (pkg.installCommand) {
      navigator.clipboard.writeText(pkg.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex gap-4 sm:gap-6 group">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center border border-red-100 dark:border-red-900/30">
          <SiNpm className="w-5 h-5 sm:w-6 sm:h-6 text-[#CB3837]" />
        </div>
      </div>

      <div className="flex-grow">
        {/* Title + Links */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            {pkg.name}
            {pkg.version && (
              <Badge
                variant="outline"
                className="text-[10px] h-5 px-1.5 font-normal text-neutral-500"
              >
                v{pkg.version}
              </Badge>
            )}
          </h3>

          <div className="flex items-center gap-3 mt-1 sm:mt-0">
            {pkg.github && (
              <Link
                href={pkg.github}
                target="_blank"
                className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
              >
                <SiGithub className="w-4 h-4" />
              </Link>
            )}

            <Link
              href={pkg.link}
              target="_blank"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition"
            >
              <FiExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
          {pkg.description}
        </p>

        {/* Install Command */}
        {pkg.installCommand && (
          <div className="mt-3 flex items-center gap-2">
            <div className="relative group/command">
              <code className="text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1.5 rounded-md font-mono border border-neutral-200 dark:border-neutral-700 block pr-9">
                {pkg.installCommand}
              </code>
              <button
                onClick={handleCopy}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                title="Copy command"
              >
                {copied ? (
                  <FiCheck className="w-3.5 h-3.5" />
                ) : (
                  <FiCopy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Component: PackagesSection (default export)
------------------------------------------------------- */

export default function PackagesSection() {
  return (
    <section id="packages" className="max-w-4xl mx-auto px-6 py-8">
      {/* Title */}
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8">
        NPM Packages
      </h2>

      <div className="space-y-12">
        {NPM_PACKAGES.map((pkg, i) => (
          <PackageCard key={i} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
