import ProfileIntro from "@/components/ProfileIntro";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Velkommen til min CV</h1>
      <ProfileIntro lang="no" />
      {/* Her kan jeg legge til mer innhold */}
    </main>
  );
}
