import { Link } from "react-router";
import { Calendar, Calculator, FileText, Building, ArrowRight, Bell, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ClientDashboard() {
  const quickActions = [
    { icon: Building, label: "Browse Properties", path: "/client/properties" },
    { icon: Calendar, label: "Schedule Appointment", path: "/client/appointments" },
    { icon: Calculator, label: "Calculate Costs", path: "/client/cost-breakdown" },
    { icon: FileText, label: "My Bills", path: "/client/bills" },
  ];

  const featuredModels = [
    { name: "Naomi", type: "3BR, 2BA - 75 sqm", price: "₱3,500,000", image: "https://images.unsplash.com/photo-1760072513357-9d450e935a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDQ2ODQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { name: "Hannah", type: "4BR, 3BA - 92 sqm", price: "₱4,800,000", image: "https://images.unsplash.com/photo-1758448501014-3a6068fb9d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGxpdmluZyUyMHNwYWNlfGVufDF8fHx8MTc3NDUzODY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { name: "Nasiah", type: "4BR, 2BA - 88 sqm", price: "₱4,200,000", image: "https://images.unsplash.com/photo-1696237461860-630be53f179c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQ1Mzg2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-12">
        {/* Welcome Header */}
        <div className="bg-white shadow-sm p-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Welcome back, Juan</h1>
          <p className="text-lg text-gray-600">Ready to find your dream home?</p>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.path}
                  to={action.path}
                  className="bg-white p-8 shadow-sm hover:shadow-md transition-all group"
                >
                  <Icon className="h-10 w-10 text-gray-400 mb-4 group-hover:text-blue-600 transition-colors" />
                  <div className="text-lg text-gray-900 mb-2">{action.label}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Get started <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Current Promotions */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Current Promotions</h2>
          <div className="bg-gray-900 text-white p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white text-gray-900 text-xs uppercase tracking-widest mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-3xl font-light mb-4">
                Early Buyer Special Discount
              </h3>
              <p className="text-white/80 mb-8 text-lg leading-relaxed">
                Get up to 15% discount on down payments and enjoy flexible payment terms. 
                Valid for the first 50 reservations only!
              </p>
              <Link
                to="/client/reservation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors text-sm tracking-wide uppercase"
              >
                Reserve Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Featured House Models */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light text-gray-900">Featured House Models</h2>
            <Link to="/client/properties" className="text-gray-900 hover:text-gray-600 text-sm uppercase tracking-wide flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredModels.map((model) => (
              <div key={model.name} className="bg-white shadow-sm overflow-hidden hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-light text-gray-900">{model.name}</h3>
                    <span className="text-sm text-gray-600">{model.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{model.type}</p>
                  <Link
                    to="/client/properties"
                    className="text-gray-900 hover:text-gray-600 text-sm uppercase tracking-wide inline-flex items-center gap-2"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Activity */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white shadow-sm divide-y divide-gray-100">
            <div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <CheckCircle2 className="h-6 w-6 text-gray-400" />
              <div className="flex-1">
                <div className="text-gray-900">Viewed Naomi Model</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <CheckCircle2 className="h-6 w-6 text-gray-400" />
              <div className="flex-1">
                <div className="text-gray-900">Calculated cost for Lot 45</div>
                <div className="text-sm text-gray-500">Yesterday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}