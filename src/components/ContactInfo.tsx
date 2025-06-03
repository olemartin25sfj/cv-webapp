export default function ContactInfo({ lang }: { lang: "no" | "en" }) {
  return (
    <section className="mb-8 max-w-3xl">
      <h3 className="text-xl font-semibold mb-2">
        {lang === "no" ? "Kontaktinformasjon" : "Contact Information"}
      </h3>
      <ul className="space-y-1">
        <li>
          <strong>Email:</strong> <a href="mailto:din@email.no">din@email.no</a>
        </li>
        <li>
          <strong>Telefon:</strong> +47 123 45 678
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/dinprofil"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/dinprofil
          </a>
        </li>
      </ul>
    </section>
  );
}
