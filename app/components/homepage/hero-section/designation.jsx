"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/app/data/personal-data";
import style from "./designation.module.css";
export default function Designation() {
  const [anime, setAnime] = useState(false);
  const [isVis, setIsVis] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVis(true);
    }, 2300);
    setTimeout(() => {
      setAnime("ta-anime");
    }, 2100);

    setTimeout(() => {
      setAnime("ta-des");
    },3000);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: isVis && 1 }}
      className={`text-[#00adf4] ${style["t-anime"]} ${
        anime ? style[anime] + " text-[#90defd]" : ""
      }`}
    >
      {personalData.designation + "."}
    </motion.span>
  );
}
