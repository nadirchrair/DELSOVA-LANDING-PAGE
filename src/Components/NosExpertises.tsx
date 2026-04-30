import { useState } from "react";
import {
  Brain,
  Cpu,
  Code2,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Intelligence Artificielle",
    category: "AI Automation",
    description:
      "Automatisation intelligente, vision par ordinateur, analyse prédictive",
    details: [
      "Automatisation intelligente des tâches répétitives",
      "Vision par ordinateur & analyse d'images avancée",
      "Analyse prédictive & modèles de machine learning",
      "Modèles génératifs (GPT, Computer Vision)",
      "IA spécialisée adaptée à votre secteur",
    ],
    icon: Brain,
    color: "from-violet-600 to-purple-600",
  },
  {
    id: 2,
    title: "Digitalisation des Entreprises",
    category: "Enterprise Solutions",
    description: "ERP, CRM, GED, automatisation et optimisation des processus",
    details: [
      "ERP (Enterprise Resource Planning) sur mesure",
      "CRM (Customer Relationship Management) intelligent",
      "GED (Gestion Électronique des Documents)",
      "Automatisation de workflows complexes",
      "Optimisation des processus internes",
    ],
    icon: Cpu,
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    title: "Smart Software",
    category: "Custom Development",
    description:
      "Solutions adaptées, architecture scalable, sécurité renforcée",
    details: [
      "Développement de solutions sur mesure",
      "Architecture scalable et évolutive",
      "Sécurité renforcée et conformité des données",
      "Performance optimisée et haute disponibilité",
      "Maintenance et évolutions continues",
    ],
    icon: Code2,
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Développement Web & Mobile",
    category: "Digital Products",
    description: "Applications web robustes, apps iOS/Android, UX moderne",
    details: [
      "Applications web robustes et performantes",
      "Apps iOS & Android natives optimisées",
      "UX/UI moderne et intuitive",
      "Intégration API & services cloud",
      "Déploiement cloud sécurisé",
    ],
    icon: Smartphone,
    color: "from-orange-600 to-red-600",
  },
];

const expertiseStyles = `
  @keyframes blob {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

function NosExpertises() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden py-12 lg:py-20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-12 pb-8 lg:pb-12 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full">
              NOS EXPERTISES
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Solutions Digitales{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Complètes & Innovantes
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            De l'Intelligence Artificielle aux applications web et mobile, nous
            maîtrisons l'ensemble des technologies pour transformer votre
            entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="px-6 lg:px-12 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`
                    relative h-full bg-white/40 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 
                    border-2 transition-all duration-500 overflow-hidden
                    ${
                      isActive || isHovered
                        ? `border-violet-600 shadow-lg`
                        : "border-transparent"
                    }
                  `}
                  >
                    <div className="relative z-20">
                      {/* Icon and Category */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                            isActive || isHovered
                              ? `bg-gradient-to-r ${service.color} text-white`
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {service.category}
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Details - Expandable */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-3 mb-6">
                          {service.details.map((detail, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 group/item"
                            >
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br ${service.color} transform group-hover/item:scale-110 transition-transform duration-300`}
                              >
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-slate-700 text-sm lg:text-base">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        className={`w-full py-3 lg:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                          isActive || isHovered
                            ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        <span>
                          {isActive ? "Voir moins" : "Découvrir plus"}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{expertiseStyles}</style>
    </section>
  );
}

export default NosExpertises;
