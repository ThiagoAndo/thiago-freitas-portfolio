"use client";
import { motion, useScroll, useTransform } from "framer-motion";
export default function MotionNav({ children }) {
  const { scrollY } = useScroll();
  const navOpc = useTransform(
    scrollY,
    [0, 30, 60, 100, 170, 200],
    ["1", "0.8", "0.6", "0.4", "0.2", "0"]
  );

  const navZ = useTransform(
    scrollY,
    [0, 30, 60, 100, 170, 200],
    [true, true, true, false, false, false]
  );

  console.log(typeof navZ.current);
  return (
    <motion.nav
      style={{
        // scale: navZ.current && 0.5, //This retrives the value from useTransform
        position: "fixed",
        width: "90%",
        opacity: navOpc,
        zIndex:'1000'
      }}
      className="bg-transparent"
    >
      {children}
    </motion.nav>
  );
}
