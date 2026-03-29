import { useState } from "react";
import { Building, Home, MapPin, X } from "lucide-react";

interface Lot {
  id: number;
  number: string;
  type: "model-house" | "lot-only" | "house-and-lot" | "commercial" | "sold";
  clientName?: string;
  houseModel?: string;
  area: string;
  price?: number;
}

interface HouseModel {
  id: number;
  name: string;
  bedrooms: number;
  bathrooms: number;
  floorArea: string;
  price: number;
  image?: string;
}

export function StaffProperties() {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // House Models
  const houseModels: HouseModel[] = [
    { id: 1, name: "Naomi", bedrooms: 3, bathrooms: 2, floorArea: "75 sqm", price: 2500000, image: undefined },
    { id: 2, name: "Hannah", bedrooms: 4, bathrooms: 3, floorArea: "92 sqm", price: 3200000, image: undefined },
    { id: 3, name: "Nasiah", bedrooms: 4, bathrooms: 2, floorArea: "88 sqm", price: 2800000, image: undefined },
  ];

  // Subdivision Lots (Sample grid - 10x10)
  const lots: Lot[] = [
    { id: 1, number: "1", type: "sold", clientName: "Juan Dela Cruz", houseModel: "Naomi", area: "120 sqm", price: 3800000 },
    { id: 2, number: "2", type: "sold", clientName: "Maria Santos", houseModel: "Hannah", area: "150 sqm", price: 4500000 },
    { id: 3, number: "3", type: "house-and-lot", area: "135 sqm", price: 4000000 },
    { id: 4, number: "4", type: "lot-only", area: "140 sqm", price: 1400000 },
    { id: 5, number: "5", type: "lot-only", area: "130 sqm", price: 1300000 },
    { id: 6, number: "6", type: "sold", clientName: "Ana Garcia", houseModel: "Nasiah", area: "145 sqm", price: 4200000 },
    { id: 7, number: "7", type: "house-and-lot", area: "125 sqm", price: 3700000 },
    { id: 8, number: "8", type: "model-house", houseModel: "Naomi", area: "138 sqm", price: 3900000 },
    { id: 9, number: "9", type: "commercial", area: "142 sqm", price: 5000000 },
    { id: 10, number: "10", type: "house-and-lot", area: "128 sqm", price: 3800000 },
    { id: 11, number: "11", type: "model-house", houseModel: "Hannah", area: "150 sqm", price: 4500000 },
    { id: 12, number: "12", type: "commercial", area: "160 sqm", price: 5500000 },
    // Add more lots to fill the grid
    ...Array.from({ length: 88 }, (_, i) => {
      const types: Lot["type"][] = ["model-house", "lot-only", "house-and-lot", "commercial", "sold"];
      const randomType = types[Math.floor(Math.random() * types.length)];
      return {
        id: i + 13,
        number: `${i + 13}`,
        type: randomType,
        area: `${120 + Math.floor(Math.random() * 40)} sqm`,
        price: randomType === "commercial" ? 5000000 + Math.floor(Math.random() * 2000000) : 
               randomType === "lot-only" ? 1000000 + Math.floor(Math.random() * 500000) :
               3500000 + Math.floor(Math.random() * 1500000)
      };
    })
  ];

  const modelHouseCount = lots.filter(l => l.type === "model-house").length;
  const lotOnlyCount = lots.filter(l => l.type === "lot-only").length;
  const houseAndLotCount = lots.filter(l => l.type === "house-and-lot").length;
  const commercialCount = lots.filter(l => l.type === "commercial").length;
  const soldCount = lots.filter(l => l.type === "sold").length;

  const getTypeColor = (type: string) => {
    switch (type) {
      case "model-house":
        return "bg-gray-500 hover:bg-gray-600 border-gray-600";
      case "lot-only":
        return "bg-green-500 hover:bg-green-600 border-green-600";
      case "house-and-lot":
        return "bg-yellow-500 hover:bg-yellow-600 border-yellow-600";
      case "commercial":
        return "bg-amber-700 hover:bg-amber-800 border-amber-800";
      case "sold":
        return "bg-pink-500 hover:bg-pink-600 border-pink-600";
      default:
        return "bg-gray-300 hover:bg-gray-400 border-gray-400";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "model-house": return "Model House";
      case "lot-only": return "Lot Only";
      case "house-and-lot": return "House & Lot";
      case "commercial": return "Commercial";
      case "sold": return "Sold";
      default: return type;
    }
  };

  const handleLotClick = (lot: Lot) => {
    setSelectedLot(lot);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Management</h1>
        <p className="text-gray-600">View house models, subdivision lots, and client properties</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Home className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-2xl font-bold text-gray-600">{modelHouseCount}</div>
          </div>
          <div className="text-sm text-gray-600">Model Houses</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">{lotOnlyCount}</div>
          </div>
          <div className="text-sm text-gray-600">Lot Only</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Home className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-600">{houseAndLotCount}</div>
          </div>
          <div className="text-sm text-gray-600">House & Lot</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Building className="h-5 w-5 text-amber-700" />
            </div>
            <div className="text-2xl font-bold text-amber-700">{commercialCount}</div>
          </div>
          <div className="text-sm text-gray-600">Commercial</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-pink-600" />
            </div>
            <div className="text-2xl font-bold text-pink-600">{soldCount}</div>
          </div>
          <div className="text-sm text-gray-600">Sold</div>
        </div>
      </div>

      {/* House Models Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">House Models</h2>
          <p className="text-sm text-gray-600 mt-1">Available house designs for clients</p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {houseModels.map((model) => (
            <div key={model.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors">
              {/* Image */}
              <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                {model.image ? (
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                ) : (
                  <Home className="h-16 w-16 text-gray-400" />
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{model.name}</h3>
                  <p className="text-sm text-gray-600">{model.floorArea}</p>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building className="h-4 w-4" />
                    <span>{model.bedrooms} Bedrooms, {model.bathrooms} Bathrooms</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">₱{model.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subdivision Lot Map */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Subdivision Lot Map</h2>
          <p className="text-sm text-gray-600">Click on any lot to view details</p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-500 border-2 border-gray-600 rounded"></div>
            <span className="text-sm text-gray-700 font-medium">Model House</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 border-2 border-green-600 rounded"></div>
            <span className="text-sm text-gray-700 font-medium">Lot Only</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-500 border-2 border-yellow-600 rounded"></div>
            <span className="text-sm text-gray-700 font-medium">House & Lot</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-700 border-2 border-amber-800 rounded"></div>
            <span className="text-sm text-gray-700 font-medium">Commercial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-pink-500 border-2 border-pink-600 rounded"></div>
            <span className="text-sm text-gray-700 font-medium">Sold</span>
          </div>
        </div>

        {/* Lot Grid */}
        <div className="grid grid-cols-10 gap-2 p-4 bg-gray-50 rounded-lg">
          {lots.map((lot) => (
            <button
              key={lot.id}
              onClick={() => handleLotClick(lot)}
              className={`aspect-square ${getTypeColor(lot.type)} border-2 rounded-lg transition-all hover:scale-105 flex items-center justify-center text-white font-bold text-sm shadow-sm`}
              title={`Lot ${lot.number} - ${getTypeLabel(lot.type)}${lot.clientName ? ` - ${lot.clientName}` : ''}`}
            >
              {lot.number}
            </button>
          ))}
        </div>
      </div>

      {/* View Lot Details Modal */}
      {showDetailModal && selectedLot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Lot {selectedLot.number} Details</h3>
              <button
                onClick={() => {
                  setShowDetailModal(false);
                  setSelectedLot(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lot Number</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 font-medium">
                  Lot {selectedLot.number}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lot Area</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                  {selectedLot.area}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  {selectedLot.type === "model-house" && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      Model House
                    </span>
                  )}
                  {selectedLot.type === "lot-only" && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Lot Only
                    </span>
                  )}
                  {selectedLot.type === "house-and-lot" && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                      House & Lot
                    </span>
                  )}
                  {selectedLot.type === "commercial" && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      Commercial
                    </span>
                  )}
                  {selectedLot.type === "sold" && (
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                      Sold
                    </span>
                  )}
                </div>
              </div>

              {selectedLot.price && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 font-bold">
                    ₱{selectedLot.price.toLocaleString()}
                  </div>
                </div>
              )}

              {selectedLot.clientName && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {selectedLot.clientName}
                  </div>
                </div>
              )}

              {selectedLot.houseModel && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">House Model</label>
                  <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                    {selectedLot.houseModel}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    setSelectedLot(null);
                  }}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
