import React from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      className="relative w-full overflow-hidden text-gray-900"
    >
      <div className="relative z-20 bg-gradient-to-r from-[#4186d8] to-[#964cb2] px-6 lg:px-16 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* === Left: Brand === */}
          <div className="w-full lg:w-1/4 space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3" aria-hidden="true">
                <span className="text-[#4186d8] font-bold text-lg">D</span>
              </div>
              <span className="text-white text-xl font-bold">Delsova</span>
            </div>
            <p className="text-white text-sm lg:text-base font-medium leading-6 lg:leading-7">
              Delsova développe des solutions technologiques innovantes incluant
              applications web et mobiles, modèles d'IA en vision par ordinateur
              et IA générative.
            </p>
          </div>

          {/* === Center: Contact === */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
            <h2 className="text-white text-xl lg:text-2xl font-extrabold m-0">
              Contactez-nous
            </h2>
            <a
              href="mailto:contact@delsova.dz"
              className="flex items-center space-x-4 hover:opacity-90 transition"
              aria-label="Envoyer un email à contact@delsova.dz"
            >
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center" aria-hidden="true">
                <Mail size={20} color="#4186d8" />
              </span>
              <span className="text-white text-base font-medium">
                contact@delsova.dz
              </span>
            </a>
            <a
              href="tel:+213654992523"
              className="flex items-center space-x-4 hover:opacity-90 transition"
              aria-label="Appeler le +213 654 992 523"
            >
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center" aria-hidden="true">
                <Phone size={20} color="#4186d8" />
              </span>
              <span className="text-white text-base font-medium">
                +213 654 992 523
              </span>
            </a>
            <a
              href="https://maps.app.goo.gl/Ve9tXh48DNyFRF6T8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:opacity-90 transition"
              aria-label="Voir notre adresse sur Google Maps"
            >
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center" aria-hidden="true">
                <MapPin size={20} color="#4186d8" />
              </span>
              <span className="text-white text-base font-medium">
                Bir El Djir, Oran, Algérie
              </span>
            </a>
          </div>

          {/* === Right: Social === */}
          <nav
            aria-label="Réseaux sociaux"
            className="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4"
          >
            <h2 className="text-white text-xl lg:text-2xl font-extrabold m-0">
              Réseaux sociaux
            </h2>
            <ul className="flex space-x-4 list-none p-0 m-0">
              <li>
                <a
                  href="https://www.facebook.com/delsova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Delsova sur Facebook"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Facebook size={20} color="#4186d8" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/delsova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Delsova sur Instagram"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Instagram size={20} color="#4186d8" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@delsova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Delsova sur TikTok"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Music2 size={20} color="#4186d8" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/delsova"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Delsova sur LinkedIn"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <Linkedin size={20} color="#4186d8" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto mt-8 lg:mt-12 pt-6 border-t border-white/30">
          <p className="text-white text-center text-base lg:text-lg font-semibold m-0">
            © {new Date().getFullYear()} Delsova Technologies — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
