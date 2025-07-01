export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "LearnSphere - AI-Powered Learning Platform",
    desc: "LearnSphere is a modern SaaS learning platform that empowers users to interact with AI-powered voice tutors. Built for scalability, interactivity, and ease of use, LearnSphere leverages the latest web technologies to deliver an immersive educational experience tailored to your needs.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript and Vapi voice agent.",
    href: "https://learnsphere.jeetdas.tech",
    texture: "/textures/project/Learnsphere.mp4",
    logo: "/assets/learnsphere.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "Vocify - AI-Powered Voice Tutor",
    desc: "Vocify is a full-stack web application that enables users to conduct mock interviews with an AI interviewer tailored to their preferences. It provides realistic interview simulations and generates personalized feedback to help users improve their communication and technical skills.",
    subdesc:
      "Vocify is built with React Js, Tailwind CSS, and Vapi voice agent, ensuring a modern and responsive user experience.",
    href: "https://vocify.jeetdas.tech",
    texture: "/textures/project/Vocify.mp4",
    logo: "/assets/vocify.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.08,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -8.3, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 7, 0]
      : isMobile
      ? [5, 7.5, 0]
      : isTablet
      ? [7, 8, 0]
      : [10, 8, 0],
    ringPosition: isSmall
      ? [-3, 4, 0]
      : isMobile
      ? [-5, 4, 0]
      : isTablet
      ? [-7, 5, 0]
      : [-9, 5, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Konnexions",
    pos: "Web Developer",
    duration: "2023 - Present",
    title:
      "Currently working on KwickSwap - A section swap app beneficial for students. It allows students to swap sections with each other, making it easier to manage their schedules and find suitable alternatives. The app is designed to be user-friendly and efficient, ensuring a smooth experience for all users.",
    icon: "/assets/konnexions.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "IoT Lab",
    pos: "Web Developer",
    duration: "2023 - Present",
    title:
      "Built the Innovance website and a sample portfolio website for the event INNOVANCE 3.O. Currently working on Nexturday - an event management app. It is designed to streamline the process of organizing and managing events, making it easier for users to plan and execute successful gatherings.",
    icon: "/assets/iot.jpg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "GFG KIIT Chapter",
    pos: "Administrator",
    duration: "2023 - Present",
    title:
      "Organised few events like Genesis-speaker session, Trapped-gaming event. Currently serving as POC of AI/ML domain. In this role, I am responsible for overseeing the development and implementation of AI/ML projects, ensuring they align with the chapter's goals and objectives.",
    icon: "/assets/gfg.jpg",
    animation: "salute",
  },
];
