import { Outlet, Link, useNavigate, useLocation } from "react-router";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
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
                to="/" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link 
                to="/properties" 
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive('/properties') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Properties
              </Link>
              <button
                onClick={() => navigate('/auth/login')}
                className="px-8 py-3 bg-gray-900 text-white text-sm tracking-wide uppercase hover:bg-gray-800 transition-colors"
              >
                Login
              </button>
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
                to="/"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/properties"
                className="block text-sm tracking-wide uppercase text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/auth/login');
                }}
                className="w-full text-left px-6 py-3 bg-gray-900 text-white text-sm tracking-wide uppercase"
              >
                Login
              </button>
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
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/properties" className="text-gray-400 hover:text-white transition-colors">Properties</Link></li>
                <li><Link to="/auth/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
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