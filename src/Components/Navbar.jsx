import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logonew.png"; // Replace with your actual logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full z-50 font-sans">
      {/* ✅ Top Info Bar */}
      <div
        className={`bg-[#7A1E09] text-white text-xs sm:text-sm px-4 py-2 flex flex-wrap justify-center gap-x-6 transition-all duration-300 ${
          hideTopBar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span>
          Email:{" "}
          <a href="mailto:Info@shivtrader.co.in" className="text-[#F4B400] hover:underline">
            Info@shivtrader.co.in
          </a>{" "}
          |{" "}
          <a href="mailto:Shivtradersdelhi1@gmail.com" className="text-[#F4B400] hover:underline">
            Shivtradersdelhi1@gmail.com
          </a>
        </span>
        <span>
          Call:{" "}
          <a href="tel:+919211841929" className="text-[#F4B400] hover:underline">
           +91 9211841929
          </a>
        </span>
        <span>GSTIN: 07MHBPK0355G1ZE</span>
        <span>UDYAM: ##############</span>
      </div>

      {/* ✅ Main Navbar */}
      <header className="sticky top-0 bg-[#FDF8F3] shadow-md z-50">
        <div className="py-4 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" style={{ height: "48px" }}>
              <img
                src={logo}
                alt="Shiv Traders Logo"
                className="object-contain w-auto h-14 sm:h-16 md:h-20 lg:h-24 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium text-[#7A1E09]">
              {["Home", "About", "Products", "Certificates", "Contact"].map(
                (item, index) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`relative transition-all duration-300 ${
                        isActive(path)
                          ? "text-[#C47E00] font-semibold"
                          : "hover:text-[#C47E00]"
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#F4B400] transition-transform duration-300 origin-left ${
                          isActive(path) ? "scale-x-100" : "scale-x-0"
                        } hover:scale-x-100`}
                      ></span>
                    </Link>
                  );
                }
              )}
            </nav>

            {/* CTA Button */}
            <Link
              to="/products"
              className="hidden md:inline-block ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-[#7A1E09]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {menuOpen && (
            <div className="md:hidden mt-3 bg-[#FFFDF8] rounded-lg shadow-lg py-4 px-6 space-y-4 animate-slideDown">
              {["Home", "About", "Products", "Certificates", "Contact"].map(
                (item, index) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={index}
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-lg font-medium ${
                        isActive(path)
                          ? "text-[#7A1E09]"
                          : "hover:text-[#C47E00]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                }
              )}
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="inline-block w-full text-center mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
