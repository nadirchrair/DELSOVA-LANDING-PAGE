import React, { useState } from "react";
import {
  Code,
  Brain,
  Clock,
  UserCheck,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";

const WhyChoose: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: Code,
      title: "Expertise Technique",
      description:
        "Équipe d'experts en développement full-stack, mobile et intelligence artificielle.",
      color: "from-blue-600 to-cyan-600",
      lightColor: "blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      id: 2,
      icon: Brain,
      title: "Innovation IA",
      description:
        "Solutions d'IA avancées en vision par ordinateur et génération de contenu.",
      color: "from-purple-600 to-pink-600",
      lightColor: "purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: 3,
      icon: Clock,
      title: "Livraison Rapide",
      description:
        "Méthodologies agiles pour des résultats rapides sans compromis qualité.",
      color: "from-emerald-600 to-teal-600",
      lightColor: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      id: 4,
      icon: UserCheck,
      title: "Support Continu",
      description:
        "Accompagnement et maintenance continue pour assurer le succès de votre projet.",
      color: "from-orange-600 to-red-600",
      lightColor: "orange",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-16 py-12 lg:py-20">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
              POURQUOI NOUS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DELSOVA
            </span>{" "}
            ?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Delsova combine expertise technique et innovation pour créer des
            solutions digitales qui répondent parfaitement à vos besoins
            business. Nous transformons vos défis en opportunités de croissance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <div
                  className={`
                  relative h-full bg-white/40 backdrop-blur-xl rounded-2xl p-6 lg:p-8
                  border transition-all duration-500 overflow-hidden
                  ${
                    isHovered
                      ? "border-white/40 shadow-2xl scale-105"
                      : "border-white/20 hover:border-white/30"
                  }
                `}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-20 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`
                      w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color}
                      flex items-center justify-center shadow-lg mb-6
                      transform group-hover:scale-110 transition-transform duration-500
                    `}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm lg:text-base leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    {/* Arrow */}
                    <div
                      className={`
                      mt-4 pt-4 border-t border-slate-200/50
                      flex items-center text-sm font-semibold
                      transition-all duration-500
                      ${
                        isHovered
                          ? `bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`
                          : "text-slate-400"
                      }
                    `}
                    >
                      <span>En savoir plus</span>
                      <ArrowRight
                        className={`w-4 h-4 ml-2 transition-transform duration-500 ${
                          isHovered ? "translate-x-2" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-semibold">
              PRÊT À COMMENCER
            </span>
            <Zap className="w-6 h-6 text-amber-400" />
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transformez votre vision en réalité
          </h3>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Discutons de vos besoins et découvrez comment nous pouvons vous
            aider
          </p>

          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto group">
            <span>Commencer maintenant</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
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
};

export default WhyChoose;
