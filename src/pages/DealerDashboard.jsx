import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import {
  FaUserTie,
  FaBoxOpen,
  FaShoppingCart,
  FaClipboardList,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import { auth, db } from "../firebase";

function DealerDashboard() {
  const navigate = useNavigate();

  const [dealer, setDealer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDealer = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          navigate("/dealer-login");
          return;
        }

        const dealerRef = doc(db, "dealers", user.uid);
        const dealerSnap = await getDoc(dealerRef);

        if (!dealerSnap.exists()) {
          alert("Dealer profile not found.");
          await signOut(auth);
          navigate("/dealer-login");
          return;
        }

        const dealerData = dealerSnap.data();

        if (dealerData.status !== "active") {
          alert("Your dealer account is not active.");
          await signOut(auth);
          navigate("/dealer-login");
          return;
        }

        setDealer(dealerData);
      } catch (error) {
        console.error("Dealer profile error:", error);
        alert("Unable to load dealer profile.");
      } finally {
        setLoading(false);
      }
    };

    loadDealer();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/dealer-login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-600">
            Loading Dealer Portal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-extrabold text-blue-700">
              ALEX PURE
            </h1>

            <p className="text-xs text-gray-500 tracking-[3px]">
              DEALER PORTAL
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </header>

      {/* Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Welcome */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-blue-100">
                Welcome back
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-1">
                {dealer?.name || "Dealer"}
              </h2>

              <p className="mt-3 text-blue-100">
                Dealer ID: {dealer?.dealerId || "N/A"}
              </p>

            </div>

            <FaUserTie className="text-6xl opacity-80" />

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-blue-100 hover:shadow-xl transition">
            <FaBoxOpen className="text-4xl text-blue-600" />

            <h3 className="text-xl font-bold mt-5">
              Products
            </h3>

            <p className="text-gray-500 mt-2">
              Browse available products
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-blue-100 hover:shadow-xl transition">
            <FaShoppingCart className="text-4xl text-cyan-500" />

            <h3 className="text-xl font-bold mt-5">
              Place Order
            </h3>

            <p className="text-gray-500 mt-2">
              Order products from ALEX PURE
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-blue-100 hover:shadow-xl transition">
            <FaClipboardList className="text-4xl text-green-500" />

            <h3 className="text-xl font-bold mt-5">
              My Orders
            </h3>

            <p className="text-gray-500 mt-2">
              Track your orders
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-blue-100 hover:shadow-xl transition">
            <FaUserCircle className="text-4xl text-purple-500" />

            <h3 className="text-xl font-bold mt-5">
              My Profile
            </h3>

            <p className="text-gray-500 mt-2">
              Manage dealer information
            </p>
          </div>

        </div>

        {/* Dealer Information */}
        <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8 mt-8">

          <h3 className="text-2xl font-bold text-gray-800">
            Dealer Information
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            <div>
              <p className="text-sm text-gray-500">
                Name
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {dealer?.name || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Business
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {dealer?.businessName || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {dealer?.email || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Phone
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {dealer?.phone || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                City
              </p>

              <p className="font-semibold text-gray-800 mt-1">
                {dealer?.city || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Account Status
              </p>

              <p className="font-semibold text-green-600 mt-1">
                {dealer?.status || "-"}
              </p>
            </div>

          </div>

        </div>

      </main>

    </section>
  );
}

export default DealerDashboard;