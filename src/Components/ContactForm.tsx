import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";

// EmailJS Configuration (same project as BookingSystem)
// The Window.emailjs type is already declared in Screens/BookingSystem.tsx
const EMAILJS_SERVICE_ID = "service_delsova";
const EMAILJS_CONTACT_TEMPLATE_ID = "template_contact"; // create this template in EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "H1OValIRLyfrT3Z1R";

type Status = "idle" | "sending" | "success" | "error";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Lazy-load EmailJS only when this component mounts
  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => window.emailjs?.init(EMAILJS_PUBLIC_KEY);
    document.body.appendChild(script);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!window.emailjs) {
      setStatus("error");
      setErrorMsg("Service de messagerie non disponible. Veuillez réessayer.");
      return;
    }

    try {
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "contact@delsova.dz",
        }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Une erreur est survenue. Vous pouvez nous écrire directement à contact@delsova.dz"
      );
      console.error("Contact form error:", err);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full overflow-hidden bg-[#f9fcf8] pt-16"
    >
      {/* Wave */}
      <div className="absolute top-0 left-0 w-full h-40 lg:h-56" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 573"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path
            d="M-9 77.3C-9 77.3 443.212 199.183 734.449 172.722C890.841 158.512 972.74 86.8012 1129.6 89.8241C1273.28 92.5932 1367.53 203.734 1490.39 172.722C1613.26 141.71 1490.39 572.3 1490.39 572.3H-9V77.3Z"
            fill="#964cb2"
          />
        </svg>
      </div>

      <div className="relative bg-gradient-to-r from-[#4186d8] to-[#964cb2] pt-20 pb-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 id="contact-heading" className="text-white text-3xl lg:text-5xl font-bold">
            Contactez-nous
          </h2>
          <p className="text-white/90 text-lg lg:text-xl mt-3">
            Nous sommes prêts à discuter de votre projet
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label htmlFor="contact-name" className="text-white font-semibold text-lg mb-2">
              Nom du contact
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none"
              placeholder="Votre nom"
              required
              minLength={2}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact-email" className="text-white font-semibold text-lg mb-2">
              Email du contact
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none"
              placeholder="email@exemple.com"
              required
            />
          </div>

          <div className="flex flex-col lg:col-span-2">
            <label htmlFor="contact-message" className="text-white font-semibold text-lg mb-2">
              Contenu du message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none h-48 resize-none"
              placeholder="Expliquez votre demande..."
              required
              minLength={10}
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="lg:col-span-2 p-4 rounded-xl bg-green-500/90 text-white text-center font-semibold"
            >
              ✓ Message envoyé ! Nous vous répondrons rapidement.
            </div>
          )}
          {status === "error" && (
            <div
              role="alert"
              className="lg:col-span-2 p-4 rounded-xl bg-red-500/90 text-white text-center font-semibold"
            >
              {errorMsg}
            </div>
          )}

          <div className="lg:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full lg:w-64 h-16 bg-white rounded-2xl shadow-xl text-[#4186d8] font-extrabold text-lg cursor-pointer hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
