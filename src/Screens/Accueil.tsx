import Presentation from "../Components/Presentation.tsx";
import ContactForm from "../Components/ContactForm.tsx";
import NotreProcessusClient from "../Components/NotreProcessusClient.tsx";
import { DynamicWaveSeparator } from "../Components/WaveVariants.tsx";
import NotreMission from "../Components/NotreMission.tsx";
import Faq from "../Components/Faq.tsx";
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
