import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";

const linkChildren = [
  { data: personalData.github, ico: <BsGithub size={30} /> },
  { data: personalData.linkedIn, ico: <BsLinkedin size={30} /> },
  { data: personalData.facebook, ico: <FaFacebook size={30} /> },
  { data: personalData.leetcode, ico: <SiLeetcode size={30} /> },
  { data: personalData.twitter, ico: <FaTwitterSquare size={30} /> },
];


export default linkChildren