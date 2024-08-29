"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerChildren } from "@/utils/framer-motion-Variants";
const navContent = [
  { param: "/#about", txt: " ABOUT" },
  { param: "/#skills", txt: "SKILLS" },
  { param: "/#education", txt: "EDUCATION" },
  { param: "/#experience", txt: "EXPERIENCE" },
];
const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: [0.8, 1.5, 1],

    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export default function NavLink() {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnime(true);
    }, 2300);
  }, []);

  return (
    <>
      {anime && (
        <motion.ul
          className="mt-4 hidden md:flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          variants={staggerChildren.framer}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
        >
          {navContent.map((item) => (
            <motion.li
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              variants={staggerChildren.items}
              transition={{ type: "spring" }}
              key={`item-${item.txt}`}
            >
              <Link
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={item.param}
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: " #00adf4" }}
                  transition={{ type: "spring" }}
                  className="text-base font-medium text-[#008aff]"
                >
                  {item.txt}
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
}
