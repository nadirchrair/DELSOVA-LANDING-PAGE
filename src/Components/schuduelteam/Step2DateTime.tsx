import { Calendar, Clock } from "lucide-react";

interface Step2Props {
  formData: {
    date: string;
    time: string;
  };
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function Step2DateTime({ formData, onInputChange }: Step2Props) {
  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const getMinDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
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
          onChange={onInputChange}
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
          onChange={onInputChange}
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
  );
}
