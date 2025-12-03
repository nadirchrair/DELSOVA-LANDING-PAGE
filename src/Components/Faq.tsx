import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    category: "Services",
    question: "Quels services DELSOVA propose-t-il ?",
    answer:
      "DELSOVA offre une gamme complète de services : Intelligence Artificielle (IA), Digitalisation Entreprises (ERP/CRM), Smart Software sur mesure, et Web & Mobile. Nous transformons vos processus métier avec des solutions innovantes et performantes.",
  },
  {
    id: 2,
    category: "Services",
    question: "Pouvez-vous personnaliser les solutions selon mes besoins ?",
    answer:
      "Absolument ! Nous créons des solutions sur mesure adaptées à votre contexte spécifique. Notre processus client inclut une analyse approfondie de vos besoins avant de proposer une solution optimale.",
  },
  {
    id: 3,
    category: "Processus",
    question: "Combien de temps prend une implémentation ?",
    answer:
      "La durée dépend de la complexité de votre projet. Nous utilisons des méthodologies agiles pour livrer rapidement. En moyenne, nos projets durent de 2 à 6 mois, avec des livrables réguliers.",
  },
  {
    id: 4,
    category: "Processus",
    question: "Comment se déroule votre processus client ?",
    answer:
      "Notre processus comprend 5 étapes : Analyse de Situation, État des Lieux, Diagnostic, Analyse de Problème, et Proposition de Solution. Chaque étape garantit une compréhension complète de vos besoins.",
  },
  {
    id: 5,
    category: "Support",
    question: "Quel support recevrai-je après la livraison ?",
    answer:
      "Nous offrons un support continu incluant maintenance, mises à jour et assistance technique. Votre succès est notre priorité, et nous restons à vos côtés après le lancement.",
  },
];

function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              FAQ
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Questions Fréquemment{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Posées
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trouvez les réponses à vos questions sur nos services, processus et
            support
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white/60 backdrop-blur-xl rounded-2xl border-2 border-violet-600 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() =>
                  setActiveId(activeId === item.id ? null : item.id)
                }
                className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-start justify-between gap-4 hover:bg-white/40 transition-colors duration-300"
              >
                <div className="text-left flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 text-left">
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ${
                    activeId === item.id ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeId === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 pt-2 border-t border-violet-200/50">
                  <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}

export default Faq;
