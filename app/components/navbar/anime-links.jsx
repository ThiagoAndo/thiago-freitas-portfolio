"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerChildren } from "@/app/utils/motion-variants";
import style from "./anime-links.module.css";
import { navChildrens } from "@/app/utils/childrens";
import ThisTooltip from "../ui/tooltip";

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
          className="flex flex-row justify-between h-screen  max-h-0 w-[100%] md:flex-col md:gap-8 opacity-0 md:mt-0 md:h-auto md:w-auto  md:space-x-1 md:border-0 md:opacity-80"
          variants={staggerChildren.framer}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
        >
          {navChildrens.map((item) => (
            <motion.li
              className="no-underline  outline-none hover:no-underline"
              variants={staggerChildren.items}
              transition={{ type: "spring" }}
              key={`item-${item.param}`}
            >
              <ThisTooltip tle={item.txt}>
                <motion.div
                  whileHover={{ color: " #00adf4" }}
                  transition={{ type: "spring", duration: 1 }}
                  className={`flex-wrap flex-col content-center items-center h-[42px] w-[42px] text-[#008aff] md:h-[50px] md:w-[50px] ${style.box}`}
                >
                  <Link
                    className="flex flex-col content-center items-center no-underline outline-none hover:no-underline"
                    href={item.param}
                  >
                    {item.svg}
                  </Link>
                </motion.div>
              </ThisTooltip>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  );
}
