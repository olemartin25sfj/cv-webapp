export default function ProfileIntro({ lang }: { lang: "no" | "en" }) {
  return (
    <section className="mb-8 max-w-3xl">
      {lang === "no" ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            Hei, jeg er [insert name]
          </h2>
          <p>Paragraf bla bla bla bla...</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            Hi, I&apos;m [insert name]
          </h2>
          <p>paragraph bla bla bla bla...</p>
        </>
      )}
    </section>
  );
}
