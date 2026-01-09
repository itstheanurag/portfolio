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
      "An NPM package CLI for downloading custom made snippets, templates and modules from the hanma registry. Specially designed for backend developers",
    installCommand: "npm install -g hanma",
    link: "https://www.npmjs.com/package/hanma",
    github: "https://github.com/itstheanurag/hanma",
    version: "0.3.3",
  },
  {
    name: "Scaffoldor Cli",
    description:
      "A npm package cli for finding and downloading producation grade public templates from github and gitlab directly to your system with any messy commit histories and preffered package manager",
    installCommand: "npm install -g scaffoldor",
    link: "https://www.npmjs.com/package/scaffoldor",
    github: "https://github.com/itstheanurag/scaffoldor",
    version: "1.0.0",
  },
];
