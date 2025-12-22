import React from "react";
import Presentation from "../Components/Presentation";
import WhyChoose from "../Components/WhyChoose";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import QuiSommesNous from "../Components/QuiSommesNous";
import NotreProcessusClient from "../Components/NotreProcessusClient";
import {
  AdvancedWaveSeparator,
  AsymmetricWaveSeparator,
  DynamicWaveSeparator,
  SoftWaveSeparator,
  TechWaveSeparator,
} from "../Components/WaveVariants";
import AProposDeNous from "../Components/AProposDeNous";
import NotreMission from "../Components/NotreMission";
import Faq from "../Components/Faq";
import TechSection from "../Components/TechSection.tsx";

function Accueil() {
  return (
    <div>
      <Presentation />
      <DynamicWaveSeparator
        direction="down"
        primaryColor="#4186d8"
        secondaryColor="#964cb2"
        animated={true}
      />

      <NotreProcessusClient />
      <NotreMission />
      <TechSection />
      <Faq />
      <ContactForm />
    </div>
  );
}

export default Accueil;
