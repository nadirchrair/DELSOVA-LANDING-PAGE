import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/delsova-1.png";
import BookingModal from "../Screens/BookingSystem";

// Nav Component
function Nav() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full bg-[#f9fcf8] px-4 lg:px-8 py-4 shadow-sm border-b-2 border-b-purple-500">
      {/* === DESKTOP LAYOUT (lg and up) === */}
      <div className="hidden lg:flex items-center w-full">
        {/* Logo (15%) */}
        <div className="w-[15%] flex items-center">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Delsova Logo"
                className="w-10 h-10 object-contain mr-3"
              />

              <span className="text-[#0e1934] text-xl font-bold">Delsova</span>
            </div>
          </Link>
        </div>

        {/* Blank Space (10%) */}
        <div className="w-[10%]" />

        {/* Navigation Links (40%) */}
        <div className="w-[40%] flex justify-start items-center gap-8">
          <Link
            to="/"
            className="text-[#0e1934] text-base font-medium hover:text-[#4186d8] transition"
          >
            Accueil
          </Link>

          <Link
            to="/services"
            className="text-[#0e1934] text-base font-medium hover:text-[#4186d8] transition"
          >
            Services
          </Link>

          <Link
            to="/services"
            className="text-base font-bold text-[#4186d8] transition hover:text-[#2d5fa8] hover:text-3xl"
          >
            New Solutions
          </Link>

          <Link
            to="/apropos"
            className="text-[#0e1934] text-base font-medium hover:text-[#4186d8] transition"
          >
            À propos
          </Link>
        </div>

        {/* Blank Space (10%) */}
        <div className="w-[10%]" />

        {/* Book a Meeting Button (25%) */}
        <div className="w-[25%] flex justify-end">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-9 py-5 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white text-base font-bold rounded-lg hover:shadow-lg transition-shadow duration-200 flex items-center gap-3 whitespace-nowrap cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Réserver une réunion
          </button>
        </div>
      </div>

      {/* === MOBILE + TABLET LAYOUT (under lg) === */}
      <div className="flex lg:hidden w-full justify-between items-center px-2">
        {/* Logo */}
        <div className="w-1/4 flex justify-start">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Delsova Logo"
              className="w-8 h-8 object-contain mr-2"
            />

            <span className="text-[#0e1934] text-lg font-bold">Delsova</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex w-2/4 justify-center gap-2">
          <Link
            to="/"
            className="text-[#0e1934] text-sm font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            Accueil
          </Link>

          <Link
            to="/services"
            className="text-[#0e1934] text-sm font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            Services
          </Link>

          <Link
            to="/services"
            className="text-sm font-bold text-[#4186d8] transition hover:text-[#2d5fa8]"
          >
            New
          </Link>

          <Link
            to="/apropos"
            className="text-[#0e1934] text-sm font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            À propos
          </Link>
        </div>

        {/* Book a Meeting Button */}
        <div className="w-1/4 flex justify-end">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white text-xs font-bold rounded-lg hover:shadow-lg transition-shadow duration-200 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Réserver
          </button>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </nav>
  );
}

export default Nav;
