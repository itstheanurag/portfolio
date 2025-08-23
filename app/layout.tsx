import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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

<div className="min-h-screen w-full bg-black relative">
  {/* Cosmic Noise */}
  <div className="absolute inset-0 z-0" />
  {/* Your Content/Components */}
</div>;

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
        // style={{
        //   backgroundImage: `
        //     radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        //     radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        //     radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        //     radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
        //   `,
        // }}

        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
