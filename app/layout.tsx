import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://itsanurag.in";
const siteTitle = "Gaurav Kumar | Software Developer";
const siteDescription =
  "Gaurav Kumar is a software developer building scalable backend systems, web applications, and developer tools using TypeScript, Node.js, Next.js, and Go.";

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
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Gaurav Kumar - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Gaurav Kumar",
    alternateName: "itstheanurag",
    url: siteUrl,
    image: `${siteUrl}/profile-pic.jpeg`,
    jobTitle: "Software Developer",
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
        className={`${jetbrainsMono.variable} ${firaCode.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              <div className="mx-auto max-w-5xl flex justify-center">
                {/* Left side double border + pattern */}
                <div className="hidden lg:block w-12 border-x border-neutral-200 dark:border-neutral-800 bg-diagonal-left shrink-0" />

                <div className="flex-1 max-w-5xl">{children}</div>

                {/* Right side double border + pattern */}
                <div className="hidden lg:block w-12 border-x border-neutral-200 dark:border-neutral-800 bg-diagonal-right shrink-0" />
              </div>
            </div>
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
