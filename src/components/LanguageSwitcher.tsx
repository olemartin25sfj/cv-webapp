"use client";

import { useRouter, usePathname } from "next-intl/client";
import { useLocale } from "next-intl";
import GlassButton from "./GlassButton";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const newLocale = locale === "en" ? "no" : "en";

  const switchLanguage = () => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <GlassButton onClick={switchLanguage} aria-label="Switch language">
      {locale === "en" ? "Norsk" : "English"}
    </GlassButton>
  );
}
