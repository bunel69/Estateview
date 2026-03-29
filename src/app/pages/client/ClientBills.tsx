import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

interface Bill {
  id: number;
  month: string;
  amount: number;
  dueDate: string;
  status: "paid" | "unpaid";
  paidDate?: string;
}

export function ClientBills() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"unpaid" | "paid">("unpaid");

  const bills: Bill[] = [
    {
      id: 1,
      month: "Jan",
      amount: 87352.64,
      dueDate: "January 15 2026",
      status: "paid",
      paidDate: "January 14 2026"
    },
    {
      id: 2,
      month: "Feb",
      amount: 87352.64,
      dueDate: "February 15 2026",
      status: "paid",
      paidDate: "February 14 2026"
    },
    {
      id: 3,
      month: "Mar",
      amount: 87352.64,
      dueDate: "March 15 2026",
      status: "unpaid",
    },
    {
      id: 4,
      month: "Apr",
      amount: 87352.64,
      dueDate: "April 15 2026",
      status: "unpaid",
    },
    {
      id: 5,
      month: "May",
      amount: 87352.64,
      dueDate: "May 15 2026",
      status: "unpaid",
    },
    {
      id: 6,
      month: "Jun",
      amount: 87352.64,
      dueDate: "June 15 2026",
      status: "unpaid",
    },
  ];

  const currentBills = bills.filter(b => b.status === "unpaid").slice(0, 1);
  const upcomingBills = bills.filter(b => b.status === "unpaid").slice(1);
  const paidBills = bills.filter(b => b.status === "paid");

  const totalBalance = 1039840.00;

  const displayedBills = activeTab === "unpaid" 
    ? [...currentBills, ...upcomingBills] 
    : paidBills;

  const handleBillClick = (bill: Bill) => {
    if (bill.status === "paid") {
      navigate(`/client/bills/paid/${bill.id}`);
    } else {
      navigate(`/client/bills/${bill.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-8">
      {/* Header */}
      <div className="bg-white pt-8 pb-6 px-6 sticky top-0 z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900">My Bills</h1>
        </div>

        {/* Account Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-light text-gray-900 mb-1">House & Lot</h2>
              <p className="text-sm font-light text-gray-600">20% Equity Payables</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-light text-gray-900">
                ₱{totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-sm font-light text-gray-600 mt-1">Balance</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 rounded-xl p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("unpaid")}
            className={`flex-1 py-3 rounded-lg font-light transition-all ${
              activeTab === "unpaid"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600"
            }`}
          >
            Unpaid
          </button>
          <button
            onClick={() => setActiveTab("paid")}
            className={`flex-1 py-3 rounded-lg font-light transition-all ${
              activeTab === "paid"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600"
            }`}
          >
            Paid
          </button>
        </div>
      </div>

      {/* Bills Content */}
      <div className="px-6 pt-6">
        {activeTab === "unpaid" ? (
          <>
            {/* Current Bills */}
            {currentBills.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-light text-gray-900 mb-4">Current Bills</h3>
                <div className="space-y-4">
                  {currentBills.map((bill) => (
                    <div
                      key={bill.id}
                      onClick={() => handleBillClick(bill)}
                      className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] transition-transform"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-light text-gray-900">{bill.month}</h4>
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-light">
                            Unpaid
                          </span>
                        </div>
                        <p className="text-sm font-light text-gray-500">Due date {bill.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-lg font-light text-gray-900">
                            ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Bills */}
            {upcomingBills.length > 0 && (
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-4">Upcoming Bills</h3>
                <div className="space-y-4">
                  {upcomingBills.map((bill) => (
                    <div
                      key={bill.id}
                      onClick={() => handleBillClick(bill)}
                      className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] transition-transform"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-light text-gray-900">{bill.month}</h4>
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-light">
                            Unpaid
                          </span>
                        </div>
                        <p className="text-sm font-light text-gray-500">Due date {bill.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-lg font-light text-gray-900">
                            ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Paid Bills */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Paid Bills</h3>
              <div className="space-y-4">
                {paidBills.map((bill) => (
                  <div
                    key={bill.id}
                    onClick={() => handleBillClick(bill)}
                    className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-light text-gray-900">{bill.month}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-light">
                          Paid
                        </span>
                      </div>
                      <p className="text-sm font-light text-gray-500">Paid on {bill.paidDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-lg font-light text-gray-900">
                          ₱{bill.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {displayedBills.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-light">No bills found</p>
          </div>
        )}
      </div>
    </div>
  );
}