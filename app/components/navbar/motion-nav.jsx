"use client";
import { motion} from "framer-motion";
import useFrame from "@/app/hooks/useFrameValues";
import style from "./nav.module.css";
export default function MotionNav({ children }) {
const navOpc = useFrame();

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
