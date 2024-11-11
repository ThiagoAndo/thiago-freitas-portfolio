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
  let threshold = 0.6;
  if (size) threshold = 0.4;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  const isTime = useDalay(desV && 800);
  return (
    <PageSection
      id="about"
      tailwind={"my-6 lg:my-6 relative pt-28"}
      stl={{ height: size === true ? "140vh" : "90vh" }}
      ref={des}
    >
      <AnimatePresence>
        {desV && (
          <>
            <Bg time={80} animate={true} />
            <motion.div
              initial={scaleAnime.init}
              animate={scaleAnime.anime}
              exit={scaleAnime.end}
              transition={scaleAnime.time}
              className="relative p-6  flex justify-center order-2 lg:order-2 md:py-20"
            >
              <Title side={true}>
                <TextAnime txt={"ABOUT ME"} showTxt={isTime} />
              </Title>
              <div
                id="container"
                className="grid pb-12 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
              >
                <motion.div className="order-1 lg:order-1">
                  <div className="mb-5  text-[#00adf4] font-bold font-roboto text-base 2xl:text-xl uppercase">
                    <TextAnime
                      txt={"Hi, I'm Thiago Freitas "}
                      showTxt={isTime}
                    />
                  </div>
                  <p className=" mb-8 md:mb-0 text-gray-200 text-justify text-base 2xl:text-xl">
                    I am <strong>passionate </strong>about web development with
                    a love for building impactful applications and am
                    specialized in building scalable, user-centric web
                    applications using JavaScript, React, and Next.js. As an
                    independent developer, I’ve delivered projects ranging from
                    full-stack e-commerce platforms with dynamic product
                    filtering and responsive design to API-driven applications
                    that provide real-time data insights. I approach every
                    project with genuine enthusiasm, driven by a deep passion
                    for crafting seamless user experiences and solving complex
                    problems through code.
                    <br />
                    With a background in mechanical design, I bring an
                    analytical mindset and attention to detail to every project.
                    I’m constantly learning and eager to take on new challenges
                    in web development.
                    <br />
                    Let’s connect if you’re looking for a dedicated and
                    adaptable developer ready to make an impact!
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
