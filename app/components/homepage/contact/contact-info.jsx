import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { personalData } from "@/utils/data/personal-data";

const childrens = [
  { comp: MdAlternateEmail, data: "email" },
  { comp: IoMdCall, data: "phone" },
  { comp: CiLocationOn, data: "address" },
];

export default function Info() {
  return childrens.map((item) => {
    return (
      <p key={item.data} className="text-sm md:text-xl flex items-center gap-3">
        <item.comp
          className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#00adf4] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          size={36}
        />
        <span>{personalData[item.data]}</span>
      </p>
    );
  });
}
