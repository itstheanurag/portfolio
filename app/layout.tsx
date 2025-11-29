import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import GlobalParticles from "@/components/GlobalParticiles";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "itstheanurag ( Gaurav Kumar )",
  description:
    "Showcasing the work and projects of Gaurav Kumar a backend developer. Because the world really needed another developer who doesn't drink coffee. Brace yourself for pure backend wizardry. Writes Code, Lifts weights and watches anime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased  
        min-h-screen relative`}
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
        }}
      >
        {/* Global Particles Background */}
        <GlobalParticles />
        
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}