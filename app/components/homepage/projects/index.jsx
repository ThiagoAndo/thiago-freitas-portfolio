import { ProTitle } from "../../ui/pageTitle";
import ProjectBody from "./project-cards";
import PageSection from "../../ui/section";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useDalay from "@/app/hooks/useDelay";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import TextAnime from "../../ui/anime-text";
import ProjectText from "./text";
const Projects = () => {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.05;
  if (size) threshold = 0;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  const isTime = useDalay(desV && 1200);
  return (
    <PageSection
      tailwind={"relative z-50 pt-12 mt-20 mb-40"}
      id="projects"
      stl={{ height: size === true ? "120vh" : "120vh" }}
      ref={des}
    >
      <ProTitle side={true}>
        <TextAnime txt={"PROJECTS"} showTxt={desV} />
      </ProTitle>
      {desV && (
        <div className="pt-24">
          <div className="my-12 flex flex-col gap-6">
            <AnimatePresence>
              {isTime && (
                <>
                  <ProjectText />
                  <ProjectBody/>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </PageSection>
  );
};

export default Projects;
