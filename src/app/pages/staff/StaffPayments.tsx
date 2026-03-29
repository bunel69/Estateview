import { CreditCard, User, FileText, Download, Check, X } from "lucide-react";

export function StaffPayments() {
  const payments = [
    {
      id: 1,
      client: "Ana Garcia",
      email: "ana.garcia@example.com",
      paymentFor: "Down Payment - Month 2",
      amount: 60000,
      uploadDate: "Mar 15, 2026",
      dueDate: "May 1, 2026",
      proofFile: "payment_proof_ana.pdf",
      notes: "Bank transfer via BDO",
      status: "pending",
    },
    {
      id: 2,
      client: "Pedro Reyes",
      email: "pedro.reyes@example.com",
      paymentFor: "Reservation Fee",
      amount: 50000,
      uploadDate: "Mar 14, 2026",
      dueDate: "Mar 1, 2026",
      proofFile: "payment_proof_pedro.jpg",
      notes: "",
      status: "pending",
    },
  ];

  const handleAction = (id: number, action: string) => {
    alert(`Payment ${action}: ${id}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Verification</h1>
        <p className="text-gray-600">Review and verify client payment submissions</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button className="px-6 py-3 border-b-2 border-orange-600 text-orange-700 font-medium">
          Pending Verification ({payments.filter(p => p.status === 'pending').length})
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Verified
        </button>
        <button className="px-6 py-3 text-gray-600 hover:text-gray-900">
          Rejected
        </button>
      </div>

      {/* Payments List */}
      <div className="space-y-6">
        {payments.map((payment) => (
          <div key={payment.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-b">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{payment.client}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{payment.email}</span>
                      </div>
                      <div className="text-xs text-gray-500">Uploaded {payment.uploadDate}</div>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Pending Verification
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Payment For</div>
                  <div className="font-medium text-gray-900">{payment.paymentFor}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Amount</div>
                  <div className="text-2xl font-bold text-gray-900">₱{payment.amount.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Due Date</div>
                  <div className="font-medium text-gray-900">{payment.dueDate}</div>
                </div>
              </div>

              {/* Proof of Payment */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">Proof of Payment</div>
                      <div className="text-sm text-gray-600">{payment.proofFile}</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>

              {payment.notes && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-xs font-medium text-blue-900 mb-1">Client Notes</div>
                  <div className="text-sm text-blue-800">{payment.notes}</div>
                </div>
              )}

              {/* Verification Note */}
              <div className="mb-4">
                <label htmlFor={`note-${payment.id}`} className="block text-sm font-medium text-gray-700 mb-2">
                  Verification Note (Optional)
                </label>
                <textarea
                  id={`note-${payment.id}`}
                  rows={3}
                  placeholder="Add notes about this verification..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(payment.id, "verified")}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Verify Payment
                </button>
                <button
                  onClick={() => handleAction(payment.id, "rejected")}
                  className="flex-1 px-6 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <X className="h-5 w-5" />
                  Reject Payment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
