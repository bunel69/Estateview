import { BarChart3, Download, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function AdminReports() {
  const propertyStatusData = [
    { name: "Available", value: 45, color: "#10b981" },
    { name: "Reserved", value: 28, color: "#f59e0b" },
    { name: "Sold", value: 82, color: "#6366f1" },
  ];

  const monthlyPaymentsData = [
    { month: "Jan", amount: 12500000 },
    { month: "Feb", amount: 15800000 },
    { month: "Mar", amount: 18200000 },
    { month: "Apr", amount: 14500000 },
    { month: "May", amount: 16900000 },
    { month: "Jun", amount: 19500000 },
  ];

  const stats = [
    { label: "Total Reservations", value: "110", period: "This Year" },
    { label: "Verified Payments", value: "284", period: "This Year" },
    { label: "Total Revenue", value: "₱97.4M", period: "This Year" },
    { label: "Avg. Sale Price", value: "₱3.8M", period: "Per Unit" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
          <p className="text-gray-600">View comprehensive data and insights</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export Report
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-500">{stat.period}</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Property Status Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Property Status Distribution</h2>
              <p className="text-sm text-gray-600">Current inventory overview</p>
            </div>
            <BarChart3 className="h-6 w-6 text-blue-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
            {propertyStatusData.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium text-gray-900">{item.value}</span>
                </div>
                <div className="text-xs text-gray-600">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Payments Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">Monthly Payment Collections</h2>
              <p className="text-sm text-gray-600">6-month trend</p>
            </div>
            <BarChart3 className="h-6 w-6 text-green-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyPaymentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => `₱${(value / 1000000).toFixed(1)}M`}
              />
              <Legend />
              <Bar dataKey="amount" fill="#10b981" name="Collection (₱)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Performance Summary</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Metric</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Q1 2026</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Target</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Achievement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Total Sales</td>
                <td className="px-6 py-4 text-gray-700">₱46.5M</td>
                <td className="px-6 py-4 text-gray-700">₱45M</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    103%
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Reservations</td>
                <td className="px-6 py-4 text-gray-700">38</td>
                <td className="px-6 py-4 text-gray-700">40</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    95%
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Client Satisfaction</td>
                <td className="px-6 py-4 text-gray-700">4.8/5</td>
                <td className="px-6 py-4 text-gray-700">4.5/5</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    107%
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">Payment Collection Rate</td>
                <td className="px-6 py-4 text-gray-700">96%</td>
                <td className="px-6 py-4 text-gray-700">90%</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    107%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
