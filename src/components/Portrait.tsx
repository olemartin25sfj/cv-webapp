import Image from "next/image";

export default function Portrait() {
  return (
    <div className="mb-8">
      <Image
        src="/portrett.jpg"
        alt="Portrett av meg"
        width={200}
        height={200}
        className="rounded-full shadow-md mx-auto"
        priority
      />
    </div>
  );
}
