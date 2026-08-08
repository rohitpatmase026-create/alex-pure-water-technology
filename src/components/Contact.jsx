import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Need a new RO purifier or service? Contact us today and our team
            will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <div className="flex items-center gap-4 mb-8">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-bold text-xl">Address</h3>
                <p className="text-gray-600">
                  Hingna, Nagpur, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaPhoneAlt className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-600">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600">
                  info@alexpure.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>
                <p className="text-gray-600">
                  Mon - Sat : 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4 outline-none focus:border-blue-500"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;