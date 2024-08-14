// @flow strict
import GitHubCalendar from "react-github-calendar";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";
import Image from "next/image";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col content-center mt-12">
              <div>
                <GitHubCalendar
                  username="ThiagoAndo"
                  blockSize={15}
                  blockMargin={5}
                  colorScheme="dark"
                  fontSize={16}
                  color="#008aff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default GitCode;
