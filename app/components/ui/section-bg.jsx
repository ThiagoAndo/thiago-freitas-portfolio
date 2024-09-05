import style from "./section-bg.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { bgAnime } from "@/app/utils/motion-variants";
import useDalay from "@/app/hooks/useDelay";

export default function Bg({ show, animate }) {
  const isTime = useDalay(show);
  console.log(isTime);
  console.log("isTime");
  if (animate) {
    return (
      <AnimatePresence>
        {isTime && (
          <motion.div
            initial={bgAnime.init}
            animate={bgAnime.anime}
            exit={bgAnime.end}
            transition={bgAnime.transition}
            className={style.bg}
          ></motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    <motion.div className={style.bg}></motion.div>;
  }
}
