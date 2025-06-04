import ProfileIntro from "@/components/ProfileIntro";
import ContactForm from "@/components/ContactForm";
import Portrait from "@/components/Portrait";
import MainContentWrapper from "@/components/MainContentWrapper";

export default function HomePage() {
  return (
    <MainContentWrapper>
      <Portrait />
      <h1 className="text-3xl font-bold mb-4">Velkommen til min CV</h1>
      <ProfileIntro lang="no" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt meg</h2>
      <ContactForm />
    </MainContentWrapper>
  );
}
