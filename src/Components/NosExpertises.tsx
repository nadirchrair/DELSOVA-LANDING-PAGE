import React, { useState } from "react";
import {
  Brain,
  Cpu,
  Code2,
  Smartphone,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Intelligence Artificielle",
    category: "AI Automation",
    description: "Solutions IA avancées pour automatiser vos processus",
    details: [
      "Chatbots & Voicebots intelligents",
      "Computer Vision & Analyse d'images",
      "Modèles génératifs avancés",
      "Prédictions & Analyse de données",
    ],
    icon: Brain,
    color: "from-violet-600 to-purple-600",
    projects: 4,
    stats: "94%+ Précision",
  },
  {
    id: 2,
    title: "Digitalisation Entreprises",
    category: "Enterprise Solutions",
    description: "Transformez vos processus métier numériquement",
    details: [
      "Gestion Électronique des Documents",
      "ERP/CRM/RH personnalisés",
      "Workflows automatisés intelligents",
      "Intégration systèmes avancée",
    ],
    icon: Cpu,
    color: "from-blue-600 to-cyan-600",
    projects: 2,
    stats: "100% Intégration",
  },
  {
    id: 3,
    title: "Smart Software",
    category: "Custom Development",
    description: "Applications performantes et sécurisées sur mesure",
    details: [
      "Solutions logicielles sur mesure",
      "Applications data-driven",
      "Architecture scalable & sécurisée",
      "Performance optimisée",
    ],
    icon: Code2,
    color: "from-emerald-600 to-teal-600",
    projects: 3,
    stats: "Haute Performance",
  },
  {
    id: 4,
    title: "Web & Mobile",
    category: "Digital Products",
    description: "Expériences numériques modernes et fluides",
    details: [
      "Applications web robustes & rapides",
      "iOS & Android natives optimisés",
      "UX/UI design moderne & intuitif",
      "API avancées & scalables",
    ],
    icon: Smartphone,
    color: "from-orange-600 to-red-600",
    projects: 5,
    stats: "Multi-Plateforme",
  },
];

const stats = [
  { label: "Projets Réalisés", value: "14+", icon: TrendingUp },
  { label: "Satisfaction Client", value: "100%", icon: CheckCircle2 },
  { label: "Technologies", value: "50+", icon: Zap },
  { label: "Experts", value: "15+", icon: Shield },
];

function NosExpertises() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-12 pt-12 lg:pt-20 pb-8 lg:pb-12 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full">
              NOS SERVICES
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
            Vos Solutions{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Digitales Complètes
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            De l'IA avancée aux applications mobile performantes, nous
            transformons vos idées en solutions innovantes
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-violet-600 hover:border-violet-600 transition-all duration-300 hover:shadow-xl"
                >
                  <Icon className="w-6 h-6 text-violet-600 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200/50">
                        <span className="text-sm font-semibold text-slate-600">
                          {service.stats}
                        </span>
                        <span className="text-sm font-bold text-slate-400">
                          {service.projects} projets
                        </span>
                      </div>

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

        {/* CTA Section */}
        <div className="px-6 lg:px-12 pb-12 lg:pb-20">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-center border border-white/10 backdrop-blur-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre vision ?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
              Discutons de vos besoins et trouvons la solution parfaite pour
              votre entreprise
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              <span>Commencer maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}

export default NosExpertises;
