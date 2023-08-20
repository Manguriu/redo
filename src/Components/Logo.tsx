import React from "react";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="w-16 h-16 bg-[#008970] text-white flex items-center justify-center rounded-full text-2xl font-mono "
      >
        B
      </Link>
    </div>
  );
};

export default Logo;
