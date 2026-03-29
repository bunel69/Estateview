import { FileCheck, User, MapPin, Home, FileText, Check, X } from "lucide-react";

export function StaffReservations() {
  const reservations = [
    {
      id: 1,
      client: "Juan Dela Cruz",
      email: "juan.delacruz@example.com",
      phone: "+63 912 345 6789",
      lot: "Lot 45 - 120 sqm",
      houseModel: "Naomi",
      paymentMode: "Bank Loan",
      downPayment: "20%",
      documents: ["Valid ID", "Proof of Income", "TIN ID"],
      status: "pending",
      submitted: "2 hours ago",
    },
    {
      id: 2,
      client: "Maria Santos",
      email: "maria.santos@example.com",
      phone: "+63 923 456 7890",
      lot: "Lot 46 - 150 sqm",
      houseModel: "None (Lot Only)",
      paymentMode: "Cash",
      downPayment: "30%",
      documents: ["Valid ID", "Proof of Billing"],
      status: "pending",
      submitted: "5 hours ago",
    },
  ];

  const handleAction = (id: number, action: string) => {
    alert(`Reservation ${action}: ${id}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservation Management</h1>
        <p className="text-gray-600">Review and process client reservations</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button className="px-6 py-3 border-b-2 border-green-600 text-green-700 font-medium">
          Pending ({reservations.filter(r => r.status === 'pending').length})
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Approved
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Rejected
        </button>
      </div>

      {/* Reservations List */}
      <div className="space-y-6">
        {reservations.map((reservation) => (
          <div key={reservation.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-b">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{reservation.client}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{reservation.email} • {reservation.phone}</span>
                      </div>
                      <div className="text-xs text-gray-500">Submitted {reservation.submitted}</div>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Pending Review
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Lot Location</div>
                      <div className="font-medium text-gray-900">{reservation.lot}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-500 mb-1">House Model</div>
                      <div className="font-medium text-gray-900">{reservation.houseModel}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Payment Mode</div>
                    <div className="font-medium text-gray-900">{reservation.paymentMode}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Down Payment</div>
                    <div className="font-medium text-gray-900">{reservation.downPayment}</div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">Submitted Documents</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reservation.documents.map((doc, index) => (
                    <span key={index} className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(reservation.id, "approved")}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Approve Reservation
                </button>
                <button className="px-6 py-3 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Review Documents
                </button>
                <button
                  onClick={() => handleAction(reservation.id, "rejected")}
                  className="px-6 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center gap-2"
                >
                  <X className="h-5 w-5" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
