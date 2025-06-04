// this is the English version of the page

import ProfileIntro from "@/components/ProfileIntro";
import Portrait from "@/components/Portrait";
import MainContentWrapper from "@/components/MainContentWrapper";
import ContactForm from "@/components/ContactForm";

export default function HomePageEN() {
  return (
    <MainContentWrapper>
      <Portrait />
      <h1 className="text-3xl font-bold mb-4">Welcome to my CV</h1>
      <ProfileIntro lang="en" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Me</h2>
      <ContactForm />
    </MainContentWrapper>
  );
}
