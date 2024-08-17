"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const navStyle = { position: "fixed", zIndex: "3000", width: "90%" };

export default function MotionNav({ children }) {
  const [isPosition, setIsPosition] = useState(false);
  return (
    <motion.nav
      style={navStyle}
      className="bg-transparent"
    >
      {children}
    </motion.nav>
  );
}
