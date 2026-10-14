import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import Language from "../Launguage";

function AboutNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);



  const mobNavitems = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "ONSITE SUPPORT SERVICES(OSS)", to: "/oss" },
    { title: "TRADING", to: "/trading" },
    { title: "LANGUAGE INTERPRETATION", to: "/language" },
    { title: "CONTACT", to: "/contact" },
    { title: "CAREERS", to: "/careers" },
    { title: "DASHBOARD", to: "/dashboard" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 font-bold text-white ${
        isScrolled
          ? "fixed backdrop-blur-md bg-black/75 shadow-xl py-2.5 px-6 lg:px-10"
          : "fixed md:relative backdrop-blur-sm md:bg-black/40 shadow-md py-4 px-6 lg:px-10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Row: Logo & Title Centered */}
        <div className="w-full flex items-center justify-between lg:justify-center relative">
          <div className="flex items-center gap-6 md:gap-7 mx-auto">
            <Link
              to="/"
              className="flex items-center group"
            >
              <img
                src="/logo1.png"
                alt="Sansirong Logo"
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
              />
            </Link>
            <div className="flex flex-col justify-center text-center sm:text-left">
              <span className="text-white tracking-[4px] sm:tracking-[6px] text-4xl sm:text-5xl lg:text-[62px] font-black leading-none drop-shadow-md">
                SANSIRONG
              </span>
              <span className="text-neutral-200 text-[12px] sm:text-[14px] lg:text-[17px] font-extrabold tracking-[3px] sm:tracking-[5px] uppercase mt-2 sm:mt-2.5 leading-none">
                INTERNATIONAL PRIVATE LIMITED
              </span>
            </div>
          </div>

          {/* Mobile Hamburger Icon (Absolute right on mobile) */}
          <div className="flex items-center gap-3 lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleMenu}
              className="text-2xl text-white cursor-pointer p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Bottom Row: Menus Centered and brought slightly down */}
        <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-2.5 text-[13px] font-bold tracking-wider mt-3.5 pt-2 border-t border-white/10 w-full">
          <Link
            to="/"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap ${
              location.pathname === "/"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap ${
              location.pathname === "/about"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            ABOUT
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div
              className={`px-4 py-2 rounded-full transition-all duration-200 uppercase flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                ["/oss", "/trading", "/language"].includes(location.pathname)
                  ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>SERVICES</span>
              {isServicesOpen ? (
                <FaChevronUp className="text-[11px] transition-transform duration-200" />
              ) : (
                <FaChevronDown className="text-[11px] transition-transform duration-200" />
              )}
            </div>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 p-2.5 space-y-1 backdrop-blur-xl bg-black/90 border border-white/15 rounded-2xl shadow-2xl flex flex-col z-50 text-left"
                >
                  <Link
                    to="/oss"
                    onClick={closeMenu}
                    className="text-[12px] font-bold py-2 px-3 rounded-xl text-neutral-200 hover:text-white hover:bg-red-600/80 transition-colors uppercase"
                  >
                    ONSITE SUPPORT SERVICES (OSS)
                  </Link>
                  <Link
                    to="/trading"
                    onClick={closeMenu}
                    className="text-[12px] font-bold py-2 px-3 rounded-xl text-neutral-200 hover:text-white hover:bg-red-600/80 transition-colors uppercase"
                  >
                    TRADING
                  </Link>
                  <Link
                    to="/language"
                    onClick={closeMenu}
                    className="text-[12px] font-bold py-2 px-3 rounded-xl text-neutral-200 hover:text-white hover:bg-red-600/80 transition-colors uppercase"
                  >
                    LANGUAGE INTERPRETATION
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap ${
              location.pathname === "/contact"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            CONTACT
          </Link>

          <Link
            to="/careers"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap ${
              location.pathname === "/careers"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            CAREERS
          </Link>

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className={`px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap ${
              location.pathname === "/dashboard"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30 font-extrabold"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}
          >
            DASHBOARD
          </Link>

          {/* External Attendance & Report action button - Matches other menu pills */}
          <a
            href="https://checkinplus.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="px-4 py-2 rounded-full transition-all duration-200 uppercase whitespace-nowrap text-white/90 hover:text-white hover:bg-white/10 active:bg-red-600 active:text-white"
          >
            ATTENDANCE & REPORT
          </a>

          {/* Language selector in the last position after menus */}
          <div className="pl-1">
            <Language />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center gap-6 text-lg transform transition-transform duration-300 lg:hidden z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button 
          onClick={toggleMenu} 
          className="absolute top-6 right-6 text-white text-2xl p-2 cursor-pointer"
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>
        <div className="mb-2">
          <Language />
        </div>
        {mobNavitems.map((page) => (
          <div key={page.title} className="flex flex-col items-center">
            <Link
              to={page.to}
              className="text-white text-[15px]"
              onClick={closeMenu}
            >
              {page.title}
            </Link>
            {location.pathname === page.to && (
              <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
            )}
          </div>
        ))}
        <a
          href="https://checkinplus.cloud/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="text-[14px] px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md text-center"
        >
          Attendance & Report
        </a>
      </div>
    </nav>
  );
}

export default AboutNavbar;
