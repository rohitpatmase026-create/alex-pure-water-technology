import { useState } from "react";
import {
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

function DealerRegister() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Dealer request submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6 py-24">

      <div className="w-full max-w-2xl">

        <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] p-8 md:p-10">

          {/* Header */}
          <div className="text-center mb-8">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <FaUserTie className="text-white text-2xl" />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-blue-700">
              ALEX PURE
            </h1>

            <p className="text-xs text-gray-500 tracking-[3px] mt-1">
              WATER & HOME SOLUTIONS
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8">
              Become an ALEX PURE Dealer
            </h2>

            <p className="text-gray-500 mt-2">
              Submit your details and our team will contact you.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <FaUserTie className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>

              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Business */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Business Name
              </label>

              <div className="relative">
                <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Enter business name"
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City / Service Area
              </label>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city or service area"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business..."
                rows="4"
                className="w-full px-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Dealer Access
              <FaArrowRight />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default DealerRegister;