"use client";

import { motion, AnimatePresence, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-[#2927b9] to-[#00adf4] p-4 hover:ring bg-violet-600  focus:ring focus:ring-violet-600	";
const SCROLL_THRESHOLD = 150;

const ScrollToTop = () => {
  const [isVis, setIsVis] = useState(false);

  useEffect(() => {
    let position = 0;
    const handleScroll = () => {
      position = window.scrollY;
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVis(true);
      } else {
        setIsVis(false);
      }
    };
    setInterval(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000);
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVis && (
        <motion.button
          className={DEFAULT_BTN_CLS}
          onClick={onClickBtn}
          variants={{
            visible: { opacity: 1, scale: [0.6, 0.9, 1, 1.3, 1.2], bounce: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: [1.2, 1, 0.9, 0.6, 0.3, 0] }}
          transition={{ duration: 2, type: "spring", stiffness: 200 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
