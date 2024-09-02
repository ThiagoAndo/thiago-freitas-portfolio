"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import style from "./nav.module.css";
let navOpcVal = null;
export default function MotionNav({ children }) {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );

  if (!size) {
    navOpcVal = {
      arr1: [0, 30, 60, 135, 170, 200],
      arr2: ["1", "0.8", "0.6", "0.4", "0.2", "0"],
    };
  } else {
    navOpcVal = {
      arr1: [0, 30, 60, 70, 80, 110],
      arr2: ["1", "0.8", "0.6", "0.4", "0.2", "0"],
    };
  }
  console.log("navOpcVal.arr1");
  console.log(navOpcVal.arr1);

  const { scrollY } = useScroll();
  const navOpc = useTransform(scrollY, navOpcVal.arr1, navOpcVal.arr2);

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
