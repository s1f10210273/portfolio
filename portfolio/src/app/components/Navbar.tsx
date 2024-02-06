"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-300 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Oshikubo Shuei
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={open}
          className="flex items-center px-3 py-2 border rounded text-sky-200 border-sky-400 hover:text-white hover:border-white"
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
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
          >
            About Me
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-sky-50 hover:text-white mr-4"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
}
