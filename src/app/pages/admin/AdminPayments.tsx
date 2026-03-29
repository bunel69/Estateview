import { CreditCard } from "lucide-react";

export function AdminPayments() {
  const payments = [
    { id: 1, client: "Ana Garcia", amount: 60000, type: "Down Payment", date: "Mar 15, 2026", status: "Verified" },
    { id: 2, client: "Pedro Reyes", amount: 50000, type: "Reservation Fee", date: "Mar 14, 2026", status: "Pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Verification</h1>
        <p className="text-gray-600">Review and verify all payment submissions</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-orange-600" />
                      <span className="font-medium text-gray-900">{payment.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">₱{payment.amount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{payment.type}</td>
                  <td className="px-6 py-4 text-gray-700">{payment.date}</td>
                  <td className="px-6 py-4">
                    {payment.status === "Verified" ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Verified
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
