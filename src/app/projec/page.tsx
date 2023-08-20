"use client";
import React from "react";
import SitionElem from "@/Components/SitionElem";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import react from "../../../public/react.png";
import lara from "../../../public/lara.png";
import billing from "../../../public/billing.png";
import simple from "../../../public/simple.png";

const ProjectsFeatures = ({ type, title, summary, link, img, github }) => {
  return (
    <div>
      <article className="p-6 w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl">
        <Link
          href={link}
          target="_black"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <Image
            width={700}
            height={700}
            src={img}
            alt={title}
            className="w-full h-auto"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-center pl-6">
          <span className="font-medium  text-xl text-[#61082b]">{type}</span>
          <Link
            href={link}
            target=""
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium">{summary}</p>
          <div className="mt-2 flex items-center gap-5">
            <Link href={github} target="" className="w-10">
              <SocialIcon url="https://github.com" />
            </Link>
            <Link
              href={link}
              target=""
              className="ml-4 rounded-lg bg-[#164b60] text-white p-2 px-6 text-lg font-semibold"
            >
              Go to Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const OProjects = ({ type, title, link, img, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-green bg-white p-6 relative ">
      <Link
        href={link}
        target="_black"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          width={700}
          height={700}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-center mt-4">
        <span className="font-medium  text-xl text-[#61082b]">{type}</span>
        <Link
          href={link}
          target=""
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={github} target="" className="w-5">
            <SocialIcon url="https://github.com" />
          </Link>
          <Link
            href={link}
            target=""
            className="ml-4 hover:text-[green] text-[#164b60] rounded-lg font-semibold underline"
          >
            Go to..
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <SitionElem />
      <main className="w-full mt-9 mb-16 flex flex-col items-center justify-center ">
        <div className=" items-center justify-center w-1/5 grid grid-cols-12 gap-24 ">
          <div className="col-span-12">
            <ProjectsFeatures
              title="React Emmorce App"
              type="Featured project"
              img={react}
              summary="Front-end e-commerce development encompasses responsive design,
              product catalog display, shopping cart functionality, checkout
              process facilitation, user authentication and account
              management, payment gateway integration, dynamic user
              interactions."
              link="https://github.com/Manguriu/ecom-react-app"
              github="https://github.com/Manguriu/ecom-react-app"
            />
          </div>
          <div className="col-span-6">
            <OProjects
              title=" Test Data"
              type="Project"
              img={simple}
              link="https://next-js-first-xi.vercel.app/"
              github="https://github.com/Manguriu/NextJs-first-"
            />
          </div>
          <div className="col-span-6">
            <OProjects
              title="Simple Billing App"
              type="Project"
              img={billing}
              link="https://billingsitealpha.netlify.app"
              github="https://github.com/Manguriu/Money-tracker"
            />
          </div>
          <div className="col-span-12">
            <ProjectsFeatures
              title=" Ecommerce App Backend"
              type="Featured project"
              img={lara}
              summary="Ecom-backend project is a backend implementation for an
              e-commerce application. It focuses on server-side
              functionalities, including user management for authentication
              and authorization."
              link="https://github.com/Manguriu/Ecom-backend"
              github="https://github.com/Manguriu/Ecom-backend"
            />
          </div>
        </div>
      </main>
    </>
  );
}
