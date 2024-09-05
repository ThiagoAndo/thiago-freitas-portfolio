import css from "/public/svg/skills/css.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nextJS from "/public/svg/skills/nextJS.svg";
import react from "/public/svg/skills/react.svg";
import tailwind from "/public/svg/skills/tailwind.svg";
import typescript from "/public/svg/skills/typescript.svg";
import nodejs from "/public/svg/skills/nodejs.svg";
import redux from "/public/svg/skills/redux.svg";
import query from "/public/svg/skills/query.svg";
import framer from "/public/svg/skills/framer.svg";
import express from "/public/svg/skills/express-js.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "mysql":
      return mysql;
    case "tailwind":
      return tailwind;
    case "git":
      return git;
    case "mongo db":
      return mongoDB;
    case "node js":
      return nodejs;
    case "redux toolkit":
      return redux;
    case "react query":
      return query;
    case "framer motion":
      return framer;
    case "express js":
      return express;
    default:
      break;
  }
};
