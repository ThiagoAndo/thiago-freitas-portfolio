// @flow strict
import Social from "./contact-social";
import ContactWithoutCaptcha from "./contact-without-captcha";
import Info from "./contact-info";
import Title from "../../ui/pageTitle";
import PageSection from "../../ui/section";
import useMediaScreen from "@/app/hooks/useMediaScreen";
import { useInView } from "react-intersection-observer";
import TextAnime from "../../ui/anime-text";

function ContactSection() {
    let { match: size } = useMediaScreen(
      "only screen and (min-width : 369px) and (max-width : 500px)"
    );
    let threshold = 0.4;
    if (size) threshold = 0.5;
    const { ref: des, inView: desV } = useInView({
      threshold,
    });
  return (
    <PageSection ref={des} id={"contact"}>
      <Title>
        <TextAnime txt={"CONTACT"} showTxt={desV} />
      </Title>
      <div className="grid md:pt-24 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactWithoutCaptcha />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <Info />
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Social />
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export default ContactSection;
