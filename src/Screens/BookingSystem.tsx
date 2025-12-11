import React, { useState, useEffect } from "react";
import { Calendar, X, Mail, User, Clock } from "lucide-react";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_delsova";
const EMAILJS_TEMPLATE_ID = "template_i1kgw7v";
const EMAILJS_PUBLIC_KEY = "H1OValIRLyfrT3Z1R";

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [emailjsReady, setEmailjsReady] = useState(false);

  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  // Initialize EmailJS with proper error handling
  useEffect(() => {
    const loadEmailJS = async () => {
      try {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        script.async = true;

        script.onload = () => {
          console.log("EmailJS library loaded");
          if (window.emailjs) {
            window.emailjs.init(EMAILJS_PUBLIC_KEY);
            setEmailjsReady(true);
          }
        };

        script.onerror = () => {
          console.error("Failed to load EmailJS script");
          setEmailStatus("Erreur de chargement EmailJS");
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error("Error loading EmailJS:", error);
      }
    };

    loadEmailJS();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const sendEmails = async () => {
    try {
      if (!window.emailjs) {
        throw new Error("EmailJS not loaded");
      }

      const formattedDate = new Date(formData.date).toLocaleDateString(
        "fr-FR",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      // Email to Delsova team (chrairmohamednadir@gmail.com)
      const delsovaMeetingParams = {
        to_email: "chrairmohamednadir@gmail.com",
        to_name: "Delsova Team",
        client_name: formData.fullName,
        client_email: formData.email,
        client_phone: formData.phone,
        meeting_date: formattedDate,
        meeting_time: formData.time,
      };

      console.log("📧 Sending email to Delsova...", delsovaMeetingParams);

      const delsovResponse = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        delsovaMeetingParams
      );

      console.log("✅ Email sent to Delsova:", delsovResponse);

      return true;
    } catch (error) {
      console.error("❌ Email Error:", error);
      setEmailStatus("⚠️ Erreur: " + error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailjsReady) {
      setConfirmationMessage(
        "❌ EmailJS n'est pas prêt. Attendez et réessayez."
      );
      return;
    }

    setLoading(true);
    setEmailStatus("");

    try {
      const formattedDate = new Date(formData.date).toLocaleDateString(
        "fr-FR",
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      const emailsSent = await sendEmails();

      if (emailsSent) {
        setConfirmationMessage(
          `✅ Réunion confirmée ! Email envoyé à ${formData.email} et à l'équipe Delsova.`
        );
      } else {
        setConfirmationMessage(
          `✅ Réunion enregistrée pour ${formattedDate} à ${formData.time}`
        );
      }

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
        setEmailStatus("");
      }, 3000);
    } catch (error) {
      console.error("Erreur:", error);
      setConfirmationMessage("❌ Erreur lors de la réservation. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.phone;
      case 2:
        return formData.date && formData.time;
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
              setEmailStatus("");
            }}
            className="text-white hover:bg-white/20 p-1 rounded-lg transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Confirmation Message */}
        {confirmationMessage && (
          <div className="p-4 m-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <p className="text-blue-800 font-medium">{confirmationMessage}</p>
          </div>
        )}

        {/* Email Status */}
        {emailStatus && (
          <div className="p-4 m-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <p className="text-yellow-800 font-medium text-sm">{emailStatus}</p>
          </div>
        )}

        {/* EmailJS Status */}
        {!emailjsReady && (
          <div className="p-4 m-4 bg-orange-50 border-l-4 border-orange-500 rounded">
            <p className="text-orange-800 font-medium text-sm">
              ⏳ EmailJS initialisation...
            </p>
          </div>
        )}

        {/* Form */}
        {!confirmationMessage && (
          <div className="p-6 space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0e1934]">
                  Vos informations
                </h3>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+213 XXX XX XX XX"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0e1934]">
                  Choisir la date et l'heure
                </h3>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4" />
                    Heure
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
                  >
                    <option value="">Sélectionner une heure</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Confirmation Summary */}
                {formData.date && formData.time && (
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Résumé:</strong>
                      <br />
                      {new Date(formData.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      à {formData.time}
                    </p>
                  </div>
                )}
              </div>
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
                  disabled={!canProceed() || loading || !emailjsReady}
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
