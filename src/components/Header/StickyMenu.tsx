"use client";

import { useState, useEffect } from "react";

export default function StickyMenu() {
  const [header, setHeader] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <nav
      className={` top-0 left-0 w-full bg-[transparent]  shadow-md p-4 transition-transform duration-300
         ${
        header ? "fixed w-[100%] bg-amber-500 " : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center text-black">
        <h1 className="text-xl font-bold">logp</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
