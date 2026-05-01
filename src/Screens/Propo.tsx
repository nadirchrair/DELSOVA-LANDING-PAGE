import AProposDeNous from "../Components/AProposDeNous.tsx";
import { useSeoMeta } from "../hooks/useSeoMeta.ts";

function Propo() {
  useSeoMeta({
    title: "À Propos — Delsova Technologies | Agence Digitale IA Oran Algérie",
    description:
      "Découvrez l'équipe et la mission de Delsova Technologies. Une agence digitale fondée à Oran, spécialisée en intelligence artificielle et transformation digitale des entreprises algériennes.",
    canonical: "/apropos",
  });

  return (
    <div>
      <AProposDeNous />
    </div>
  );
}

export default Propo;
