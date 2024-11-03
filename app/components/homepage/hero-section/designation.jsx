"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/app/data/personal-data";
import style from "../../../css/designation.module.css";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import { useRef } from "react";

export default function Designation() {
  let ref = useRef();
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  const [anime, setAnime] = useState(false);
  const [isVis, setIsVis] = useState(false);
  ref.current = size;
  useEffect(() => {
    setTimeout(() => {
      setIsVis(true);
    }, 2300);
    setTimeout(() => {
      setAnime("ta-anime");
    }, 2100);

    setTimeout(() => {
      ref.current ? null : setAnime("ta-des");
    }, 4000);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: isVis && 1 }}
      className={`${style["t-anime"]} ${anime ? style[anime] : ""}`}
    >
      {personalData.designation + "."}
    </motion.span>
  );
}
