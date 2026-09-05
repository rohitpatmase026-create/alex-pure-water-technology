import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">
            ALEX PURE
          </h1>

          <p className="text-xs text-gray-500 tracking-[3px]">
            WATER & HOME SOLUTIONS
          </p>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-blue-600 transition"
          >
            Services
          </a>

          <a
            href="#products"
            className="hover:text-blue-600 transition"
          >
            Products
          </a>

          <a
            href="#gallery"
            className="hover:text-blue-600 transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>

          <a
             href="/dealer-login"
             className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
          >
            Dealer Login
          </a>

        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href="tel:9021843831"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-50 transition"
          >
            <FaPhoneAlt />
            Call
          </a>

          <a
            href="https://wa.me/919021843831"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          <nav className="flex flex-col p-5 gap-5">

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#products" onClick={closeMenu}>
              Products
            </a>

            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a 
                href="/dealer-login"
                onClick={closeMenu}
                className="bg-blue-600 text-white py-3 rounded-lg text-center"
            >
              Dealer Login
            </a>

            <a
              href="tel:9021843831"
              className="bg-blue-600 text-white py-3 rounded-lg text-center"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919021843831"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg text-center"
            >
              WhatsApp
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Navbar;