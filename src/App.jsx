import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DealerLogin from "./pages/DealerLogin";
import DealerRegister from "./pages/DealerRegister";
import DealerDashboard from "./pages/DealerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Website */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Dealer Login */}
        <Route
          path="/dealer-login"
          element={<DealerLogin />}
        />

        {/* Dealer Registration */}
        <Route
          path="/dealer-register"
          element={<DealerRegister />}
        />

        {/* Dealer Dashboard */}
        <Route
          path="/dealer-dashboard"
          element={<DealerDashboard />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-blue-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600">
                  404
                </h1>

                <p className="text-gray-600 mt-3">
                  Page not found
                </p>

                <a
                  href="/"
                  className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Back to Home
                </a>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;