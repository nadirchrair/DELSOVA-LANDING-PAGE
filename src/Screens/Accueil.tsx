import Presentation from "../Components/Presentation";
import ContactForm from "../Components/ContactForm";
import NotreProcessusClient from "../Components/NotreProcessusClient";
import { DynamicWaveSeparator } from "../Components/WaveVariants";
import NotreMission from "../Components/NotreMission";
import Faq from "../Components/Faq";
import TechSection from "../Components/TechSection.tsx";
import NotreProcessusClient from "../Components/NotreProcessusClient";

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
