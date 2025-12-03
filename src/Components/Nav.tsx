import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  UserCheck,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Phone,
  Code,
  Brain,
  Smartphone,
} from "lucide-react";
import logo from "../../public/assets/delsova-1.png";

// Nav Component
function Nav() {
  return (
    <nav className="flex items-center justify-between w-full bg-[#f9fcf8] px-4 lg:px-8 py-4 shadow-sm">
      {/* === DESKTOP LAYOUT (lg and up) === */}
      <div className="hidden lg:flex items-center w-full">
        {/* Logo (20%) */}
        <div className="w-[20%] flex items-center">
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

        {/* Blank (45%) */}
        <div className="w-[45%]" />

        {/* Navigation + Lang Selector (35%) */}
        <div className="w-[35%] flex justify-around items-center">
          <Link
            to="/"
            className="text-[#0e1934] text-lg font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            Accueil
          </Link>

          <Link
            to="/services"
            className="text-[#0e1934] text-lg font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            Services
          </Link>

          <Link
            to="/apropos"
            className="text-[#0e1934] text-lg font-medium hover:text-[#4186d8] transition px-2 py-1"
          >
            À propos
          </Link>

          {/* Langue Selector */}
          <div className="w-36 h-12 flex items-center justify-start gap-3 rounded-[28.5px] border-[1.5px] border-[#4186d8] px-3 cursor-pointer hover:bg-[#f0f5ff] transition">
            <div className="w-8 h-8 bg-[#e6f0ff] rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-4 h-4 bg-gradient-to-r from-[#0e1934] to-[#4186d8] rounded-full" />
            </div>
            <div className="text-[#0e1934] text-base font-medium">Français</div>
          </div>
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
        </div>

        {/* Language Selector */}
        <div className="w-1/4 flex justify-end">
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-[#e6f0ff] rounded-full flex items-center justify-center overflow-hidden border-[1.5px] border-[#4186d8]">
              <div className="w-4 h-4 bg-gradient-to-r from-[#0e1934] to-[#4186d8] rounded-full" />
            </div>
            <div className="text-[#0e1934] text-xs font-medium mt-1">FR</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
