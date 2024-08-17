"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function MotionNav({ children }) {
  const { scrollY } = useScroll();
  const navOpc = useTransform(
    scrollY,
    [0, 30, 60, 100, 170, 200],
    ["1", "0.8", "0.6", "0.4", "0.2", "0"]
  );

  const navZ = useTransform(
    scrollY,
    [0, 200],
    ["3000", "-3000"]
  );

  return (
    <motion.nav
      style={{
        position: "fixed",
        width: "90%",
        opacity: navOpc,
        zIndex: navZ,
      }}
      className="bg-transparent"
    >
      {children}
    </motion.nav>
  );
}
