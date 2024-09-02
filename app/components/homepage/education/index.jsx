// @flow strict
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../../helper/animation-lottie";
import GlowCard from "../../../helper/glow-card";
import js from "/public/lottie/js.json";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
function Education() {
  return (
    <PageSection
      id={"education"}
      tailwind={"relative z-50 md:border-t md:border-[#25213b]"}
    >
      <Title>EDUCATION</Title>

      <div className="py-8 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex">
            <div className="w-3/4 h-3/4">
              <AnimationLottie
                animationPath={js}
                widthMax={"160%"}
                widthMin={"120%"}
                max={"-20px"}
                min={"-45px"}
              />
            </div>
          </div>

          <GlowCard>
            <div className="p-3 w-full h-full md:w-3/4 md:h-3/4 relative text-white">
              <div className="flex justify-center">
                <p className="text-base  xl:text-1xl text-[#16f2b3]">
                  Jan 2016 - Dec 2017
                </p>
              </div>
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <p className="text-base  xl:text-1xl  mb-2 font-medium uppercase">
                    Software Development
                  </p>
                  <Link href={"#"}>
                    <p className="text-base  xl:text-1xl">
                      University Cruzeiro do Sul/ SP Brazil
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </PageSection>
  );
}

export default Education;
