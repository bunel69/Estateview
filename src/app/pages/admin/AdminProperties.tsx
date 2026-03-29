import { useState } from "react";
import { Building, Home, MapPin, Edit, Trash2, Plus, X, Upload } from "lucide-react";

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

export function AdminProperties() {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [selectedModel, setSelectedModel] = useState<HouseModel | null>(null);
  const [showEditLotModal, setShowEditLotModal] = useState(false);
  const [showAddModelModal, setShowAddModelModal] = useState(false);
  const [showEditModelModal, setShowEditModelModal] = useState(false);

  // House Models
  const [houseModels, setHouseModels] = useState<HouseModel[]>([
    { id: 1, name: "Naomi", bedrooms: 3, bathrooms: 2, floorArea: "75 sqm", price: 2500000, image: undefined },
    { id: 2, name: "Hannah", bedrooms: 4, bathrooms: 3, floorArea: "92 sqm", price: 3200000, image: undefined },
    { id: 3, name: "Nasiah", bedrooms: 4, bathrooms: 2, floorArea: "88 sqm", price: 2800000, image: undefined },
  ]);

  // Subdivision Lots (Sample grid - 10x10)
  const [lots, setLots] = useState<Lot[]>([
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
  ]);

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
    setShowEditLotModal(true);
  };

  const handleSaveLot = (updatedLot: Lot) => {
    setLots(lots.map(l => l.id === updatedLot.id ? updatedLot : l));
    setShowEditLotModal(false);
    setSelectedLot(null);
  };

  const handleEditModel = (model: HouseModel) => {
    setSelectedModel(model);
    setShowEditModelModal(true);
  };

  const handleDeleteModel = (modelId: number) => {
    if (confirm("Are you sure you want to delete this house model?")) {
      setHouseModels(houseModels.filter(m => m.id !== modelId));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (imageUrl: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Management</h1>
        <p className="text-gray-600">Manage house models, subdivision lots, and client properties</p>
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">House Models</h2>
            <p className="text-sm text-gray-600 mt-1">Available house designs for clients</p>
          </div>
          <button
            onClick={() => setShowAddModelModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Model
          </button>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {houseModels.map((model) => (
            <div key={model.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition-colors">
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
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{model.name}</h3>
                    <p className="text-sm text-gray-600">{model.floorArea}</p>
                  </div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => handleEditModel(model)}
                      className="p-1.5 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteModel(model.id)}
                      className="p-1.5 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
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
          <p className="text-sm text-gray-600">Click on any lot to view details or assign to a client</p>
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

      {/* Edit Lot Modal */}
      {showEditLotModal && selectedLot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Lot {selectedLot.number} Details</h3>
              <button
                onClick={() => {
                  setShowEditLotModal(false);
                  setSelectedLot(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const updatedLot: Lot = {
                  ...selectedLot,
                  type: formData.get("type") as Lot["type"],
                  clientName: formData.get("clientName") as string || undefined,
                  houseModel: formData.get("houseModel") as string || undefined,
                  price: Number(formData.get("price")) || undefined,
                };
                handleSaveLot(updatedLot);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lot Area</label>
                <input
                  type="text"
                  value={selectedLot.area}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  name="type"
                  defaultValue={selectedLot.type}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="model-house">Model House</option>
                  <option value="lot-only">Lot Only</option>
                  <option value="house-and-lot">House & Lot</option>
                  <option value="commercial">Commercial</option>
                  <option value="sold">Sold</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedLot.price || ""}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <input
                  type="text"
                  name="clientName"
                  defaultValue={selectedLot.clientName || ""}
                  placeholder="Enter client name (if sold/reserved)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">House Model</label>
                <select
                  name="houseModel"
                  defaultValue={selectedLot.houseModel || ""}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">None</option>
                  {houseModels.map((model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditLotModal(false);
                    setSelectedLot(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add House Model Modal */}
      {showAddModelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Add House Model</h3>
              <button
                onClick={() => setShowAddModelModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newModel: HouseModel = {
                  id: houseModels.length + 1,
                  name: formData.get("name") as string,
                  bedrooms: Number(formData.get("bedrooms")),
                  bathrooms: Number(formData.get("bathrooms")),
                  floorArea: formData.get("floorArea") as string,
                  price: Number(formData.get("price")),
                  image: formData.get("image") as string || undefined,
                };
                setHouseModels([...houseModels, newModel]);
                setShowAddModelModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handleImageUpload(e, (imageUrl) => {
                        const input = e.target.form?.querySelector('input[name="image"]') as HTMLInputElement;
                        if (input) input.value = imageUrl;
                      });
                    }}
                    className="hidden"
                    id="add-model-image"
                  />
                  <label htmlFor="add-model-image" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload image</p>
                  </label>
                  <input type="hidden" name="image" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Naomi"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    name="bedrooms"
                    placeholder="3"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    name="bathrooms"
                    placeholder="2"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Floor Area</label>
                <input
                  type="text"
                  name="floorArea"
                  placeholder="75 sqm"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  placeholder="2500000"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModelModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Model
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit House Model Modal */}
      {showEditModelModal && selectedModel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Edit House Model</h3>
              <button
                onClick={() => {
                  setShowEditModelModal(false);
                  setSelectedModel(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const updatedModel: HouseModel = {
                  ...selectedModel,
                  name: formData.get("name") as string,
                  bedrooms: Number(formData.get("bedrooms")),
                  bathrooms: Number(formData.get("bathrooms")),
                  floorArea: formData.get("floorArea") as string,
                  price: Number(formData.get("price")),
                  image: formData.get("image") as string || selectedModel.image,
                };
                setHouseModels(houseModels.map(m => m.id === selectedModel.id ? updatedModel : m));
                setShowEditModelModal(false);
                setSelectedModel(null);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  {selectedModel.image && (
                    <img src={selectedModel.image} alt={selectedModel.name} className="w-full h-32 object-cover rounded mb-2" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      handleImageUpload(e, (imageUrl) => {
                        const input = e.target.form?.querySelector('input[name="image"]') as HTMLInputElement;
                        if (input) input.value = imageUrl;
                      });
                    }}
                    className="hidden"
                    id="edit-model-image"
                  />
                  <label htmlFor="edit-model-image" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to {selectedModel.image ? 'change' : 'upload'} image</p>
                  </label>
                  <input type="hidden" name="image" defaultValue={selectedModel.image || ""} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedModel.name}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    name="bedrooms"
                    defaultValue={selectedModel.bedrooms}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    name="bathrooms"
                    defaultValue={selectedModel.bathrooms}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Floor Area</label>
                <input
                  type="text"
                  name="floorArea"
                  defaultValue={selectedModel.floorArea}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₱)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={selectedModel.price}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModelModal(false);
                    setSelectedModel(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
