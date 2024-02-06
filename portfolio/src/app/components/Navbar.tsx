"use client";
import React, { useState } from "react";
import { Roboto_Mono } from "next/font/google";
import Link from 'next/link'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-300 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-3xl tracking-tight">
            <Link href="/" className={roboto_mono.className}>
            Shuei's portfolio
            </Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={open}
          className="flex items-center px-3 py-2 text-sky-200 hover:text-white"
        >
          <svg
            className={`h-8 w-8 text-sky-50 ${isOpen ? "hidden" : "block" }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
          <svg className={`h-8 w-8 text-sky-50 ${isOpen ? "block" : "hidden" }`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex ${isOpen ? "block" : "hidden"} lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="#AboutMe"
            className="block mt-4 text-xl lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
          >
            About Me
          </Link>
          <a
            href="#responsive-header"
            className="block mt-4 text-xl lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
}
