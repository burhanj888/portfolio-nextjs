"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
  <section ref={ref} id="projects" className="scroll-mt-28 m-5 sm:m-20 md:m-28">
  <SectionHeading>My projects</SectionHeading>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {projectsData.map((project, index) => (
      <React.Fragment key={index}>
        <Project {...project} />
      </React.Fragment>
    ))}
  </div>
</section>
  );
}
