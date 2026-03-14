export const personal = {
  name: "Ron Andre C. Bulagao",
  shortName: "Ron Andre",
  initials: "RACB",
  nickname: "CRAB",
  role: "Junior Software Developer",
  location: "Paranaque City, Philippines",
  email: "ronandre0123@gmail.com",
  phone: "+63 929 595 4684",
  github: "https://github.com/Rdreii",
  linkedin: "https://linkedin.com/in/rondreii/",
  bio: [
    "BS Information Technology graduate from PUP Manila — Magna Cum Laude, President's Lister all four years, and DOST–SEI Scholar.",
    "During my internship at PGX Group Inc., I built production-grade web and mobile features using Figma, Flutter, and Firebase inside real sprint cycles.",
    "I'm part of the AWS Cloud Club and PUP Programmers' Guild, and I care about writing purposeful code that solves real, everyday problems — especially for Filipino communities.",
  ],
};

export const honors = [
  "Magna Cum Laude",
  "President's Lister 2021–2025",
  "DOST–SEI Scholar",
];

export const stats = [
  { value: "4yr", label: "President's Lister" },
  { value: "4+", label: "Projects Built" },
  { value: "PGX", label: "Internship" },
  { value: "DOST", label: "SEI Scholar" },
];

export const experience = [
  {
    company: "PGX Group Inc.",
    location: "Ortigas, San Juan City",
    role: "Software Developer Intern",
    period: "Feb 2025 – June 2025",
    color: "#D85A30",
    bullets: [
      "Developed full-stack features using ReactJS, Flutter, and Firebase for web and mobile applications.",
      "Implemented responsive UI components to support multi-device accessibility.",
      "Integrated backend services including authentication and real-time database operations.",
      "Collaborated in a sprint-based environment to debug, optimize, and ship production features.",
    ],
  },
];

export const education = [
  {
    school: "Polytechnic University of the Philippines",
    location: "Sta. Mesa, Manila",
    degree: "BS Information Technology",
    period: "2021 – 2025",
    color: "#3B6D11",
    bullets: [
      "Graduated Magna Cum Laude — President's Lister Awardee every year from 2021 to 2025.",
      "DOST–SEI JLSS Scholar.",
      "Member of AWS Cloud Club and PUP The Programmers' Guild.",
      "Certifications:  Official ISC2 CC Online Self-Paced Training - 1M (ISC2, 2024), Intro to Cybersecurity (Simplilearn, 2024).",
    ],
  },
];

export const skills = [
  { name: "JavaScript", category: "Language", level: 88 },
  { name: "HTML & CSS", category: "UI", level: 90 },
  { name: "ReactJS", category: "Frontend", level: 80 },
  { name: "Flutter", category: "Mobile", level: 72 },
  { name: "Firebase", category: "Backend", level: 78 },
  { name: "Java & Python", category: "Language", level: 70 },
  { name: "C / C++ / C#", category: "Language", level: 65 },
  { name: "SQL", category: "Database", level: 68 },
  { name: "Git & GitHub", category: "Tool", level: 82 },
  { name: "Figma", category: "Design", level: 74 },
];

export const projects = [
  {
    title: "PGX Web System",
    year: "2025",
    tags: ["Flutter", "Firebase", "Figma"],
    color: "#D85A30",
    abbr: "PGX",
    description:
      "Full-stack cross-platform system built during internship at PGX Group Inc. Designed UI/UX prototypes in Figma, built front-end components with Flutter, and integrated Firebase Auth and Realtime Database for production use.",
    link: null,
  },
  {
    title: "Student ID Hub",
    year: "2024",
    tags: ["HTML/CSS", "JavaScript", "Google Apps Script"],
    color: "#534AB7",
    abbr: "ID",
    description:
      "Web portal automating the student ID request process for a university. Uses Google Sheets as a backend via Apps Script with form handling and data persistence. Deployed on GitHub Pages.",
    link: null,
  },
  {
    title: "IskoMap",
    year: "2023",
    tags: ["Unity", "Firebase"],
    color: "#3B6D11",
    abbr: "MAP",
    description:
      "Interactive 3D campus navigation app built in Unity. Integrated Firebase for user authentication and real-time map data, with smooth camera controls for a seamless user experience.",
    link: null,
  },
  {
    title: "Recode:Zero",
    year: "2024",
    tags: ["Unity", "C#", "Capstone"],
    color: "#185FA5",
    abbr: "RCZ",
    description:
      "Educational game capstone project teaching OOP concepts through gameplay. Features inheritance, encapsulation, polymorphism, level progression, and a full scoring system.",
    link: null,
  },
];
