import BallCanvas from '../../canvas/Ball';
import { skillsImage } from "@/app/utils/skill-image";
import { skillsData } from "@/app/data/skills";

const Tech = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {skillsData.map((skill, id) => (
          <div className="w-28 h-28" key={id}>
            <BallCanvas icon={skillsImage(skill)?.src} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;
