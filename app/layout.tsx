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

export const metadata: Metadata = {
  title: "itstheanurag (Gaurav Kumar)",
  description: "Showcasing the work and projects of Gaurav Kumar.",
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
        <Analytics />
      </body>
    </html>
  );
}
