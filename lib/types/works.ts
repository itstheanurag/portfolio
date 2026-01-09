import { IconType } from "react-icons";

export interface WorkItem {
  name: string;
  description: string;
  category: "Client Work" | "Personal Project" | "Open Source" | "Exploration";
  status: "In Progress" | "On Maintenance" | "Planned" | "Completed";
  techStack: string[];
  github?: string;
  link?: string;
  npm?: string;
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
