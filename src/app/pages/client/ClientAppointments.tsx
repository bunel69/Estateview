import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export function ClientAppointments() {
  const [selectedMonth] = useState("March 2026");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  // Define unavailable dates (booked dates)
  const unavailableDates = [5, 12, 18, 22, 25, 30];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      alert("Appointment scheduled successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-3">Schedule an Appointment</h1>
          <p className="text-gray-600">Book your property visit or consultation</p>
        </div>

        {/* Appointment Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Calendar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Date
              </label>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-6">
                  <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <span className="text-lg font-medium text-gray-900">{selectedMonth}</span>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-xs text-gray-500 py-2 font-medium uppercase tracking-wide">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                    const isPast = date < 15;
                    const isUnavailable = unavailableDates.includes(date);
                    const isAvailable = !isPast && !isUnavailable;
                    
                    return (
                      <button
                        key={date}
                        type="button"
                        onClick={() => isAvailable && setSelectedDate(date)}
                        className={`py-3 text-sm rounded-lg transition-colors relative ${
                          selectedDate === date
                            ? "bg-gray-900 text-white font-medium"
                            : isPast
                            ? "text-gray-300 cursor-not-allowed"
                            : isUnavailable
                            ? "bg-blue-100 text-blue-600 cursor-not-allowed"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                        disabled={isPast || isUnavailable}
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>
              </div>
              {selectedDate && (
                <p className="mt-3 text-sm text-gray-600">
                  Selected: <span className="font-medium text-gray-900">March {selectedDate}, 2026</span>
                </p>
              )}
              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-100 rounded border border-gray-200"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded border border-blue-200"></div>
                  <span>Not Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 text-gray-400 rounded flex items-center justify-center">15</div>
                  <span>Past Date</span>
                </div>
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-4">
                Select Time
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                required
              >
                <option value="">Choose a time slot</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>

            {/* Purpose/Notes */}
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-4">
                Purpose of Appointment
              </label>
              <textarea
                id="purpose"
                rows={4}
                placeholder="Please describe the purpose of your appointment or any special requests..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
              />
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Juan Dela Cruz"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+63 912 345 6789"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 uppercase tracking-wide text-sm font-medium"
              >
                <Calendar className="h-5 w-5" />
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-medium text-gray-900 mb-2">Appointment Information</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Appointments are available Monday to Saturday, 9:00 AM - 5:00 PM</li>
            <li>• Please arrive 10 minutes before your scheduled time</li>
            <li>• For urgent matters, please call us at (123) 456-7890</li>
            <li>• You will receive a confirmation email after booking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}