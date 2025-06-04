import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-yellow-50`}
      >
        <div className="relative min-h-screen overflow-hidden">
          {/* Bakgrunnsgradient */}
          <div className="fixed inset-0 -z-20 bg-gradient-to-b from-emerald-950 to-emerald-900" />

          {/* Partikkel-bakgrunn */}
          <ParticleBackground />
          <Navbar />

          {/* Innhold */}
          <header className="p-4 border-b border-white/20 flex justify-end relative z-10"></header>
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
