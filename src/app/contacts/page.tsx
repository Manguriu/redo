/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SitionElem from "@/Components/SitionElem";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <>
      <SitionElem />
      <div className="w-full flex flex-col space-y-8 items-center justify-center text-center max-container">
        <div className="flex max-lg:flex-col cont-container mt-20 font-Anton">
          <div className="flip-card ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-gmail-8913532-7250524.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  Gmail
                </h2>
                <p className="subtitle p-8">
                  Get in touch ::
                  <br />
                  Email: brianmiruri983@gmail
                  <br />
                  .com
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_communication___phone_call_apple_icon_conversation_contacts.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back ">
                <h2 className="title flex itmes-center justify-center">
                  Phone
                </h2>
                <p className="subtitle p-4">
                  Call
                  <br />
                  No. +254743807662
                </p>
              </div>
            </div>
          </div>
          {/* card 3 */}

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  Github
                </h2>
                <p className="subtitle p-4">
                  Follow Link ::
                  <br />
                  Link:{" "}
                  <a href="https://github.com/Manguriu">
                    {" "}
                    <u>Github Account</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/428/307/original/3d-social-media-icons-linkedin-free-png.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="flip-card-back">
                <h2 className="title flex itmes-center justify-center">
                  LinkedIn
                </h2>
                <p className="subtitle p-4">
                  LinkedIn Profile ::
                  <br />
                  Link:{" "}
                  <a href="https://www.linkedin.com/in/brian-manguriu-3b0b07207/">
                    <u>"My Profile"</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
