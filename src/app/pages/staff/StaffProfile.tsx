import { User, Mail, Phone, Lock, Save, Briefcase } from "lucide-react";

export function StaffProfile() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="space-y-12">
      <div className="bg-white shadow-sm p-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2">Profile</h1>
        <p className="text-lg text-gray-600">Manage your staff profile and account preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Picture */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-sm p-8">
            <h2 className="text-lg text-gray-900 mb-6 uppercase tracking-wide">Profile Picture</h2>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 bg-green-600 flex items-center justify-center mb-6">
                <User className="h-16 w-16 text-white" />
              </div>
              <button className="px-6 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors text-sm mb-3 uppercase tracking-wide w-full">
                Upload Photo
              </button>
              <button className="px-6 py-3 text-gray-600 hover:text-gray-900 text-sm uppercase tracking-wide w-full">
                Remove Photo
              </button>
            </div>
          </div>

          {/* Staff Information Card */}
          <div className="bg-white shadow-sm p-8 mt-6">
            <h2 className="text-lg text-gray-900 mb-6 uppercase tracking-wide">Staff Information</h2>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Employee ID</div>
                <div className="text-gray-900">STAFF-2024-001</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Position</div>
                <div className="text-gray-900">Sales Agent</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Department</div>
                <div className="text-gray-900">Sales</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">Date Hired</div>
                <div className="text-gray-900">January 15, 2024</div>
              </div>
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
                    defaultValue="Maria"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-700 mb-3 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    defaultValue="Garcia"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    defaultValue="maria.garcia@estateview.com"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
            >
              <Save className="h-5 w-5" />
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
