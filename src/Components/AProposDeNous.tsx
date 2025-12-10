import React from "react";
import {
  Users,
  MapPin,
  Building,
  Flag,
  Mail,
  Phone,
  Calendar,
  Award,
  Globe,
  CheckCircle2,
} from "lucide-react";

// Données du siège social
const siegeSocial = {
  ville: "Oran",
  pays: "Algérie",
  description:
    "Notre siège social est situé au cœur de la vibrante ville d'Oran, capitale économique de l'Ouest algérien.",
};

// Données "Pourquoi Delsova"
const whyDelsova = [
  {
    icon: Award,
    title: "Expertise Reconnue",
    description:
      "Leadership expérimenté avec plus de 60 ans d'expérience en management stratégique et industrie.",
  },
  {
    icon: Users,
    title: "Équipe Technique Qualifiée",
    description:
      "Ingénieurs informatiques avec 6+ ans d'expérience en gestion de projets et innovation digitale.",
  },
  {
    icon: CheckCircle2,
    title: "Solutions Personnalisées",
    description:
      "Recommandations adaptées avec roadmap claire, actions priorisées et ROI estimé pour votre transformation.",
  },
];

function AProposDeNous() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f9fcf8]">
      {/* En-tête */}
      <div className="text-center mb-12 lg:mb-16 max-w-5xl mx-auto  p-8 lg:p-12">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">
            À Propos de Delsova
          </h1>
        </div>
        <p className="text-[#4186d8] text-lg sm:text-xl lg:text-2xl font-medium mb-4">
          Leadership Expérimenté & Expertise Technique
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-[#4186d8] to-[#964cb2] mx-auto mb-4"></div>
        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto">
          Delsova Technologies combine une vision stratégique forte avec une
          expertise technique de pointe pour offrir des solutions digitales
          innovantes.
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 max-w-5xl mx-auto h-1 bg-gradient-to-r from-transparent via-[#4186d8] to-transparent rounded-full"></div>

      {/* Section Qui sommes-nous */}
      <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
            <Building className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
            Qui Sommes-Nous ?
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#4186d8]/30 hover:border-[#4186d8]/60 transition-colors duration-300">
          <p className="text-gray-700 text-lg leading-8 mb-6">
            <span className="font-bold text-[#0e1934]">
              Delsova Technologies
            </span>
            , créée en <span className="font-bold text-[#4186d8]">2025</span>,
            est une entreprise spécialisée dans les solutions digitales et
            l'innovation technologique. Fondée par des professionnels
            expérimentés avec plus de 60 ans d'expérience cumulée en leadership
            stratégique et management industriel, nous mettons notre expertise
            au service de la transformation numérique des entreprises.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Nos équipes composées d'ingénieurs informatiques qualifiés,
            possédant 6+ ans d'expérience en gestion de projets, innovation et
            stratégie digitale, sont dédiées à la création de solutions
            technologiques performantes et adaptées à vos besoins spécifiques.
            Nous ne proposons pas de solutions génériques – chaque
            recommandation est élaborée avec une compréhension profonde de votre
            contexte, vos objectifs et vos contraintes.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            Notre approche repose sur trois étapes clés : une analyse complète
            de votre situation, un diagnostic approfondi des enjeux
            opérationnels, et la proposition de solutions adaptées avec roadmap
            détaillée et ROI estimé. En choisissant Delsova, vous optez pour un
            partenaire de confiance qui accompagne votre transformation digitale
            avec rigueur et innovation.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 max-w-5xl mx-auto h-1 bg-gradient-to-r from-transparent via-[#964cb2] to-transparent rounded-full"></div>

      {/* Section Pourquoi Delsova */}
      <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
            Pourquoi Choisir Delsova ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyDelsova.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-emerald-500/30 hover:border-emerald-500/60"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4186d8]/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#4186d8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0e1934]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 max-w-5xl mx-auto h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>

      {/* Section Siège Social */}
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
            Notre Siège Social
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte */}
          <div className="bg-gradient-to-br from-[#0e1934] to-[#1a2a4a] rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-blue-300" />
                <div>
                  <h3 className="text-xl font-bold">Delsova Technologies</h3>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Flag className="w-4 h-4" />
                    <span>Siège Social</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="font-medium text-lg">
                      {siegeSocial.ville}, {siegeSocial.pays}
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 text-sm">
                  {siegeSocial.description}
                </p>
              </div>
            </div>

            {/* Représentation visuelle */}
            <div className="relative h-48 bg-gradient-to-r from-blue-900 to-cyan-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-white/30 mx-auto mb-2" />
                  <div className="text-white font-bold text-lg">
                    ORAN, ALGÉRIE
                  </div>
                  <div className="text-white/70 text-sm">
                    Méditerranée • Innovation • Croissance
                  </div>
                </div>
              </div>

              {/* Points de repère */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30"></div>
              <div className="absolute top-12 right-12 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
            </div>
          </div>

          {/* Contact et informations */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Contact & Informations
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4186d8]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#4186d8]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Téléphone</div>
                  <div className="font-medium text-gray-800">
                    +213 XXX XX XX XX
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#964cb2]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#964cb2]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium text-gray-800">
                    contact@delsova.com
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">Année de création :</span>
                <span className="text-[#4186d8] font-bold">2025</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <Award className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Spécialisation :</span>
                  <div className="text-[#964cb2] font-bold text-sm">
                    Solutions Digitales B2B
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AProposDeNous;
