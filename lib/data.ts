import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ymanbrother.png";
import rmtdevImg from "@/public/itihvac.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Systems Engineer",
    location: "Tepic, Nay.",
    description:
      "Graduated in systems engineering, with a specialty in web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2022",
  },
  {
    title: "Jr. Full Stack Developer",
    location: "Zapopan, Jal.",
    description:
      "Design and development of a web application for investment portfolio management with Vue.JS, Vuetify, Laravel 9 and AWS",
    icon: React.createElement(FaVuejs),
    date: "feb 2022 - actual",
  },
] as const;

export const projectsData = [
  {
    title: "Capital Inversiones",
    description:
      "Web application for investment portfolio management, for clients and administrators.",
    tags: ["Vuejs 3", "Pinia", "AWS", "SQL", "Laravel 9", "Docker"],
    imageUrl: corpcommentImg,
    url: 'https://inversion.ymanbrothercapital.com/login',
  },
  {
    title: "Iti Hvac Training",
    description:
      "Website for an HVAC school with interface of existing products in the physical store. [Developing]",
    tags: ["Astro", "TypeScript", "Vercel", "Git", "GitHub Actions"],
    imageUrl: rmtdevImg,
    url: null,
  },
] as const;

export const skillsData = [
  'Algorithms',
  'Data structure',
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  'Vue.js',
  "Git",
  'Figma',
  'AWS',
  'SQL',
  'Docker',
  'Laravel 9',
] as const;
