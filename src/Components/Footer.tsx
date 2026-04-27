import React from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Phone,
} from "lucide-react";

import logo from "../assets/delsova-1.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-gray-900">
      <div className="bg-gradient-to-r from-[#4186d8] to-[#964cb2] px-6 lg:px-16 py-10 lg:py-14">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* === Entreprise === */}
          <div className="space-y-4">
            
            <div className="flex items-center space-x-3">
              
              {/* Logo */}
              <img
                src={logo}
                alt="Delsova Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain bg-white rounded-xl p-1 shadow"
              />

              {/* Name */}
              <div className="text-white">
                <div className="text-xl font-bold leading-none">
                  DELSOVA
                </div>
                <div className="text-sm opacity-80">
                  SARL DELSOVA
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed opacity-90">
              SARL DELSOVA est une entreprise spécialisée dans le développement
              de solutions technologiques innovantes : applications web et
              mobiles, intelligence artificielle et systèmes digitaux avancés.
            </p>
          </div>

          {/* === Contact === */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Contact</h3>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Mail size={18} color="#4186d8" />
              </div>
              <span className="text-white text-sm">
                contact@delsova.dz
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Phone size={18} color="#4186d8" />
              </div>
              <span className="text-white text-sm">
                +213 654 99 25 23
              </span>
            </div>
          </div>

          {/* === Réseaux sociaux === */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">
              Réseaux sociaux
            </h3>

            <div className="flex space-x-4">
              
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Facebook size={18} color="#4186d8" />
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Instagram size={18} color="#4186d8" />
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Music2 size={18} color="#4186d8" />
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <Linkedin size={18} color="#4186d8" />
              </div>

            </div>
          </div>
        </div>

        {/* === Bottom bar === */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/30 text-center">
          <p className="text-white text-sm opacity-90">
            © 2025 <span className="font-semibold">SARL DELSOVA</span> — Tous droits réservés
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;