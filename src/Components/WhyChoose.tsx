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

// WhyChoose Component
const WhyChoose: React.FC = () => {
  return (
    <div className="w-full bg-[#f9fcf8] flex flex-col lg:flex-row justify-between items-start px-6 lg:px-16 py-12 lg:py-16 gap-8 lg:gap-12">
      {/* ---------- Left Section ---------- */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        <div className="text-[#0e1934] text-2xl lg:text-3xl font-bold">
          Pourquoi choisir DELSOVA ?
        </div>

        <div className="text-[#0e1934] text-base font-normal max-w-full lg:max-w-sm">
          Delsova combine expertise technique et innovation pour créer des
          solutions digitales qui répondent parfaitement à vos besoins business.
        </div>
      </div>

      {/* ---------- Right Section (Cards Grid) ---------- */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ---------- Top Left: Gradient Card ---------- */}
        <div className="h-32 lg:h-36 bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-xl shadow-lg flex items-center gap-4 lg:gap-5 px-4 lg:px-6">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <Code className="text-[#4186d8] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white text-lg lg:text-xl font-extrabold">
              Expertise Technique
            </div>
            <div className="text-white text-xs font-normal max-w-full lg:max-w-[14rem]">
              Équipe d'experts en développement full-stack, mobile et
              intelligence artificielle.
            </div>
          </div>
        </div>

        {/* ---------- Top Right: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-lg flex items-center gap-4 lg:gap-5 px-4 lg:px-6 border border-gray-100">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f0f5ff] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <Brain className="text-[#964cb2] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[#0e1934] text-lg lg:text-xl font-extrabold">
              Innovation IA
            </div>
            <div className="text-[#0e1934] text-xs font-normal max-w-full lg:max-w-[14rem]">
              Solutions d'IA avancées en vision par ordinateur et génération de
              contenu.
            </div>
          </div>
        </div>

        {/* ---------- Bottom Left: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-lg flex items-center gap-4 lg:gap-5 px-4 lg:px-6 border border-gray-100">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f0f5ff] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <Clock className="text-[#4186d8] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[#0e1934] text-lg lg:text-xl font-extrabold">
              Livraison Rapide
            </div>
            <div className="text-[#0e1934] text-xs font-normal max-w-full lg:max-w-[14rem]">
              Méthodologies agiles pour des résultats rapides sans compromis
              qualité.
            </div>
          </div>
        </div>

        {/* ---------- Bottom Right: White Card ---------- */}
        <div className="h-32 lg:h-36 bg-white rounded-xl shadow-lg flex items-center gap-4 lg:gap-5 px-4 lg:px-6 border border-gray-100">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#f0f5ff] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <UserCheck className="text-[#964cb2] w-6 h-6 lg:w-7 lg:h-7" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[#0e1934] text-lg lg:text-xl font-extrabold">
              Support Continu
            </div>
            <div className="text-[#0e1934] text-xs font-normal max-w-full lg:max-w-[14rem]">
              Accompagnement et maintenance continue pour assurer le succès de
              votre projet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
