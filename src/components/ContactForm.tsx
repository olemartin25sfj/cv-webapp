"use client";

import { useRef, useState } from "react";
import GlassButton from "./GlassButton";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "162f73c9-2db7-4a4c-bc54-11b989d1d131");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success:", result);
        setStatus("sent");
        formRef.current.reset();
      } else {
        console.error("Feil fra Web3Forms:", result.message);
        setStatus("error");
      }
    } catch (error) {
      console.error("Uventet feil:", error);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Navn"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-post"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Melding"
        required
        className="w-full p-2 border rounded h-32"
      />
      <GlassButton
        type="submit"
        disabled={status === "sending"}
        className="text-white disabled:opacity-50 flex items-center gap-2"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sender...
          </>
        ) : (
          "Send melding"
        )}
      </GlassButton>

      {status === "sent" && (
        <p className="text-green-600">✅ Meldingen ble sendt!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">❌ Noe gikk galt. Prøv igjen senere.</p>
      )}
    </form>
  );
}
