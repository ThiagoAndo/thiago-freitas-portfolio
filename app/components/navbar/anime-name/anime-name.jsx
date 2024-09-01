"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DecoderText } from "../../decoder-text";
import style from "./anime-name.module.css";
export default function AnimeName() {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnime(true);
    }, 2300);
  }, []);

  return (
    <motion.span
      whileHover={{ color: "#00adf4", transition: { duration: 0.001 } }}
      className={`text-lg md:text-3xl text-white ${style["t-name-anime"]} ${
        anime ? style["ta-name-anime"] : ""
      }`}
    >
      <DecoderText text={"Thiago"} delay={500} />
    </motion.span>
  );
}
