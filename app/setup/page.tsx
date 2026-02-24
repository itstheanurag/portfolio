import { ToolCard, ToolProps } from "@/components/ToolCard";
import {
  BsLaptop,
  BsCodeSlash,
  BsCameraVideo,
  BsTerminal,
} from "react-icons/bs";

export const metadata = {
  title: "Setup | Anurag",
  description: "The hardware, software, and services I use daily.",
};

const hardware: ToolProps[] = [
  {
    name: 'MacBook Pro 16" (M3 Max)',
    description:
      "My primary workstation. Handled everything from compiling large projects to heavy browser usage effortlessly.",
    link: "https://amazon.com/dp/example-affiliate-link-macbook",
    icon: <BsLaptop className="w-5 h-5" />,
  },
  {
    name: 'LG 32" UltraFine 4K Display',
    description:
      "Crisp and clear. The massive screen real estate is perfect for keeping docs and editor side by side.",
    link: "https://amazon.com/dp/example-affiliate-link-monitor",
    icon: <BsLaptop className="w-5 h-5" />,
  },
  {
    name: "Logitech MX Master 3S",
    description:
      "The best mouse for productivity. The vertical and horizontal scroll wheels are game changers for coding.",
    link: "https://amazon.com/dp/example-affiliate-link-mouse",
    icon: <BsLaptop className="w-5 h-5" />,
  },
];

const software: ToolProps[] = [
  {
    name: "VS Code / Cursor",
    description:
      "My go-to editor. Paired with AI, it supercharges development speed.",
    link: "https://cursor.sh?affiliate=example",
    icon: <BsCodeSlash className="w-5 h-5" />,
  },
  {
    name: "Ghostty Terminal",
    description: "Fast, minimal, and GPU-accelerated.",
    link: "https://ghostty.org",
    icon: <BsTerminal className="w-5 h-5" />,
  },
  {
    name: "Raycast",
    description:
      "Replaced Spotlight for me. A must-have for Mac users for clipboard history and quick snippets.",
    link: "https://raycast.com?affiliate=example",
    icon: <BsCodeSlash className="w-5 h-5" />,
  },
];

const gear: ToolProps[] = [
  {
    name: "Sony A7IV",
    description:
      "Used as a high-end webcam for meetings and for taking professional photos on the go.",
    link: "https://amazon.com/dp/example-affiliate-link-camera",
    icon: <BsCameraVideo className="w-5 h-5" />,
  },
];

export default function SetupPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          Setup
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
          A list of my favorite tools, gear, and software that I use on a daily
          basis to design, build, and record.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Hardware
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hardware.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Software
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {software.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
            Recording Gear
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gear.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
