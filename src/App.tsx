import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Screens/Accueil.tsx";
import CommentCaMarche from "./Screens/CommentCaMarche.tsx";
import Nav from "./Components/Nav.tsx";
import Propo from "./Screens/Propo.tsx";
import Footer from "./Components/Footer.tsx";
import BookingSystem from "./Screens/BookingSystem.tsx";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Propo />} />

        <Route path="/services" element={<CommentCaMarche />} />
        <Route path="/booking" element={<BookingSystem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
