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
const siteName = "Gaurav Kumar - Software Developer";
const siteDescription =
  "Full-stack software developer specializing in React, Next.js, TypeScript, and Node.js. Explore my projects, open-source contributions, and technical expertise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Gaurav Kumar",
    "itstheanurag",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
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
    siteName: siteName,
    title: siteName,
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
    title: siteName,
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
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
              <div className="mx-auto max-w-5xl flex justify-center">
                {/* Left side double border + pattern */}
                <div className="hidden lg:block w-12 border-x border-neutral-200 dark:border-neutral-800 bg-diagonal-left shrink-0" />

                <main className="flex-1 max-w-5xl">{children}</main>

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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Kumar",
              alternateName: "itstheanurag",
              url: "https://itsanurag.in",
              image: "https://itsanurag.in/profile-pic.jpeg",
              jobTitle: "Software Developer",
              worksFor: {
                "@type": "Organization",
                name: "Self-employed",
              },
              sameAs: [
                "https://github.com/itstheanurag",
                "https://linkedin.com/in/itstheanurag",
                "https://twitter.com/itstheanurag",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Full Stack Development",
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
