import { motion } from "framer-motion";
import Image from "next/image";
import github from "/public/png/github.png";
import github_b from "/public/png/github_b.png";
import pineapple from "/public/png/pineapple.png";
import pineappleHover from "/public/png/pineappleHover.png";
import { fadeIn } from "@/app/utils/motion-variants";
import { useState } from "react";
export default function ProjectCard({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  isMob,
}) {
  const [hover, setHover] = useState({ p: false, g: false });

  const onMouseOver = (e) => {
    setHover((prev) => {
      return { ...prev, [e]: true };
    });
  };
  const onMouseOut = (e) => {
    setHover((prev) => {
      return { ...prev, [e]: false };
    });
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] bg-gray-500 rounded-[24px]
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      {active === id ? (
        <Image
          src={image}
          alt={name}
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
      ) : null}
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className={`font-extrabold uppercase w-[200px] h-[30px]
        whitespace-nowrap sm:text-[24px] text-[18px] text-timberWolf tracking-[1px]
        ${
          isMob ? "relative" : "absolute"
        } lg:bottom-[6rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20 text-black`}
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.78)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-3"></div>

            <h2
              className="font-bold text-[19px]  sm:text-[25px] 
              text-timberWolf uppercase sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-silver text-[10px]  sm:text-[14px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px] font-bold"
            >
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out z-50 relative cursor-pointer"
              onClick={() => window.open(demo, "_blank")}
              onMouseOver={onMouseOver.bind(null, "p")}
              onMouseOut={onMouseOut.bind(null, "p")}
            >
              <Image
                src={hover.p ? pineappleHover : pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain "
              />
              LIVE DEMO
            </button>
            <div
              onMouseOver={onMouseOver.bind(null, "g")}
              onMouseOut={onMouseOut.bind(null, "g")}
              onClick={() => window.open(repo, "_blank")}
              className="absolute bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8] bottom-[2.15rem] right-[4rem] font-bold"
            >
              REPOSITORY
              <Image
                src={hover.g ? github_b : github}
                width={13}
                height={13}
                alt="source code"
                className="w-4/5 h-4/5 object-contain pl-2"
              />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}
