import { FaUsers, FaHeadset, FaShieldAlt, FaStar } from "react-icons/fa";

function TrustBar() {
  return (
    <section className="bg-white py-12 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Happy Customers */}

          <div className="text-center">
            <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              5000+
            </h2>
            <p className="text-gray-600">
              Happy Customers
            </p>
          </div>

          {/* Support */}

          <div className="text-center">
            <FaHeadset className="text-5xl text-cyan-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              24×7
            </h2>
            <p className="text-gray-600">
              Customer Support
            </p>
          </div>

          {/* Genuine */}

          <div className="text-center">
            <FaShieldAlt className="text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              100%
            </h2>
            <p className="text-gray-600">
              Genuine Parts
            </p>
          </div>

          {/* Rating */}

          <div className="text-center">
            <FaStar className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">
              4.9★
            </h2>
            <p className="text-gray-600">
              Customer Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustBar;
