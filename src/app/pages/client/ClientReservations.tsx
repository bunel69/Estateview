import { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";

export function ClientReservations() {
  const [propertyType, setPropertyType] = useState<"house-lot" | "lot-only">("house-lot");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-3">Property Reservation</h1>
          <p className="text-gray-600">Reserve your dream property with us</p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Left Side Toggle */}
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-3 w-48">
              <button
                type="button"
                onClick={() => setPropertyType("house-lot")}
                className={`py-4 px-6 rounded-lg border-2 transition-all text-left ${
                  propertyType === "house-lot"
                    ? "bg-gray-900 border-gray-900 text-white font-medium"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-900"
                }`}
              >
                House & Lot
              </button>
              <button
                type="button"
                onClick={() => setPropertyType("lot-only")}
                className={`py-4 px-6 rounded-lg border-2 transition-all text-left ${
                  propertyType === "lot-only"
                    ? "bg-gray-900 border-gray-900 text-white font-medium"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-900"
                }`}
              >
                Lot Only
              </button>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
              {/* Form Fields */}
              <div className="space-y-6 mb-8">
                {/* Top Row */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {propertyType === "house-lot" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        House Model
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                        <option value="">Select Model</option>
                        <option value="naomi">Naomi</option>
                        <option value="hannah">Hannah</option>
                        <option value="nasiah">Nasiah</option>
                      </select>
                    </div>
                  )}
                  <div className={propertyType === "house-lot" ? "" : "sm:col-span-2"}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lot Location
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                      <option value="">Select Lot</option>
                      <option value="lot-1">Lot 1</option>
                      <option value="lot-2">Lot 2</option>
                      <option value="lot-3">Lot 3</option>
                      <option value="lot-4">Lot 4</option>
                      <option value="lot-5">Lot 5</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+63 912 345 6789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Second Row - Name Fields */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Juan"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      placeholder="Santos"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dela Cruz"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Third Row */}
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="juan@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                      <option value="">Select Country</option>
                      <option value="philippines">Philippines</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Payment
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                      <option value="">Select Payment Type</option>
                      <option value="loanable">Loanable</option>
                      <option value="deferred">Deferred</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Requirements Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Initial Requirement for Reservation of Unit
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Left Panel - Requirements List */}
                  <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-gray-900" />
                      Required Documents
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>5 pcs 1x1 picture</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>2 primary IDs with 3 original specimen signatures</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>Proof of Billing (Meralco or Internet Bill)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>PSA Birth Certificate and Marriage Contract with 2 Valid IDs of Spouse (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>Proof of Income (Certificate of Employment, Contract, and Payslips)</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>TIN ID (Tax Identification Number)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Panel - File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Documents
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 font-medium mb-1">Click to Upload</p>
                        <p className="text-sm text-gray-500">PDF, JPG, PNG, DOC (Max 10MB each)</p>
                      </label>
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            <FileText className="h-4 w-4 text-gray-900" />
                            <span className="flex-1 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))}
                              className="text-red-500 hover:text-red-700"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Any special request or details"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm tracking-wide uppercase"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}