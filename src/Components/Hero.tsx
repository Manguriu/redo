"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Manguriu Is The Name", "hello"],
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center   justify-center text-center">
      <div className="hero-container  rounded-lg p-4 ">
        <div className="flex-1 padding-x">
          <p className="text-4xl mb-5 text-[#008970] "> Hello there,</p>
          <img
            className="relative rounded-full mx-auto object-cover"
            src="pic.png"
            alt=""
          />
          <h1 className=" text-sm text-[#575200] sm:text-4xl 2xl:text-5xl ">
            <br />
            My Name is{" "}
            <span className="font-extrabold  text-[#008970]">
              Brian Manguriu
            </span>
          </h1>
          <h2 className="text-sm text-[#575200] uppercase font-extrabold mt-4 pb-2 tracking-[15px]">
            Software developer
          </h2>

          <p className="text-lg text-[#575200] sm:text-xl text-black-800 font-light mt-5">
            {text}
            <Cursor cursorColor="red" />
          </p>
        </div>

        <div className="text-center text-white py-1 mt-10 font-semibold">
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
    </div>
  );
}
