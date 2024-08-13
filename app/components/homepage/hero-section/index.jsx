// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div>
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl  md:text-6xl text-neutral-700 dark:text-blue-100 !leading-snug text-center mx-auto font-[900]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5 m-auto">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-6 m-auto">
            <Link href="#contact">
              <button
                id="anime-cont"
                className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1"
              >
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link href="#contact">
              <button
                id="anime-cont"
                className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1"
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
