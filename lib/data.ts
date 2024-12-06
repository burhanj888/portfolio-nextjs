import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jinAI from "@/public/images/jinai.png";
import bookChain from "@/public/images/bookchain.png";
import bitcart from "@/public/images/bitcart.jpg";
import xnark from "@/public/images/xnark.png";
import cryft from "@/public/images/cryft.png";
import dollarDashboard from "@/public/images/dollarDashboard.jpg"
import deforms from "@/public/images/deforms.jpg";
import jobBoard from "@/public/images/jobSearch.jpg";
import dutchAuction from "@/public/images/dutchAuction.jpg";
import uniswap from "@/public/images/uniswap.jpeg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
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
    name: "Blog",
    hash: "#blog"
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Portalys Inc., Boston, MA",
    description:
      `
        At Portalys, I revamped backend architecture, built dashboards, automated campaigns, enhanced security, optimized smart contracts, and integrated QR codes, improving efficiency, user experience, and reducing costs.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - Present",
  },
  {
    title: "Master of Science in Information Systems",
    location: "Northeastern University, Boston, MA",
    description:
      "Graduated with coursework in software engineering, web and mobile app development, blockchain, and data science, backed by hands-on experience in building numerous real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - May 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Varanyam Technologies, Dhar, MP",
    description:
      "At Varanyam Technologies, I developed a social community platform and a B2B e-commerce app using Django and MERN Stack, implemented scalable microservices, boosting stability, sales, and system efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 - Aug 2022",
  },
  {
    title: "Bachelor of Computer Application",
    location: "Birla Institute of Technology, Mesra",
    description:
      "Pursued a Bachelor in Computer Application, building a solid foundation in computer systems and software engineering through practicals applications.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2019 - May 2022",
  },
] as const;

export const projectsData = [
  {
    imageUrl: jinAI,
    title: "JinAI",
    description: "AI-powered desktop assistant that handles daily tasks through simple voice commands—whether it's generating code, opening apps, or playing your favorite tunes.",
    tags: ["Python","OpenAI","GenAI", "Speech Recognition", "Google Speech"],
    githubLink: "https://github.com/burhanj888/JinAI"
  },
  {
    imageUrl: bookChain,
    title: "BookChain",
    description: "Book borrowing with a Go-powered blockchain, ensuring secure, transparent, and tamper-proof library transactions.",
    tags: ["Go", "Blockchain", "Gorilla Mux", "MySQL", "RESTful APIs"],
    githubLink: "https://github.com/burhanj888/BookChain"
  },
  {
    imageUrl: xnark,
    title: "XNARC",
    description: "Expose corruption safely with our Zero-Knowledge Proofs platform—reveal the truth, stay anonymous, and protect yourself while making a difference.",
    tags: ["Circom", "Solidity", "IPFS", "Javascript","React", "GitHub", "Ether.js", "OpenCV"],
    githubLink: "https://github.com/burhanj888/INFO7520-FinalProject-XNARC"
  },
  {
    imageUrl: cryft,
    title: "Cryft",
    description: "An \"Ideal\" mobile app that simplifies secure cross-border payments with fast transactions, easy QR codes, and effortless cryptocurrency management.",
    tags: ["Swift", "SwiftUI", "Firebase", "Metamask SDK", "iOS"],
    githubLink: "https://github.com/burhanj888/Cryft-Wallet"
  },
  {
    imageUrl: dollarDashboard,
    title: "Dollar Dashboard",
    description: "Navigate your finances with ease using our full-stack Expense Tracker - your digital companion for effortless expenditure management and insightful visual tracking! ",
    tags: ["Javascript","React", "Node.js","Express.js", "MongoDB", "GitHub", "VSCode", "Postman"],
    githubLink: "https://github.com/kskeerthana/DollarDashboard"
  },
  {
    imageUrl: dutchAuction,
    title: "NFT Platform",
    description: "Dutch Auction method to optimize server load and dynamically determine NFT prices through real-time market demand!",
    tags: ["Solidity","Hardhat","IPFS","Typescript","React", "Openzeppelin", "Chai"],
    githubLink: "https://github.com/burhanj888/Dutch-Auction"
  },
  {
    imageUrl: deforms,
    title: "Deforms",
    description: "Unlock rewards by sharing your insights on our survey platform, where your opinions pave the way to enhanced user engagement and collective knowledge-building!",
    tags: ["Java", "MySQL", "Swing", "GitHub", "Net Beans"],
    githubLink: "https://github.com/aravind33b/AEDFinalProject"
  },
  {
    imageUrl: uniswap,
    title: "Uniswap V3",
    description: "Upgraded Uniswap V2 to Uniswap V3, enhancing your decentralized trading with improved liquidity management and optimal token swapping.",
    tags: ["Solidity", "Foundry", "Typescript"],
    githubLink: "https://github.com/burhanj888/INFO7500-Final"
  },
  {
    imageUrl: bitcart,
    title: "BitCart",
    description: "A student-focused e-commerce platform, tailored to meet all your academic and lifestyle needs with exclusive deals and offerings!",
    tags: ["PHP", "Javascript", "JQuery", "HTML", "CSS"],
    githubLink: "https://github.com/burhanj888/bitcart"
  },
  {
    imageUrl: jobBoard,
    title: "Job DBMS",
    description: "Robust database system, crafted to efficiently manage, analyze, and connect talent pools.",
    tags: ["PL/SQL", "Oracle"],
    githubLink: "https://github.com/AbhishekJaiswal1810/Job_Mangement_System"
  },
  
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "Golang",
  "Rust",
  "Java",
  "Spring",
  "Swing",
  "Swift",
  "SwiftUI",
  "UIKit",
  "React Native",
  "Git",
  "GitHub",
  "GitHubcActions",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "HTML",
  "CSS",
  "PostgreSQL",
  "Framer Motion",
  "AWS",
  "Lambda",
  "SQS",
  "SNS",
  "S3",
  "EC2",
  "Docker",
  "Kubernetes"
] as const;
