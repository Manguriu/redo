/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`  h-[1px] inline-block text-[15px]  w-0 bg-cyan-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        `}
      >
        &nbsp;&nbsp;
      </span>
    </Link>
  );
};

export default function Header() {
  return (
    <nav
      id="navbar"
      className="default-style rounded-xl mt-4 max-container text-lg mb-2 sm:mb-6 max-lg:justify-center  bg-slate-400"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="max-lg:hidden"
      >
        <img
          src="/logo.svg"
          alt=""
          width={120}
          height={120}
          className="hover:scale-105 transform transition duration-300 ease-in-out"
        />
      </motion.div>

      <nav>
        <CustomLink
          href="/"
          title="Home"
          className="mr-4 hover:text-cyan-600 "
        />
        <CustomLink
          href="/about"
          title="About"
          className="mx-4 hover:text-cyan-600"
        />
        <CustomLink
          href="/projec"
          title="Projects"
          className="ml-4 hover:text-cyan-600"
        />
        <CustomLink
          href="/contacts"
          title="Contacts"
          className="mx-4 hover:text-cyan-600"
        />
      </nav>
    </nav>
  );
}
