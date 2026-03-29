import { useNavigate } from "react-router";
import { ArrowRight, MapPin, Building2, Calendar, Shield, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function LandingPage() {
  const navigate = useNavigate();

  const handleProtectedAction = (path: string) => {
    // In a real app, this would check authentication
    navigate('/auth/login');
  };

  const features = [
    {
      icon: Building2,
      title: "Premium Properties",
      description: "Choose from our exclusive house models and premium lots"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book property visits and consultations online"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Safe and transparent reservation and payment system"
    },
  ];

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1746458258536-b9ee5db20a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NDQ2MjExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Villa",
      area: "250 sqm",
      bedrooms: 4,
      bathrooms: 3
    },
    {
      image: "https://images.unsplash.com/photo-1696237461860-630be53f179c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ1MzU1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Contemporary House",
      area: "200 sqm",
      bedrooms: 3,
      bathrooms: 2
    },
    {
      image: "https://images.unsplash.com/photo-1766270596305-d0cfb9efaa52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVhbCUyMGVzdGF0ZSUyMHByb3BlcnR5JTIwdmlld3xlbnwxfHx8fDE3NzQ1MzgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Luxury Estate",
      area: "320 sqm",
      bedrooms: 5,
      bathrooms: 4
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Full screen with large image */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772567733008-4de82de3e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzaWRlbnRpYWwlMjBwcm9wZXJ0eSUyMGludGVyaW9yfGVufDF8fHx8MTc3NDUzODE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury property interior"
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
              Discover Your<br />
              <span className="font-normal">Dream Home</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Experience refined living in our thoughtfully designed residences
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/properties')}
                className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide uppercase font-medium flex items-center gap-2 shadow-lg"
              >
                View Properties
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleProtectedAction('/client/appointments')}
                className="px-10 py-4 bg-transparent text-white border border-white/50 hover:bg-white/10 transition-all duration-300 text-sm tracking-wide uppercase font-medium backdrop-blur-sm"
              >
                Book a Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of exceptional homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => navigate('/properties')}>
                <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">{property.title}</h3>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>{property.bedrooms} Bed</span>
                  <span>{property.bathrooms} Bath</span>
                  <span>{property.area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
                Why Choose<br />EstateView
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We're committed to helping you find the perfect home that matches your lifestyle and aspirations. Our properties offer exceptional value and quality.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-gray-900" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-normal text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwbHV4dXJ5JTIwaG9tZXxlbnwxfHx8fDE3NzQ1MzgxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern luxury living room"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-block px-4 py-2 bg-gray-900 text-white text-xs tracking-widest uppercase mb-6">
            Limited Offer
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
            Early Buyer Benefits
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Take advantage of our exclusive offers for Manhattan Residences with special discounts and flexible payment terms.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-gray-900" />
              </div>
              <p className="text-gray-700">Low down payment starting at 20%</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-gray-900" />
              </div>
              <p className="text-gray-700">Flexible bank financing options</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-gray-900" />
              </div>
              <p className="text-gray-700">Premium location with amenities</p>
            </div>
          </div>

          <button
            onClick={() => handleProtectedAction('/client/reservation')}
            className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-wide uppercase font-medium shadow-lg"
          >
            Reserve Now
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">
            Begin Your Journey
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join us in creating a home you'll love for years to come
          </p>
          <button
            onClick={() => navigate('/auth/signup')}
            className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide uppercase font-medium inline-flex items-center gap-2 shadow-lg"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}