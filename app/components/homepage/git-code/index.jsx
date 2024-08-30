// @flow strict
import GitHubCalendar from "react-github-calendar";
import BdAnime from "../../helper/border-animation";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
import AnimationLottie from "../../helper/animation-lottie";
import experience from "/public/lottie/code.json";
import coding from "/public/lottie/coding.json";
import contact from "/public/lottie/contact.json";
import development from "/public/lottie/development.json";
import education from "/public/lottie/education.json";
import js from "/public/lottie/js.json";
import lotti from "/public/lottie/lotti.json";
import study from "/public/lottie/study.json";

function GitCode() {
  return (
    <PageSection id="experience">
      <Title>DAYS I CODE</Title>

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
    </PageSection>
  );
}

export default GitCode;
