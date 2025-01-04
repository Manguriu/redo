'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Experience from "../experience/page"


const skills = [
  { name: "SQL", image: "/skills/Sql.png" },
  { name: "Next.js", image: "/skills/next.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "Laravel", image: "/skills/laravel.png" },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Professional Journey</h2>
              <p className="text-gray-300">
                As an experienced software developer, I have a strong background in coding, testing, and maintaining software systems. Throughout my career, I've developed a versatile skill set that allows me to excel in multiple programming languages. I specialize in React, Next.js, Laravel, and JavaScript, which I've mastered to create efficient and scalable applications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">My Story</h2>
              <p className="text-gray-300">
                I'm on a journey of always learning and coming up with new ideas. Each project I work on is like a blank canvas where I create new and clever solutions. As technology gets better, I keep up with it, making sure I'm at the forefront of creating really great software experiences. Looking back at my experience as a software developer, it's a story of working hard, being able to change when needed, and never giving up on making things really, really good.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Skills & Technologies</h2>
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

        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Experience</h2>
        <Experience />
      </motion.div>
    </div>
  )
}

