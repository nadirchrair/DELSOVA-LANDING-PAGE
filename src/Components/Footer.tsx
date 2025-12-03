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

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#f9fcf8] overflow-hidden text-gray-900 pt-8">
      {/* ===== Wave Container ===== */}

      {/* ===== Footer Content ===== */}
      <div className="relative z-20 bg-gradient-to-r from-[#4186d8] to-[#964cb2] px-6 lg:px-16 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* === Left Section === */}
          <div className="w-full lg:w-1/4 space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-[#4186d8] font-bold text-lg">D</span>
              </div>
              <span className="text-white text-xl font-bold">Delsova</span>
            </div>
            <div className="text-white text-sm lg:text-base font-medium leading-6 lg:leading-7">
              Delsova développe des solutions technologiques innovantes incluant
              applications web et mobiles, modèles d'IA en vision par ordinateur
              et IA générative.
            </div>
          </div>

          {/* === Center Section Contact === */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
            <div className="text-white text-xl lg:text-2xl font-extrabold">
              Contactez-nous
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Mail size={20} color="#4186d8" />
              </div>
              <div className="text-white text-base font-medium">
                contact@delsova.com
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Phone size={20} color="#4186d8" />
              </div>
              <div className="text-white text-base font-medium">
                +33 1 23 45 67 89
              </div>
            </div>
          </div>

          {/* === Right Section Réseaux sociaux === */}
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
            <div className="text-white text-xl lg:text-2xl font-extrabold">
              Réseaux sociaux
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <Facebook size={20} color="#4186d8" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <Instagram size={20} color="#4186d8" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <Music2 size={20} color="#4186d8" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
                <Linkedin size={20} color="#4186d8" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Footer bottom text ===== */}
        <div className="max-w-7xl mx-auto mt-8 lg:mt-12 pt-6 border-t border-white/30">
          <div className="text-white text-center text-lg lg:text-xl font-semibold">
            Tous droits réservés © 2025 Delsova
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
