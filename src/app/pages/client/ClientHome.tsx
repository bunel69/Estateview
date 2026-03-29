import { useNavigate } from "react-router";
import { ArrowRight, Calendar, FileText, CreditCard, MapPin, Building2, CheckCircle2, DollarSign } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ClientHome() {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Appointment",
      description: "Book a property visit or consultation",
      action: () => navigate('/client/appointments'),
      color: "blue"
    },
    {
      icon: FileText,
      title: "My Bills",
      description: "View and manage your payments",
      action: () => navigate('/client/bills'),
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Cost Breakdown",
      description: "Calculate your payment plan",
      action: () => navigate('/client/cost-breakdown'),
      color: "purple"
    },
  ];

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NDg2MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Naomi",
      area: "75 sqm",
      bedrooms: 3,
      bathrooms: 2,
      price: "₱3,500,000"
    },
    {
      image: "https://images.unsplash.com/photo-1758555226274-7b9f5c220b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG91c2UlMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3NDUzOTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hannah",
      area: "92 sqm",
      bedrooms: 4,
      bathrooms: 3,
      price: "₱4,800,000"
    },
    {
      image: "https://images.unsplash.com/photo-1648147870253-c45f6f430528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzQ1MzkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nasiah",
      area: "88 sqm",
      bedrooms: 4,
      bathrooms: 2,
      price: "₱4,200,000"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Low Down Payment",
      description: "Start with as low as 20% down payment"
    },
    {
      icon: CheckCircle2,
      title: "Flexible Financing",
      description: "Multiple payment options available"
    },
    {
      icon: CheckCircle2,
      title: "Prime Location",
      description: "Strategic location with complete amenities"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Welcome Message */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735047919226-82cacd6c0353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHdlbGNvbWV8ZW58MXx8fHwxNzc0NTM5NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Welcome to your future home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-white/90 mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-sm tracking-wide uppercase">Manhattan Residences Candelaria</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Welcome Back,<br />
              <span className="font-normal">Juan</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Your journey to your dream home continues here. Explore properties, manage appointments, and track your progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/client/properties')}
                className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide uppercase font-medium flex items-center gap-2 shadow-lg"
              >
                View Properties
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/client/appointments')}
                className="px-10 py-4 bg-transparent text-white border border-white/50 hover:bg-white/10 transition-all duration-300 text-sm tracking-wide uppercase font-medium backdrop-blur-sm"
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access your most-used features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="group text-left bg-white shadow-sm hover:shadow-md transition-all duration-300 p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{action.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{action.description}</p>
                  <div className="flex items-center gap-2 text-gray-900 text-sm tracking-wide uppercase">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Available House Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium collection of house designs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div 
                key={index} 
                className="group cursor-pointer" 
                onClick={() => navigate('/client/properties')}
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-white shadow-sm">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-light text-gray-900">{property.title}</h3>
                  <span className="text-lg text-gray-900">{property.price}</span>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>{property.bedrooms} Bed</span>
                  <span>{property.bathrooms} Bath</span>
                  <span>{property.area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/client/properties')}
              className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wide uppercase font-medium inline-flex items-center gap-2"
            >
              View All Properties
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
                Your Benefits as a<br />Manhattan Resident
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Experience exceptional value with our comprehensive benefits package designed to make homeownership accessible and rewarding.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-8 w-8 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-normal text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => navigate('/client/cost-breakdown')}
                className="mt-10 px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wide uppercase font-medium inline-flex items-center gap-2"
              >
                Calculate Your Plan
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div>
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759670524695-8d78b05b385b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzQ1Mzk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Manhattan Residences"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Need Assistance?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Our team is here to help you every step of the way
          </p>
          <button
            onClick={() => navigate('/client/appointments')}
            className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide uppercase font-medium inline-flex items-center gap-2 shadow-lg"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
