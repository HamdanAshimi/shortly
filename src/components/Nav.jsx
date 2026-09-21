import { useState } from "react";
import Logo from "../assets/images/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo/Menu */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img src={Logo} alt="logo" />

          {/* Left Menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>

        {/* Right Button Menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" className="hover:text-veryDarkViolet">
            Login
          </a>

          <a
            href="#"
            className="rounded-full bg-cyan px-8 py-3 font-bold text-white transition-transform duration-200 hover:scale-105 hover:opacity-70"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          id="menu-btn"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`hamburger block lg:hidden ${isMenuOpen ? "open" : ""}`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`absolute left-6 right-6 top-20 z-100 rounded-lg bg-darkViolet p-6 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
          <a href="features" className="w-full text-center">
            Features
          </a>

          <a href="#" className="w-full text-center">
            Pricing
          </a>

          <a href="#" className="w-full text-center">
            Resources
          </a>

          <a
            href="#"
            className="w-full border-t border-gray-400 pt-6 text-center"
          >
            Login
          </a>

          <a
            href="#"
            className="w-full rounded-full bg-cyan py-3 text-center transition-transform duration-200 hover:scale-105"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
