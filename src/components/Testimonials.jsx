import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Nagpur",
    review:
      "Excellent RO installation service. The technician was professional and completed everything on time.",
  },
  {
    name: "Priya Verma",
    city: "Wardha",
    review:
      "Very satisfied with the AMC service. My purifier works like new every time after servicing.",
  },
  {
    name: "Amit Patil",
    city: "Amravati",
    review:
      "Affordable pricing and genuine spare parts. Highly recommended for RO service.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Customer satisfaction is our biggest achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-xl mr-1"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-7 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;