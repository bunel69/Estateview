import { User, Mail, Phone, Lock, Save, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export function ClientAccount() {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  return (
    <div className="bg-white">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Account Settings</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage your profile and account preferences</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Picture */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-sm p-8">
                <h2 className="text-lg text-gray-900 mb-6 uppercase tracking-wide">Profile Picture</h2>
                <div className="flex flex-col items-center">
                  <div className="h-32 w-32 bg-gray-900 flex items-center justify-center mb-6">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm mb-3 uppercase tracking-wide w-full">
                    Upload Photo
                  </button>
                  <button className="px-6 py-3 text-gray-600 hover:text-gray-900 text-sm uppercase tracking-wide w-full">
                    Remove Photo
                  </button>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white shadow-sm p-8">
                  <h2 className="text-lg text-gray-900 mb-6 flex items-center gap-3 uppercase tracking-wide">
                    <User className="h-6 w-6 text-gray-400" />
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        defaultValue="Juan"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="middleName" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Middle Name
                      </label>
                      <input
                        id="middleName"
                        type="text"
                        defaultValue="Santos"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        defaultValue="Dela Cruz"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="suffix" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Suffix
                      </label>
                      <input
                        id="suffix"
                        type="text"
                        placeholder="Jr., Sr., III"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm p-8">
                  <h2 className="text-lg text-gray-900 mb-6 flex items-center gap-3 uppercase tracking-wide">
                    <Mail className="h-6 w-6 text-gray-400" />
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        defaultValue="juan.delacruz@example.com"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Contact Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        defaultValue="+63 912 345 6789"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm p-8">
                  <h2 className="text-lg text-gray-900 mb-6 flex items-center gap-3 uppercase tracking-wide">
                    <Lock className="h-6 w-6 text-gray-400" />
                    Change Password
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Current Password
                      </label>
                      <input
                        id="currentPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  <Save className="h-5 w-5" />
                  Save Changes
                </button>
              </form>

              {/* Logout Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  You will be logged out of your account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}