/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SitionElem from "@/Components/SitionElem";
import { motion } from "framer-motion";

type Props = {};

const contactData = [
  {
    imgUrl: "/skills/code2.png",
    headG: "Phone",
    paraG: "Get In touch on Whatsapp or call",
    Sbutton: [
      {
        btText: "WhatsApp",
        link: "/",
      },
      {
        btText: "WhatsApp",
        link: "/",
      },
    ],
  },
  {
    imgUrl: "/skills/code2.png",
    headG: "Gmail",
    paraG: "Something something good about something",
    btText: "Phone",
    btText1: "Phone",
    Sbutton: [
      {
        btText: "WhatsApp",
        link: "/",
      },
      {
        btText: "WhatsApp",
        link: "/",
      },
    ],
  },
];

export default function Contacts({}: Props) {
  return (
    <>
      <SitionElem />
      <div className="w-full flex flex-col space-y-8 items-center justify-center text-center max-container">
        <div className="flex gap-10 max-md:flex-wrap ">
          <div className="w-2/5 py-4 px-4 items-center justify-center">
            <motion.img
              initial={{
                x: -200,
                opacity: -1,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              className=" h-full"
              src="/skills/code1.png"
              alt="my pic"
            />
          </div>
          <div className="bg-whwite -full rounded-lg  gap-2">
            <h2 className="text-4xl text-slate-400">Contacts and Socials</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              {contactData.map((data, index) => (
                <div
                  className="bg-slate-600 max-w-xl gap-3 flex border-2"
                  key={index}
                >
                  <div className="rounded-r-full bg-slate-50 p-2 w-1/4">
                    <img
                      src={data.imgUrl}
                      alt=""
                      width={100}
                      height={100}
                      className="p-2 "
                    />
                  </div>
                  <div className="mt-2 p-1">
                    <h4 className="justify-start font-palanquin">
                      {data.headG}
                    </h4>
                    <p className="font-montserrat text-xs">{data.paraG}</p>
                    {data.Sbutton.map((btext, index) => (
                      <ul key={index}>
                        <li className="bg-cyan-400 px-4 py-1 border mt-2 rounded-xl mb-2 mr-2">
                          <a href={btext.link}>{btext.btText}</a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
