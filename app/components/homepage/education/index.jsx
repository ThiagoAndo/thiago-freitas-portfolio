// @flow strict
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import js from "/public/lottie/js.json";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
function Education() {
  return (
    <PageSection id={"education"}>
      <Title>EDUCATION</Title>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex items-center">
            <div className="w-3/4 h-3/4">
              <AnimationLottie
                animationPath={js}
                width={"150%"}
                max={"-86px"}
                min={"-35px"}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-center  mt-24 md:mt-0">
              <GlowCard>
                <div className="p-3 w-3/4 h-3/4 relative text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      Jan 2016 - Dec 2017
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        Software Development
                      </p>
                      <Link href={"#"}>
                        <p className="text-sm sm:text-base">
                          University Cruzeiro do Sul/ SP Brazil
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default Education;
