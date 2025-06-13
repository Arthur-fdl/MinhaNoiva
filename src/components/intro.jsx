import { motion } from "framer-motion";

export default function Intro({ onEnter }) {
  return (
    <div className="intro-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="intro-card"
      >
        <h1>💘 oiii, minha vidoquinha!</h1>
        <p>Essa é uma pequena surpresa para te lembrar o quanto você é especial.</p>
        <button onClick={onEnter}>Entrar</button>
      </motion.div>
    </div>
  );
}
