"use client";

import { useRouter, usePathname } from "next/navigation";
import GlassButton from "./GlassButton";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Enkel språkdeteksjon i URL (f.eks. /en eller /no)
  const currentLang = pathname.startsWith("/en") ? "en" : "no";

  const switchLanguage = () => {
    if (currentLang === "en") {
      router.push(pathname.replace(/^\/en/, "") || "/");
    } else {
      router.push("/en" + pathname);
    }
  };

  return (
    <GlassButton onClick={switchLanguage} aria-label="Switch language">
      {currentLang === "en" ? "Norsk" : "English"}
    </GlassButton>
  );
}
