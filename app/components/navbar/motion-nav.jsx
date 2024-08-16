"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MotionNav({ children }) {
  const [isPosition, setIsPosition] = useState(false);
  return (
    <motion.nav
      style={{ position: "fixed", width: "90%" }}
      className="bg-transparent"
    >
      {children}
    </motion.nav>
  );
}
