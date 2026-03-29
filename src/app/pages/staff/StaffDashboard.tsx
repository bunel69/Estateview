import { Calendar, FileCheck, CreditCard, Users, TrendingUp, AlertCircle, Home } from "lucide-react";
import { Link } from "react-router";

export function StaffDashboard() {
  const stats = [
    { label: "Pending Appointments", value: 12, icon: Calendar, link: "/staff/appointments" },
    { label: "New Reservations", value: 8, icon: FileCheck, link: "/staff/reservations" },
    { label: "Payment Verifications", value: 15, icon: CreditCard, link: "/staff/payments" },
    { label: "Total Clients", value: 156, icon: Users, link: "/staff/clients" },
  ];

  const recentActivity = [
    { type: "appointment", client: "Maria Santos", action: "Scheduled property viewing", time: "2 hours ago" },
    { type: "reservation", client: "Pedro Reyes", action: "Submitted reservation for Lot 45", time: "4 hours ago" },
    { type: "payment", client: "Ana Garcia", action: "Uploaded payment proof", time: "5 hours ago" },
    { type: "appointment", client: "Jose Cruz", action: "Requested loan consultation", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-12">
        <div className="bg-white shadow-sm p-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Staff Dashboard</h1>
          <p className="text-lg text-gray-600">Manage appointments, reservations, and client records</p>
        </div>

        {/* Stats Grid */}
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
                  <Icon className="h-10 w-10 text-gray-400 group-hover:text-green-600 transition-colors" />
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </Link>
            );
          })}
        </div>

        {/* Alerts */}
        <div className="bg-yellow-50 border border-yellow-200 p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Action Required</h3>
              <p className="text-gray-700 leading-relaxed">
                You have 12 pending appointments waiting for approval and 15 payment verifications to review.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white shadow-sm divide-y divide-gray-100">
            {recentActivity.map((activity, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 flex items-center justify-center ${
                      activity.type === 'appointment' ? 'text-blue-600' :
                      activity.type === 'reservation' ? 'text-green-600' :
                      'text-orange-600'
                    }`}>
                      {activity.type === 'appointment' && <Calendar className="h-6 w-6" />}
                      {activity.type === 'reservation' && <FileCheck className="h-6 w-6" />}
                      {activity.type === 'payment' && <CreditCard className="h-6 w-6" />}
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{activity.client}</div>
                      <div className="text-sm text-gray-600">{activity.action}</div>
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
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              to="/staff/properties"
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <Home className="h-10 w-10 text-gray-400 mb-4 group-hover:text-green-600 transition-colors" />
              <h3 className="text-lg text-gray-900 mb-2">Property Management</h3>
              <p className="text-sm text-gray-600">Manage house models and lots</p>
            </Link>
            <Link
              to="/staff/appointments"
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <Calendar className="h-10 w-10 text-gray-400 mb-4 group-hover:text-green-600 transition-colors" />
              <h3 className="text-lg text-gray-900 mb-2">Review Appointments</h3>
              <p className="text-sm text-gray-600">Approve pending appointments</p>
            </Link>
            <Link
              to="/staff/reservations"
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <FileCheck className="h-10 w-10 text-gray-400 mb-4 group-hover:text-green-600 transition-colors" />
              <h3 className="text-lg text-gray-900 mb-2">Manage Reservations</h3>
              <p className="text-sm text-gray-600">Process reservation requests</p>
            </Link>
            <Link
              to="/staff/payments"
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
            >
              <CreditCard className="h-10 w-10 text-gray-400 mb-4 group-hover:text-green-600 transition-colors" />
              <h3 className="text-lg text-gray-900 mb-2">Verify Payments</h3>
              <p className="text-sm text-gray-600">Review payment submissions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}