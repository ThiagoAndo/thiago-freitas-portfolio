"use client";
import { personalData } from "@/utils/data/personal-data";
import { useState } from "react";
import { DecoderText } from "../../decoder-text";
export default function Name() {
  const [anime, setAnime] = useState(false);
  setTimeout(() => {
    setAnime(true);
  }, 2700);

  return (
    <span
      className={`text-xl	  md:text-5xl text-[#00adf4] t-name-anime ${
        anime ? "ta-name-anime" : ""
      }`}
    >
      <DecoderText text={"Thiago"} delay={500} />
    </span>
  );
}
