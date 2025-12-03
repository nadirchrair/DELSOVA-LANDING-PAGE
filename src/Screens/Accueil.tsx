import React from "react";
import Presentation from "../Components/Presentation";
import WhyChoose from "../Components/WhyChoose";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Accueil() {
  return (
    <div>
      <Presentation />
      <WhyChoose />

      <ContactForm />

      <Footer />
    </div>
  );
}

export default Accueil;
