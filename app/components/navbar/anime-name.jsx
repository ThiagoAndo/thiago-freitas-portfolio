"use client";
import { useState, useEffect } from "react";
import { DecoderText } from "../decoder-text";
import style from "./anime-name.module.css";
export default function AnimeName() {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnime(true);
    }, 2700);
  }, []);

  return (
    <span
      className={`text-lg md:text-3xl text-[#00adf4] ${style["t-name-anime"]} ${
        anime ? style["ta-name-anime"] : ""
      }`}
    >
      <DecoderText text={"Thiago"} delay={500} />
    </span>
  );
}
