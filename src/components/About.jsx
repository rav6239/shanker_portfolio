import React from "react";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-72 w-96" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am Ravi Shanker, an Electronics and Computer Engineering graduate
              from Guru Nanak Dev University, Punjab and graduated in
              2024. I have a solid foundation in programming, with skills in
              React, HTML, CSS, JavaScript, and Tailwind, and I am familiar
              with tools like VSCode, GitHub, and MySQL Workbench. My interests
              extend into web development, demonstrated
              through projects such as a job-portal,news application,
              showcasing my ability to develop user-friendly applications.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
