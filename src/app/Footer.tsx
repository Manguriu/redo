"use client";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section className="bg-slate-400 mt-[4rem] max-md:mt-[5rem] max-xl:mt-[2rem]">
      <div className="bottom-0 mb-10  flex items-center justify-center  mx-auto z-20 xl:items-center max-lg:mt-[5rem] md:mt-[16rem] ">
        <p className="subtitle-p text-base font-semibold underline underline-offset-2 max-sm:text-[12px]">
          {" "}
          Manguriu All Rights Reserved &copy; 2023
        </p>
      </div>
    </section>
  );
}
