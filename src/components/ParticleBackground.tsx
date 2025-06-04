"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_PARTICLES = 30;

type Particle = {
  top: string;
  left: string;
};

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Dette kjøres kun på klienten
    const generated = Array.from({ length: NUM_PARTICLES }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setParticles(generated);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      animate={{
        background: [
          "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
          "linear-gradient(to bottom right, #134e5e, #245e6e, #71b280)",
          "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
