import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Title from "../../ui/pageTitle";
import { personalData } from "@/utils/data/personal-data";
import TextAnime from "../../ui/anime-text";
export default function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,

    /* The options below work together */
    // trackVisibility: true,
    // delay: 1000,
  });
  console.log(`Header inside viewport ${inView}`);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: -120 }}
      animate={{
        opacity: 1,
        rotateY: [90, 180, 260, 360, 90, 180, 260, 0],
      }}
      className="my-6 lg:my-6 relative"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <Title side={true}>
        <TextAnime txt={"ABOUT ME"} showTxt={inView} />
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-1 lg:order-1">
          <div className="mb-5  text-[#00adf4] font-bold text-xl uppercase">
            <TextAnime txt={"Who I am?"} showTxt={inView} />
          </div>
          <p className=" mb-20 md:mb-0 text-gray-200 text-justify text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-2 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Thiago Freitas"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </motion.section>
  );
}
