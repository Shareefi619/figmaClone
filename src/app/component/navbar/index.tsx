"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-[100%] lg:w-full lg:py-4 lg:px-8 md:w-full md:py-4 md:px-8 sm:w-full sm:py-4 sm:px-8 ">
      <button
        aria-label="home-page"
        className="lg:flex-col lg:justify-center lg:items-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 !translate-y-2.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="absolute lg:hidden left-1/2 top-2 -translate-x-1/2">
        <Image src="/logo.svg" alt="logo" width={150} height={50} />
      </div>
      <div className="hidden lg:block">
        <nav className="lg:w-full lg:h-14 lg:flex lg:justify-between lg:items-center">
          <div>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </div>
          <div className="flex gap-6">
            <div className="flex gap-6 pt-2">
              <Link href="/" title="Home">
                Home
              </Link>
              <Link href="/Features" title="Features">
                Features
              </Link>
              <Link href="/Community" title="Community">
                Community
              </Link>
              <Link href="/Blog" title="Blog">
                Blog
              </Link>
              <Link href="/Pricing" title="Pricing">
                Pricing
              </Link>
            </div>
            <Link
              href="/Register"
              title="Register"
              className=" bg-green-500 text-white flex px-4 py-2 rounded-lg"
            >
              Register Now
              <Image
                src="/arrowright.svg"
                alt="icon"
                width={25}
                height={25}
                className=" text-white"
              />
            </Link>
          </div>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] lg:hidden flex-col justify-between
           z-30 items-center text-white fixed sm:top-1/2 sm:left-1/2 md:top-1/2 md:left-1/2 lg:top-1/4
          lg:left-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/75 rounded-lg backdrop-blur-md
          py-24 px-12"
        >
          <nav className="flex flex-col items-center justify-center font-inter xl:font-semibold xl:text-4xl lg:font-semibold lg:text-2xl lg:leading-10 md:font-semibold md:text-xl md:leading-10 sm:font-semibold sm:text-lg sm:leading-10 xs:font-semibold xs:text-sm xs:leading-10 xxs:font-semibold xxs:text-xs xxs:leading-10">
            <Link href="/" title="Home">
              Home
            </Link>
            <Link href="/Features" title="Features">
              Features
            </Link>
            <Link href="/Community" title="Community">
              Community
            </Link>
            <Link href="/Blog" title="Blog">
              Blog
            </Link>
            <Link href="/Pricing" title="Pricing">
              Pricing
            </Link>

            <Link
              href="/Register"
              title="Register"
              className=" bg-green-700 text-white w-[120%] flex py-4 px-4 rounded-lg lg:flex lg:px-6 lg:py-2 lg:rounded-lg  md:flex md:px-6 md:py-2 md:rounded-lg sm:flex sm:px-6 sm:py-2 sm:rounded-lg "
            >
              Register Now
              <Image
                src="/arrowright.svg"
                alt="icon"
                width={25}
                height={25}
                className=" text-white ml-3"
              />
            </Link>
          </nav>
        </motion.div>
      ) : null}
      {/* {isOpen ? (
        // <div className="flex left-1/2 top-2 -translate-x-1/2 bg-red-500">
        //   <Image src="/logo.svg" alt="logo" width={150} height={50} />
        // </div>
      ) : null} */}
    </header>
  );
};

export default NavBar;
