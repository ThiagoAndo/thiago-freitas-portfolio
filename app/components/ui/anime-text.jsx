import { motion, AnimatePresence } from "framer-motion";
export default function TextAnime({ txt }) {
  let msg = txt.replaceAll(" ", ".");
  msg = msg.split("");
  return (
    <AnimatePresence>
      <div style={{ display: `flex`, flexDirection: "row" }}>
        {
          msg.map((letter, i) => (
            <motion.p
              style={letter === "." ? { color: `transparent` } : {}}
              initial={{ opacity: 0, rotateY: 0 }}
              animate={{
                opacity: 1,
                rotateY: [90, 180, 260, 360, 90, 180, 260, 0],
              }}
              transition={{
                duration: 0.25,
                delay: i / 15,
              }}
              key={i}
            >
              {letter}
            </motion.p>
          ))}
      </div>
    </AnimatePresence>
  );
}
