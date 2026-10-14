import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Language from "./Launguage";

function Navbar({ aboutScroll }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      if (aboutScroll > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    } else {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 5);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, aboutScroll]);

  return (
    <nav
      className={`fixed top-0 text-white font-[500] left-0 w-full flex justify-between items-center px-6 lg:px-10 py-3 z-[9999] transition-all duration-300 ${
        (location.pathname === "/about" && isScrolled) || isScrolled
          ? "backdrop-blur-md bg-black/60 shadow-lg"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center group"
        >
          <img
            src="/logo1.png"
            alt="Sansirong Logo"
            className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="leading-tight">
          <span className="text-white tracking-[2px] text-2xl lg:text-[28px] font-bold block">
            SANSIRONG
          </span>
          <span className="text-neutral-300 text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase block">
            INTERNATIONAL PRIVATE LIMITED
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-semibold tracking-wide">
        <Link
          to="/"
          onClick={closeMenu}
          className="relative py-1 transition-colors duration-300 hover:text-red-400"
        >
          HOME
          {location.pathname === "/" && (
            <div className="h-[2px] bg-[#fa160e] w-full rounded-full absolute bottom-0 left-0"></div>
          )}
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className="relative py-1 transition-colors duration-300 hover:text-red-400"
        >
          ABOUT
          {location.pathname === "/about" && (
            <div className="h-[2px] bg-[#fa160e] w-full rounded-full absolute bottom-0 left-0"></div>
          )}
        </Link>
        <div
          className="relative py-1 flex items-center gap-1.5 cursor-pointer transition-colors duration-300 hover:text-red-400"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <span>SERVICES</span>
          {isServicesOpen ? (
            <FaChevronUp className="text-xs transition-transform duration-300" />
          ) : (
            <FaChevronDown className="text-xs transition-transform duration-300" />
          )}

          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 top-full mt-2 w-72 p-3 space-y-1 backdrop-blur-xl bg-black/85 border border-white/10 rounded-xl shadow-2xl flex flex-col z-50"
              >
                <Link
                  to="/oss"
                  onClick={closeMenu}
                  className="text-[13px] font-medium py-2 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  ONSITE SUPPORT SERVICES (OSS)
                </Link>
                <Link
                  to="/trading"
                  onClick={closeMenu}
                  className="text-[13px] font-medium py-2 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  TRADING
                </Link>
                <Link
                  to="/language"
                  onClick={closeMenu}
                  className="text-[13px] font-medium py-2 px-3 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
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
          className="relative py-1 transition-colors duration-300 hover:text-red-400"
        >
          CONTACT
          {location.pathname === "/contact" && (
            <div className="h-[2px] bg-[#fa160e] w-full rounded-full absolute bottom-0 left-0"></div>
          )}
        </Link>
        <Link
          to="/careers"
          onClick={closeMenu}
          className="relative py-1 transition-colors duration-300 hover:text-red-400"
        >
          CAREERS
          {location.pathname === "/careers" && (
            <div className="h-[2px] bg-[#fa160e] w-full rounded-full absolute bottom-0 left-0"></div>
          )}
        </Link>
        <Link
          to="/dashboard"
          onClick={closeMenu}
          className="relative py-1 transition-colors duration-300 hover:text-red-400"
        >
          DASHBOARD
          {location.pathname === "/dashboard" && (
            <div className="h-[2px] bg-[#fa160e] w-full rounded-full absolute bottom-0 left-0"></div>
          )}
        </Link>

        {/* Language selector integrated into navbar row */}
        <Language />

        {/* External Attendance & Report action button */}
        <a
          href="https://checkinplus.cloud/login"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="text-[13px] font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md hover:shadow-red-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 whitespace-nowrap ml-1"
        >
          Attendance & Report
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-white cursor-pointer p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
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
        <Link to="/" onClick={closeMenu} className="text-[15px] font-semibold text-white">
          HOME
          {location.pathname === "/" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link to="/about" onClick={closeMenu} className={` text-[15px] `}>
          ABOUT
          {/* {t("about")} */}
          {location.pathname === "/about" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link to="/oss" onClick={closeMenu} className={` text-[15px] `}>
          ONSITE SUPPORT SERVICES(OSS)
          {location.pathname === "/oss" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>

        <Link to="/trading" onClick={closeMenu} className={` text-[15px]`}>
          TRADING
          {location.pathname === "/trading" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link to="/language" onClick={closeMenu} className="text-[15px]">
          LANGUAGE INTERPRETATION
          {location.pathname === "/language" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link to="/contact" onClick={closeMenu} className="text-[15px]">
          CONTACT
          {location.pathname === "/contact" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link
          to="/careers"
          onClick={closeMenu}
          className="text-[15px]"
        >
          CAREERS
          {location.pathname === "/careers" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link to="/dashboard" onClick={closeMenu} className="text-[15px]">
          DASHBOARD
          {location.pathname === "/dashboard" && (
            <div className="w-full h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
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

export default Navbar;
