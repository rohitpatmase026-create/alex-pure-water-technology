function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
          About ALEX PURE WATER TECHNOLOGY
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
          We provide premium water purifier sales, installation,
          repair, AMC services and commercial water solutions.
          Our mission is to deliver clean, safe and healthy drinking
          water to every home and business.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {/* Pure Water */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-100 hover:scale-105 transition duration-300">
            
            <div className="text-5xl mb-5">
              💧
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Pure Water
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Advanced RO, UV and UF water purification systems
              for homes and businesses.
            </p>

          </div>

          {/* Installation & Service */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-100 hover:scale-105 transition duration-300">
            
            <div className="text-5xl mb-5">
              🛠️
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Installation & Service
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Professional installation, repair and annual
              maintenance by experienced technicians.
            </p>

          </div>

          {/* Service Area */}
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-100 hover:scale-105 transition duration-300">
            
            <div className="text-5xl mb-5">
              📍
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Service Area
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Maharashtra Chowk,
              Wanadongri,
              Hingna,
              Nagpur - 441110
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;