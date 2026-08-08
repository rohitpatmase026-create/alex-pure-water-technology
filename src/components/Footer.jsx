import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}

        <div>

          <h2 className="text-3xl font-bold mb-5">
            ALEX PURE
          </h2>

          <p className="text-gray-400 leading-7">
            Premium Water Purifier Sales,
            Installation, Repair,
            AMC and Commercial
            Water Treatment Solutions.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 XXXXX XXXXX
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              info@alexpure.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Hingna, Nagpur
            </p>

          </div>

        </div>

        {/* Social */}

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center hover:scale-110 transition">
              <FaInstagram />
            </a>

            <a className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:scale-110 transition">
              <FaWhatsapp />
            </a>

            <a className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center hover:scale-110 transition">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-400">

        © 2026 ALEX PURE WATER TECHNOLOGY.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;