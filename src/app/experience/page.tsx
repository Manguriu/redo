'use client'

import React, { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const DetailsC = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-start justify-between">
      <Card className="w-full bg-gray-300 border-gray-800">
        <CardContent className="p-6">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h3 className="capitalize font-bold text-2xl text-cyan-400 mb-2">
              {position} &nbsp;
              <a href={companyLink} target="_blank" rel="noopener noreferrer" className="capitalize text-cyan-500 hover:underline">
                @{company}
              </a>
            </h3>
            <span className="capitalize font-medium text-gray-900 mb-2 block">
              {time} | {address}
            </span>
            <p className="font-medium text-gray-900 w-full">{work}</p>
          </motion.div>
        </CardContent>
      </Card>
    </li>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  return (
    <div ref={ref} className="relative w-full mx-auto">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-0 top-1 w-[4px] h-full bg-cyan-400 origin-top"
      />

      <ul className="w-full flex flex-col items-start justify-between">
        <DetailsC
          position="Internship"
          company="HNG Internship"
          time="Current"
          address=""
          work="Creating innovative web designs using React.js, Next.js and developing experimental projects."
          companyLink=""
        />
        <DetailsC
          position="Freelance Web Developer"
          company="Freelance"
          time="May 2022 - Present (1 year 3 months)"
          address=""
          work="Experienced Freelance Developer specializing in JavaScript, React.js, Next.js, and Laravel. Creating innovative web solutions for various clients."
          companyLink=""
        />
        <DetailsC
          position="Internship"
          company="Thika School of Medical and Health Sciences"
          time="May 2018 - August 2018"
          address="Thika"
          work="• Maintained and installed software and computer systems.
          • Computer networking and Maintenance.
          • Data Collection and Analysis.
          • Troubleshooting."
          companyLink="https://tsmhs.co.ke/"
        />
        <DetailsC
          position="Diploma, Information Technology"
          company="Thika Technical Training Institute"
          time="Jan 2018 - Mar 2021"
          address=""
          work="The coursework comprised a comprehensive range of subjects, such as System Analysis, Database Management, Computer Applications (web Stand-alone), Programming Languages and Data Communication."
          companyLink=""
        />
      </ul>
    </div>
  )
}

