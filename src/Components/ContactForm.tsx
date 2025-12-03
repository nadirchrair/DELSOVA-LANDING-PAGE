import React, { useState } from "react";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f9fcf8] pt-16">
      {/* ===== Wave (same as footer top) ===== */}
      <div className="absolute top-0 left-0 w-full h-40 lg:h-56">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 573"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-9 77.3C-9 77.3 443.212 199.183 734.449 172.722C890.841 158.512 972.74 86.8012 1129.6 89.8241C1273.28 92.5932 1367.53 203.734 1490.39 172.722C1613.26 141.71 1490.39 572.3 1490.39 572.3H-9V77.3Z"
            fill="#964cb2"
          />
        </svg>
      </div>

      {/* ===== Background gradient under the wave ===== */}
      <div className="relative bg-gradient-to-r from-[#4186d8] to-[#964cb2] pt-20 pb-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-white text-3xl lg:text-5xl font-bold">
            Contactez-nous
          </h2>
          <p className="text-white/90 text-lg lg:text-xl mt-3">
            Nous sommes prêts à discuter de votre projet
          </p>
        </div>

        {/* ===== Full width form ===== */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Nom */}
          <div className="flex flex-col">
            <label className="text-white font-semibold text-lg mb-2">
              Nom du contact
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-white font-semibold text-lg mb-2">
              Email du contact
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none"
              placeholder="email@exemple.com"
              required
            />
          </div>

          {/* Message (full width) */}
          <div className="flex flex-col lg:col-span-2">
            <label className="text-white font-semibold text-lg mb-2">
              Contenu du message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-white/40 focus:ring-2 outline-none h-48 resize-none"
              placeholder="Expliquez votre demande..."
              required
            />
          </div>

          {/* Submit button (full width) */}
          <div className="lg:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full lg:w-64 h-16 bg-white rounded-2xl shadow-xl text-[#4186d8] font-extrabold text-lg cursor-pointer hover:bg-gray-100 transition"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
