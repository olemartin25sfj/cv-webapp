// this is the English version of the page
import ContactInfo from "@/components/ContactInfo";
import ProfileIntro from "@/components/ProfileIntro";
import Portrait from "@/components/Portrait";

export default function HomePageEN() {
  return (
    <main className="p-8">
      <Portrait />
      <h1 className="text-3xl font-bold mb-4">Welcome to my CV</h1>
      <ProfileIntro lang="en" />
      <ContactInfo lang="en" />
      {/* Here I can add more content */}
    </main>
  );
}
