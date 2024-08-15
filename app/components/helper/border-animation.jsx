"use client"
import { useRef, useState, useEffect, Children } from "react";
import { motion } from "framer-motion";
import style from "./border-animation.module.css";

export default function BdAnime({ children }) {
    console.log(children)
  const divRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!divRef.current) return;

    const { width, height, top, left } = divRef.current.getBoundingClientRect();

    setDimensions({ width, height, top, left });
  }, []);

  return (
    <div ref={divRef} className={style.container}>
      <motion.svg
        className={style.svg_border}
        width={dimensions.width + 100}
        height={dimensions.height + 100}
        viewBox={`0 0 ${dimensions.width + 100} ${dimensions.height + 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="neon"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur5"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur10"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur20"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="30"
              result="blur30"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="50"
              result="blur50"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur10" />
              <feMergeNode in="blur20" />
              <feMergeNode in="blur30" />
              <feMergeNode in="blur50" />
            </feMerge>

            <feColorMatrix
              result="red-blur"
              in="blur-merged"
              type="matrix"
              values="1 0 0 0 0
                      0 0.06 0 0 0
                      0 0 0.44 0 0
                      0 0 0 1 0"
            />
            <feMerge>
              <feMergeNode in="red-blur" />
              <feMergeNode in="blur5" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <svg className={style.neon} x={50} y={50}>
          <motion.path
            d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
            stroke="#00adf4"
            strokeWidth="5"
            animate={{
              pathLength: [0, 0.75],
              pathOffset: [0, 0.2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        </svg>
      </motion.svg>

      <span>{children}</span>
    </div>
  );
}
