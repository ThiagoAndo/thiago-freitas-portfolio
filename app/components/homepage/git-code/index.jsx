// @flow strict
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import BdAnime from "../../helper/border-animation";

import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";
import coding from "/public/lottie/coding.json";
import contact from "/public/lottie/contact.json";
import development from "/public/lottie/development.json";
import education from "/public/lottie/education.json";
import js from "/public/lottie/js.json";
import lotti from "/public/lottie/lotti.json";
import study from "/public/lottie/study.json";

function GitCode({ blogs }) {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Days I code
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid mt-12 md:mt-0 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col justify-center mt-16 col-span-2">
            <BdAnime>
              <GitHubCalendar
                username="ThiagoAndo"
                blockSize={12}
                blockMargin={5}
                colorScheme="dark"
                fontSize={12}
                color="#008aff"
              />
            </BdAnime>
          </div>
          <div className="flex  mt-24 md:ml-12  md:mt-0 items-start">
            <div className="w-full h-full">
              <AnimationLottie
                animationPath={development}
                width={"95%"}
                min={"0"}
                max={"0"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full mt-24 mb-0" />
        </div>
      </div>
    </div>
  );
}

export default GitCode;
