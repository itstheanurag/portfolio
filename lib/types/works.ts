import { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  iconBgColor?: string;
}

export interface WorkItem {
  name: string;
  description: string;
  category: "Client Work" | "Personal Project" | "Open Source" | "Exploration";
  status: "In Progress" | "On Maintenance" | "Planned";
  techStack: TechItem[];
  github?: string;
  link?: string;
  image?: string;
  longDescription?: string;
  progressItems?: string[];
}

export interface GithubContribution {
  id: string;
  type: "PullRequest" | "Issue" | "Commit";
  title: string;
  repo: string;
  url: string;
  date: string;
  status: "merged" | "open" | "closed";
}
