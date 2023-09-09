import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] md:text-[60px] sm:text-[50px] xs:text-40px] text-[40px] lg:leading-[98px] mt-2">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm <span className="text-[#915eff]">Pedro Vitor</span>
          </h1>
          <p className="font-medium lg:text-[30px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            I am a front-end developer and I love creating beautiful
            <br className="sm:block hidden" /> and fast web applications. I love
            the mobile as well,
            <br className="sm:block hidden" /> specially React Native and the
            Apple Environment.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
