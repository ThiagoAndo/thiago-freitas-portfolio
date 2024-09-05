"use client";
import { motion, AnimatePresence } from "framer-motion";
import Bg from "../components/ui/section-bg";
import { scaleAnime } from "../utils/motion-variants";
import { useInView } from "react-intersection-observer";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import useDalay from "@/app/hooks/useDelay";

const SectionWrapper = (Component, id, tailwind) => {
  let stl;
  let thisStyle;
  if (tailwind) {
    thisStyle = tailwind;
  } else {
    thisStyle = "relative z-50 md:border-t md:border-[#25213b] my-12 lg:my-24";
  }

  function HOC() {
    let { match: size } = useMediaScreen(
      "only screen and (min-width : 369px) and (max-width : 500px)"
    );
    const { ref: des, inView: desV } = useInView({
      threshold: 0.3,
    });
    const isTime = useDalay(desV && 1200);
    if (id === "About" && size) {
      stl = { height: "170vh" };
    } else if (id === "About" && !size) {
      stl = { height: "90vh" };
    }
    return (
      <section style={stl} ref={des} className={thisStyle} id={id}>
        {desV && <Bg />}

        <Component isTime={isTime} desV={desV} />
      </section>
    );
  }

  return HOC;
};

export default SectionWrapper;
