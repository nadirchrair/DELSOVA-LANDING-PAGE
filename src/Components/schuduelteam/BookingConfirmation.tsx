interface BookingConfirmationProps {
  message: string;
}

export default function BookingConfirmation({
  message,
}: BookingConfirmationProps) {
  return (
    <div className="p-4 m-4 bg-blue-50 border-l-4 border-blue-500 rounded">
      <p className="text-blue-800 font-medium">{message}</p>
    </div>
  );
}
