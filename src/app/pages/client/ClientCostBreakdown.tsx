import { useState } from "react";
import { Calculator, Home, MapPin } from "lucide-react";

export function ClientCostBreakdown() {
  const [propertyType, setPropertyType] = useState<"house-and-lot" | "lot-only">("house-and-lot");
  const [houseModel, setHouseModel] = useState("");
  const [lotLocation, setLotLocation] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [paymentOption, setPaymentOption] = useState("bank-loan");

  const houseModels = [
    { value: "naomi", label: "Naomi", price: 3500000 },
    { value: "hannah", label: "Hannah", price: 4800000 },
    { value: "nasiah", label: "Nasiah", price: 4200000 },
  ];

  const calculateCosts = () => {
    let basePrice = 0;
    
    if (propertyType === "house-and-lot" && houseModel) {
      const model = houseModels.find(m => m.value === houseModel);
      basePrice = model?.price || 0;
    } else if (propertyType === "lot-only") {
      basePrice = 1200000; // Example lot price
    }

    const reservationFee = propertyType === "house-and-lot" ? 50000 : 20000;
    const downPayment = (basePrice * downPaymentPercent) / 100;
    const monthlyDP = (downPayment - reservationFee) / 24; // 24 months
    const loanAmount = basePrice - downPayment;
    const monthlyAmortization = (loanAmount * 0.08) / 12; // Approx 8% annual

    return {
      basePrice,
      reservationFee,
      downPayment,
      monthlyDP,
      loanAmount,
      monthlyAmortization,
    };
  };

  const costs = calculateCosts();

  return (
    <div className="bg-white">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Cost Breakdown</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Calculate your payment plan and monthly amortization</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Property Details</h2>
              <div className="bg-white shadow-sm p-8 space-y-8">
                {/* Property Type */}
                <div>
                  <label className="block text-sm text-gray-700 mb-4 uppercase tracking-wide">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPropertyType("house-and-lot")}
                      className={`p-6 border transition-colors ${
                        propertyType === "house-and-lot"
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <Home className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                      <span className="text-gray-900">House & Lot</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType("lot-only")}
                      className={`p-6 border transition-colors ${
                        propertyType === "lot-only"
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <MapPin className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                      <span className="text-gray-900">Lot Only</span>
                    </button>
                  </div>
                </div>

                {/* House Model (if house-and-lot) */}
                {propertyType === "house-and-lot" && (
                  <div>
                    <label htmlFor="houseModel" className="block text-sm text-gray-700 mb-4 uppercase tracking-wide">
                      House Model
                    </label>
                    <select
                      id="houseModel"
                      value={houseModel}
                      onChange={(e) => setHouseModel(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">Select a model</option>
                      {houseModels.map((model) => (
                        <option key={model.value} value={model.value}>
                          {model.label} - ₱{model.price.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Lot Location */}
                <div>
                  <label htmlFor="lotLocation" className="block text-sm text-gray-700 mb-4 uppercase tracking-wide">
                    Lot Location
                  </label>
                  <select
                    id="lotLocation"
                    value={lotLocation}
                    onChange={(e) => setLotLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Select a lot</option>
                    <option value="lot-45">Lot 45 - 120 sqm</option>
                    <option value="lot-46">Lot 46 - 150 sqm</option>
                    <option value="lot-47">Lot 47 - 135 sqm</option>
                  </select>
                </div>

                {/* Down Payment Percentage */}
                <div>
                  <label htmlFor="downPayment" className="block text-sm text-gray-700 mb-4 uppercase tracking-wide">
                    Down Payment: {downPaymentPercent}%
                  </label>
                  <input
                    id="downPayment"
                    type="range"
                    min="20"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-gray-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>20% (Minimum)</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block text-sm text-gray-700 mb-4 uppercase tracking-wide">
                    Payment Option
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="bank-loan"
                        checked={paymentOption === "bank-loan"}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="text-gray-900 focus:ring-gray-900"
                      />
                      <span className="text-gray-900">Bank Loan</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="deferred"
                        checked={paymentOption === "deferred"}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="text-gray-900 focus:ring-gray-900"
                      />
                      <span className="text-gray-900">Deferred Payment</span>
                    </label>
                    <label className="flex items-center gap-3 p-4 border cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="cash"
                        checked={paymentOption === "cash"}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="text-gray-900 focus:ring-gray-900"
                      />
                      <span className="text-gray-900">Cash</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Cost Summary</h2>
              <div className="bg-gray-900 shadow-sm p-8 text-white space-y-8">
                <div className="flex items-center gap-4 pb-8 border-b border-white/10">
                  <Calculator className="h-10 w-10 text-white" />
                  <div>
                    <div className="text-sm text-white/60 uppercase tracking-wide mb-1">Estimated Total</div>
                    <div className="text-4xl font-light">₱{costs.basePrice.toLocaleString()}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">Reservation Fee</span>
                    <span className="text-xl font-light">₱{costs.reservationFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">Down Payment ({downPaymentPercent}%)</span>
                    <span className="text-xl font-light">₱{costs.downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">Monthly DP (24 months)</span>
                    <span className="text-xl font-light">₱{costs.monthlyDP.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  {paymentOption === "bank-loan" && (
                    <>
                      <div className="flex justify-between items-center pb-4 border-b border-white/10">
                        <span className="text-white/60">Loan Amount</span>
                        <span className="text-xl font-light">₱{costs.loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Est. Monthly Amortization</span>
                        <span className="text-xl font-light">₱{costs.monthlyAmortization.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="bg-yellow-500/20 border border-yellow-400/30 p-6">
                  <p className="text-sm text-yellow-100 leading-relaxed">
                    <strong>Note:</strong> This is an estimated calculation. Actual prices may vary based on lot size and location. Bank loan rates subject to approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}