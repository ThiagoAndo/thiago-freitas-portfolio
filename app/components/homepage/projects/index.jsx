import { projectsData } from "@/app/data/projects-data";
import SingleProject from "./single-project";
import { ProTitle } from "../../ui/pageTitle";
const Projects = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <ProTitle>PROJECTS</ProTitle>
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-4xl sticky top-0"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <SingleProject project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
