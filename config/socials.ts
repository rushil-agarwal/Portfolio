import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
  showInFooter?: boolean; // Optional flag to control footer display
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rushil-agarwal",
    icon: Icons.gitHub,
    link: "https://github.com/rushil-agarwal",
    showInFooter: true,
  },
  {
    name: "LinkedIn",
    username: "Rushil Agarwal",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rushil-agarwal-86b519298/",
    showInFooter: true,
  },
  {
    name: "Codeforces",
    username: "Specialist (1503)",
    icon: Icons.work,
    link: "https://codeforces.com/profile/rushil-agarwal",
    showInFooter: false,
  },
  {
    name: "LeetCode",
    username: "Guardian (2206)",
    icon: Icons.work,
    link: "https://leetcode.com/u/rushil-agarwal",
    showInFooter: false,
  },
  {
    name: "Gmail",
    username: "rushilbti@gmail.com",
    icon: Icons.gmail,
    link: "mailto:rushilbti@gmail.com",
    showInFooter: true,
  },
];
