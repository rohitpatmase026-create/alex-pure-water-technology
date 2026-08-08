import { motion } from "framer-motion";

const products = [
  {
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600",
    title: "Domestic RO Purifier",
    description: "Advanced multi-stage purification system for healthy drinking water.",
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600",
    title: "Commercial RO Plant",
    description: "High-capacity RO systems for schools, hospitals and industries.",
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
    title: "Water Softener",
    description: "Remove hard water minerals and protect your appliances.",
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    title: "RO Filters",
    description: "High-quality RO filters for maximum purification performance.",
  },
  {
    image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=600",
    title: "Spare Parts",
    description: "Original RO spare parts with long-lasting durability.",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
    title: "AMC Service Kits",
    description: "Complete maintenance kits for annual servicing and care.",
  },
];

function Products() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Premium Water Solutions
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Explore our wide range of premium water purification systems,
            accessories and commercial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {item.description}
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition">
                  View Details
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;