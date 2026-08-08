import { motion } from "framer-motion";
import {
  FaAward,
  FaTools,
  FaClock,
  FaTint,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Certified Technicians",
    description: "Experienced and trained professionals for every installation and service.",
  },
  {
    icon: <FaTools />,
    title: "Genuine Spare Parts",
    description: "We use only original spare parts for better performance and long life.",
  },
  {
    icon: <FaClock />,
    title: "Fast Service",
    description: "Quick response and same-day service in most service areas.",
  },
  {
    icon: <FaTint />,
    title: "Pure Water Guarantee",
    description: "Advanced purification solutions for safe and healthy drinking water.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges.",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Customer Support",
    description: "Friendly customer support whenever you need assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Why Customers Trust Alex Pure
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We are committed to delivering premium water purification products,
            professional service and complete customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border border-blue-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;