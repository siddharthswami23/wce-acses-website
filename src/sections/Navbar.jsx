import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => {}, vertical = false, noHover = false }) => {
  const base = "group text-lg font-semibold transition-all duration-200";
  return (
    <ul className={vertical ? "flex flex-col gap-3" : "flex items-center gap-10"}>
      {navLinks.map((item) => {
        const verticalClasses = `${base} block px-5 py-3 rounded-md text-white ${
          noHover ? "" : "hover:bg-white/6 focus:bg-white/6"
        }`;
        const desktopClasses = `${base} relative text-white ${noHover ? "" : "hover:text-gray-100"}`;
        return (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={onClick}
              className={vertical ? verticalClasses : desktopClasses}
            >
              {item.name}
              {!vertical && !noHover && (
                <span className="absolute left-0 -bottom-2 w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-white/60 rounded" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const handleCTAClick = () => {
    closeMenu();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#contact";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-gradient-to-b from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-extrabold tracking-wider text-white hover:text-gray-100 transition-colors"
              aria-label="ACSES - Home"
            >
              ACSES
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <NavItems noHover={false} />
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button
                type="button"
                onClick={handleCTAClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-base font-semibold bg-gradient-to-r from-primary to-accent shadow-md hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 text-white"
                aria-label="Let's work together"
              >
                <span className="hidden sm:inline">Let's work together</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 text-white"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-[400ms] ease-in-out`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
        aria-hidden={!isOpen}
      >
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        />
        <div className="relative z-50 bg-gradient-to-b from-[#0b0210]/95 to-[#120419]/95 border-t border-border px-4 pt-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <a href="/" onClick={closeMenu} className="text-lg font-bold text-white">
              ACSES
            </a>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav>
            <NavItems onClick={closeMenu} vertical noHover={false} />
            <div className="mt-4 px-1">
              <button
                onClick={handleCTAClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-base font-semibold bg-gradient-to-r from-primary to-accent text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Let's work together
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
