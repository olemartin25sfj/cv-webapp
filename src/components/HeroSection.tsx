import ProfileIntro from "./ProfileIntro";
import Portrait from "./Portrait";

interface HeroSectionProps {
  lang: "no" | "en";
}

export default function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section className="w-full py-24 px-4 flex flex-col items-center text-center gap-6">
      <Portrait />
      <ProfileIntro lang={lang} />
    </section>
  );
}
