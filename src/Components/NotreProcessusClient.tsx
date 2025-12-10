import React, { useState } from "react";
import {
  Search,
  FileText,
  ClipboardCheck,
  Target,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "ANALYSE DE SITUATION",
    description:
      "Compréhension complète de votre contexte, objectifs, contraintes et audit des processus existants.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    shortDesc: "Analyse initiale",
  },
  {
    id: 2,
    number: "02",
    title: "DIAGNOSTIC ET ANALYSE DU PROBLÈME",
    description:
      "Identification des forces, faiblesses et obstacles opérationnels. Définition claire des priorités et des enjeux qui impactent votre activité.",
    icon: Target,
    color: "from-teal-500 to-emerald-400",
    shortDesc: "Diagnostic approfondi",
  },
  {
    id: 3,
    number: "03",
    title: "PROPOSITION D'UNE SOLUTION",
    description:
      "Recommandations adaptées avec roadmap, actions priorisées et ROI estimé pour votre transformation.",
    icon: Lightbulb,
    color: "from-green-500 to-lime-400",
    shortDesc: "Solution personnalisée",
  },
];
function NotreProcessusClient() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#f9fcf8] to-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-[#0e1934] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
          NOTRE PROCESSUS CLIENT
        </h1>
        <p className="text-[#4186d8] text-sm sm:text-base lg:text-lg xl:text-xl max-w-4xl mx-auto px-4 mb-2">
          Une méthodologie structurée pour garantir le succès de votre
          transformation digitale
        </p>
        <p className="text-gray-600 text-sm lg:text-base max-w-3xl mx-auto px-4">
          <span className="font-semibold text-[#0e1934]">
            Engagement Delsova :
          </span>{" "}
          Des solutions spécifiques et adaptées, conçues pour garantir la
          performance et le succès durable de votre entreprise.
        </p>
      </div>

      {/* Desktop Vertical Timeline */}
      <div className="hidden sm:block">
        {/* Vertical Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4186d8] via-[#964cb2] to-green-500 transform -translate-x-1/2 z-0"></div>

          {/* Steps */}
          <div className="relative space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative">
                  {/* Flex Container - alternates left/right */}
                  <div
                    className={`flex items-center ${
                      isLeft ? "" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-5/12 ${
                        isLeft ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div
                        className={`
                        p-6 lg:p-8 rounded-xl lg:rounded-2xl transition-all duration-300 cursor-pointer
                        ${
                          isActive
                            ? "bg-white shadow-lg ring-2 ring-[#4186d8]"
                            : isCompleted
                            ? "bg-gray-50"
                            : "bg-white hover:shadow-md"
                        }
                      `}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`
                            w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                            ${
                              isActive
                                ? `bg-gradient-to-br ${step.color}`
                                : "bg-gray-200"
                            }
                            ${isLeft ? "order-2" : "order-1"}
                          `}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                isActive ? "text-white" : "text-gray-600"
                              }`}
                            />
                          </div>
                          <div
                            className={
                              isLeft ? "order-1 text-right" : "order-2"
                            }
                          >
                            <span
                              className={`text-xs font-bold ${
                                isActive ? "text-[#4186d8]" : "text-gray-500"
                              }`}
                            >
                              ÉTAPE {step.number}
                            </span>
                          </div>
                        </div>
                        <h3
                          className={`
                          text-base lg:text-lg font-bold mb-2
                          ${
                            isActive
                              ? "text-gray-800"
                              : isCompleted
                              ? "text-gray-600"
                              : "text-gray-700"
                          }
                        `}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`
                          text-sm lg:text-base leading-relaxed
                          ${isActive ? "text-gray-600" : "text-gray-500"}
                        `}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="w-2/12 flex justify-center z-10 relative">
                      <div
                        className={`
                        w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center
                        transition-all duration-300 transform hover:scale-110 cursor-pointer
                        ${
                          isActive
                            ? `bg-gradient-to-br ${step.color} shadow-lg ring-4 ring-white`
                            : isCompleted
                            ? "bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-gray-300"
                            : "bg-white border-2 lg:border-4 border-gray-200"
                        }
                      `}
                        onClick={() => setActiveStep(index)}
                      >
                        <div
                          className={`
                          flex flex-col items-center justify-center
                          ${
                            isActive
                              ? "text-white"
                              : isCompleted
                              ? "text-gray-700"
                              : "text-gray-500"
                          }
                        `}
                        >
                          <span className="text-xs lg:text-sm font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for right side */}
                    <div className="w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="sm:hidden">
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4186d8] via-[#964cb2] to-green-500 z-0"></div>

          <div className="relative space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <div
                  key={step.id}
                  className="flex items-start gap-4"
                  onClick={() => setActiveStep(index)}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${step.color} shadow-md ring-2 ring-white ring-opacity-50`
                          : isCompleted
                          ? "bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-300"
                          : "bg-white border-2 border-gray-300"
                      }
                    `}
                    >
                      <Icon
                        className={`
                        w-4 h-4
                        ${
                          isActive
                            ? "text-white"
                            : isCompleted
                            ? "text-gray-500"
                            : "text-gray-400"
                        }
                      `}
                      />
                    </div>
                    <div
                      className={`absolute -top-1 -right-1 rounded-full p-0.5 shadow-sm ${
                        isActive
                          ? "bg-white"
                          : isCompleted
                          ? "bg-gray-100"
                          : "bg-gray-50"
                      }`}
                    >
                      <span
                        className={`text-[8px] font-bold ${
                          isActive
                            ? "text-gray-800"
                            : isCompleted
                            ? "text-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`
                    flex-1 p-4 rounded-lg transition-all duration-300 min-h-[120px]
                    ${
                      isActive
                        ? "bg-white shadow-md"
                        : isCompleted
                        ? "bg-gray-50"
                        : "bg-gray-50 opacity-80"
                    }
                  `}
                  >
                    <h3
                      className={`font-bold mb-2 text-sm ${
                        isActive
                          ? "text-gray-800"
                          : isCompleted
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed mb-3 ${
                        isActive ? "text-gray-600" : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                    {isActive && index < processSteps.length - 1 && (
                      <div
                        className="flex items-center text-[#4186d8] text-xs font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveStep(index + 1);
                        }}
                      >
                        <ArrowRight className="w-3 h-3 mr-1" />
                        <span>Étape suivante</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation mobile */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center shadow-sm
                ${
                  activeStep === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-200 text-gray-600"
                }
              `}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-1">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all
                    ${
                      index === activeStep
                        ? "bg-[#4186d8] w-6"
                        : index < activeStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))
              }
              disabled={activeStep === processSteps.length - 1}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center shadow-sm
                ${
                  activeStep === processSteps.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-gray-200 text-gray-600"
                }
              `}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotreProcessusClient;
