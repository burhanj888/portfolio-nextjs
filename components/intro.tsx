"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profilePicture from "@/public/profilePicture.png"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const wavingVariants: Variants = {
    wave: {
      rotate: [0, 20, 0, -20, 0], // Sequence of rotation angles
      transition: {
        duration: 2, // Duration of the entire sequence
        ease: "ease-in-out", // Easing function to create a smooth effect
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "loop", // Type of repetition
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 lg:mt-20 max-w-[50rem] text-center sm:text-left sm:flex sm:flex-col sm:items-center sm:justify-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="sm:flex sm:items-center sm:justify-center sm:w-full">
        <div className="sm:flex sm:items-center sm:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="inline-block mb-4"
          >
            <Image
              src={profilePicture}
              alt="Burhan Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="mb-10 mt-4 sm:mt-0 sm:ml-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Burhanuddin. 👋</span> 
          <br/>
          <span>
            I'm a <span className="font-bold">Full-Stack Developer.</span><br/>
            Turning ideas into reality <br></br>
            with full stack fluency.
          </span>
            
        </motion.div>
        
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume Burhanuddin Jinwala.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-wrap justify-center gap-2">
  <a
    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href="https://www.linkedin.com/in/burhanuddin-jinwala/"
    target="_blank"
  >
    <BsLinkedin />
  </a>

  <a
    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href="https://github.com/burhanj888"
    target="_blank"
  >
    <FaGithubSquare />
  </a>

  <a
    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href="https://x.com/burhanj888"
    target="_blank"
  >
    <BsTwitter />
  </a>
</div>

      </motion.div>
    </section>
  );
}
