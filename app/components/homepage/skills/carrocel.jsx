// @flow strict

import { skillsData } from "@/app/data/skills";
import { skillsImage } from "@/app/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../../ui/pageTitle";
import TextAnime from "../../ui/anime-text";
import { useInView } from "react-intersection-observer";
import PageSection from "../../ui/section";

function Carrocel() {
  return (
    <Marquee
      gradient={false}
      speed={80}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction="left"
      className="h-36 mt-5"
    >
      {skillsData.map((skill, id) => (
        <div
          className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
          key={id}
        >
          <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c7b] shadow-none shadow-gray-50 group-hover:border-[#2927b9] transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2927b9] to-transparent" />
              </div>
            </div>
            <div className=" relative flex flex-col items-center justify-center gap-3">
              <div className="z-50 w-[50px] h-[50px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

              <p className="text-[#00adf4] text-xl font-bold py-2">{skill}</p>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
}

export default Carrocel;
