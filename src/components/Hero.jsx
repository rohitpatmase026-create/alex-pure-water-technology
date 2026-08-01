import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-100 pt-32 pb-20">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            💧 Trusted Water Technology
          </span>

          <h1 className="mt-8 text-6xl lg:text-8xl font-black leading-tight tracking-tight text-slate-900">
            PURE WATER
            <br />
            PURE
            <span className="text-blue-600"> LIFE</span>
              FOR EVERYONE HOME
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Premium Water Purifier Sales, Installation, AMC, Repair & Commercial RO Solutions.,

            Providing Safe, Healthy and Pure Drinking Water
            for Homes, Offices and Industries across Nagpur.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold-xl">

              Book Service

              <FaArrowRight />

            </button>

            <a
              href="tel:9021843831"
              className="border border-blue-300 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-full flex items-center gap-3 shadow-lg"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919021843831"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          <div className="relative bg-white/40 backdrop-blur-3xl rounded-[40px] shadow-2xl p-10 border border-white/50 overflow-hidden">

            <div className="w-[360px] h-[460px] rounded-3xl bg-gradient-to-b from-cyan-100 via-white to-blue-100 flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl">
                  💧
                </div>

                <h2 className="text-2xl font-bold mt-6 text-slate-800">
                  Premium Water Purifier
                </h2>

                <p className="mt-4 text-gray-600">
                  Coming Soon! Stay tuned for our latest water purification technology that ensures safe and healthy drinking water for your home and office.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;