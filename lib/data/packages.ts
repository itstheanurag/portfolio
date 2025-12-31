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
      "An NPM package CLI for generating full-stack boilerplates. It connects to the Hanma website to fetch and install backend snippetsthe amount of boilerplate code in backend development.",
    installCommand: "npm install -g hanma",
    link: "https://www.npmjs.com/package/hanma",
    github: "https://github.com/itstheanurag/hanma",
    version: "0.2.0",
  },
];
