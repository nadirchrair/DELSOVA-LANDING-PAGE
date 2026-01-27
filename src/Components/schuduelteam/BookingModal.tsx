"use client";
import { useState } from "react";
import { Calendar, X } from "lucide-react";
import Step1PersonalInfo from "./Step1personalinfo.tsx";
import Step2DateTime from "./Step2DateTime.tsx";
import BookingConfirmation from "./BookingConfirmation.tsx";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDataType {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const clientEmailContent = `
        Chère ${formData.fullName},
        
        Votre réunion avec Delsova Technologies a été confirmée !
        
        📅 Date: ${new Date(formData.date).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        🕐 Heure: ${formData.time}
        
        Nous vous contactera par téléphone au ${formData.phone}
        
        Merci de votre intérêt pour Delsova Technologies.
        
        Cordialement,
        L'équipe Delsova
      `;

      const delsovaMeetingDetails = `
        Nouvelle réunion réservée !
        
        👤 Nom: ${formData.fullName}
        📧 Email: ${formData.email}
        📱 Téléphone: ${formData.phone}
        
        📅 Date: ${new Date(formData.date).toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        🕐 Heure: ${formData.time}
      `;

      console.log("Email to client:", clientEmailContent);
      console.log("Email to Delsova:", delsovaMeetingDetails);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setConfirmationMessage(
        `✅ Réunion confirmée ! Un email de confirmation a été envoyé à ${formData.email}`
      );

      setTimeout(() => {
        onClose();
        setStep(1);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
        });
        setConfirmationMessage("");
      }, 3000);
    } catch (error) {
      console.error("Erreur:", error);
      setConfirmationMessage("❌ Erreur lors de la réservation. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName && formData.email && formData.phone);
      case 2:
        return !!(formData.date && formData.time);
      default:
        return true;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0e1934] to-[#4186d8] p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">
              Réserver une réunion
            </h2>
          </div>
          <button
            onClick={() => {
              onClose();
              setStep(1);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                date: "",
                time: "",
              });
              setConfirmationMessage("");
            }}
            className="text-white hover:bg-white/20 p-1 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Confirmation Message */}
        {confirmationMessage && (
          <BookingConfirmation message={confirmationMessage} />
        )}

        {/* Form */}
        {!confirmationMessage && (
          <div className="p-6 space-y-6">
            {step === 1 && (
              <Step1PersonalInfo
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {step === 2 && (
              <Step2DateTime
                formData={formData}
                onInputChange={handleInputChange}
              />
            )}

            {/* Steps Indicator */}
            <div className="flex gap-2 justify-center">
              <div
                className={`h-2 w-12 rounded-full transition ${
                  step >= 1 ? "bg-[#4186d8]" : "bg-gray-300"
                }`}
              />
              <div
                className={`h-2 w-12 rounded-full transition ${
                  step >= 2 ? "bg-[#4186d8]" : "bg-gray-300"
                }`}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              {step === 2 && (
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Retour
                </button>
              )}

              {step === 1 && (
                <button
                  onClick={() => canProceed() && setStep(2)}
                  disabled={!canProceed()}
                  className="flex-1 px-4 py-2 bg-[#4186d8] text-white font-medium rounded-lg hover:bg-[#2d5fa8] disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                >
                  Suivant
                </button>
              )}

              {step === 2 && (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || loading}
                  className="flex-1 px-4 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  {loading ? "En cours..." : "Confirmer"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
