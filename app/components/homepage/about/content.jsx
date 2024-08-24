import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../ui/pageTitle";
import { personalData } from "@/utils/data/personal-data";
import TextAnime from "../../ui/anime-text";
import useDalay from "@/app/hooks/useDelay";
import { scaleAnime } from "@/utils/framer-motion-Variants";

export default function About() {
  const { ref: des, inView: desV } = useInView({
    threshold: 0.3,
  });
  const isTime = useDalay(desV && 1200);

  return (
    <section
      id="about"
      className="my-6 lg:my-6 relative pt-28"
      style={{ height: "100vh" }}
      ref={des}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20 "></div>
      <AnimatePresence>
        {desV && (
          <motion.div
            initial={scaleAnime.init}
            animate={scaleAnime.anime}
            exit={scaleAnime.end}
            transition={scaleAnime.time}
            className="relative flex justify-center order-2 lg:order-2 md:py-20"
          >
            <Title side={true}>
              {isTime && <TextAnime txt={"ABOUT ME"} showTxt={desV} />}
            </Title>
            <div
              id="container"
              className="grid pb-12 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            >
              <motion.div className="order-1 lg:order-1">
                <div className="mb-5  text-[#00adf4] font-bold  text-base 2xl:text-xl uppercase">
                  {isTime && <TextAnime txt={"Who I am?"} showTxt={des} />}
                </div>
                <p className=" mb-8 md:mb-0 text-gray-200 text-justify text-base 2xl:text-xl">
                  My name is Thiago Freitas, and I am a professional and
                  enthusiastic programmer. I am a self-driven, quick starter
                  with a passion for programming and a curious mind that thrives
                  on solving complex and challenging real-world problems. As a
                  lifelong learner, I love to explore and master new
                  technologies.
                  <br />
                  I am deeply interested in all aspects of web application
                  development, with a core focus on JavaScript, which I use
                  extensively in my work. Through comprehensive exposure to
                  foundational concepts and applying them across various
                  projects, my love for web development has only grown.
                  <br />I am passionate about building and implementing
                  algorithms to address real-world challenges. I am open to any
                  job opportunities that align with my skills and interests.
                </p>
              </motion.div>
              <motion.div className="flex justify-center order-2 lg:order-2 py-12">
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
    </section>
  );
}
