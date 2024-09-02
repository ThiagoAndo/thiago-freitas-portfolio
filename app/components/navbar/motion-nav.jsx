"use client";
import { motion } from "framer-motion";
import useFrame from "@/app/hooks/useFrameValues";
import style from "./nav.module.css";

export default function MotionNav({ children }) {
  const { navOpc, navZ } = useFrame();

  console.log(navZ.current && "none");
  return (
    <motion.nav
      style={{
        zIndex: navZ,
        opacity: navOpc,
      }}
      className={style.navi}
    >
      {children}
    </motion.nav>
  );
}
