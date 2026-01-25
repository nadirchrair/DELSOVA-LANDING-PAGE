import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Screens/Accueil";
import CommentCaMarche from "./Screens/CommentCaMarche";
import Nav from "./Components/Nav";
import Propo from "./Screens/Propo";
import Footer from "./Components/Footer";
import BookingSystem from "./Screens/BookingSystem";

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
