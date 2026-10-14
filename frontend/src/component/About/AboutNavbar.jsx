import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import Language from "../Launguage";

function AboutNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navitems = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "SERVICES" },
    { title: "CONTACT", to: "/contact" },
    { title: "CAREERS", to: "/careers" },
    { title: "DASHBOARD", to: "/dashboard" },
  ];

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
      className={`top-0 left-0 w-full flex justify-between items-center px-6 lg:px-10 py-3 z-50 transition-all duration-300 font-bold text-white ${
        isScrolled
          ? "fixed backdrop-blur-md bg-black/60 shadow-lg"
          : "fixed md:relative backdrop-blur-sm md:bg-white/5 shadow-md"
      }`}
    >
      {/* Logo */}
      {/* <Link to="/" className="text-4xl font-sans tracking-[2px] font-bold">
        <img src="/logo.png" className="h-20 md:h-20" />
      </Link> */}
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
        <Language />
        {navitems.map((page) => (
          <div key={page.title} className="relative">
            {page.title === "SERVICES" ? (
              <div
                className="flex justify-center items-center gap-3 text-white cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(!isServicesOpen)}
                onMouseLeave={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span className="text-[15px]">{page.title}</span>
                {/* icon toggle */}
                {isServicesOpen ? (
                  <FaChevronUp className="transition-all duration-300" />
                ) : (
                  <FaChevronDown className="transition-all duration-300" />
                )}

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 mt-2 w-80 p-5 space-y-5 backdrop-blur-lg top-5 bg-black/50  rounded-lg shadow-lg flex flex-col z-50  "
                    >
                      <Link
                        to="/oss"
                        onClick={closeMenu}
                        className="text-[15px] transition-all py-2 duration-300 ease-in-out hover:text-black px-2 rounded hover:bg-white"
                      >
                        ONSITE SUPPORT SERVICES (OSS)
                      </Link>
                      <Link
                        to="/trading"
                        onClick={closeMenu}
                        className="text-[15px] transition-all py-2 duration-300 ease-in-out px-2 rounded hover:text-black hover:bg-white"
                      >
                        TRADING
                      </Link>
                      <Link
                        to="/language"
                        onClick={closeMenu}
                        className="text-[15px] transition-all py-2 duration-300 ease-in-out px-2 rounded hover:text-black hover:bg-white"
                      >
                        LANGUAGE INTERPRETATION
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div key={page.title} className="">
                <Link
                  to={page.to}
                  style={{
                    transition: "all 0.2s ease-in-out",
                  }}
                  className="text-white hover:text-neutral-100 hover:shadow[0_0_10px_#fa160e]"
                  onClick={closeMenu}
                  onMouseLeave={(e) => (e.target.style.textShadow = "none")}
                  onMouseEnter={(e) =>
                    (e.target.style.textShadow =
                      "0 0 10px #fa160e, 0 0 20px #fa160e")
                  }
                >
                  {page.title}
                </Link>
                {location.pathname === page.to && (
                  <div className="w-full h-[2px] bg-[#ff746f] transition-all duration-300 ease-in-out rounded-full"></div>
                )}
              </div>
            )}
          </div>
        ))}

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
