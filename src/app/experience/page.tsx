"use client";
import React, { useRef } from "react";
import SitionElem from "@/Components/SitionElem";
import { motion, useScroll } from "framer-motion";
import Icons from "@/Components/Icons";

const DetailsC = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-5 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <Icons reference={ref} />
      <motion.div
        initial={{
          x: 200,
          opacity: -1,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <h3 className="capitalize font-bold text-2xl  max-sm:text-[15px]">
          {position} &nbsp;{" "}
          <a href={companyLink} className="capitalize text-cyan-600">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-slate-300 xs:text-sm max-sm:text-[10px]">
          {time} | {address}orange
        </span>
        <p className="font-medium w-full subtitle text-slate-300 md:text-sm max-sm:text-[10px]">
          {" "}
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-4 lg:mt-4 mb-[10rem]">
      <SitionElem />
      <h2 className="font-bold text-4xl mb-10 text-slate-400  w-full text-center max-sm:text-[20px]">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] max-sm:w-full mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9  max-sm:left-[18px] top-0 w-[3px] h-full bg-slate-300 origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <DetailsC
            position="internship"
            company="Thika School of Medical and Health Sciences"
            time="2018-may - 2018 -august"
            address="Thika"
            work="• Maintained and installed software and computer systems.
            • Computer networking and Maintenance.
            • Data Collection and Analysis.
            • Troubleshooting."
            companyLink="https://tsmhs.co.ke/"
          />
          <DetailsC
            position="Freelance Web Developer"
            company="Freelance"
            time="May 2022 - Present (1 year 3 months)"
            address=""
            work="Experienced Freelance Developer JavaScript | React.js | Laravel Specialist | Creating Innovative Web"
            companyLink=""
          />
          <DetailsC
            position="Freelance Web Developer"
            company="Freelance"
            time="May 2022 - Present (1 year 3 months)"
            address=""
            work="Experienced Freelance Developer JavaScript | React.js | Laravel Specialist | Creating Innovative Web"
            companyLink=""
          />
          <DetailsC
            position="Diploma, Information Technology"
            company="Thika Technical Training Institute"
            time="Jan 2018 - Mar 2021"
            address=""
            work="The coursework comprised a comprehensive range of subjects, such as System Analysis, Database
            Management, Computer Applications(web Stand-alone),Programming Languages and Data
            Communication."
            companyLink=""
          />
        </ul>
      </div>
    </div>
  );
}
