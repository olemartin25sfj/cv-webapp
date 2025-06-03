import { ReactNode } from "react";

export default function MainContentWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      role="main"
      className="bg-white/10 backdrop-blur-lg text-white p-4 sm:p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-12"
    >
      {children}
    </main>
  );
}

MainContentWrapper.displayName = "MainContentWrapper";
