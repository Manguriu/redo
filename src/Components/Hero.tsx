'use client';

import React, { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const skills = [
  { name: 'SQL', pic: '/skills/Sql.png' },
  { name: 'Data Analysis', pic: '/skills/dataanalysis.png' },
  { name: "Car diag/Fixing(Hobby)", pic: "/skills/mechanic.png" },
  { name: 'Next.js', pic: '/skills/next.png' },
  { name: 'JavaScript', pic: '/skills/javascript.png' },
  { name: 'React', pic: '/skills/react.png' },
  { name: 'Laravel', pic: '/skills/laravel.png' },
 

];

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm currently open to work",
      "Open to opportunities",
      "Open-source contributor",
      "Data analyst",
      "Car Enthusiast/Mechanic as a Hobby"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const [bigImage, setBigImage] = useState('/skills/code.png');

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 space-y-6 text-center lg:text-left"
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Hello, I'm <span className="text-cyan-400">Brian Manguriu</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl text-gray-300">
          {text}
          <Cursor cursorColor="#22d3ee" />
        </h2>
        <p className="text-lg text-gray-400">
        Software Developer | Data analyst | Car Enthusiast/Mechanic as a Hobby
        </p>
        <Link 
          href="https://drive.google.com/file/d/11TuqYkJHmzkwOhPIvYI97LwRtD8dwnnM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition duration-300"
        >
          View Resume
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 space-y-8"
      >
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src={bigImage}
            alt="Skill showcase"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {skills.map((skill, index) => (
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

