import { useState } from "react";
import { FileCheck, Upload, AlertCircle } from "lucide-react";

export function ClientReservation() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please accept the terms and conditions");
      return;
    }
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lot Reservation</h1>
        <p className="text-gray-600">Submit your reservation and required documents</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
        {/* Property Details */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-blue-600" />
            Property Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lotLocation" className="block text-sm font-medium text-gray-700 mb-2">
                Lot Location *
              </label>
              <select
                id="lotLocation"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a lot</option>
                <option value="lot-45">Lot 45 - 120 sqm</option>
                <option value="lot-46">Lot 46 - 150 sqm</option>
                <option value="lot-47">Lot 47 - 135 sqm</option>
              </select>
            </div>
            <div>
              <label htmlFor="houseModel" className="block text-sm font-medium text-gray-700 mb-2">
                House Model (if applicable)
              </label>
              <select
                id="houseModel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">None - Lot Only</option>
                <option value="naomi">Naomi</option>
                <option value="hannah">Hannah</option>
                <option value="nasiah">Nasiah</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+63 912 345 6789"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Mode *
              </label>
              <div className="grid md:grid-cols-3 gap-3">
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="bank-loan"
                    className="text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span className="font-medium text-gray-900">Bank Loan</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="cash"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Cash</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="deferred"
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-900">Deferred</span>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-2">
                Down Payment Percentage (minimum 20%) *
              </label>
              <input
                id="downPayment"
                type="number"
                min="20"
                max="100"
                defaultValue="20"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-600" />
            Required Documents
          </h2>
          <div className="space-y-4">
            {[
              "1x1 Photos",
              "Valid IDs",
              "Proof of Billing",
              "PSA/Birth Certificate",
              "Proof of Income",
              "TIN ID",
            ].map((doc) => (
              <div key={doc}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {doc}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    className="flex-1 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
                    multiple
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-sm text-gray-700 mb-4">
                Please read the following terms and conditions carefully before submitting your reservation.
              </p>
              <div className="bg-white rounded-lg p-4 border border-yellow-200 mb-4 max-h-40 overflow-y-auto text-sm text-gray-700">
                <p className="mb-2">
                  <strong>Reservation Fee:</strong> The reservation fee is non-refundable and will be deducted from the total contract price.
                </p>
                <p className="mb-2">
                  <strong>Down Payment:</strong> The minimum down payment is 20% of the total contract price, payable within 24 months.
                </p>
                <p className="mb-2">
                  <strong>Document Verification:</strong> All submitted documents will be verified by our staff. Incomplete or invalid documents may result in reservation rejection.
                </p>
                <p>
                  <strong>Payment Terms:</strong> All payment schedules must be followed strictly. Late payments may incur penalties.
                </p>
              </div>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="text-sm text-gray-700">
                  I acknowledge that the reservation fee is non-refundable and I agree to the terms and conditions stated above.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
        >
          <FileCheck className="h-5 w-5" />
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
