import { Calendar, Search, Filter, CheckCircle, XCircle, Clock } from "lucide-react";

export function AdminAppointments() {
  const appointments = [
    {
      id: 1,
      clientName: "Juan Dela Cruz",
      type: "Property Tripping",
      date: "Mar 20, 2026",
      time: "10:00 AM",
      status: "confirmed",
      assignedTo: "Maria Garcia"
    },
    {
      id: 2,
      clientName: "Pedro Santos",
      type: "Loan Consultation",
      date: "Mar 21, 2026",
      time: "2:00 PM",
      status: "pending",
      assignedTo: "Unassigned"
    },
    {
      id: 3,
      clientName: "Ana Lopez",
      type: "Reservation Assistance",
      date: "Mar 22, 2026",
      time: "11:00 AM",
      status: "confirmed",
      assignedTo: "Juan Reyes"
    },
    {
      id: 4,
      clientName: "Carlos Ramos",
      type: "Property Tripping",
      date: "Mar 23, 2026",
      time: "9:00 AM",
      status: "cancelled",
      assignedTo: "Maria Garcia"
    },
  ];

  const stats = [
    { label: "Total Appointments", value: 45, color: "blue" },
    { label: "Confirmed", value: 28, color: "green" },
    { label: "Pending", value: 12, color: "yellow" },
    { label: "Cancelled", value: 5, color: "red" },
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white shadow-sm p-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2">Appointments</h1>
        <p className="text-lg text-gray-600">Manage all client appointments and schedules</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white shadow-sm p-8 border-l-4 border-gray-900">
            <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide">{stat.label}</div>
            <div className="text-4xl font-light text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm p-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent">
            <option>All Types</option>
            <option>Property Tripping</option>
            <option>Loan Consultation</option>
            <option>Reservation Assistance</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2">
            <Filter className="h-5 w-5" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div>
        <h2 className="text-2xl font-light text-gray-900 mb-6">All Appointments</h2>
        <div className="bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Client</th>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Type</th>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Date & Time</th>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Assigned To</th>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Status</th>
                  <th className="px-8 py-4 text-left text-xs text-gray-700 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-200 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="text-gray-900">{appointment.clientName}</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">{appointment.type}</td>
                    <td className="px-8 py-6">
                      <div className="text-gray-900">{appointment.date}</div>
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">{appointment.assignedTo}</td>
                    <td className="px-8 py-6">
                      {appointment.status === "confirmed" && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 text-sm uppercase tracking-wide">
                          <CheckCircle className="h-4 w-4" />
                          Confirmed
                        </span>
                      )}
                      {appointment.status === "pending" && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 text-sm uppercase tracking-wide">
                          <Clock className="h-4 w-4" />
                          Pending
                        </span>
                      )}
                      {appointment.status === "cancelled" && (
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-sm uppercase tracking-wide">
                          <XCircle className="h-4 w-4" />
                          Cancelled
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wide">
                          View
                        </button>
                        {appointment.status === "pending" && (
                          <>
                            <button className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors text-sm uppercase tracking-wide">
                              Confirm
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors text-sm uppercase tracking-wide">
                              Cancel
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
