import { motion } from "framer-motion";
import {
  FaTint,
  FaTools,
  FaWrench,
  FaCalendarCheck,
  FaIndustry,
  FaWater,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTint />,
    title: "RO Water Purifier Sales",
    description:
      "Premium domestic and commercial RO water purifiers from trusted brands.",
  },
  {
    icon: <FaTools />,
    title: "Installation",
    description:
      "Professional installation service with proper fitting and testing.",
  },
  {
    icon: <FaWrench />,
    title: "Repair & Maintenance",
    description:
      "Quick repair service with genuine spare parts and expert technicians.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "AMC Plans",
    description:
      "Affordable Annual Maintenance Contracts for worry-free service.",
  },
  {
    icon: <FaIndustry />,
    title: "Commercial RO Plants",
    description:
      "High-capacity RO systems for schools, hospitals, hotels and industries.",
  },
  {
    icon: <FaWater />,
    title: "Water Softener",
    description:
      "Advanced water softener systems for hard water treatment solutions.",
  },
];

function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Complete Water Solution
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            We provide complete sales, installation, repair and maintenance
            services for domestic and commercial water purification systems.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-blue-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;