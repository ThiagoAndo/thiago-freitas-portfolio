import Link from "next/link";
import { personalData } from "@/app/data/personal-data";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const childrens = [
  { comp: IoLogoGithub, data: "github" },
  { comp: BiLogoLinkedin, data: "linkedIn" },
  { comp: FaSquareXTwitter, data: "twitter" },
  { comp: FaStackOverflow, data: "stackOverflow" },
  { comp: SiLeetcode, data: "leetcode" },
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
