"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { hoverInfinitySpringVariants } from "@/app/lib/animations";
import { FaArrowDown } from "react-icons/fa";
import { yearsOfExperience } from "@/app/lib/utils";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex justify-center items-center img-effect"
    >
      <Image
        src="/background.webp"
        alt="Background Image"
        fill={true}
        priority
        quality={100}
        className="mix-blend-overlay object-cover w-full h-auto"
      />
      <div className="absolute w-full text-center">
        <article className="w-full gap-6 mb-4">
          <h1 className="text-gold opacity-80 text-6xl mb-4 font-mono font-black">
            Randy Caballero{" "}
            <span className="text-donkeybrown text-4xl">
              Software Engineer 🇨🇺🇺🇸
            </span>
          </h1>
          <p className="w-6/12 text-gray-300 opacity-70 font-semibold text-xl mx-auto font-sans">
            +{yearsOfExperience(2022)} years of experience. Specialized in the
            development of unique web applications.
          </p>
        </article>

        <Link
          href="#experience"
          className="absolute flex justify-center items-center w-full top-80 "
        >
          <motion.div
            className="p-2 rounded-lg flex justify-center items-center gap-2 text-3xl text-donkeybrown font-mono font-semibold hover:text-gold  transition-colors"
            variants={hoverInfinitySpringVariants}
            whileHover="hover"
          >
            <span>Experience</span>
            <FaArrowDown />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
