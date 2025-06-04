export default function ProfileIntro({ lang }: { lang: "no" | "en" }) {
  return (
    <section className="mb-8 max-w-3xl">
      {lang === "no" ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            Hei, jeg er Ole Martin
          </h2>
          <p>Developer in the making...</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            Hi, I&apos;m Ole Martin
          </h2>
          <p>Developer in the making...</p>
        </>
      )}
    </section>
  );
}
