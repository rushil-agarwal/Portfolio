import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Primary language for machine learning, analytics pipelines, automation, and trading systems.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "C++",
    description:
      "Used for data structures, algorithms, and competitive programming problem solving.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Machine Learning",
    description:
      "Feature engineering, model selection, evaluation, and predictive modeling with scikit-learn.",
    rating: 5,
    icon: Icons.sparkles,
  },
  {
    name: "Deep Learning",
    description:
      "Neural networks for NLP, computer vision, sequence models, and reinforcement learning experiments.",
    rating: 4,
    icon: Icons.sparkles,
  },
  {
    name: "SQL",
    description:
      "Querying, cleaning, and analyzing structured data for analytics and decision-making.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Pandas",
    description:
      "Data cleaning, transformation, feature engineering, and exploratory analysis workflows.",
    rating: 5,
    icon: Icons.page,
  },
  {
    name: "NumPy",
    description:
      "Numerical computation and vectorized operations for data science and modeling.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "PyTorch",
    description:
      "Deep learning experiments for sequence modeling, NLP, and reinforcement learning.",
    rating: 4,
    icon: Icons.sparkles,
  },
  {
    name: "TensorFlow",
    description:
      "Model training and experimentation through coursework and applied ML projects.",
    rating: 4,
    icon: Icons.sparkles,
  },
  {
    name: "Streamlit",
    description:
      "Interactive dashboards and data apps for analytics projects and model demos.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "NetworkX",
    description:
      "Graph-based analysis for guest journeys, relationships, and connected datasets.",
    rating: 4,
    icon: Icons.gitBranch,
  },
  {
    name: "Git",
    description:
      "Version control for coursework, experiments, and public project repositories.",
    rating: 4,
    icon: Icons.gitHub,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
