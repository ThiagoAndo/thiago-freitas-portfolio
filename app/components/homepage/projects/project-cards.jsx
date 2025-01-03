import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects-data";

import { staggerContainer } from "@/app/utils/motion-variants";
import ProjectCard from "./card";

const ProjectBody = ({ isMob }) => {
  let project = "project-1";

  if (isMob) {
    project = "project-3";
  }

  const [active, setActive] = useState(project);

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              isMob={isMob}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectBody;
