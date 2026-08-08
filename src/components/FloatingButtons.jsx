import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 transition"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}

      <a
        href="tel:+919999999999"
        className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50 transition"
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}

export default FloatingButtons;