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
        <div className="relative min-h-screen overflow-hidden">
          {/* Bakgrunnsgradient */}
          <div className="fixed inset-0 -z-20 bg-gradient-to-b from-emerald-950 to-emerald-900" />

          {/* Partikkel-bakgrunn */}
          <ParticleBackground />

          {/* Innhold */}
          <header className="p-4 border-b border-white/20 flex justify-end relative z-10">
            <LanguageSwitcher />
          </header>
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
