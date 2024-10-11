// @flow strict

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../../ui/pageTitle";
import { personalData } from "@/app/data/personal-data";
import TextAnime from "../../ui/anime-text";
import useDalay from "@/app/hooks/useDelay";
import { scaleAnime } from "@/app/utils/motion-variants";

import useMediaScreen from "@/app/hooks/useMediaScreen";
import Bg from "../../ui/section-bg";
import PageSection from "../../ui/section";
function AboutSection() {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.5;
  if (size) threshold = 0.4;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  const isTime = useDalay(desV && 1200);
  return (
    <PageSection
      id="about"
      tailwind={"my-6 lg:my-6 relative pt-28"}
      stl={{ height: size === true ? "120vh" : "90vh" }}
      ref={des}
    >
      <AnimatePresence>
        {desV && (
          <>
            <Bg time={50} animate={true} />
            <motion.div
              initial={scaleAnime.init}
              animate={scaleAnime.anime}
              exit={scaleAnime.end}
              transition={scaleAnime.time}
              className="relative p-6  flex justify-center order-2 lg:order-2 md:py-20"
            >
              {isTime === true ? (
                <Title side={true}>
                  <TextAnime txt={"ABOUT ME"} showTxt={isTime} />
                </Title>
              ) : (
                <p style={{ color: "transparent" }}>ABOUT ME </p>
              )}
              <div
                id="container"
                className="grid pb-12 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
              >
                <motion.div className="order-1 lg:order-1">
                  <div className="mb-5  text-[#00adf4] font-bold font-roboto text-base 2xl:text-xl uppercase">
                    <TextAnime txt={"WHO I AM ?"} showTxt={isTime} />
                  </div>
                  <p className=" mb-8 md:mb-0 text-gray-200 text-justify text-base 2xl:text-xl">
                    My name is Thiago Freitas, and I am a professional and
                    enthusiastic programmer. I am a self-driven, quick starter
                    with a passion for programming and a curious mind that
                    thrives on solving complex and challenging real-world
                    problems. As a lifelong learner, I love to explore and
                    master new technologies.
                    <br />
                    I am deeply interested in all aspects of web application
                    development, with a core focus on JavaScript, which I use
                    extensively in my work. Through comprehensive exposure to
                    foundational concepts and applying them across various
                    projects, my love for web development has only grown.
                    <br />I am passionate about building and implementing
                    algorithms to address real-world challenges. I am open to
                    any job opportunities that align with my skills and
                    interests.
                  </p>
                </motion.div>
                <motion.div className="flex justify-center order-2 lg:order-2 py-12">
                  <Image
                    src={personalData.profile}
                    width={380}
                    height={280}
                    alt="Thiago Freitas"
                    className="rounded-lg transition-all duration-1000  grayscale-0 hover:grayscale hover:scale-110 cursor-pointer"
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageSection>
  );
}

export default AboutSection;
