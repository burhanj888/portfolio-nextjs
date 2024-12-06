"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
  const { ref } = useSectionInView("Blog", 0.5);

  return (
  <section ref={ref} id="blog" className="scroll-mt-28 m-5 sm:m-20 md:m-28">
  <SectionHeading>My Blog</SectionHeading>
  <div>
    <h1>Blog Coming Soon!</h1>
  </div>
  {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projectsData.map((project, index) => (
      <React.Fragment key={index}>
        <Project {...project} />
      </React.Fragment>
    ))}
  </div> */}
</section>
  );
}
