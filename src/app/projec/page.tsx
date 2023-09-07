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
      <article className="p-6 w-full flex items-center justify-between rounded-3xl  shadow-2xl morph">
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
          <span className="font-medium  text-xl text-cyan-500">{type}</span>
          <Link
            href={link}
            target=""
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold text-slate-400">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-slate-400">{summary}</p>
          <div className="mt-2 flex items-center gap-5">
            <Link href={github} target="" className="w-10">
              <SocialIcon
                url="https://github.com"
                className="bg-white rounded-full"
              />
            </Link>
            <Link
              href={link}
              target=""
              className="ml-4 rounded-lg bg-cyan-500 text-white p-2 px-6 text-lg font-semibold"
            >
              Go to Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <SitionElem />
      <section className="w-full mt-9 mb-16 flex flex-col items-center justify-center ">
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
          <div className="col-span-12">
            <ProjectsFeatures
              title="Test Data"
              type="Featured project"
              img={simple}
              summary="dynamic user
              interactions."
              link="https://next-js-first-xi.vercel.app/"
              github="https://github.com/Manguriu/NextJs-first-"
            />
          </div>
          <div className="col-span-12">
            <ProjectsFeatures
              title="Simple Billing App"
              type="Featured project"
              img={billing}
              summary=" gateway integration, dynamic user
              interactions."
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
      </section>
    </>
  );
}
