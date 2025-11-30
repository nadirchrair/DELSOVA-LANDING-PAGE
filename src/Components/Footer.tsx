import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, UserCheck, Mail, Facebook, Instagram, Linkedin, Music2, Phone, Code, Brain, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#f9fcf8] overflow-hidden text-gray-900 pt-8">
      {/* ===== Wave Container ===== */}
      <div className="relative w-full h-48 lg:h-64">
        {/* ===== Second (bottom) wave ===== */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 573"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0"
            preserveAspectRatio="none"
          >
            <path
              d="M1491 0C1491 0 1054.5 118.928 773.385 93.1084C622.428 79.2433 543.374 9.27078 391.964 12.2205C253.273 14.9224 162.307 123.369 43.7098 93.1084C-74.8875 62.8482 43.7098 483 43.7098 483H1491V0Z"
              fill="#4186d8"
            />
          </svg>
        </div>

        {/* ===== First (top) wave ===== */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 573"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="relative z-10"
        >
          <g filter="url(#filter0_d_1_69)">
            <path
              d="M-9 77.3C-9 77.3 443.212 199.183 734.449 172.722C890.841 158.512 972.74 86.8012 1129.6 89.8241C1273.28 92.5932 1367.53 203.734 1490.39 172.722C1613.26 141.71 1490.39 572.3 1490.39 572.3H-9V77.3Z"
              fill="#964cb2"
            />
            <path
              d="M-4 83.7893C-0.658407 84.6619 3.96737 85.8601 9.77051 87.3323C22.7305 90.6199 41.5618 95.285 65.0664 100.799C112.073 111.827 177.786 126.254 252.616 139.854C402.148 167.03 588.57 190.997 734.901 177.701C813.766 170.536 873.908 148.845 933.391 129.568C992.886 110.286 1051.93 93.3285 1129.5 94.8235C1200.17 96.1853 1258.67 124.159 1315.84 148.54C1372.69 172.782 1428.39 193.527 1491.62 177.57C1505.52 174.06 1515.09 177.141 1522.05 184.438C1529.4 192.142 1534.46 205.199 1537.29 222.863C1542.92 258.059 1539.19 308.324 1531.52 360.15C1523.87 411.83 1512.39 464.526 1502.81 504.335C1498.02 524.231 1493.71 540.89 1490.6 552.572C1489.05 558.412 1487.79 563.007 1486.92 566.139C1486.81 566.552 1486.7 566.939 1486.6 567.3H-4V83.7893Z"
              stroke="white"
              strokeWidth="10"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_69"
              x="-90.3"
              y="0"
              width="1716.6"
              height="657.6"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="40.65" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_69"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_69"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

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
              Delsova développe des solutions technologiques innovantes incluant applications web et mobiles, 
              modèles d'IA en vision par ordinateur et IA générative.
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