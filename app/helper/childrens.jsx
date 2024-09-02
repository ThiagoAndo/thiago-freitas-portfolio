import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaStackOverflow } from "react-icons/fa";
import { personalData } from "@/app/data/personal-data";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
export const linkChildrens = [
  { data: personalData.github, ico: <BsGithub size={30} /> },
  { data: personalData.linkedIn, ico: <BsLinkedin size={30} /> },
  { data: personalData.facebook, ico: <FaFacebook size={30} /> },
  { data: personalData.stackOverflow, ico: <FaStackOverflow size={30} /> },
  { data: personalData.twitter, ico: <FaTwitterSquare size={30} /> },
];

export const navChildrens = [
  {
    param: "/#about",
    txt: "About",
    svg: <PersonIcon className="h-8 w-8" />,
  },
  {
    param: "/#skills",
    txt: "Skills",
    svg: <LightbulbIcon className="h-8 w-8" />,
  },
  {
    param: "/#projects",
    txt: "Projects",
    svg: <AssignmentIcon className="h-8 w-8" />,
  },
  {
    param: "/#experience",
    txt: "Experience",
    svg: <ComputerIcon className="h-8 w-8" />,
  },
  {
    param: "/#education",
    txt: "Education",
    svg: <SchoolIcon className="h-8 w-8" />,
  },
  {
    param: "/#contact",
    txt: "Contact",
    svg: <AlternateEmailIcon className="h-8 w-8" />,
  },
];
