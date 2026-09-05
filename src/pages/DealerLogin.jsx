import { useState } from "react";
import {
  FaUserTie,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function DealerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [dealerId, setDealerId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const cleanDealerId = dealerId.trim().toLowerCase();

      if (!cleanDealerId) {
        setError("Please enter your Dealer ID.");
        setLoading(false);
        return;
      }

      if (!password) {
        setError("Please enter your password.");
        setLoading(false);
        return;
      }

      // Dealer ID ko Firebase ke internal email format me convert karenge
      const firebaseEmail =
        `${cleanDealerId}@dealer.alexpure.local`;

      await signInWithEmailAndPassword(
        auth,
        firebaseEmail,
        password
      );

      // Successful login
      window.location.href = "/dashboard";

    } catch (err) {
      console.error("Dealer Login Error:", err);

      switch (err.code) {
        case "auth/invalid-credential":
          setError("Dealer ID or password is incorrect.");
          break;

        case "auth/user-not-found":
          setError("Dealer account does not exist.");
          break;

        case "auth/wrong-password":
          setError("Incorrect password.");
          break;

        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;

        case "auth/network-request-failed":
          setError("Network error. Please check your internet.");
          break;

        default:
          setError("Login failed. Please try again.");
      }
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6 py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      {/* Login Card */}
      <div className="relative w-full max-w-md">

        <div className="bg-white/90 backdrop-blur-2xl border border-white/70 shadow-2xl rounded-[32px] p-8 md:p-10">

          {/* Logo */}
          <div className="text-center mb-8">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <FaUserTie className="text-white text-2xl" />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold text-blue-700 tracking-wide">
              ALEX PURE
            </h1>

            <p className="text-xs text-gray-500 tracking-[3px] mt-1">
              WATER & HOME SOLUTIONS
            </p>

          </div>

          {/* Title */}
          <div className="text-center mb-8">

            <h2 className="text-2xl font-bold text-gray-800">
              Dealer Login
            </h2>

            <p className="text-gray-500 mt-2">
              Access your ALEX PURE dealer account
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Dealer ID */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dealer ID
              </label>

              <div className="relative">

                <FaUserTie className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  value={dealerId}
                  onChange={(e) =>
                    setDealerId(e.target.value.toUpperCase())
                  }
                  placeholder="Enter Dealer ID"
                  autoComplete="username"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  autoComplete="current-password"
                  required
                  className="w-full pl-11 pr-12 py-4 rounded-2xl border border-blue-100 bg-blue-50/40 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >

              {loading ? (
                "Signing in..."
              ) : (
                <>
                  Login to Dealer Portal
                  <FaArrowRight />
                </>
              )}

            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-sm text-gray-400">
              Dealer Access
            </span>

            <div className="h-px bg-gray-200 flex-1" />

          </div>

          {/* Security */}
          <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4">

            <FaShieldAlt className="text-blue-600 text-xl" />

            <div>
              <p className="text-sm font-semibold text-gray-800">
                Secure Dealer Portal
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Authorized ALEX PURE dealers only
              </p>
            </div>

          </div>

          {/* Request Access */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Want to become a dealer?{" "}
            <button
              type="button"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Request Dealer Access
            </button>
          </p>

        </div>

      </div>

    </section>
  );
}

export default DealerLogin;