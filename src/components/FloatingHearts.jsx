import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
  id: Date.now(),
  size: Math.random() * 30 + 20,
};

      setHearts((prev) => [...prev, newHeart]);

      // Remove o coração após 10s
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
  key={heart.id}
  animate={{ rotate: 360 }}
  className="absolute text-pink-400"
>
  ❤️
</motion.div>

      ))}
    </div>
  );
}
