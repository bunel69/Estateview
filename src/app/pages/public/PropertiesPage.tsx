import { Bed, Bath, Maximize, Eye, MapPin } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function PropertiesPage() {
  const houseModels = [
    {
      name: "Naomi",
      bedrooms: 3,
      bathrooms: 2,
      floorArea: "75 sqm",
      image: "https://images.unsplash.com/photo-1696237461860-630be53f179c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NDUyMDUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Hannah",
      bedrooms: 4,
      bathrooms: 3,
      floorArea: "92 sqm",
      image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGZhY2FkZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ1MzgyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Nasiah",
      bedrooms: 4,
      bathrooms: 2,
      floorArea: "88 sqm",
      image: "https://images.unsplash.com/photo-1611272267060-82338bad4112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3NDQzNDIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-6">
            <MapPin className="h-5 w-5" />
            <span className="text-sm tracking-wide uppercase">Manhattan Residences</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Our Properties
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our collection of premium house models and available lots
          </p>
        </div>
      </section>

      {/* House Models */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">House Models</h2>
            <p className="text-lg text-gray-600">Thoughtfully designed homes for modern living</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {houseModels.map((model) => (
              <div key={model.name} className="group cursor-pointer">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">{model.name}</h3>
                <div className="flex items-center gap-8 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5" />
                    <span>{model.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{model.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="h-5 w-5" />
                    <span>{model.floorArea}</span>
                  </div>
                </div>
                <button className="text-sm tracking-wide uppercase text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
                  <Eye className="h-4 w-4" />
                  View Virtual Tour
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subdivision Map */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Subdivision Layout</h2>
            <p className="text-lg text-gray-600">Interactive map of available lots</p>
          </div>
          
          <div className="bg-white shadow-sm overflow-hidden">
            {/* Map Legend */}
            <div className="p-8 border-b">
              <h3 className="text-xl font-normal text-gray-900 mb-6">Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-orange-500"></div>
                  <span className="text-sm text-gray-700">Playground</span>
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
                  <span className="text-sm text-gray-700">House & Lot</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-amber-700"></div>
                  <span className="text-sm text-gray-700">Commercial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-pink-500"></div>
                  <span className="text-sm text-gray-700">Sold</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="p-12 bg-gray-50 min-h-[600px] flex items-center justify-center">
              <div className="text-center max-w-md">
                <div className="h-20 w-20 flex items-center justify-center mx-auto mb-6">
                  <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">Interactive GIS Map</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Click on lots to view details including lot number, area, and availability status.
                </p>
                <div className="flex gap-3 justify-center text-xs text-gray-500 uppercase tracking-wide">
                  <span className="px-4 py-2 bg-white border border-gray-200">Zoom</span>
                  <span className="px-4 py-2 bg-white border border-gray-200">Click Lots</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}