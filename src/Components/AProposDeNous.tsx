import React from "react";
import {
  Users,
  MapPin,
  Code,
  Smartphone,
  Globe,
  Heart,
  Building,
  Flag,
  Mail,
  Phone,
  Calendar,
  Award,
  Target,
} from "lucide-react";

// Données des fondateurs
const fondateurs = [
  {
    id: 1,
    prenom: "Maalem",
    nom: "Nouredinne",
    role: "Lead Développeur & CTO",
    expertise: "Full-Stack & Intelligence Artificielle",
    description:
      "Expert en développement full-stack avec 8 ans d'expérience. Spécialisé dans les architectures cloud, l'IA et les applications évolutives.",
    initiales: "MN",
    couleur: "from-blue-500 to-cyan-500",
    competences: ["React/Next.js", "Node.js", "Python/AI", "Cloud AWS/Azure"],
  },
  {
    id: 2,
    prenom: "Chrair",
    nom: "Nadir",
    role: "Développeur Senior & Chef de Projet",
    expertise: "Mobile & Applications Évolutives",
    description:
      "Spécialiste des applications mobiles cross-platform et de la gestion de projets agiles. Passionné par l'UX/UI.",
    initiales: "CN",
    couleur: "from-purple-500 to-pink-500",
    competences: ["React Native", "Flutter", "UI/UX Design", "Gestion Agile"],
  },
  {
    id: 3,
    prenom: "Benyakhou",
    nom: "Elhadj Larbi",
    role: "Développeur Backend & DevOps",
    expertise: "Architecture Système & Infrastructure",
    description:
      "Expert en développement backend robuste et infrastructure DevOps. Garant de la sécurité et performance des applications.",
    initiales: "BE",
    couleur: "from-emerald-500 to-green-500",
    competences: ["Java/Spring", "Docker/K8s", "Bases de données", "Sécurité"],
  },
];

// Données du siège social
const siegeSocial = {
  ville: "Oran",
  pays: "Algérie",
  adresse: "Plateau Ain El Turk",
  description:
    "Notre siège social est situé au cœur de la vibrante ville d'Oran, capitale économique de l'Ouest algérien.",
  caracteristiques: [
    "Bureau moderne avec vue sur la Méditerranée",
    "Équipements technologiques de pointe",
    "Espace de collaboration innovant",
    "Accès facile depuis le centre-ville",
  ],
};

function AProposDeNous() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f9fcf8]">
      {/* En-tête */}
      <div className="text-center mb-12 lg:mb-16 max-w-5xl mx-auto">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">
            À Propos de Delsova
          </h1>
        </div>
        <p className="text-[#4186d8] text-lg sm:text-xl lg:text-2xl font-medium mb-3">
          Trois Développeurs Passionnés, Une Vision Commune
        </p>
        <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto px-4">
          Fondée par trois développeurs experts, Delsova Technologies incarne
          l'excellence technique et l'innovation au service de la transformation
          digitale des entreprises.
        </p>
      </div>

      {/* Section principale avec deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
        {/* Colonne gauche : Nos fondateurs */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4186d8] to-[#964cb2] flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
              Nos Fondateurs & Développeurs
            </h2>
          </div>

          <div className="space-y-6">
            {fondateurs.map((fondateur) => (
              <div
                key={fondateur.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar avec initiales */}
                  <div className="flex-shrink-0">
                    <div
                      className={`
                      w-16 h-16 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${fondateur.couleur} shadow-md
                    `}
                    >
                      <span className="text-white text-xl font-bold">
                        {fondateur.initiales}
                      </span>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {fondateur.prenom}{" "}
                      <span className="text-[#4186d8]">{fondateur.nom}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-gray-600 font-medium">
                        {fondateur.role}
                      </span>
                      <span className="text-xs text-[#964cb2] font-medium px-2 py-1 bg-[#964cb2]/10 rounded-full">
                        {fondateur.expertise}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {fondateur.description}
                    </p>

                    {/* Compétences */}
                    <div className="flex flex-wrap gap-2">
                      {fondateur.competences.map((competence, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {competence}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : Notre siège social */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934]">
              Notre Siège Social
            </h2>
          </div>

          {/* Carte ou représentation du siège */}
          <div className="bg-gradient-to-br from-[#0e1934] to-[#1a2a4a] rounded-2xl shadow-xl overflow-hidden mb-6">
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
                    <div className="font-medium">
                      {siegeSocial.ville}, {siegeSocial.pays}
                    </div>
                    <div className="text-sm text-blue-100">
                      {siegeSocial.adresse}
                    </div>
                  </div>
                </div>

                <p className="text-blue-100 text-sm">
                  {siegeSocial.description}
                </p>
              </div>

              {/* Caractéristiques */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-bold mb-3 text-blue-200">
                  Caractéristiques du siège :
                </h4>
                <ul className="space-y-2">
                  {siegeSocial.caracteristiques.map((caract, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"></div>
                      <span className="text-sm text-blue-100">{caract}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Représentation visuelle d'Oran */}
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact & Informations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4186d8]/10 flex items-center justify-center">
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
                <div className="w-10 h-10 rounded-lg bg-[#964cb2]/10 flex items-center justify-center">
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

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Année de création :</span>
                <span className="text-[#4186d8] font-bold">2020</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-4 h-4" />
                <span className="font-medium">Spécialisation :</span>
                <span className="text-[#964cb2] font-bold">
                  Solutions Digitales B2B
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Histoire */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1934] mb-4">
            Notre Histoire
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Delsova Technologies a été fondée en 2020 par trois développeurs
                passionnés qui se sont rencontrés lors de projets communs dans
                le domaine du développement web et mobile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Basés à Oran, capitale économique de l'Ouest algérien, nous
                avons choisi cette ville dynamique pour son écosystème
                technologique en plein essor et sa position stratégique sur la
                Méditerranée.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe combine des compétences complémentaires en
                développement full-stack, mobile et infrastructure, nous
                permettant d'aborder des projets complexes avec une approche
                holistique.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">
                Pourquoi "Delsova" ?
              </h4>
              <p className="text-gray-600 mb-4">
                Le nom "Delsova" est une contraction de{" "}
                <span className="font-medium text-[#4186d8]">DEL</span>oppement,
                <span className="font-medium text-[#964cb2]"> SO</span>ftware et{" "}
                <span className="font-medium text-emerald-600">VA</span>leur,
                représentant notre engagement à créer des solutions logicielles
                qui génèrent de la valeur.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4186d8]">3</div>
                  <div className="text-xs text-gray-500">Fondateurs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#964cb2]">50+</div>
                  <div className="text-xs text-gray-500">Projets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">1</div>
                  <div className="text-xs text-gray-500">Siège à Oran</div>
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
