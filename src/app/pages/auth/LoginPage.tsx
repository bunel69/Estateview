import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Building2, Mail, Lock, LogIn } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialRole = location.state?.role || 'client';
  const [selectedRole, setSelectedRole] = useState(initialRole);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect based on role
    if (selectedRole === 'client') {
      navigate('/client');
    } else if (selectedRole === 'staff') {
      navigate('/staff');
    } else if (selectedRole === 'admin') {
      navigate('/admin');
    }
  };

  const roleColors = {
    client: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    staff: { bg: 'bg-green-600', hover: 'hover:bg-green-700' },
    admin: { bg: 'bg-gray-900', hover: 'hover:bg-gray-800' },
  };

  const colors = roleColors[selectedRole as keyof typeof roleColors];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625405062688-3cfb0b769364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmUlMjBsaWdodHxlbnwxfHx8fDE3NzQ1MzgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"></div>
        <div className="absolute bottom-12 left-12 text-white max-w-md">
          <h2 className="text-4xl font-light mb-4">Welcome to EstateView</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Your gateway to premium property management and reservation system.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-12">
            <div className="h-8 w-8 bg-gray-900 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div className="text-xl font-light tracking-wide text-gray-900">ESTATEVIEW</div>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Sign In</h1>
            <p className="text-gray-600">Access your account</p>
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">Login As</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('client')}
                className={`px-4 py-3 border text-sm transition-all uppercase tracking-wide ${
                  selectedRole === 'client'
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Client
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('staff')}
                className={`px-4 py-3 border text-sm transition-all uppercase tracking-wide ${
                  selectedRole === 'staff'
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Staff
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`px-4 py-3 border text-sm transition-all uppercase tracking-wide ${
                  selectedRole === 'admin'
                    ? 'bg-gray-900 border-gray-900 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700 mb-2 uppercase tracking-wide">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="border-gray-300" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-gray-900 hover:text-gray-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full ${colors.bg} ${colors.hover} text-white py-4 transition-colors flex items-center justify-center gap-2 text-sm tracking-wide uppercase`}
            >
              Sign In
              <LogIn className="h-5 w-5" />
            </button>
          </form>

          {/* Sign Up Link */}
          {selectedRole === 'client' && (
            <div className="mt-8 text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link to="/auth/signup" className="text-gray-900 hover:text-gray-600 font-normal">
                Sign up here
              </Link>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm uppercase tracking-wide">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}