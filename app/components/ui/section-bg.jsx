import style from "./section-bg.module.css";
import { motion,  } from "framer-motion";


export default function Bg() {
  return <motion.div className={style.bg}></motion.div>;
}
