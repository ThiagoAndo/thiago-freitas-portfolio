"use client";
import { useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";

export default function Designation() {
  const [anime, setAnime] = useState(false);
  const [isVis, setIsVis] = useState(false);
  setTimeout(() => {
    setIsVis(true);
  }, 2000);
 setTimeout(() => {
   setAnime(true);
 }, 2700);
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: isVis && 1 }}
      className={`text-[#00adf4] t-anime ${anime ? "ta-anime" : ""}`}
    >
      {personalData.designation + "."}
    </motion.span>
  );
}
