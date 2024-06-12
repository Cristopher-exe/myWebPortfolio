import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ymanbrother.png";
import rmtdevImg from "@/public/mayaEstate.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Reading",
    hash: "#reading",
  },
] as const;

export const experiencesData = [
  {
    title: "Jr. Web Developer",
    location: "Yman Brother Capital",
    description:
      "Developing key projects for the company and implementing modern technologies and management of services in the AWS cloud.",
    icon: React.createElement(FaVuejs),
    date: "feb 2023 - actual",
  },
] as const;

export const projectsData = [
  {
    title: "Capital Inversiones",
    description:
      "Web application for investment portfolio management, for clients and administrators.",
    tags: ["Vuejs 3", "Pinia", "AWS", "SQL", "Laravel 9", "Docker", "GHA"],
    imageUrl: corpcommentImg,
    url: 'https://inversion.ymanbrothercapital.com/login',
  },
  {
    title: "Maya Estate Inv.",
    description:
      "Collective funding platform that allows investing in real estate projects in Mexico.",
    tags: ["React", "Redux","AWS S3", "AWS CF", "GitHub Actions"],
    imageUrl: rmtdevImg,
    url: "https://mayaestateinvestment.com/",
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
