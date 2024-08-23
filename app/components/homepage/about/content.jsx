import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../ui/pageTitle";
import { personalData } from "@/utils/data/personal-data";
import TextAnime from "../../ui/anime-text";
import useDalay from "@/app/hooks/useDelay";
 const anime = { scale: [0, 0.3, 0.6, 0.9, 1.2, 1], opacity: 1 };
 const end = { x: 500, opacity: 0 };
 const time = { duration: 0.6, type: "spring", bounce: 0.2 };
export default function About() {
  const { ref: des, inView: desV } = useInView({
    threshold: 0.6,
  });
console.log("is on the screen" + desV)
  const isTime = useDalay(desV && 1200);
  const init = { scale: 15, opacity: 0 };
 
  return (
    <motion.section
      id="about"
      style={{ minHeight: "28.75rem" }}
      className="my-6 lg:my-6 relative"
      ref={des}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20 "></div>
      <AnimatePresence>
        {desV && (
          <motion.div
            initial={init}
            animate={anime}
            exit={end}
            transition={time}
            className="flex justify-center order-2 lg:order-2 md:py-20"
          >
            <Title side={true}>
              {isTime && <TextAnime txt={"ABOUT ME"} showTxt={desV} />}
            </Title>
            <div
              id="container"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              <motion.div className="order-1 lg:order-1">
                <div className="mb-5  text-[#00adf4] font-bold text-xl uppercase">
                  {isTime && <TextAnime txt={"Who I am?"} showTxt={des} />}
                </div>
                <p className=" mb-20 md:mb-0 text-gray-200 text-justify text-sm lg:text-lg">
                  {personalData.description}
                </p>
              </motion.div>
              <motion.div className="flex justify-center order-2 lg:order-2">
                <Image
                  src={personalData.profile}
                  width={280}
                  height={280}
                  alt="Thiago Freitas"
                  className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
