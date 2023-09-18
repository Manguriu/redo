"use client";
import React from "react";
import Script from "next/script";
import { Hero } from "@/Components/export";
import { SitionElem } from "@/Components/export";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className=" relative">
      <section className="sm:pb-2 pb-2 max-lg:mb-[10rem]">
        <SitionElem />
        <Hero />
      </section>
      <section className="bg-slate-400 max-sm:mt-[5rem] xl:mt-[2rem] ">
        <Footer />
      </section>

      <Script id="tawk-to-script">{`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/64a1835f94cf5d49dc610f69/1h4beibho';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })()`}</Script>
    </main>
  );
}
