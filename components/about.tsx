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
      className="mb-28 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I am a Systems Engineer, specialized in web development, with 2 year of{" "}
        <span className="underline">work</span> experience, I am characterized
        as a very <span className="font-medium italic">proactive</span>,
        creative and critical person both professionally and personally. I love clean code, good practices, automation and innovation.
      </p>
      <p>
      In addition to programming, I like to travel, learn about new places and cultures, 
      and take good photos and videos.
      </p>
    </motion.section>
  );
}
