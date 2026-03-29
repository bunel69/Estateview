import { useNavigate } from "react-router";
import { Building2, Target, Users, Award, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            About EstateView
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your comprehensive property management and reservation system for Manhattan Residences Candelaria
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

      {/* DGA Realty */}
      <section className="py-24 lg:py-32 bg-gray-50">
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

      {/* EstateView System */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">The EstateView System</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive platform makes property browsing, reservation, and management seamless and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">For Clients</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Browse available properties and house models</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Schedule appointments and property viewings</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Calculate costs and payment plans</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Submit reservations and track payments</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8">For Staff & Admins</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Manage properties and appointments</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Verify payments and documentation</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Access client records and analytics</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-900 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Generate reports and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Portal */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Access Your Portal</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Sign in to your account based on your role
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <button
              onClick={() => navigate('/auth/login', { state: { role: 'client' } })}
              className="p-8 bg-white hover:bg-gray-100 transition-colors group text-center"
            >
              <div className="h-16 w-16 bg-blue-600 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-light text-gray-900 mb-2">Client Portal</div>
              <div className="text-sm text-gray-600">Access your dashboard</div>
            </button>
            <button
              onClick={() => navigate('/auth/login', { state: { role: 'staff' } })}
              className="p-8 bg-white hover:bg-gray-100 transition-colors group text-center"
            >
              <div className="h-16 w-16 bg-green-600 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-light text-gray-900 mb-2">Staff Portal</div>
              <div className="text-sm text-gray-600">Manage operations</div>
            </button>
            <button
              onClick={() => navigate('/auth/login', { state: { role: 'admin' } })}
              className="p-8 bg-white hover:bg-gray-100 transition-colors group text-center"
            >
              <div className="h-16 w-16 bg-gray-900 flex items-center justify-center mb-6 mx-auto">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-light text-gray-900 mb-2">Admin Portal</div>
              <div className="text-sm text-gray-600">Full system access</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}