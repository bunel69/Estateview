import { FileCheck } from "lucide-react";

export function AdminReservations() {
  const reservations = [
    { id: 1, client: "Juan Dela Cruz", lot: "Lot 45", model: "Naomi", date: "Mar 10, 2026", status: "Approved" },
    { id: 2, client: "Maria Santos", lot: "Lot 46", model: "Hannah", date: "Mar 12, 2026", status: "Pending" },
    { id: 3, client: "Pedro Reyes", lot: "Lot 47", model: "Lot Only", date: "Mar 14, 2026", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservation Management</h1>
        <p className="text-gray-600">Monitor and manage all property reservations</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Property</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-orange-600" />
                      <span className="font-medium text-gray-900">{reservation.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{reservation.lot}</div>
                      <div className="text-sm text-gray-600">{reservation.model}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{reservation.date}</td>
                  <td className="px-6 py-4">
                    {reservation.status === "Approved" ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Approved
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
