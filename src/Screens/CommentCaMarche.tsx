import NosExpertises from "../Components/NosExpertises.tsx";
import { useSeoMeta } from "../hooks/useSeoMeta.ts";

function CommentCaMarche() {
  useSeoMeta({
    title: "Nos Services — Développement IA, Web & SaaS | Delsova Algérie",
    description:
      "Développement web, intelligence artificielle, SaaS, applications mobiles et digitalisation d'entreprise. Découvrez toutes les expertises de Delsova Technologies en Algérie.",
    canonical: "/services",
  });

  return (
    <>
      <NosExpertises />
    </>
  );
}

export default CommentCaMarche;
