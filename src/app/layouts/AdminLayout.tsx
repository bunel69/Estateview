import { Outlet, Link, useLocation } from "react-router";
import { Building2, LayoutDashboard, Users, Building, FileCheck, CreditCard, UserCog, BarChart3, LogOut, Calendar } from "lucide-react";

export function AdminLayout() {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Staff Management', path: '/admin/staff', icon: UserCog },
    { name: 'Property Management', path: '/admin/properties', icon: Building },
    { name: 'Appointments', path: '/admin/appointments', icon: Calendar },
    { name: 'Reservations', path: '/admin/reservations', icon: FileCheck },
    { name: 'Payment Verification', path: '/admin/payments', icon: CreditCard },
    { name: 'Client Records', path: '/admin/users', icon: Users },
    { name: 'Reports', path: '/admin/reports', icon: BarChart3 },
  ];

  const isActive = (path: string) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <Link to="/admin" className="flex items-center gap-3">
              <div className="h-8 w-8 bg-white flex items-center justify-center">
                <Building2 className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <div className="text-xl font-light tracking-wide text-white">ESTATEVIEW</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Admin Portal</div>
              </div>
            </Link>

            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
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
                        ? 'bg-gray-900 text-white'
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