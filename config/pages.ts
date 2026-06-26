import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Rushil Agarwal's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Tools I use across AI, data, and software projects.",
    metadata: {
      title: "Skills",
      description:
        "Rushil Agarwal's key technical skills across AI, data, and software engineering.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Machine learning, quantitative finance, analytics, and systems projects.",
    metadata: {
      title: "Projects",
      description:
        "Rushil Agarwal's machine learning, analytics, trading, and software projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect for research, internships, and collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Rushil Agarwal.",
    },
  },
  contributions: {
    title: "Profiles",
    description: "Coding profiles, repositories, and technical achievements.",
    metadata: {
      title: "Profiles",
      description:
        "Rushil Agarwal's coding profiles, repositories, and technical achievements.",
    },
  },
  resume: {
    title: "Resume",
    description: "Rushil Agarwal's resume.",
    metadata: {
      title: "Resume",
      description: "Rushil Agarwal's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Research, education, and leadership timeline.",
    metadata: {
      title: "Experience",
      description:
        "Rushil Agarwal's education, research experience, and leadership timeline.",
    },
  },
};
