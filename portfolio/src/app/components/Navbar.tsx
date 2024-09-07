"use client";
import React, { useState } from "react";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity ${
          isOpen ? "opacity-50 z-10" : "opacity-0 pointer-events-none"
        }`}
        onClick={open}
      />

      <nav className="relative flex items-center justify-between flex-wrap bg-sky-300 p-6 z-20">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl tracking-tight">
            <Link href="/" className={roboto_mono.className}>
              Shuei&apos;s portfolio
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={open}
            className="flex items-center px-3 py-2 text-sky-200 hover:text-white"
          >
            <div
              className={`transition-transform duration-500 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              {isOpen ? (
                <FiX className="h-8 w-8 text-sky-50" />
              ) : (
                <FiMenu className="h-8 w-8 text-sky-50" />
              )}
            </div>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex ${
            isOpen ? "block" : "hidden"
          } lg:items-center lg:w-auto transition-all duration-300 ease-in-out`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              onClick={open}
              href="/#AboutMe"
              className="block mt-4 text-xl lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
            >
              About Me
            </Link>
            <a
              onClick={open}
              href="/#Portfolio"
              className="block mt-4 text-xl lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
            >
              Portfolio
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
