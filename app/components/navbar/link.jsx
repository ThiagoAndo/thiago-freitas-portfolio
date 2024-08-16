"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Item = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  margin: 1rem 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 20%);
`;

const data = [
  {
    id: 1,
    background: `cadetblue`,
  },
  {
    id: 2,
    background: `rebeccapurple`,
  },
  {
    id: 3,
    background: `pink`,
  },
];

const frameVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const navContent = [
  { param: "/#about", txt: " ABOUT" },
  { param: "/#skills", txt: "SKILLS" },
  { param: "/#education", txt: "EDUCATION" },
  { param: "/#experience", txt: "EXPERIENCE" },
];
//   const frameVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,

//       transition: {
//         duration: 2,
//         staggerChildren: 0.5,
//         ease: [0.02, 0.6, -0.01, 0.91],
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.5,
//     },
//     visible: {
//       opacity: 1,
//       scale: [0.8, 1.3, 1],
//       transition: {
//         duration: 2,
//         ease: [0.02, 0.6, -0.01, 0.91],
//       },
//     },
//   };
export default function NavLink() {
  // return (

  //       <motion.ul
  //         variants={frameVariants}
  //         transition={{ type: "spring" }}
  //          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 "

  //         id="navbar-default"
  //       >
  //         {navContent.map((cont) => (
  //           <motion.li
  //             variants={itemVariants}
  //             transition={{ type: "spring" }}
  //             key={cont.txt}
  //           >
  //             <Link
  //          className="block px-4 py-2 no-underline outline-none hover:no-underline"
  //               style={{
  //                 minHeight: "100%",
  //                 width: "100%",
  //                 background: "blue",
  //               }}
  //               href={cont.param}
  //             >
  //               <div className="text-sm text-white">{cont.txt}</div>
  //             </Link>
  //           </motion.li>
  //         ))}
  //       </motion.ul>
  //     )

  return (
    <motion.ul
      className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 "
      variants={frameVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
    >
      {data.map((item) => (
        <motion.li
          className="block px-4 py-2 no-underline outline-none hover:no-underline"
          variants={itemVariants}
          transition={{ type: "spring" }}
          key={`item-${item.id}`}
        >
          thiago
        </motion.li>
      ))}
    </motion.ul>
  );
}
