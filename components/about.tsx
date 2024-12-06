"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        I’m passionate about building user-friendly web and mobile applications that solve real-world problems. With experience in React.js, Node.js, Django, AWS, and Python, I enjoy working on both the frontend and backend to create seamless digital experiences.
      </p>
      <p className="mb-3 text-justify">
        I’ve worked on exciting projects ranging from smart contracts to scalable cloud infrastructure, always focusing on optimization, performance, and scalability. Whether it’s writing clean code, collaborating with teams, or tackling challenges, I’m driven to make a positive impact through technology.
      </p>
      <p className="mb-3 text-justify">
        Let’s connect and create something amazing together!
      </p>
    
    </motion.section>
  );
}
