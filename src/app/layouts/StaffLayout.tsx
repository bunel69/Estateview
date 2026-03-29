import { Outlet, Link, useLocation } from "react-router";
import { Building2, LayoutDashboard, Calendar, FileCheck, CreditCard, Users, LogOut, Home, User } from "lucide-react";

export function StaffLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/staff', icon: LayoutDashboard },
    { name: 'Property Management', path: '/staff/properties', icon: Home },
    { name: 'Appointments', path: '/staff/appointments', icon: Calendar },
    { name: 'Reservations', path: '/staff/reservations', icon: FileCheck },
    { name: 'Payment Verification', path: '/staff/payments', icon: CreditCard },
    { name: 'Client Records', path: '/staff/clients', icon: Users },
    { name: 'Profile', path: '/staff/profile', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/staff') {
      return location.pathname === '/staff';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/staff" className="flex items-center gap-3">
              <div className="h-8 w-8 bg-green-600 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-light tracking-wide text-gray-900">ESTATEVIEW</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Staff Portal</div>
              </div>
            </Link>

            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2 bg-white shadow-sm p-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors text-sm tracking-wide ${
                      active
                        ? 'bg-green-50 text-green-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}