import type { Props as ExperienceProp } from "../components/experience/props";

// Education details
export const EDUCATION = {
  school: "University of Wisconsin-Milwaukee",
  degree: "Bachelor of Arts in Computer Science | Minor in Web Development",
  dates: "May 2022 — December 2024",
  location: "Milwaukee, WI",
};

// Experience details
export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "May 2023 — Present",
    title: "IT-Architecture Student Intern",
    company: "WEC Energy Group",
    companyUrl: "https://www.wecenergygroup.com",
    description:
      "Managed databases for applications using tools like Microsoft SQL Server Management Studio and Visual Studio Code. Collaborated with fellow interns on a company-based project aimed at using modern technology to address complex issues in Milwaukee. Seamlessly integrated into the IT-Architecture team, handling tasks and responsibilities equivalent to those of a regular employee.",
    technologies: [
      "Microsoft SQL Server",
      "Visual Studio Code",
      "Team Collaboration",
    ],
    logo: "/logos/wec-energy-group.jpeg",
  },
  {
    dates: "May 2022 — September 2022",
    title: "Fuse Intern",
    company: "Milwaukee Tech Hub Coalition",
    companyUrl: "https://mketech.org",
    description:
      "Participated in a 3-month program focused on the Ethics and Impact of Artificial Intelligence. Explored how data is sourced, structured, trained, and leveraged to deploy technological solutions. Utilized industry tools like Excel, Power BI, and Python for coding and AI programming. Collaborated in a group project to solve a complex problem in Milwaukee using modern technology.",
    technologies: [
      "Excel",
      "Power BI",
      "Python",
      "AI Programming",
    ],
    logo: "/logos/mke-tech-hub.jpeg",
  },
];

// Skills Summary
export const SKILLS_SUMMARY = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "C#",
  "MySQL",
  "Microsoft Power BI",
  "AI Prompting",
  "AI Image Creation",
  "Excel",
  "Microsoft SQL Management Studio",
  "Team Development",
  "English",
  "Spanish"
];
