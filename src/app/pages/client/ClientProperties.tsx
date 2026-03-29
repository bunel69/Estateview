import { Bed, Bath, Maximize, Eye } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ClientProperties() {
  const houseModels = [
    {
      name: "Naomi",
      bedrooms: 3,
      bathrooms: 2,
      floorArea: "75 sqm",
      price: "₱3,500,000",
      image: "https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NDg2MDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Hannah",
      bedrooms: 4,
      bathrooms: 3,
      floorArea: "92 sqm",
      price: "₱4,800,000",
      image: "https://images.unsplash.com/photo-1758555226274-7b9f5c220b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG91c2UlMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3NDUzOTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Nasiah",
      bedrooms: 4,
      bathrooms: 2,
      floorArea: "88 sqm",
      price: "₱4,200,000",
      image: "https://images.unsplash.com/photo-1648147870253-c45f6f430528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzQ1MzkwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="space-y-12">
      {/* House Models */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Our Properties</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our premium house models and available lots</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseModels.map((model) => (
              <div key={model.name} className="bg-white shadow-sm overflow-hidden hover:shadow-md transition-all group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-light text-gray-900">{model.name}</h3>
                    <span className="text-lg text-gray-900">{model.price}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-100">
                    <div className="text-center">
                      <Bed className="h-6 w-6 text-gray-400 mb-2 mx-auto" />
                      <div className="text-2xl font-light text-gray-900 mb-1">{model.bedrooms}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 text-gray-400 mb-2 mx-auto" />
                      <div className="text-2xl font-light text-gray-900 mb-1">{model.bathrooms}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <Maximize className="h-6 w-6 text-gray-400 mb-2 mx-auto" />
                      <div className="text-2xl font-light text-gray-900 mb-1">{model.floorArea}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Floor Area</div>
                    </div>
                  </div>
                  <button className="w-full px-6 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                    <Eye className="h-5 w-5" />
                    View 360° Virtual Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subdivision Map */}
      <div>
        <h2 className="text-2xl font-light text-gray-900 mb-8">Subdivision Lot Map</h2>
        <div className="bg-white shadow-sm overflow-hidden">
          {/* Map Legend */}
          <div className="p-8 border-b border-gray-100">
            <h3 className="text-lg text-gray-900 mb-6 uppercase tracking-wide">Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-orange-500"></div>
                <span className="text-sm text-gray-700">Playground/Amenities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-gray-400"></div>
                <span className="text-sm text-gray-700">Model Houses</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-green-500"></div>
                <span className="text-sm text-gray-700">Lot Only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-yellow-500"></div>
                <span className="text-sm text-gray-700">House and Lot</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-amber-700"></div>
                <span className="text-sm text-gray-700">Commercial Area</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-pink-500"></div>
                <span className="text-sm text-gray-700">Sold Lots</span>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="p-12 bg-gray-50 min-h-[600px] flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="h-20 w-20 bg-gray-200 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3">Interactive GIS Map</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Click on lots to view details including lot number, area, and availability status.
              </p>
              <div className="flex flex-wrap gap-3 justify-center text-sm text-gray-600">
                <span className="px-4 py-2 bg-white shadow-sm">Zoom In/Out</span>
                <span className="px-4 py-2 bg-white shadow-sm">Click Lots</span>
                <span className="px-4 py-2 bg-white shadow-sm">Pan Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}