import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaStackOverflow } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";

const linkChildren = [
  { data: personalData.github, ico: <BsGithub size={30} /> },
  { data: personalData.linkedIn, ico: <BsLinkedin size={30} /> },
  { data: personalData.facebook, ico: <FaFacebook size={30} /> },
  { data: personalData.stackOverflow, ico: <FaStackOverflow size={30} /> },
  { data: personalData.twitter, ico: <FaTwitterSquare size={30} /> },
];


export default linkChildren