import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

interface FreeOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function FreeOverlay({ isVisible, onComplete }: FreeOverlayProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const gradientColors = [
    "from-red-500 via-yellow-500 to-green-500",
    "from-green-500 via-blue-500 to-purple-500",
    "from-purple-500 via-pink-500 to-red-500",
    "from-cyan-500 via-teal-500 to-emerald-500",
  ];

  useEffect(() => {
    if (isVisible) {
      // Generate confetti particles
      const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F"][
          Math.floor(Math.random() * 6)
        ],
        delay: Math.random() * 0.2,
      }));
      setParticles(newParticles);

      // Auto-complete after animation duration
      const timer = setTimeout(() => {
        onComplete();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onComplete}
        >
          {/* Confetti particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: "50vw",
                y: "50vh",
                scale: 0,
                opacity: 1,
              }}
              animate={{
                x: `${particle.x}vw`,
                y: `${particle.y}vh`,
                scale: [0, 1, 0.8],
                opacity: [1, 1, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2,
                delay: particle.delay,
                ease: "easeOut",
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{ backgroundColor: particle.color }}
            />
          ))}

          {/* Main FREE text with chameleon gradient */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              opacity: [0, 1, 1, 0],
              rotate: [10, 0, -5, 0]
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.3, 0.7, 1],
              ease: "easeOut",
            }}
            className="relative"
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
              style={{
                textShadow: "0 0 40px rgba(255, 255, 255, 0.3)",
              }}
            >
              FREE
            </motion.h1>

            {/* Shimmer/pulse effect overlay */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl"
            />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.5, 2] }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-full blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
