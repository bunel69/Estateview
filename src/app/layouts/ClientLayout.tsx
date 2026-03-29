import { Outlet, Link, useNavigate, useLocation } from "react-router";
import { Building2, Menu, X, Bell } from "lucide-react";
import { useState } from "react";

export function ClientLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/client') {
      return location.pathname === '/client';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/client" className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-900 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xl font-light tracking-wide text-gray-900">ESTATEVIEW</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <Link 
                to="/client" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client') && location.pathname === '/client' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/client/about" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link 
                to="/client/properties" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/properties') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Properties
              </Link>
              <Link 
                to="/client/appointments" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/appointments') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Appointments
              </Link>
              <Link 
                to="/client/reservations" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/reservations') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Reservations
              </Link>
              <Link 
                to="/client/cost-breakdown" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/cost-breakdown') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Cost Breakdown
              </Link>
              <Link 
                to="/client/bills" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/bills') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Bills
              </Link>
              <Link 
                to="/client/notifications" 
                className={`text-sm tracking-wide uppercase transition-colors relative ${
                  isActive('/client/notifications') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Link>
              <Link 
                to="/client/account" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/client/account') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Account
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-4 border-t border-gray-100">
              <Link
                to="/client"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/client/about"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/client/properties"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/client/appointments"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Appointments
              </Link>
              <Link
                to="/client/reservations"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservations
              </Link>
              <Link
                to="/client/cost-breakdown"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cost Breakdown
              </Link>
              <Link
                to="/client/bills"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Bills
              </Link>
              <Link
                to="/client/notifications"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Notifications
              </Link>
              <Link
                to="/client/account"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Account
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-white flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-gray-900" />
                </div>
                <div className="text-xl font-light tracking-wide">ESTATEVIEW</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in finding your dream home at Manhattan Residences Candelaria.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-wide uppercase mb-6 font-normal">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/client" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/client/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/client/properties" className="text-gray-400 hover:text-white transition-colors">Properties</Link></li>
                <li><Link to="/client/appointments" className="text-gray-400 hover:text-white transition-colors">Appointments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-wide uppercase mb-6 font-normal">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>DGA Realty Corporation</li>
                <li>Manhattan Residences Candelaria</li>
                <li>info@estateview.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2026 EstateView by DGA Realty Corporation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}