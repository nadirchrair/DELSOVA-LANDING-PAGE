import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/delsova-1.png";
import BookingModal from "../Screens/BookingSystem.tsx";

function Nav() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f9fcf8] px-4 lg:px-8 py-4 shadow-sm border-b-2 border-b-purple-500">
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Delsova Logo" className="w-10 h-10 mr-2" />
          <span className="text-[#0e1934] text-lg font-bold">Delsova</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link
            to="/services"
            className="font-bold text-[#4186d8] hover:text-[#2d5fa8]"
          >
            New Solutions
          </Link>
          <Link to="/apropos" className="nav-link">
            À propos
          </Link>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="ml-4 px-6 py-3 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white font-bold rounded-lg hover:shadow-lg"
          >
            Réserver
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger */}
          <svg
            className="w-7 h-7 text-[#0e1934]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              /> // X icon
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              /> // burger
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/services" className="font-bold text-[#4186d8]">
            New Solutions
          </Link>
          <Link to="/apropos" onClick={() => setIsMenuOpen(false)}>
            À propos
          </Link>

          <button
            onClick={() => {
              setIsBookingOpen(true);
              setIsMenuOpen(false);
            }}
            className="mt-2 px-5 py-3 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white rounded-lg font-bold"
          >
            Réserver une réunion
          </button>
        </div>
      )}

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </nav>
  );
}

export default Nav;
