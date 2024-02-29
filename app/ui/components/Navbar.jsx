"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  hoverInfinitySpringVariants,
  linkVariants,
} from "@/app/lib/animations";
import clsx from "clsx";

//Nav links for the home page
import { nav_links } from "@/app/lib/data";
import { social_links } from "@/app/lib/data";
import { contact_links } from "@/app/lib/data";

//Components
import Logo from "./Logo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <nav
      id="header-navbar"
      className="flex fixed w-full justify-center items-center px-6 z-10 header-nav"
    >
      <div className="lg:w-3/12">
        <Logo />
      </div>
      <ul className="w-full flex justify-center items-center gap-8 text-2xl lg:w-4/12">
        {nav_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover="hover">
            <Link
              href={link.hash}
              className={clsx(
                "text-donkeybrown font-mono font-semibold hover:text-gold hover:font-bold transition-all cursor-pointer",
                {
                  "text-gold": activeSection === link.label,
                }
              )}
              onClick={() => {
                setActiveSection(link.label);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>

      <ul className="flex justify-center items-center gap-6 text-2xl px-8 w-2/12">
        {social_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover="hover">
            <Link
              href={link.url}
              target="_blank"
              className="text-donkeybrown hover:text-gold transition-colors"
            >
              {link.icon}
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="flex justify-center items-center gap-6 text-2xl px-8 w-3/12">
        <p className="text-donkeybrown opacity-90 font-mono border-b-2 border-b-donkeybrown font-bold">
          Contact Me
        </p>
        {contact_links.map((link) => (
          <motion.li key={link.id} variants={linkVariants} whileHover="hover">
            <Link
              href={link.url}
              className="text-donkeybrown hover:text-gold transition-colors"
            >
              {link.icon}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
