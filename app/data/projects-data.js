import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
export const projects = [
  {
    id: "project-1",
    name: "KomiKult",
    description: "A comic characters list app that displays Marvel characters.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crefin,
    repo: "https://github.com/shaqdeff/KomiKult",
    demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Leaderboard",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    repo: "https://github.com/shaqdeff/Leaderboard",
    demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ayla,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ayla,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

// export const projectsData = [
//   {
//     id: 1,
//     name: "AI Powered Financial App",
//     description:
//       "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
//     tools: [
//       "Express",
//       "MongoDB",
//       "OpenAI API",
//       "AWS SES",
//       "AWS S3",
//       "Node Mailer",
//       "Joi",
//       "Puppeteer",
//       "EC2",
//       "PM2",
//       "Nginx",
//     ],
//     role: "Backend Developer",
//     code: "https://github.com/ThiagoAndo/Next-Store-API",
//     demo: "",
//     image: crefin,
//   },
//   {
//     id: 2,
//     name: "Travel Agency App",
//     description:
//       "I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.",
//     tools: [
//       "NextJS",
//       "Tailwind CSS",
//       "Google Maps",
//       "NestJS",
//       "TypeScript",
//       "MySQL",
//       "AWS S3",
//       "Sun-Editor",
//       "Gmail Passkey",
//     ],
//     role: "Full Stack Developer",
//     code: "https://github.com/ThiagoAndo/Next-Store-API",
//     demo: "",
//     image: travel,
//   },
//   {
//     id: 3,
//     name: "AI Powered Real Estate",
//     description:
//       "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
//     tools: [
//       "React",
//       "Bootstrap",
//       "SCSS",
//       "Stripe",
//       "Express",
//       "TypeScript",
//       "MongoDB",
//       "Azure Blob",
//       "OpenAI API",
//       "Replicate AI",
//       "Cronjob",
//       "JWT",
//     ],
//     code: "",
//     role: "Full Stack Developer",
//     demo: "",
//     image: realEstate,
//   },
//   {
//     id: 4,
//     name: "Newsroom Management",
//     description:
//       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
//     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
//     code: "https://github.com/ThiagoAndo/Next-Store-API",
//     demo: "",
//     image: ayla,
//     role: "Full Stack Developer",
//   },
// ];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },


// const experiences = [
//   {
//     title: "Front-End Developer",
//     company_name: "Cover Hunt",
//     icon: coverhunt,
//     iconBg: "#333333",
//     date: "Aug 2021 - Feb 2022",
//   },
//   {
//     title: "Mentor (Volunteer)",
//     company_name: "Microverse",
//     icon: microverse,
//     iconBg: "#333333",
//     date: "Mar 2022 - May 2022",
//   },
//   {
//     title: "Junior Software Engineer",
//     company_name: "Kelhel",
//     icon: kelhel,
//     iconBg: "#333333",
//     date: "May 2022 - Oct 2022",
//   },
//   {
//     title: "Full Stack Developer",
//     company_name: "Diversity Cyber Council",
//     icon: dcc,
//     iconBg: "#333333",
//     date: "Sep 2022 - Present",
//   },
// ];

