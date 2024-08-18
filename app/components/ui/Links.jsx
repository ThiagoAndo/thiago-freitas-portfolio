"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function UiLinks({ http, children, style }) {
  return (
    <motion.div
      style={{ color: "#008aff" }}
      whileHover={{
        scale: 1.2,
        color: "#2927b9",
        transition: {
          type: "spring",
        },
      }}
    >
      <Link href={http} className={style || null} target="_blank">
        {children}
      </Link>
    </motion.div>
  );
}
