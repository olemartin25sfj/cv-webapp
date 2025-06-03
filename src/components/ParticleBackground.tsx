"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [dots, setDots] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 60 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }));
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-emerald-950">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{ top: dot.top, left: dot.left }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -10, 0] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
