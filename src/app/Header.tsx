"use client";
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/Components/Logo";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`  h-[1px] inline-block  w-0 bg-red-500 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        `}
      >
        &nbsp;&nbsp;
      </span>
    </Link>
  );
};

export default function Header() {
  const handleScroll = () => {
    const nav = document.querySelector("#navbar");

    if (nav) {
      if (window.scrollY <= 50) {
        console.log("Adding default style");
        nav.classList.remove("scrolled-style");
        nav.classList.add("default-style");
      } else {
        console.log("Adding scrolled style");
        nav.classList.remove("default-style");
        nav.classList.add("scrolled-style");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="">
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
      >
        <Logo />
      </motion.div>

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projec" title="Projects" className="ml-4" />
        <CustomLink href="/contacts" title="Contacts" className="mx-4" />
      </nav>

      <nav className="flex justify-center gap-2 items-center">
        <SocialIcon url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/" />

        <SocialIcon url="https://github.com/Manguriu" />

        <SocialIcon url="https://gitlab.com/Manguriu" />

        <SocialIcon url="https://www.reddit.com/user/mainnet_23" />

        <SocialIcon url="https://twitter.com/Mainnet14" />
      </nav>
    </nav>
  );
}
