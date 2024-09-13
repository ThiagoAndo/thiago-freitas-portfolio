import style from "./section-bg.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { bgAnime } from "@/app/utils/motion-variants";
import useDalay from "@/app/hooks/useDelay";

export default function Bg({ time, animate, git = false }) {
  const isTime = useDalay(time);
  console.log(isTime);
  console.log("isTime");
  if (animate) {
    return (
      <>
        {isTime && (
          <motion.div
            initial={bgAnime.init}
            animate={bgAnime.anime}
            exit={bgAnime.end}
            transition={bgAnime.transition}
            className={git === false ? style.bg : style.bg_git}
          ></motion.div>
        )}
      </>
    );
  } else {
    <motion.div className={style.bg}></motion.div>;
  }
}
