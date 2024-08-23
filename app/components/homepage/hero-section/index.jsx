// @flow strict
import Image from "next/image";
import SocialLinks from "./social-links";
import Designation from "./designation";
import { DecoderText } from "../../decoder-text";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-48  lg:py-48 2xl:py-48 h-full">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        style={{ zIndex: "-6000" }}
      />
      <div className="order-2 lg:order-1 flex flex-col items-start justify-center pb-20 md:pb-10 lg:pt-10">
        <p className="text-2xl my-2 md:text-5xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-4">
          <span className={`text-[#00adf4] t-anime`}>
            <DecoderText text={"THIAGO FREITAS,"} delay={500} />
          </span>
        </p>
        <h1 className="text-2xl  my-2  md:text-6xl text-neutral-700 !leading-snug text-center mx-auto font-[900] text-white mt-6">
          <Designation />
        </h1>
        <SocialLinks />
     
      </div>
    </section>
  );
}

export default HeroSection;
