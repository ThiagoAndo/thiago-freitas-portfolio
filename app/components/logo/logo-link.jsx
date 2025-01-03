"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ThisTooltip from "../ui/tooltip";
import useFrame from "@/app/hooks/useFrameValues";
import style from "./logo-link.module.css";

export const LogoLink = () => {
const {navOpc} = useFrame();

  return (
    <motion.div
      style={{
        // scale: navZ.current && 0.5, //This retrives the value from useTransform
        opacity: navOpc,
      }}
    >
      <ThisTooltip
        tle={"Thiago"}
        bg={"#00000020"}
        bdCol={"transparent"}
        cl={"#000000"}
      >
        <Link className={style.logo} href={"https://github.com/ThiagoAndo"} target="blank_">
          <spam
            className="font
           font-bold text-2xl text-blue-600"
          >
            T
          </spam>
        </Link>
      </ThisTooltip>
    </motion.div>
  );
};
