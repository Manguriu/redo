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
import shoes from "../../../public/shoes.png";
import movieclone from "../../../public/movieclone.png";
import Gallery from "../../../public/Gallery.png";
import triostore from "../../../public/triostore.png";
import vacturo from "../../../public/vactuo.png";
import smartP from "../../../public/smartP.png";

const ProjectsFeatures = ({ type, title, summary, link, img, github }) => {
  return (
    <article className="max-lg:p-6 p-6 max-lg:w-full max-lg:flex-col flex items-center justify-between rounded-3xl max-lg:rounded-2xl shadow-2xl morph">
      <Link
        href={link}
        target="_black"
        className="lg:w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          width={700}
          height={700}
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transform transition duration-300 ease-in-out "
        />
      </Link>
      <div className="lg:w-1/2 flex flex-col items-start justify-center pl-6">
        <span className="font-medium  text-xl text-cyan-500">{type}</span>
        <Link
          href={link}
          target=""
          className="hover:underline underline-offset-2 hover:scale-105 transform transition duration-300 ease-in-out"
        >
          <h2 className="my-2 w-full text-left lg:text-4xl font-bold text-slate-400">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-slate-400 max-sm:text-[12px]">
          {summary}
        </p>
        <div className="mt-2 flex items-center lg:gap-5 max-sm:gap-10 max-sm:mb-8 max-lg:mb-7">
          <Link
            href={github}
            target=""
            className="lg:w-10 hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <SocialIcon
              url="https://github.com"
              className="bg-white rounded-full max-sm:w-5"
            />
          </Link>
          <Link
            href={link}
            target=""
            className="ml-4 rounded-lg bg-cyan-500 text-white p-2 px-6  text-lg font-semibold max-sm:text-[10px] hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Go to Project
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
      <section className="w-full mt-9 mb-16 flex flex-col items-center justify-center ">
        <div className="  justify-center max-lg:w-full lg:w-1/5 grid grid-cols-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-x-8  max-sm:gap-x-0 md:gap-y-24">
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="SmartPoultry Hub"
              type="Featured project"
              img={smartP}
              summary="The idea is to create a modern Poultry farm management system"
              link="https://farm101-analytics-p.vercel.app/"
              github="https://github.com/Manguriu/Farm101Analytics-P"
            />
          </div>
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="King Vac Car and house Rentals"
              type="Featured project"
              img={vacturo}
              summary="The idea is to create a modern car and rental website the website is still in progress"
              link="https://vaca-turo.vercel.app/"
              github="https://github.com/Manguriu/Vaca-Turo"
            />
          </div>
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="Trio Store Website/from trio team"
              type="Featured project"
              img={triostore}
              summary="The idea is to create a modern-ecommerce website, Uder development,"
              link="https://triotech-store-web.vercel.app/"
              github=""
            />
          </div>
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="Shoe store web"
              type="Featured project"
              img={shoes}
              summary="Front-end page for a shoe-ecommerce store that bring out every aspect os an ecommerce webiste still under development"
              link="https://store1-vert.vercel.app/"
              github="https://github.com/Manguriu/store1"
            />
          </div>
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="movie-clone web"
              type="Featured project"
              img={movieclone}
              summary="Front-end page for a Movie streaming website, not fully functional but under development"
              link="https://peaceful-sopapillas-a4cdca.netlify.app/"
              github="https://github.com/Manguriu/HNGxy-movie-discovery-webApp"
            />
          </div>
          <div className="col-span-12 ">
            <ProjectsFeatures
              title="image gallery website"
              type="Featured project"
              img={Gallery}
              summary="Front-end page for a image gallery"
              link="https://gallery-2-nu.vercel.app/"
              github="https://github.com/Manguriu/Gallery-2"
            />
          </div>
          <div className="col-span-12 ">
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
