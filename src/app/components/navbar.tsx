"use client";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import "./navbar.scss";
import { AnimatePresence, motion } from "framer-motion";
import NavButton from "@/app/components/navbutton";
import { useState } from "react";

interface Nav {
  isOpen: boolean;
}

function useNavStore() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeNav = () => {
    setIsOpen((isOpen) => false);
  };

  return { isOpen, toggleNav, closeNav };
}

export default function Navbar() {
  const navStore = useNavStore();
  return (
    <>
      <nav className="bg-bgDark flex justify-between items-center px-8 py-[3px] text-white h-[75px] ">
        <div className="flex h-full gap-8">
          <div className="logo_container py-4">
            {/* <Image src="/next.svg" alt="logo" width={90} height={10} /> */}
            <p className="text-xl">GDSC Logo</p>
          </div>
          <div className="hidden h-full md:flex">
            <NavButton text="Insights" />
            <NavButton text="Services" />
            <NavButton text="Industries" />
            <NavButton text="Careers" />
            <NavButton text="About us" />
            <NavButton text="Contact us" />
          </div>
        </div>
        <div className="flex gap-4 h-full">
          <NavButton className="px-0" text="Search" icon={<IoSearch />} />
          <div className="nav-container flex md:hidden">
            <input
              className="checkbox"
              type="checkbox"
              name=""
              id=""
              onChange={navStore.toggleNav}
            />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {navStore.isOpen ? (
          <motion.div
            initial={{ opacity: 0.5, x: 800 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: 800 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="w-screen h-screen mt-[75px] pt-7 fixed top-0 left-0 bg-bgDark text-white md:hidden"
          >
            <div className="flex h-full w-full flex-col justify-between">
              <button>A</button>
              <button>B</button>
              <button>C</button>
              <button>D</button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
