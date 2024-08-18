// @flow strict
import { useInView } from "react-intersection-observer";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Title from "../../ui/pageTitle";

function AboutSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,

    /* The options below work together */
    // trackVisibility: true,
    // delay: 1000,
  });
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <Title side={true}>ABOUT ME</Title>
      {/* <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;