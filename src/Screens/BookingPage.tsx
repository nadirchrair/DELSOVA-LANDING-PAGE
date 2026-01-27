import { useState } from "react";
import BookingModal from "./BookingSystem.tsx";

export default function BookingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0e1934]">
          Réserver une réunion
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Planifiez votre consultation avec l'équipe Delsova Technologies
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-3 bg-[#4186d8] text-white font-bold rounded-lg hover:bg-[#2d5fa8] transition"
        >
          Ouvrir le formulaire de réservation
        </button>
      </div>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
