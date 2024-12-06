import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";


export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Burhanuddin. All rights reserved.
      </small>
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
    </footer>
  );
}
