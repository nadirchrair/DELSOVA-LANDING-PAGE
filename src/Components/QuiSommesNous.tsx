import {
  Smartphone,
  Globe,
  Brain,
  Cpu,
  Target,
  TrendingUp,
} from "lucide-react";

function QuiSommesNous() {
  const services = [
    {
      icon: Smartphone,
      title: "Applications Mobiles & Tablettes",
      description: "Conception d'applications iOS & Android performantes",
    },
    {
      icon: Globe,
      title: "Sites Web Professionnels",
      description: "Développement de plateformes web modernes et évolutives",
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "IA & Automatisation des processus métiers",
    },
    {
      icon: Cpu,
      title: "Digitalisation des Flux",
      description: "Optimisation des opérations et processus métiers",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f9fcf8]">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16 max-w-5xl mx-auto">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">
            Qui Sommes-nous ?
          </h1>
        </div>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto px-4 leading-relaxed">
          <span className="font-bold text-[#0e1934]">Delsova Technologies</span>{" "}
          est une entreprise technologique{" "}
          <span className="font-semibold text-[#4186d8]">
            B2B (Business to Business)
          </span>
          , spécialisée dans la création de solutions adaptées aux besoins du
          marché national et international.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934] mb-8 text-center">
          Nous intervenons dans :
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#4186d8]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4186d8] to-[#964cb2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-[#0e1934] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Notre Mission
              </h2>
            </div>
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              Assurer le succès de votre entreprise grâce à des outils
              numériques <span className="font-bold">fiables</span>,{" "}
              <span className="font-bold">modernes</span> et{" "}
              <span className="font-bold">adaptés</span>.
            </p>
          </div>

          {/* Mission Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">Fiables</div>
                <div className="text-sm text-blue-100">
                  Solutions robustes et sécurisées
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">Modernes</div>
                <div className="text-sm text-blue-100">
                  Technologies de pointe
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">Adaptés</div>
                <div className="text-sm text-blue-100">
                  Sur mesure pour vos besoins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuiSommesNous;
