import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5">

      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-40 cursor-pointer"
        />
      </Link>

      {/* Right Section */}
      <div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Credits Button */}
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 sm:px-6 py-2 rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <img
                className="w-5"
                src={assets.credit_star}
                alt="credit star"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-700">
                Credits Left: 50
              </p>
            </button>

            {/* Username */}
            <p className="hidden sm:block text-gray-600 font-medium">
              Hi, Shah
            </p>

            {/* Profile Dropdown */}
            <div className="relative group">

              <img
                src={assets.profile_icon}
                className="w-10 rounded-full shadow-sm cursor-pointer"
                alt="user"
              />

              {/* Dropdown */}
              <div className="absolute hidden group-hover:block right-0 top-12 z-20">
                <div className="bg-white border shadow-lg rounded-lg w-28">
                  <ul className="text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Pricing */}
            <p
              onClick={() => navigate("/buy")}
              className="cursor-pointer text-gray-600 hover:text-black transition"
            >
              Pricing
            </p>

            {/* Login Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-black text-white px-7 sm:px-10 py-2.5 text-sm rounded-full hover:scale-105 transition-all duration-300"
            >
              Login
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;