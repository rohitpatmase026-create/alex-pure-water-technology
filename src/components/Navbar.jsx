import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-700 tracking-wide">
            ALEX PURE
          </h1>

          <p className="text-xs text-gray-500 tracking-[3px]">
            WATER TECHNOLOGY
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Services
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Products
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Gallery
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Contact
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
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          <nav className="flex flex-col p-5 gap-5">

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Services</a>

            <a href="#">Products</a>

            <a href="#">Gallery</a>

            <a href="#">Contact</a>

            <a
              href="tel:9021843831"
              className="bg-blue-600 text-white py-3 rounded-lg text-center"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919021843831"
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