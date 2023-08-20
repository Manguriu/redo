"use client";
import React from "react";
import Script from "next/script";
import { Hero } from "@/Components/export";
import { SitionElem } from "@/Components/export";

export default function Home() {
  return (
    <div className=" z-0">
      <section id="hero" className="snap-start">
        <SitionElem />
        <Hero />
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
    </div>
  );
}
