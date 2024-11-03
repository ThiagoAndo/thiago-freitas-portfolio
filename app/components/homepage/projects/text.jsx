import { motion } from "framer-motion";
import { scaleAnime } from "@/app/utils/motion-variants";

export default function ProjectText() {
  return (
    <div className="w-full flex">
      <motion.p
        initial={scaleAnime.init}
        animate={scaleAnime.anime}
        exit={scaleAnime.end}
        transition={scaleAnime.time}
        className="mt-4 md:mt-16 mx-auto text-justify md:pt-6 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        These projects provide a comprehensive showcase of my professional
        abilities through hands-on examples of my work. Each project is
        accompanied by a brief overview, along with links to the corresponding
        code repositories and live demonstrations. These examples not only
        highlight my proficiency in solving complex technical challenges but
        also demonstrate my adaptability across a range of technologies.
        Additionally, they reflect my experience in efficiently managing and
        leading projects from concept to completion, ensuring high-quality
        outcomes.
      </motion.p>
    </div>
  );
}
