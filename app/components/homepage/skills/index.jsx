// @flow strict

import Title from "../../ui/pageTitle";
import TextAnime from "../../ui/anime-text";
import { useInView } from "react-intersection-observer";
import PageSection from "../../ui/section";
import Tech from "./Tech";
import Carrocel from "./carrocel";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import FloatingPoints from "../../ui/floating-points";

function Skills() {
  let sparc = null;
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.4;

  if (size) threshold = 0.03;

  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  if (!size && desV) {
    sparc = <FloatingPoints />;
  }

  return (
    <div className={desV ? "skills" : ""}>
      <PageSection
        id={"skills"}
        tailwind={
          "relative z-50 md:border-t md:border-[#25213b] mt-20 mb-24 lg:mt-40"
        }
        ref={des}
      >
        <Title side={false}>
          <TextAnime txt={"SKILLS"} showTxt={desV} />
        </Title>
        <Tech />
        <Carrocel />
      </PageSection>
      {sparc}
    </div>
  );
}

export default Skills;
