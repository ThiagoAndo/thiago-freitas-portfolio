import Link from "next/link";
import { personalData } from "@/app/data/personal-data";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
const childrens = [
  { comp: IoLogoGithub, data: "github" },
  { comp: BiLogoLinkedin, data: "linkedIn" },
  { comp: FaXTwitter, data: "twitter" },
  { comp: FaStackOverflow, data: "stackOverflow" },
  { comp: FaFacebook, data: "facebook" },
];

export default function Social() {
  return childrens.map((item) => {
    return (
      <Link key={item.data} target="_blank" href={personalData[item.data]}>
        <item.comp
          className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#00adf4] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          size={48}
        />
      </Link>
    );
  });
}
