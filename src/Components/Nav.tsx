import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/delsova-1.png";
import BookingModal from "../Screens/BookingSystem.tsx";

function Nav() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC key
  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) =>
    `nav-link transition-colors ${
      isActive(path)
        ? "text-[#4186d8] font-semibold"
        : "text-[#0e1934] hover:text-[#4186d8]"
    }`;

  return (
    <header>
      <nav
        aria-label="Navigation principale"
        className="w-full bg-[#f9fcf8] px-4 lg:px-8 py-4 shadow-sm border-b-2 border-b-purple-500"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Delsova - Accueil">
            <img
              src={logo}
              alt=""
              width="40"
              height="40"
              className="w-10 h-10 mr-2"
            />
            <span className="text-[#0e1934] text-lg font-bold">Delsova</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className={linkClass("/")}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={linkClass("/services")}
                aria-current={isActive("/services") ? "page" : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="font-bold text-[#4186d8] hover:text-[#2d5fa8]"
              >
                New Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/apropos"
                className={linkClass("/apropos")}
                aria-current={isActive("/apropos") ? "page" : undefined}
              >
                À propos
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="ml-4 px-6 py-3 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white font-bold rounded-lg hover:shadow-lg"
              >
                Réserver
              </button>
            </li>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-7 h-7 text-[#0e1934]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <ul
            id="mobile-menu"
            className="lg:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md list-none"
          >
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive("/services") ? "page" : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/services" className="font-bold text-[#4186d8]">
                New Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/apropos"
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive("/apropos") ? "page" : undefined}
              >
                À propos
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsBookingOpen(true);
                  setIsMenuOpen(false);
                }}
                className="mt-2 w-full px-5 py-3 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white rounded-lg font-bold"
              >
                Réserver une réunion
              </button>
            </li>
          </ul>
        )}

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </nav>
    </header>
  );
}

export default Nav;
