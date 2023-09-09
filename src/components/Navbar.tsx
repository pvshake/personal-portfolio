import { close, menu, profile_pic } from "@/assets";
import { navLinks } from "@/constants";
import { styles } from "../styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [sectionActive, setSectionActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setSectionActive("");
              setToggleMenu(false);
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src={profile_pic}
              alt="Profile Picture"
              className="w-9 h-9 object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Pedro Vitor &nbsp;<span className="sm:block hidden">| Dev</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  sectionActive === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setSectionActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={!toggleMenu ? menu : close}
              alt="Toggle Menu Icon"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <div
              className={`${
                !toggleMenu ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      sectionActive === link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setSectionActive(link.title);
                      setToggleMenu(false);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
