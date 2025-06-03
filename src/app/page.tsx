import ProfileIntro from "@/components/ProfileIntro";
import ContactInfo from "@/components/ContactInfo";
import Portrait from "@/components/Portrait";
import MainContentWrapper from "@/components/MainContentWrapper";

export default function HomePage() {
  return (
    <MainContentWrapper>
      <Portrait />
      <h1 className="text-3xl font-bold mb-4">Velkommen til min CV</h1>
      <ProfileIntro lang="no" />
      <ContactInfo lang="no" />
      {/* Her kan jeg legge til mer innhold */}
    </MainContentWrapper>
  );
}
