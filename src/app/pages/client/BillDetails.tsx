import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Upload as UploadIcon } from "lucide-react";
import { useState } from "react";

export function BillDetails() {
  const navigate = useNavigate();
  const { billId } = useParams();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Mock bill data - in real app, fetch based on billId
  const bill = {
    id: billId,
    month: "Mar",
    amount: 87352.64,
    dueDate: "March 15, 2026",
    status: "unpaid"
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      alert("Proof of payment submitted successfully!");
      navigate("/client/bills");
    }
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
                <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-light">
                  Unpaid
                </span>
              </div>
              <p className="text-sm font-light text-gray-600">Due date: {bill.dueDate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-light text-gray-500 mb-1">Amount</p>
              <div className="text-3xl font-semibold text-gray-900">
                ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(`/client/bills/${billId}/payment`)}
              className="w-full px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white transition-colors font-light text-lg rounded-lg"
            >
              Pay Now
            </button>
          </div>

          {/* Upload Section */}
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">Upload Proof of Payment</h3>
            <label className="block mb-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:border-gray-400 transition-colors cursor-pointer">
                <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-900 font-light mb-1">Click to upload</p>
                <p className="text-sm text-gray-500 font-light">Proof of payment (JPG, PNG, PDF)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
              />
            </label>

            {/* Uploaded File Display */}
            {uploadedFile && (
              <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                    <UploadIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-light text-gray-900">{uploadedFile.name}</p>
                    <p className="text-xs text-gray-500">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="text-red-500 hover:text-red-700 text-xl"
                >
                  ×
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!uploadedFile}
              className="w-full px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-900 transition-colors font-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-medium text-gray-900 mb-2">Payment Information</h3>
          <ul className="text-sm text-gray-600 space-y-1 font-light">
            <li>• Please upload a clear photo or PDF of your payment receipt</li>
            <li>• Processing time is 1-3 business days</li>
            <li>• You will receive a confirmation once payment is verified</li>
            <li>• For assistance, contact us at (123) 456-7890</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
