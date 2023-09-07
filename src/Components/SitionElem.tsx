import React from "react";
import { motion } from "framer-motion";

const SitionElem = () => {
  return (
    <>
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-30 bg-slate-400"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-20 bg-white"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-10 bg-cyan-600"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
      />
    </>
  );
};

export default SitionElem;
