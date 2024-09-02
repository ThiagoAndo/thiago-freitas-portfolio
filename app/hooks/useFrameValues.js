import useMediaScreen from "@/app/hooks/useMediaScreen";
import { motion, useScroll, useTransform } from "framer-motion";

export default function useFrame() {
  let navOpcVal = null;

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

  const { scrollY } = useScroll();
  const navOpc = useTransform(scrollY, navOpcVal.arr1, navOpcVal.arr2);

  return navOpc;
}
