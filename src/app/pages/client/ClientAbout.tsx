import { useNavigate } from "react-router";
import { Building2, Target, Users, Award, CheckCircle2, Calendar, FileText, CreditCard } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ClientAbout() {
  const navigate = useNavigate();

  const clientFeatures = [
    {
      icon: Building2,
      title: "Browse Properties",
      description: "Explore our premium house models and available lots with detailed information and virtual tours"
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book property viewings and consultations at your convenience through our online system"
    },
    {
      icon: FileText,
      title: "Track Payments",
      description: "Monitor your payment schedule, upload proof of payment, and view billing history"
    },
    {
      icon: CreditCard,
      title: "Calculate Costs",
      description: "Use our cost breakdown tool to plan your payment options and see monthly amortizations"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            About Manhattan Residences
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your gateway to premium residential living in Candelaria
          </p>
        </div>
      </section>

      {/* Manhattan Residences */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwYWVyaWFsfGVufDF8fHx8MTc3NDUzODM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manhattan Residences development"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                Manhattan Residences<br />Candelaria
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Manhattan Residences is a premier residential development located in the heart of Candelaria. 
                We offer modern, well-designed homes in a secure and family-friendly community with complete amenities.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our development features premium house models, spacious lots, and a strategic location that provides 
                easy access to schools, shopping centers, and major transportation routes.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Target className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-xl font-normal text-gray-900 mb-2">Prime Location</div>
                    <div className="text-gray-600">Strategic access to key areas and amenities</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-xl font-normal text-gray-900 mb-2">Quality Design</div>
                    <div className="text-gray-600">Modern architecture and premium finishes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portal Features */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Your Client Portal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage your property journey in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center bg-white shadow-sm p-8">
                  <div className="flex justify-center mb-6">
                    <Icon className="h-12 w-12 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DGA Realty */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">DGA Realty Corporation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A trusted name in real estate development, committed to providing quality homes and exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Building2 className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Years of experience in property development and management</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Users className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Client-Focused</h3>
              <p className="text-gray-600 leading-relaxed">Dedicated to understanding and meeting client needs</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-12 w-12 text-gray-900" />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Committed to delivering high-quality developments</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your journey to homeownership made simple
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-light mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Browse Properties</h3>
              <p className="text-gray-600 leading-relaxed">Explore our house models and available lots</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-light mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Schedule Visit</h3>
              <p className="text-gray-600 leading-relaxed">Book an appointment to view properties</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-light mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Calculate Plan</h3>
              <p className="text-gray-600 leading-relaxed">Use our tool to plan your payment options</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-light mb-6 mx-auto">
                4
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-3">Reserve & Pay</h3>
              <p className="text-gray-600 leading-relaxed">Submit reservation and track payments online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Begin?</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-10">
            Start exploring properties and take the first step toward your dream home
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/client/properties')}
              className="px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide uppercase font-medium"
            >
              View Properties
            </button>
            <button
              onClick={() => navigate('/client/appointments')}
              className="px-10 py-4 bg-transparent text-white border border-white/50 hover:bg-white/10 transition-all duration-300 text-sm tracking-wide uppercase font-medium backdrop-blur-sm"
            >
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
