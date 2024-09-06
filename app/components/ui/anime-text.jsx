import { motion, AnimatePresence } from "framer-motion";
export default function TextAnime({ txt, showTxt }) {
  let msg = txt.replaceAll(" ", ".");
  msg = msg.split("");
  return (
    <AnimatePresence>
      <div className="flex flex-row text-lg md:text-2xl">
        {showTxt === true ? (
          msg.map((letter, i) => (
            <motion.p
              className="m-0"
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
          ))
        ) : (
          <p className="text-transparent text-lg md:text-2xl">{txt}</p>
        )}
      </div>
    </AnimatePresence>
  );
}
