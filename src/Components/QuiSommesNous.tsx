import React from "react";
import { Smartphone, Code, Brain, Target } from "lucide-react";

function QuiSommesNous() {
  return (
    <section className="w-full bg-[#f9fcf8] px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <div className="h-1 w-16 bg-gradient-to-r from-[#4186d8] to-[#964cb2] rounded-full" />
            <h1 className="text-[#0e1934] text-4xl lg:text-5xl font-bold leading-tight">
              Qui Sommes-Nous?
            </h1>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4186d8] to-[#964cb2] text-3xl lg:text-4xl font-extrabold">
              Delsova Technologies
            </h2>

            <p className="text-[#0e1934] text-lg leading-8 max-w-xl">
              Delsova Technologies est une entreprise technologique B2B
              innovante, spécialisée dans le développement de solutions
              digitales adaptées aux exigences du marché international.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#0e1934] text-2xl font-bold mb-4">
              Nos Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Smartphone className="text-[#4186d8] w-7 h-7" />
                <p className="text-[#0e1934] text-base font-medium">
                  Applications mobiles et tablettes
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Code className="text-[#4186d8] w-7 h-7" />
                <p className="text-[#0e1934] text-base font-medium">
                  Développement de sites web
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Brain className="text-[#4186d8] w-7 h-7" />
                <p className="text-[#0e1934] text-base font-medium">
                  Intelligence Artificielle
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#4186d8]/10 to-[#964cb2]/10 border border-[#4186d8]/20">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-[#4186d8] w-7 h-7" />
              <h3 className="text-[#0e1934] text-xl font-bold">
                Notre Mission
              </h3>
            </div>
            <p className="text-[#0e1934] text-lg italic font-medium">
              “Accompagner les entreprises vers la réussite numérique grâce à
              des solutions innovantes et fiables.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuiSommesNous;
