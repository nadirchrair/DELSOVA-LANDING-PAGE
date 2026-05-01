import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Accueil from "./Screens/Accueil.tsx";
import CommentCaMarche from "./Screens/CommentCaMarche.tsx";
import Nav from "./Components/Nav.tsx";
import Propo from "./Screens/Propo.tsx";
import Footer from "./Components/Footer.tsx";
import BookingPage from "./Screens/BookingPage.tsx";

// Scroll to top on route change (UX improvement)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Propo />} />
          <Route path="/services" element={<CommentCaMarche />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Fallback: 404 redirect to home */}
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
