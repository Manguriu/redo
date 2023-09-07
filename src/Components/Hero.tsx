/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { StaticImageData } from "next/image";
import HeroPic from "./HeroPic";

const skills = [
  {
    pic: "/skills/Sql.png",
    skillsPic: "/skills/Sql.png",
  },
  {
    pic: "/skills/next.png",
    skillsPic: "/skills/next.png",
  },
  {
    pic: "/skills/javascript.png",
    skillsPic: "/skills/javascript.png",
  },
  {
    pic: "/skills/react.png",
    skillsPic: "/skills/react.png",
  },
  {
    pic: "/skills/laravel.png",
    skillsPic: "/skills/laravel.png",
  },
];

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hello im currently Open to work",
      "Open to Opportunities",
      "Open-Source contributer",
    ],
  });
  const bigimg1 = "skills/code.png";
  const [bigImage, setBigImage] = useState(bigimg1);

  return (
    <section className=" w-full flex xl:flex-row flex-col justify-center  gap-10 p-1 max-container">
      <div className="relative  xl:w-2/5 flex flex-col mt-[15rem] max-xl:mt-[5rem] items-start max-xl:sm:px-2 max-xl:px-2 pt-1 md:px-6 ">
        <p className="text-4xl text-cyan-500 font-palanquin"> Hello there...</p>
        <h1 className="mt-10 text-6xl max-sm:text-[62px] max-sm:leading-[72px] font-bold font-montserrat text-slate-400">
          <span className="  relative pr-10  ">My Name Is</span> <br />
          <span className="text-cyan-600 inline-block mt-3">
            Brian Manguriu
          </span>
        </h1>

        <p className="text-lg text-slate-400 sm:text-3xl text-black-800 font-palanquin mt-5">
          {text}
          <Cursor cursorColor="black" />
        </p>
        <div className="text-center text-slate-500 py-1 mt-10 font-semibold">
          <a
            href="https://drive.google.com/file/d/11TuqYkJHmzkwOhPIvYI97LwRtD8dwnnM/view?usp=drive_link"
            media="print and (resolution:300dpi)"
            target="_blank"
            role="none"
          >
            <button className="button" type="button">
              <span className="button__text">Resume</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className=" relative  flex flex-col mt-[6rem] max-xl:mt-[2rem] items-center flex-1 xl:min-h-screen max-xl:py-20">
        <img
          width={300}
          height={300}
          className="relative mx-auto object-cover p-1 hover:scale-105 transform transition duration-300 ease-in-out"
          src={`${bigImage}`}
        />

        <h2 className="text-sm font-palanquin text-slate-400 uppercase font-extrabold mt-4 pb-2 tracking-[5px] justify-center items-center">
          // Software developer //
        </h2>
        <div className="grid grid-cols-4 sm:gap-4 absolute mt-[25rem] sm:left-[10%] max-sm:px-6 ">
          {skills.map((skill, index) => (
            <div key={index}>
              <HeroPic
                imgURL={skill}
                changeImage={(skill: React.SetStateAction<StaticImageData>) =>
                  setBigImage(`${skill}`)
                }
                bigImage={bigImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
