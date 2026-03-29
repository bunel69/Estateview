import { useNavigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

export function BillPayment() {
  const navigate = useNavigate();
  const { billId } = useParams();

  // Mock bill data
  const bill = {
    id: billId,
    month: "Mar",
    amount: 87352.64,
    dueDate: "March 15, 2026"
  };

  const bankDetails = {
    bank: "China Bank",
    accountName: "DGA Corporation",
    accountNumber: "1234 5678 9012"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-8">
      {/* Header */}
      <div className="bg-white pt-8 pb-6 px-6 sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate(`/client/bills/${billId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-light">Back to Bill Details</span>
          </button>
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900">Payment</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 pt-8">
        {/* Amount Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 text-center">
          <p className="text-sm font-light text-gray-500 mb-2">Amount to Pay</p>
          <div className="text-4xl font-semibold text-gray-900 mb-2">
            ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-sm font-light text-gray-600">Due: {bill.dueDate}</p>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="text-xl font-light text-gray-900 mb-6 text-center">Scan to Pay</h2>
          
          {/* QR Code Placeholder */}
          <div className="bg-gray-100 rounded-xl p-8 mb-6 flex items-center justify-center">
            <div className="w-64 h-64 bg-white rounded-lg shadow-inner flex items-center justify-center">
              {/* QR Code SVG Pattern */}
              <svg viewBox="0 0 200 200" className="w-full h-full p-4">
                {/* Simple QR code pattern - in production, use a real QR code library */}
                <rect x="0" y="0" width="200" height="200" fill="white"/>
                <rect x="10" y="10" width="60" height="60" fill="black"/>
                <rect x="20" y="20" width="40" height="40" fill="white"/>
                <rect x="30" y="30" width="20" height="20" fill="black"/>
                
                <rect x="130" y="10" width="60" height="60" fill="black"/>
                <rect x="140" y="20" width="40" height="40" fill="white"/>
                <rect x="150" y="30" width="20" height="20" fill="black"/>
                
                <rect x="10" y="130" width="60" height="60" fill="black"/>
                <rect x="20" y="140" width="40" height="40" fill="white"/>
                <rect x="30" y="150" width="20" height="20" fill="black"/>
                
                {/* Random pattern blocks */}
                <rect x="90" y="30" width="10" height="10" fill="black"/>
                <rect x="110" y="30" width="10" height="10" fill="black"/>
                <rect x="90" y="50" width="10" height="10" fill="black"/>
                <rect x="100" y="50" width="10" height="10" fill="black"/>
                <rect x="30" y="90" width="10" height="10" fill="black"/>
                <rect x="50" y="90" width="10" height="10" fill="black"/>
                <rect x="30" y="110" width="10" height="10" fill="black"/>
                <rect x="40" y="110" width="10" height="10" fill="black"/>
                <rect x="90" y="90" width="10" height="10" fill="black"/>
                <rect x="110" y="90" width="10" height="10" fill="black"/>
                <rect x="100" y="100" width="10" height="10" fill="black"/>
                <rect x="90" y="110" width="10" height="10" fill="black"/>
                <rect x="130" y="90" width="10" height="10" fill="black"/>
                <rect x="150" y="90" width="10" height="10" fill="black"/>
                <rect x="140" y="100" width="10" height="10" fill="black"/>
                <rect x="160" y="110" width="10" height="10" fill="black"/>
                <rect x="90" y="130" width="10" height="10" fill="black"/>
                <rect x="110" y="130" width="10" height="10" fill="black"/>
                <rect x="100" y="140" width="10" height="10" fill="black"/>
                <rect x="130" y="130" width="10" height="10" fill="black"/>
                <rect x="150" y="130" width="10" height="10" fill="black"/>
                <rect x="140" y="150" width="10" height="10" fill="black"/>
                <rect x="160" y="140" width="10" height="10" fill="black"/>
                <rect x="170" y="150" width="10" height="10" fill="black"/>
              </svg>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 font-light">
            Scan this QR code using your banking app
          </p>
        </div>

        {/* Bank Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-light text-gray-900 mb-6">Bank Transfer Details</h2>
          
          <div className="space-y-4">
            {/* Bank */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-light text-gray-500 mb-1">Bank</p>
              <p className="text-base font-light text-gray-900">{bankDetails.bank}</p>
            </div>

            {/* Account Name */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-light text-gray-500 mb-1">Account Name</p>
              <p className="text-base font-light text-gray-900">{bankDetails.accountName}</p>
            </div>

            {/* Account Number */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-light text-gray-500 mb-1">Account Number</p>
              <p className="text-base font-light text-gray-900">{bankDetails.accountNumber}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate(`/client/bills/${billId}`)}
            className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white transition-colors font-light rounded-lg"
          >
            Upload Proof of Payment
          </button>
          <button
            onClick={() => navigate("/client/bills")}
            className="w-full px-8 py-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 transition-colors font-light rounded-lg"
          >
            Back to Bills
          </button>
        </div>

        {/* Information Box */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-medium text-gray-900 mb-2">Payment Instructions</h3>
          <ul className="text-sm text-gray-600 space-y-1 font-light">
            <li>• Use the exact amount shown above when making payment</li>
            <li>• Scan the QR code or manually enter the bank details</li>
            <li>• After payment, upload your proof of payment on the Bill Details page</li>
            <li>• Payment will be verified within 1-3 business days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}