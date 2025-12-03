import React from "react";
import { Globe, Heart, Target } from "lucide-react";

function NotreMission() {
  return (
    <div className="bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-3xl p-8 lg:p-12 shadow-xl mb-12 lg:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Notre Mission & Vision
          </h2>
          <p className="text-blue-100 text-lg max-w-4xl mx-auto">
            Trois développeurs, une ambition : révolutionner l'expérience
            digitale des entreprises
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Notre Mission</h3>
            <p className="text-blue-100">
              Développer des solutions digitales innovantes qui optimisent les
              processus métiers et créent de la valeur pour nos clients, grâce à
              notre expertise technique collective.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Notre Vision</h3>
            <p className="text-blue-100">
              Devenir le partenaire technologique de référence en Algérie et en
              Afrique, en combinant innovation, qualité et proximité avec nos
              clients.
            </p>
          </div>

          {/* Valeurs */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Nos Valeurs</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span>Excellence technique</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span>Innovation continue</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                <span>Collaboration & Transparence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreMission;
