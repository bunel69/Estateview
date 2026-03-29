import { Calendar, Clock, User, Check, X } from "lucide-react";

export function StaffAppointments() {
  const appointments = [
    {
      id: 1,
      client: "Maria Santos",
      email: "maria.santos@example.com",
      phone: "+63 912 345 6789",
      type: "Property Tripping",
      date: "Mar 20, 2026",
      time: "10:00 AM",
      notes: "Interested in Naomi model",
      status: "pending",
    },
    {
      id: 2,
      client: "Pedro Reyes",
      email: "pedro.reyes@example.com",
      phone: "+63 923 456 7890",
      type: "Loan Consultation",
      date: "Mar 22, 2026",
      time: "2:00 PM",
      notes: "Needs help with bank financing",
      status: "pending",
    },
    {
      id: 3,
      client: "Ana Garcia",
      email: "ana.garcia@example.com",
      phone: "+63 934 567 8901",
      type: "Reservation Assistance",
      date: "Mar 18, 2026",
      time: "11:00 AM",
      notes: "",
      status: "approved",
    },
  ];

  const handleAction = (id: number, action: string) => {
    alert(`Appointment ${action}: ${id}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointment Management</h1>
        <p className="text-gray-600">Review and manage client appointments</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button className="px-6 py-3 border-b-2 border-green-600 text-green-700 font-medium">
          Pending ({appointments.filter(a => a.status === 'pending').length})
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Approved
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Completed
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Declined
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{appointment.client}</h3>
                    {appointment.status === "pending" && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        Pending Review
                      </span>
                    )}
                    {appointment.status === "approved" && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Approved
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{appointment.email} • {appointment.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="text-xs text-gray-500 mb-1">Appointment Type</div>
                <div className="font-medium text-gray-900">{appointment.type}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Date</div>
                <div className="font-medium text-gray-900">{appointment.date}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Time</div>
                <div className="font-medium text-gray-900 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {appointment.time}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Submitted</div>
                <div className="font-medium text-gray-900">2 hours ago</div>
              </div>
            </div>

            {appointment.notes && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-xs font-medium text-blue-900 mb-1">Notes</div>
                <div className="text-sm text-blue-800">{appointment.notes}</div>
              </div>
            )}

            {appointment.status === "pending" && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(appointment.id, "approved")}
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Approve
                </button>
                <button
                  onClick={() => handleAction(appointment.id, "declined")}
                  className="flex-1 px-4 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <X className="h-5 w-5" />
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
