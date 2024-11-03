import commerce from "/public/png/eComerce.png";
import connected from "/public/png/connected.png";
import api from "/public/png/api.png";
import UI from "/public/png/UI.png";
import multForm from "/public/png/multForm.png";
export const projects = [
  {
    id: "project-1",
    name: "Next Store",
    description:
      "The Next Store Online Shopping is a modern, full-stack e-commerce web application built to showcase a professional approach to online shopping platforms. it is developed it using React JS, Next JS, Node JS, and Express JS.",
    image: commerce,
    repo: "https://github.com/ThiagoAndo/Store-e-commerce",
    demo: "https://store-comerce.vercel.app",
  },
  {
    id: "project-2",
    name: "Connected World Explorer",
    description:
      "React-based web application built to integrate data from multiple APIs, including REST Countries, TimeZoneDB, Geoapify, OpenWeather, and GeoHive(Irish census data provider.",
    image: connected,
    repo: "https://github.com/ThiagoAndo/Connected-World-Explorer.git",
    demo: "https://rest-mult-api.netlify.app/",
  },
  {
    id: "project-3",
    name: "Next-store-API",
    description:
      "This is a Restful API build using Node.js and Next.js. It also uses a package called better-sqlite3 that allows you to create a local relational database and query it using Node.js",
    image: api,
    repo: "https://github.com/ThiagoAndo/Next-store-API.git",
    demo: "https://next-store-api-62m2.onrender.com/doc",
  },
  {
    id: "project-4",
    name: "UI for Next store API",
    description: `This project is a frontend user interface designed with Bootstrap and JavaScript modules to enable seamless interaction with the Next Store API.`,
    image: UI,
    repo: "https://github.com/ThiagoAndo/UI-Next-store-API.git",
    demo: "https://next-store-api-62m2.onrender.com/userInterface",
  },
  {
    id: "project-5",
    name: "Multi step form",
    description:
      "This is a solution to the Multi-step form challenge on Frontend Mentor. This React App is buid using React and TypeScrpt.",
    image: multForm,
    repo: "https://github.com/ThiagoAndo/Multi-step-form-TS.git",
    demo: "https://resilient-creponne-e85869.netlify.app/",
  },
];

