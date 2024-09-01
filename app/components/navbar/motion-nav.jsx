"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "./nav.module.css"
export default function MotionNav({ children }) {
  const { scrollY } = useScroll();
  const navOpc = useTransform(
    scrollY,
    [0, 30, 60, 100, 135, 170],
    ["1", "0.8", "0.6", "0.4", "0.2", "0"]
  );

  // const navZ = useTransform(
  //   scrollY,
  //   [0, 30, 60, 100, 170, 200],
  //   [true, true, true, false, false, false]
  // );

  return (
    <motion.nav
      style={{
        // scale: navZ.current && 0.5, //This retrives the value from useTransform
        opacity: navOpc,
      }}
      className={style.navi}
    >
      {children}
    </motion.nav>
  );
}
