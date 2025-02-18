"use client";

import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import ResumeRequestButton from "./ResumeButton";

const skills = [
  { name: "SQL", pic: "/skills/Sql.png" },
  { name: "Data Analysis", pic: "/skills/dataanalysis.png" },
  { name: "Car diag/Fixing(Hobby)", pic: "/skills/mechanic.png" },
  { name: "Next.js", pic: "/skills/next.png" },
  { name: "JavaScript", pic: "/skills/javascript.png" },
  { name: "React", pic: "/skills/react.png" },
  { name: "Laravel", pic: "/skills/laravel.png" },
];

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm currently open to work",
      "Open to opportunities",
      "Open-source contributor",
      "Data analyst",
      "Enthusiast/Mech as a Hobby",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [bigImage, setBigImage] = useState("/skills/code.png");

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-4 bg-gradient-to-br from-gray-100 to-gray-300">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl space-y-6"
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Hello, I'm <span className="text-cyan-400">Brian Manguriu</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl text-gray-900">
          {text}
          <Cursor cursorColor="#22d3ee" />
        </h2>
        <p className="text-lg text-gray-900">
          Software Developer | Data analyst | Enthusiast/Mech as a Hobby
        </p>
        <ResumeRequestButton />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl mt-8 space-y-6"
      >
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src={bigImage}
            alt="Skill showcase"
            layout="fill"
            objectFit="contain"
            className="p-4"
          />
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 relative cursor-pointer"
              onClick={() => setBigImage(skill.pic)}
            >
              <Image
                src={skill.pic}
                alt={skill.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
