import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export interface ToolProps {
  name: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

export function ToolCard({ name, description, link, icon }: ToolProps) {
  return (
    <div className="group flex flex-col justify-between p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
      <div>
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300">
              {icon}
            </div>
          )}
          <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {name}
          </h3>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors w-fit"
      >
        <span>Get it here</span>
        <BsArrowUpRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
