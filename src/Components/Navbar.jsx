import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/images/logonew.png"; // ✅ your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  /* -------------------------------------------------
     Hide top info bar when scrolling down
  -------------------------------------------------- */
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

  /* -------------------------------------------------
     Close mobile drawer on route change
  -------------------------------------------------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* -------------------------------------------------
     Close on outside click (mobile)
  -------------------------------------------------- */
  const handleClickOutside = useCallback((e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  }, []);
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen, handleClickOutside]);

  /* -------------------------------------------------
     Close on ESC
  -------------------------------------------------- */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    if (menuOpen) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [menuOpen]);

  /* -------------------------------------------------
     Mobile drawer animation variants
  -------------------------------------------------- */
  const drawerVariants = {
    hidden: { opacity: 0, y: -16, scaleY: 0.95, originY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      originY: 0,
      transition: { duration: 0.22, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -8,
      scaleY: 0.98,
      originY: 0,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  return (
    <div className="w-full z-50 font-sans">
      {/* ✅ Top Info Bar */}
      <div
        className={`bg-[#7A1E09] text-white text-xs sm:text-sm px-4 py-2 flex flex-wrap justify-center gap-x-6 gap-y-1 transition-all duration-300 ${
          hideTopBar ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Emails (always show) */}
        <span className="text-center">
          Email:{" "}
          <a
            href="mailto:Info@shivtrader.co.in"
            className="text-[#F4B400] hover:underline"
          >
            Info@shivtrader.co.in
          </a>{" "}
          |{" "}
          <a
            href="mailto:Shivtradersdelhi1@gmail.com"
            className="text-[#F4B400] hover:underline"
          >
            Shivtradersdelhi1@gmail.com
          </a>
        </span>

        {/* Phone (always show) */}
        <span className="text-center">
          Call:{" "}
          <a
            href="tel:+919211841929"
            className="text-[#F4B400] hover:underline"
          >
            +91 9211841929
          </a>
        </span>

        {/* GST / UDYAM (🔒 hide below md) */}
        <span className="hidden md:inline">GSTIN: 07MHBPK0355G1ZE</span>
        <span className="hidden md:inline">UDYAM: ##############</span>
      </div>

      {/* ✅ Main Navbar */}
      <header className="sticky top-0 bg-[#FDF8F3] shadow-md z-50">
        <div className="py-4 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              style={{ height: "48px" }}
              aria-label="Shiv Traders Home"
            >
              <img
                src={logo}
                alt="Shiv Traders Logo"
                className="object-contain w-auto h-18 sm:h-16 md:h-20 lg:h-24 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium text-[#7A1E09]">
              {["Home", "About", "Products", "Certificates", "Contact"].map(
                (item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  const active = isActive(path);
                  return (
                    <Link
                      key={item}
                      to={path}
                      className={`relative transition-all duration-300 ${
                        active
                          ? "text-[#C47E00] font-semibold"
                          : "hover:text-[#C47E00]"
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#F4B400] transition-transform duration-300 origin-left ${
                          active ? "scale-x-100" : "scale-x-0"
                        } group-hover:scale-x-100`}
                      />
                    </Link>
                  );
                }
              )}
            </nav>

            {/* Desktop CTA */}
            <Link
              to="/products"
              className="hidden md:inline-block ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl text-[#7A1E09] p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* ✅ Mobile Drawer (Animated) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-nav-drawer"
                ref={drawerRef}
                role="menu"
                aria-label="Mobile navigation"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={drawerVariants}
                className="md:hidden mt-3 mx-auto max-w-screen-sm bg-[#FFFDF8] rounded-lg shadow-lg py-4 px-6 space-y-4 origin-top"
              >
                {["Home", "About", "Products", "Certificates", "Contact"].map(
                  (item) => {
                    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                    const active = isActive(path);
                    return (
                      <Link
                        key={item}
                        to={path}
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className={`block text-lg font-medium ${
                          active
                            ? "text-[#7A1E09]"
                            : "text-[#7A1E09]/80 hover:text-[#C47E00]"
                        }`}
                      >
                        {item}
                      </Link>
                    );
                  }
                )}

                <Link
                  to="/products"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block w-full text-center mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#F4B400] to-[#C47E00] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Order Now
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
