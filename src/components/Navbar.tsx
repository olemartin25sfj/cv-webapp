"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import GlassButton from "./GlassButton";

const navItems = [
  { label: "Hjem", href: "#home", en: "Home" },
  { label: "Om meg", href: "#about", en: "About" },
  { label: "Ferdigheter", href: "#skills", en: "Skills" },
  { label: "Prosjekter", href: "#projects", en: "Projects" },
  { label: "Kontakt", href: "#contact", en: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const isNorwegian = locale === "no";

  return (
    <nav className="z-50 w-full sticky top-0 bg-black/30 backdrop-blur border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg font-bold text-white">OMS</span>

        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition"
            >
              {isNorwegian ? item.label : item.en}
            </a>
          ))}
          <GlassButton>
            <a href={isNorwegian ? "/cv_no.pdf" : "/cv_en.pdf"} download>
              {isNorwegian ? "Last ned CV" : "Download CV"}
            </a>
          </GlassButton>
        </div>

        {/* Mobilmeny */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-black/70 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {isNorwegian ? item.label : item.en}
            </a>
          ))}
          <GlassButton>
            <a href={isNorwegian ? "/cv_no.pdf" : "/cv_en.pdf"} download>
              {isNorwegian ? "Last ned CV" : "Download CV"}
            </a>
          </GlassButton>
        </div>
      )}
    </nav>
  );
}
