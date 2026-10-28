import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Archivo, JetBrains_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://itsanurag.in";
const siteTitle = "Gaurav Kumar | Backend Engineer";
const siteDescription =
  "Gaurav Kumar is a backend engineer building the APIs, data models, and infrastructure behind healthcare products. TypeScript, NestJS, PostgreSQL, and Go.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Gaurav Kumar",
  },
  description: siteDescription,
  authors: [{ name: "Gaurav Kumar", url: siteUrl }],
  creator: "Gaurav Kumar",
  publisher: "Gaurav Kumar",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gaurav Kumar",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@itstheanurag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f0e9" },
    { media: "(prefers-color-scheme: dark)", color: "#101310" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Gaurav Kumar",
    alternateName: "itstheanurag",
    url: siteUrl,
    image: `${siteUrl}/profile-pic.jpeg`,
    jobTitle: "Backend Engineer",
    description: siteDescription,
    sameAs: [
      "https://github.com/itstheanurag",
      "https://linkedin.com/in/itstheanurag",
      "https://x.com/itstheanurag",
      "https://instagram.com/its.the.anurag",
      "https://peerlist.io/itstheanurag",
      "https://medium.com/@codecript",
      "https://leetcode.com/itstheanurag",
    ],
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Backend Development",
      "System Design",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Go",
      "NestJS",
      "Express.js",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Open Source",
      "REST APIs",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent focus:bg-base focus:px-4 focus:py-2 focus:font-mono focus:text-[10px] focus:uppercase focus:tracking-[0.16em] focus:text-ink"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
