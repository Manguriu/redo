"use client";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className=" bottom-0 mt-10 mb-10  flex items-center justify-center max-w-7xl mx-auto z-20 xl:items-center">
      <p className="subtitle-p text-base font-semibold underline underline-offset-2">
        {" "}
        Manguriu All Rights Reserved &copy; 2023
      </p>
    </div>
  );
}
