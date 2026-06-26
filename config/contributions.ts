export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "GitHub",
    repoOwner: "@rushil-agarwal",
    contibutionDescription:
      "Public repositories showcasing ML, quantitative finance, data analytics, blockchain, and competitive programming solutions.",
    link: "https://github.com/rushil-agarwal",
  },
  {
    repo: "Codeforces",
    repoOwner: "Specialist (1503)",
    contibutionDescription:
      "Achieved Specialist rating of 1503 through consistent competitive programming practice and algorithmic problem-solving.",
    link: "https://codeforces.com/profile/rushil_a_",
  },
  {
    repo: "LeetCode",
    repoOwner: "Guardian (2206)",
    contibutionDescription:
      "Guardian rating of 2206, ranked 240th out of 35,000+ in LeetCode Biweekly Contest 174 by solving all problems in under an hour.",
    link: "https://leetcode.com/u/Rushil_A_/",
  },
  {
    repo: "LinkedIn",
    repoOwner: "Rushil Agarwal",
    contibutionDescription:
      "Professional profile highlighting research internship at IIT Delhi, academic achievements, and project work.",
    link: "https://www.linkedin.com/in/rushil-agarwal-86b519298/",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 4);
