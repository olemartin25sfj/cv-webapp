// this is the English version of the page
import ProfileIntro from "@/components/ProfileIntro";
export default function HomePageEN() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to my CV</h1>
      <ProfileIntro lang="en" />
      {/* Here I can add more content */}
    </main>
  );
}
