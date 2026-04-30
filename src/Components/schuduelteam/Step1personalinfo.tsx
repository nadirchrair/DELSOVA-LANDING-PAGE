import { Mail, User, Clock } from "lucide-react";

interface Step1Props {
  formData: {
    fullName: string;
    email: string;
    phone: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Step1PersonalInfo({
  formData,
  onInputChange,
}: Step1Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#0e1934]">Vos informations</h3>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <User className="w-4 h-4" />
          Nom complet
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onInputChange}
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
          onChange={onInputChange}
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
          onChange={onInputChange}
          placeholder="+213 XXX XX XX XX"
          className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-[#4186d8] focus:outline-none transition"
        />
      </div>
    </div>
  );
}
