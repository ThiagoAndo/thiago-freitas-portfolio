"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerChildren } from "@/utils/framer-motion-Variants";


import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";





import  './anime-links.css'

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
  const navContent = [
    { param: "/#about", txt: <PersonSearchIcon className="h-14 w-14" /> },
    { param: "/#skills", txt: <LightbulbIcon className="h-14 w-14" /> },
    { param: "/#projects", txt: <AssignmentIcon className="h-14 w-14" /> },
    { param: "/#experience", txt: <ComputerIcon className="h-14 w-14" /> },
    { param: "/#education", txt: <SchoolIcon className="h-14 w-14" /> },
    { param: "/#contact", txt: <AlternateEmailIcon className="h-14 w-14" /> },
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnime(true);
    }, 2300);
  }, []);

  return (
    <>
      {anime && (
        <motion.ul
          className="hidden md:flex gap-8 h-screen max-h-0 w-full flex-col  items-start  opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-col md:space-x-1 md:border-0 md:opacity-140"
          variants={staggerChildren.framer}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
        >
          {navContent.map((item) => (
            <motion.li
              className="no-underline  outline-none hover:no-underline"
              variants={staggerChildren.items}
              transition={{ type: "spring" }}
              key={`item-${item.param}`}
            >
              <motion.div
                whileHover={{ scale: 1.2, color: " #00adf4" }}
                transition={{ type: "spring" }}
                className="flex-wrap flex-col content-center items-center font-medi text-[#008aff] h-[40px] w-[40px] box"
              >
                <Link
                  className="flex flex-col content-center items-center no-underline outline-none hover:no-underline"
                  href={item.param}
                >
                  {item.txt}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
}
  