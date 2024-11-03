import { ProTitle } from "../../ui/pageTitle";
import ProjectBody from "./project-cards";
import PageSection from "../../ui/section";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useDalay from "@/app/hooks/useDelay";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import TextAnime from "../../ui/anime-text";
import ProjectText from "./text";
import Bg from "../../ui/section-bg";

const Projects = () => {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
    let { match: xl } = useMediaScreen(
      "only screen and (min-width : 1400px) and (max-width : 1800px)"
    );
  let threshold = 0.05;
  if (size) threshold = 0;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });
  const isTime = useDalay(desV && 1200);
  return (
    <PageSection
      tailwind={"relative z-50 pt-16 mt-20 mb-40 md:mb-0 md:pt-0 md:mt-0"}
      id="projects"
      stl={{ height: size === true ? "145vh" : ` ${xl ? "160vh" : "190vh"}` }}
      ref={des}
    >
      <ProTitle side={true}>
        <TextAnime txt={"PROJECTS"} showTxt={desV} />
      </ProTitle>
      {desV && (
        <div className="pt-24">
          <AnimatePresence>
            <div className="my-12 md:my-0 flex flex-col gap-6">
              {isTime && (
                <>
                  <Bg time={50} animate={true} />
                  <ProjectText />
                  <ProjectBody isMob={size} />
                </>
              )}
            </div>
          </AnimatePresence>
        </div>
      )}
    </PageSection>
  );
};

export default Projects;
