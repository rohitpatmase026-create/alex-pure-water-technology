import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* Floating Bubbles */}
      <div className="absolute top-24 left-20 w-5 h-5 bg-cyan-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-52 right-28 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-sky-200 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 pb-20">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm inline-block">
            💧 Trusted Water Technology
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
            PURE WATER
            <br />
            PURE <span className="text-blue-600">LIFE</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700">
              FOR EVERY HOME
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Premium Water Purifier Sales, Installation, AMC, Repair & Commercial RO Solutions.
            Providing Safe, Healthy, and Pure Drinking Water for Homes, Offices, and Industries across Nagpur.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-lg shadow-lg">
              Book Service
              <FaArrowRight />
            </button>

            <a
              href="tel:9021843831"
              className="border border-blue-300 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full flex items-center gap-3 shadow-md font-semibold text-slate-800"
            >
              <FaPhoneAlt className="text-blue-600" />
              Call Now
            </a>

            <a
              href="https://wa.me/919021843831"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-lg font-semibold"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="relative bg-white/40 backdrop-blur-3xl rounded-[40px] shadow-2xl p-8 border border-white/50 overflow-hidden">
            <div className="w-[320px] sm:w-[360px] h-[440px] rounded-3xl bg-gradient-to-b from-cyan-100 via-white to-blue-100 flex items-center justify-center p-6">
              <div className="text-center">
                <motion.div 
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="text-7xl"
                >
                  💧
                </motion.div>
                <h2 className="text-2xl font-bold mt-6 text-slate-800">
                  Premium Water Purifier
                </h2>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Coming Soon! Stay tuned for our latest water purification technology that ensures safe and healthy drinking water for your home and office.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* --- ANIMATED WATER WAVES AT BOTTOM --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        
        {/* Back Wave (Transparent Light Blue Layer) */}
        <motion.div
          className="absolute bottom-0 left-0 w-[200%] h-28 sm:h-36 opacity-50"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
            <path
              fill="#93c5fd"
              d="M0,192 C480,260 960,100 1440,192 C1920,280 2400,100 2880,192 L2880,320 L0,320 Z"
            ></path>
          </svg>
        </motion.div>

        {/* Front Wave (Main White Layer) */}
        <motion.div
          className="relative w-[200%] h-24 sm:h-32"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 2880 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              d="M0,160 C480,280 960,40 1440,160 C1920,280 2400,40 2880,160 L2880,320 L0,320 Z"
            ></path>
          </svg>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;