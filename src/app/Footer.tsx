"use client";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bottom-0 mb-10  flex items-center justify-center  max-w-2xl mx-auto z-20 xl:items-center max-lg:mt-[15rem] md:mt-[10rem] mt-[10rem]">
      <p className="subtitle-p text-base font-semibold underline underline-offset-2 max-sm:text-[12px]">
        {" "}
        Manguriu All Rights Reserved &copy; 2023
      </p>
    </div>
  );
}
