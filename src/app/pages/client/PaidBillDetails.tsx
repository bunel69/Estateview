import { useNavigate, useParams } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";

export function PaidBillDetails() {
  const navigate = useNavigate();
  const { billId } = useParams();

  // Mock paid bill data - in real app, fetch based on billId
  const bill = {
    id: billId,
    month: "Jan",
    amount: 87352.64,
    paidDate: "January 10, 2026",
    status: "paid",
    proofOfPayment: "https://images.unsplash.com/photo-1554224311-beee4ece8db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" // Mock receipt image
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-8">
      {/* Header */}
      <div className="bg-white pt-8 pb-6 px-6 sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate("/client/bills")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-light">Back to Bills</span>
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900">Bill Details</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 pt-8">
        {/* Bill Information Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-8 pb-8 border-b border-gray-200">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-3xl font-semibold text-gray-900">{bill.month}</h4>
                <span className="px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-light flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4" />
                  Paid
                </span>
              </div>
              <p className="text-sm font-light text-gray-600">Paid on: {bill.paidDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-light text-gray-500 mb-1">Amount</p>
              <div className="text-3xl font-semibold text-gray-900">
                ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Proof of Payment Section */}
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">Proof of Payment</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src={bill.proofOfPayment}
                alt="Proof of Payment"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <p className="text-sm text-gray-500 font-light mt-3 text-center">
              Payment verified and confirmed
            </p>
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
          <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Payment Confirmed
          </h3>
          <p className="text-sm text-gray-600 font-light">
            Your payment has been verified and processed successfully. Thank you for your prompt payment.
          </p>
        </div>
      </div>
    </div>
  );
}
