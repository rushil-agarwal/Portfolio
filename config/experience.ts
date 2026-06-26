import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "iit-delhi-research-intern",
    position: "Research Intern",
    company: "IIT Delhi",
    location: "Remote",
    startDate: new Date("2024-05-10"),
    endDate: new Date("2024-07-06"),
    description: [
      "Worked on object detection using thermal vision with Prof. Brejesh Lall.",
      "Studied the impact of using synthetic images for improving pedestrian detection accuracy.",
      "Fine-tuned deep learning models like FR-CNN and YOLOv8 with training data containing synthetic samples.",
    ],
    achievements: [
      "Boosted model accuracy by 7-10% through feature engineering and fine-tuning.",
      "Evaluated deep learning models on a training set containing about 66% synthetic images.",
      "Received a letter of recommendation for strong analytical acumen and project ownership.",
    ],
    skills: ["Python", "Computer Vision", "Deep Learning", "PyTorch", "OpenCV"],
    logo: "/logo.png",
  },
  {
    id: "iiitm-gwalior",
    position: "Bachelors in Information Technology",
    company: "ABV-IIITM Gwalior",
    location: "Madhya Pradesh, India",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2027-05-01"),
    description: [
      "Pursuing Bachelors in Information Technology with a CGPA of 8.63.",
      "Coursework includes data structures and algorithms, operating systems, OOPs, deep learning, and generative AI with LLMs.",
      "Built projects across machine learning, quantitative finance, NLP, computer vision, analytics, and blockchain systems.",
    ],
    achievements: [
      "Secured 99 percentile in JEE Main 2023 among 11 lakh candidates.",
      "Reached Codeforces Specialist rating of 1503 and LeetCode Guardian rating of 2206.",
      "Ranked 240th among 35,000+ contestants in LeetCode Biweekly Contest 174.",
    ],
    skills: ["C++", "Python", "SQL", "Machine Learning", "Git"],
    logo: "/logo.png",
  },
  {
    id: "uthaan-technical-executive",
    position: "Technical Executive Member",
    company: "Uthaan, Journalism and Recreational Club",
    location: "ABV-IIITM",
    startDate: new Date("2024-04-01"),
    endDate: "Present",
    description: [
      "Direct a design team for club content, outreach, and event support.",
      "Coordinate production of social media content to increase club visibility and sponsorship opportunities.",
      "Help plan and execute campus events with game design and on-ground operations.",
    ],
    achievements: [
      "Led a 10+ member design team for club outreach and content production.",
      "Organized a Squid Games themed campus event with 150+ participants.",
      "Managed game design and event execution responsibilities on the ground.",
    ],
    skills: ["Git", "Figma", "React"],
    logo: "/logo.png",
  },
];
