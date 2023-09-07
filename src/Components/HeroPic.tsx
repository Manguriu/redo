/* eslint-disable @next/next/no-img-element */

import React from "react";

function HeroPic({
  imgURL,
  changeImage,
  bigImage,
}: {
  imgURL: any;
  changeImage: any;
  bigImage: any;
}) {
  const handleClick = () => {
    if (bigImage !== imgURL.skillsPic) {
      changeImage(imgURL.skillsPic);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl max-xl:mb-6 relative ${
        bigImage === imgURL.skillsPic ? "border-cyan-600" : "border-transparent"
      } cursor-pointer max-sm:flex-1  hover:scale-105 transform transition duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.skillsPic}
          alt=""
          width={120}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default HeroPic;
