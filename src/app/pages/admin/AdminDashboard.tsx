import { Users, Building, FileCheck, CreditCard, Calendar, TrendingUp, AlertTriangle, BarChart3 } from "lucide-react";
import { Link } from "react-router";

export function AdminDashboard() {
  const stats = [
    { label: "Total Clients", value: "156", change: "+12%", icon: Users, link: "/admin/users" },
    { label: "Available Lots", value: "45", change: "-5", icon: Building, link: "/admin/properties" },
    { label: "Reserved Lots", value: "28", change: "+8", icon: FileCheck, link: "/admin/reservations" },
    { label: "Sold Lots", value: "82", change: "+15", icon: Building, link: "/admin/properties" },
  ];

  const pendingItems = [
    { label: "Pending Reservations", value: 8, link: "/admin/reservations" },
    { label: "Pending Appointments", value: 12, link: "/admin/reservations" },
    { label: "Payment Verifications", value: 15, link: "/admin/payments" },
  ];

  const recentActivity = [
    { action: "New reservation submitted", user: "Juan Dela Cruz", time: "2 hours ago", type: "reservation" },
    { action: "Payment verified", user: "Maria Santos", time: "3 hours ago", type: "payment" },
    { action: "New staff member added", user: "Pedro Reyes", time: "5 hours ago", type: "staff" },
    { action: "Property updated", user: "Admin", time: "1 day ago", type: "property" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-12">
        <div className="bg-white shadow-sm p-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Complete overview and control of EstateView system</p>
        </div>

        {/* Main Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.label}
                to={stat.link}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    {stat.change}
                  </div>
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </Link>
            );
          })}
        </div>

        {/* Pending Items Alert */}
        <div className="bg-yellow-50 border border-yellow-200 p-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Action Required</h3>
              <p className="text-gray-700 leading-relaxed">
                There are pending items that require your attention.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {pendingItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="bg-white p-6 border border-yellow-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-light text-gray-900 mb-2">{item.value}</div>
                <div className="text-sm text-gray-700 uppercase tracking-wide">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Recent Activity</h2>
            <div className="bg-white shadow-sm divide-y divide-gray-100">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`h-2 w-2 rounded-full mt-2 ${
                        activity.type === 'reservation' ? 'bg-orange-600' :
                        activity.type === 'payment' ? 'bg-green-600' :
                        activity.type === 'staff' ? 'bg-blue-600' :
                        'bg-purple-600'
                      }`}></div>
                      <div>
                        <div className="text-gray-900 mb-1">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.user}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link
                to="/admin/staff"
                className="block bg-white p-8 shadow-sm hover:shadow-md transition-all group"
              >
                <Users className="h-10 w-10 text-gray-400 mb-4 group-hover:text-gray-900 transition-colors" />
                <h3 className="text-lg text-gray-900 mb-2">Manage Staff</h3>
                <p className="text-sm text-gray-600">Add, edit, or remove staff members</p>
              </Link>
              <Link
                to="/admin/properties"
                className="block bg-white p-8 shadow-sm hover:shadow-md transition-all group"
              >
                <Building className="h-10 w-10 text-gray-400 mb-4 group-hover:text-gray-900 transition-colors" />
                <h3 className="text-lg text-gray-900 mb-2">Property Management</h3>
                <p className="text-sm text-gray-600">Update lot availability and pricing</p>
              </Link>
              <Link
                to="/admin/reports"
                className="block bg-white p-8 shadow-sm hover:shadow-md transition-all group"
              >
                <BarChart3 className="h-10 w-10 text-gray-400 mb-4 group-hover:text-gray-900 transition-colors" />
                <h3 className="text-lg text-gray-900 mb-2">View Reports</h3>
                <p className="text-sm text-gray-600">Analytics and performance insights</p>
              </Link>
            </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="bg-white shadow-sm p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8">System Overview</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">1,234</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Total Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">₱85M</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Total Sales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">4.8/5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}