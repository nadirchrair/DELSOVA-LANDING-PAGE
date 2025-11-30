import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, UserCheck, Mail, Facebook, Instagram, Linkedin, Music2, Phone, Code, Brain, Smartphone } from 'lucide-react';

// Presentation Component
function Presentation() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
      {/* === LEFT SIDE === */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h1 className="text-[#0e1934] text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Solutions Digitales
            <span className="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">
              Innovantes
            </span>
          </h1>
          <h2 className="text-[#4186d8] text-xl lg:text-3xl xl:text-4xl font-normal">
            Web, Mobile & Intelligence Artificielle
          </h2>
          <p className="text-[#0e1934] text-base lg:text-lg xl:text-xl font-normal leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
            Delsova développe des solutions technologiques avancées incluant applications web et mobiles, 
            modèles d'IA en vision par ordinateur et IA générative pour transformer vos idées en réalité digitale.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {/* Contact Button */}
          <div className="w-full sm:w-64 h-16 bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-2xl shadow-lg flex items-center justify-center px-4 cursor-pointer hover:opacity-90 transition">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg font-semibold">
                Nous Contacter
              </div>
              <div className="text-white text-xs font-medium">
                Discutons de votre projet
              </div>
            </div>
          </div>

          {/* Portfolio Button */}
          <div className="w-full sm:w-64 h-16 bg-[#0e1934] rounded-2xl shadow-lg flex items-center justify-center px-4 cursor-pointer hover:bg-[#1a2a4a] transition">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg font-semibold">
                Voir nos Réalisations
              </div>
              <div className="text-white text-xs font-medium">
                Découvrez nos projets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <div className="relative w-full max-w-md lg:max-w-[550px] h-64 lg:h-80 bg-gradient-to-br from-[#4186d8] to-[#964cb2] rounded-2xl lg:rounded-[30px] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <Code className="text-white w-8 h-8 mb-2" />
                <span className="text-white text-sm text-center">Développement Web</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <Smartphone className="text-white w-8 h-8 mb-2" />
                <span className="text-white text-sm text-center">Applications Mobiles</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <Brain className="text-white w-8 h-8 mb-2" />
                <span className="text-white text-sm text-center">IA Générative</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <CheckCircle className="text-white w-8 h-8 mb-2" />
                <span className="text-white text-sm text-center">Vision par Ordinateur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;