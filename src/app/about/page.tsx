"use client";
import React from "react";
import { motion } from "framer-motion";
import SitionElem from "@/Components/SitionElem";
import Experience from "../experience/page";
export default function About() {
  return (
    <>
      <SitionElem />

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8 ">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-[#575200] pb-4">
              About Me...
            </h1>
            <div className="shadow-xl p-6 ">
              <p className="font-normal text-base leading-6 subtitle-p text-black ">
                As an experienced software developer, I have a strong background
                in coding, testing, and maintaining software systems. Throughout
                my career, I have developed a versatile skill set that allows me
                to excel in multiple programming languages. Specifically, I
                specialize in React, Next.js, Laravel, and JavaScript, which I
                have mastered to create efficient and scalable applications.
                With my expertise in React and Next.js, I can effortlessly build
                dynamic and interactive user interfaces. These frameworks
                provide a solid foundation for delivering exceptional user
                experiences while ensuring optimal performance. Additionally, my
                proficiency in Laravel, a powerful PHP framework, enables me to
                develop robust and secure back-end systems.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 p-[12rem]">
            <motion.img
              initial={{
                x: -200,
                opacity: -1,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className="w-full h-full rounded-lg"
              src="https://media.licdn.com/dms/image/C5603AQGXddOb1vIPOQ/profile-displayphoto-shrink_200_200/0/1648492890472?e=1697673600&v=beta&t=0Umyuq8xlpdOPlEUanjQwBo8urPF8izPjXjqoq77TFY"
              alt="my pic"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-[#575200] pb-4">
              My Story
            </h1>
            <div className="shadow-xl p-5">
              <p className="font-normal text-base leading-6 subtitle-p ">
                I'm on a journey of always learning and coming up with new
                ideas. Each project I work on is like a blank canvas where I
                create new and clever solutions. As technology gets better, I
                keep up with it, making sure I'm at the forefront of creating
                really great software experiences. Looking back at my experience
                as a software developer, it's a story of working hard, being
                able to change when needed, and never giving up on making things
                really, really good.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8 p-5 pt-2">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-xl rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAclBMVEUAAAD////JycklJSVDQ0Pi4uK4uLhaWlocHByCgoJ+fn5AQEDx8fG8vLy0tLQzMzNOTk75+fmJiYk5OTmPj48ODg6amprOzs5nZ2fd3d12dnZsbGzr6+uqqqqhoaHU1NRTU1MXFxcsLCxhYWEjIyMTExM+Z152AAADFElEQVR4nO3ba3OiMBiG4byIigdUxANSz63//y8u1lMSYLfO6lDIfX1ohdCdzDOSvAmsUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAqgXzqntQH8G46h7USLfqDtRIyk34Yx+TqntQH/606h7UyKjqDtRIeKy6B/Wx6FXdg/pIvKp7UB/Buuoe1MiacvTHQvdmwqCzyZ88dkzhh9ra0fSGKgmv7aPR7cJmj/gtkW3upC87T7dM1cS6LBZfJctr+zC6XdjsGrUlngzsk77kFzEzMYao4UI78Nqv79hv1JI0zM1qvhSM3btIOwhXepM7YU1VZA9bhWGdokdZ1ZeW3uRSWF37risMK7vsNiK1pG+0uBSWGg3Nk8VhqY3Elw/rpdngTljn2X5o3oglYan2ZXQbibXh505Y5zvKmv7KwhrLudpKJLHOuxWWWhg3YllY2cD+oQLJle6OhaXaegK+7Esu90St8utn18I6yv5x0pdtv6fRmoZRQcHqWlhqqtWcvgx1kVatz2SX/0ecC0vtOveTRcudi7GsJL9Ydi+sQD5vJ0sH+HPxEObXku6FpdL7jVga1kbG2bCVG+EdDEt54fVDWVjJ94JnkqsdXAxLRddqsySsQC5L6VlWbRnyYTXzEZkR1qdcfpeEtbpVrksJjAYzrMUgDhfh1+v6+GuYGwidy1enOKztfY6cR2b9YIUVT1MVN/FFJGu3ZZiefxaGtZdHufVpbjLb36zDqJmb8VZYk+8bsTAsoxrdyF470sOaq4V/yhJLX9fHX8Pex9ueb8SisDw56IcrfeV9D2u+VWHinXqbSWf/2n7+CnZYap2ew0rjge6YzYCJ9Xfas/vHN6urWv2sZu32/Lf2uiIte/UyllMWliX0xd6nT2V2/+xKnaW+7NccZ0s1/wpMpyBfCQSPZxaHQ67VFV4jZ7J3aQf/vgZXA967esK02a8svNgorroHdeLeu1f/YcCM+IS0kSX4u/DVesLBfkaPv2jk9t3bxPznuCc0cRsdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeIc/sjcZ6amqhIUAAAAASUVORK5CYII="
                  alt="Alexa featured Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Next.js
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="data:image/png;base64,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"
                  alt="Olivia featured Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  React.js
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="data:image/jpeg;base64,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"
                  alt="Liam featued Img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Laravel
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="data:image/png;base64,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"
                  alt="Elijah featured img"
                />

                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Javascript
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20%]">
          <Experience />
        </div>
      </div>
    </>
  );
}
