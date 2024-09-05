import { ProTitle } from "../../ui/pageTitle";
import ProjectBody from "./project-body";
import PageSection from "../../ui/section";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useDalay from "@/app/hooks/useDelay";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import TextAnime from "../../ui/anime-text";
import Title from "../../ui/pageTitle";

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
    <PageSection id="projects" ref={des}>
      {desV === true ? (
        <Title side={true}>
          <TextAnime txt={"PROJECTS"} showTxt={desV} />
        </Title>
      ) : (
        <p style={{ color: "transparent" }}>PROJECTS</p>
      )}

      <div className="pt-24">
        <div className="my-12 flex flex-col gap-6">
          <AnimatePresence>{desV && <ProjectBody />}</AnimatePresence>
        </div>
      </div>
    </PageSection>
  );
};

export default Projects;
