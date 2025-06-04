"use client";

import { useState } from "react";
import GlassButton from "./GlassButton";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "162f73c9-2db7-4a4c-bc54-11b989d1d131");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        throw new Error("Sending feilet");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </GlassButton>

      {status === "sent" && (
        <p className="text-green-600">Takk! Meldingen ble sendt.</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Noe gikk galt. Prøv igjen senere.</p>
      )}
    </form>
  );
}
