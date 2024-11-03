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
  let style = null;
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 700px)"
  );
  let threshold = 0.4;

  if (size) threshold = 0.03;

  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  if (!size && desV) {
    sparc = <FloatingPoints />;
    style = "skills";
  }

  return (
    <div className={style}>
      <PageSection
        id={"skills"}
        tailwind={
          "relative z-50 md:border-t md:border-[#25213b] h-24  md:h-[120vh] 2xl:h-screen   md:mt-40  lg:mt-40"
        }
        ref={des}
      >
        <Title side={false}>
          <TextAnime txt={"SKILLS"} showTxt={desV} />
        </Title>
        {!size && <Tech />}
        <div className="mb-52 md:mt-0">{size && <Carrocel />}</div>
      </PageSection>
      {sparc}
    </div>
  );
}

export default Skills;
