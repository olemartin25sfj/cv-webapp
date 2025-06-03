import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV - OMS",
  description: "Digital CV og portefølje for OMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticleBackground />
        <div className="min-h-screen bg-gradient-animate text-white">
          <header className="p-4 border-b border-white/20 flex justify-end">
            <LanguageSwitcher />
          </header>
          <div className="flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
