import { ProTitle } from "../../ui/pageTitle";
import ProjectBody from "./project-body";
import PageSection from "../../ui/section";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useDalay from "@/app/hooks/useDelay";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import TextAnime from "../../ui/anime-text";

const Projects = () => {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  let threshold = 0.2;
  if (size) threshold = 0;
  const { ref: des, inView: desV } = useInView({
    threshold,
  });

  const isTime = useDalay(desV && 1200);
  return (
    <PageSection
      tailwind={"relative z-50  my-12 lg:my-24"}
      id="projects"
      stl={{ height: size === true ? "120vh" : "100vh" }}
      ref={des}
    >
      <ProTitle side={true}>
        {desV === true ? (
          <TextAnime txt={"PROJECTS"} showTxt={desV} />
        ) : (
          <p style={{ color: "transparent" }}>PROJECTS...</p>
        )}
      </ProTitle>

      <div className="pt-24">
        <div className="my-12 flex flex-col gap-6">
          <AnimatePresence>{desV && <ProjectBody />}</AnimatePresence>
        </div>
      </div>
    </PageSection>
  );
};

export default Projects;
