import ViewIntersect from "../../helper/view-port";
import Image from "next/image";
import Title from "../../ui/pageTitle";
import { personalData } from "@/utils/data/personal-data";

export default function About() {
  return (
    <section id="about" className="my-6 lg:my-6 relative">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <Title side={true}>ABOUT ME</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-5  text-[#00adf4] font-bold text-xl uppercase">
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
            alt="Thiago Freitas"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
