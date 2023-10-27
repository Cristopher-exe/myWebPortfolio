import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReact, FaVuejs } from "react-icons/fa";

export default function Footer() {

  let today = new Date().getFullYear();

  return (
    <footer className="mb-10 flex flex-col gap-4 items-center justify-center text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {today} Cristopher. All rights reserved.
      </small>
      <p className="text-xs font-semibold">Power by  </p>
      <p className="text-xs">
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
      
    </footer>
  );
}
