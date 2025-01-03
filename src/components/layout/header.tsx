"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "About me", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle function

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Link href={"/"}>
          <h2 className="uppercase text-3xl font-extrabold">Blog.</h2>
        </Link>
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-20 left-0 w-full z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navigation.map((item) => (
              <li key={item?.title}>
                <Link
                  href={item?.href}
                  className="text-sm uppercase font-semibold text-gray-900 hover:text-blue-700 duration-200"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
