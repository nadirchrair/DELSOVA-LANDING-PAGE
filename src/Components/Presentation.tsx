import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Zap } from "lucide-react";

function Presentation() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-[#0e1934] text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Delsova Technologies
            <span className="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
              Innovation – IA – Digitalisation
            </span>
          </h1>
          <h2 className="text-[#4186d8] text-xl lg:text-2xl xl:text-3xl font-semibold">
            Nous accompagnons la transformation des entreprises
          </h2>
          <p className="text-[#0e1934] text-base lg:text-lg xl:text-xl font-normal leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
            Nous sommes des visionnaires. Nous créons des solutions qui font
            avancer votre entreprise au moyen d'outils numériques performants.
          </p>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-[#4186d8]" />
            <span className="text-sm font-medium text-gray-700">
              Innovation
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <Zap className="w-4 h-4 text-[#964cb2]" />
            <span className="text-sm font-medium text-gray-700">
              Performance
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">
              Succès Durable
            </span>
          </div>
        </div>

        {/* Book a Meeting Button */}
        <div className="mt-2">
          <button className="px-9 py-6 bg-gradient-to-r from-[#0e1934] to-[#4186d8] text-white text-base font-bold rounded-lg hover:shadow-lg transition-shadow duration-200 flex items-center gap-3 whitespace-nowrap">
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

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-md lg:max-w-[550px] h-full lg:h-full rounded-2xl lg:rounded-[30px] shadow-2xl overflow-hidden">
          <img
            src="/assets/home.png"
            alt="Delsova Technologies - Innovation, IA et Digitalisation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
