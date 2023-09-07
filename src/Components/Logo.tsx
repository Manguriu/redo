import React from "react";
import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="bg-[#008970] text-white flex items-center justify-center rounded-full text-2xl font-mono max-lg:hidden "
      >
        <Image
          width={100}
          height={100}
          className="relative rl mx-auto object-cover"
          src="/logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
