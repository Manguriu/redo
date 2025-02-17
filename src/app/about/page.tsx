"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Experience from "../experience/page";

const skills = [
  { name: "Data Analysis", image: "/skills/dataanalysis.png" },
  { name: "SQL", image: "/skills/Sql.png" },
  { name: "Next.js", image: "/skills/next.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "Laravel", image: "/skills/laravel.png" },
  { name: "Python", image: "/skills/python.png" },
  { name: "Car diag/Fixing(Hobby)", image: "/skills/mechanic.png" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-100 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gray-300 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                Professional Journey
              </h2>
              <p>
                Im a versatile software developer with a passion for building
                efficient, scalable applications. My expertise lies in React,
                Next.js, Laravel, and JavaScript, and Ive spent countless hours
                coding, testing, and maintaining software systems because bugs
                fear me, and deadlines respect me.
                <br />
                <br />
                But wait, theres more! Im also a data analyst, so whether its
                crunching numbers, spotting trends, or making sense of messy
                data, Ive got you covered.
                <br />
                <br />
                Oh, and when Im not buried in code, youll likely find me under
                the hood of a car because Im a car enthusiast and amateur
                mechanic by hobby. Whether its fixing engines or analyzing
                torque, I live for speed and problem-solving, on and off the
                computer.
                <br />
                <br />
                <strong>Currently Open To:</strong>
                <ul>
                  <li>
                    🌟 <strong>New opportunities</strong> (freelance or
                    full-time)
                  </li>
                  <li>
                    🤝 <strong>Collaborating on open-source projects</strong>
                  </li>
                  <li>
                    📊 <strong>Data-driven problem-solving</strong>
                  </li>
                  <li>
                    🚗 <strong>Talking cars and tech (or both!)</strong>
                  </li>
                </ul>
                <br />
                <br />
                Lets create something amazing together.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-300 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                My Story
              </h2>
              <p className="text-gray-900">
                Im on a journey fueled by curiosity and creativity, where every
                project feels like taking a new car out on the open road. To me,
                coding is like tuning an engine—every piece has to fit
                perfectly, work efficiently, and deliver a smooth, powerful
                experience. 
                <br />
                <br />I thrive on learning and adapting. Technology
                doesnt wait, so neither do I. I keep up, push forward, and
                embrace every new challenge like a mechanic chasing the perfect
                ride. <br /><br />
                Looking back on my journey as a developer, its been a
                story of grit, adaptability, and relentless tinkering whether
                its debugging code or fixing a gearbox. Im all about making
                things not just functional but truly exceptional, with a little
                extra horsepower.
                <br /><br /> And the best part? The journey is far from
                over..
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">
          Experience
        </h2>
        <Experience />
      </motion.div>
    </div>
  );
}
