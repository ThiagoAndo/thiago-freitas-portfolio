// @flow strict

import Title from "../../ui/pageTitle";
import TextAnime from "../../ui/anime-text";
import { useInView } from "react-intersection-observer";
import PageSection from "../../ui/section";
import Tech from "./Tech";
import useMediaScreen from "@/app/hooks/useMediaScreen";

function Skills() {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.2;

  if (size) threshold = 0.03;

  const { ref: des, inView: desV } = useInView({
    threshold,
  });
  return (
    <PageSection
      id={"skills"}
      tailwind={
        "relative z-50 md:border-t md:border-[#25213b] mt-20 mb-24 lg:mt-40"
      }
      ref={des}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <Title side={false}>
        <TextAnime txt={"SKILLS"} showTxt={desV} />
      </Title>
      <Tech />
    </PageSection>
  );
}

export default Skills;
