export interface PackageItem {
  name: string;
  description: string;
  installCommand?: string;
  link: string;
  github?: string;
  version?: string;
}

export const NPM_PACKAGES: PackageItem[] = [
  {
    name: "Hanma CLI",
    description:
      "An npm CLI tool for downloading modular backend snippets, templates, and utilities from the Hanma registry. Designed specifically for backend developers.",
    installCommand: "npm install -g hanma",
    link: "https://www.npmjs.com/package/hanma",
    github: "https://github.com/itstheanurag/hanma",
    version: "0.3.3",
  },
  {
    name: "Scaffoldor CLI",
    description:
      "An npm CLI tool for discovering and cloning production-grade starter templates from GitHub and GitLab directly to your machine without commit history overhead.",
    installCommand: "npm install -g scaffoldor",
    link: "https://www.npmjs.com/package/scaffoldor",
    github: "https://github.com/itstheanurag/scaffoldor",
    version: "1.0.0",
  },
];
