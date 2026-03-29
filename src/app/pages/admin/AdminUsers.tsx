import { useState } from "react";
import { Users, Search, Eye, Mail, Phone, Edit, Trash2, Plus, X, MapPin, Home, CreditCard } from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  lotNumber: string;
  houseModel?: string;
  status: "Active" | "Pending" | "Completed";
  joined: string;
  totalPaid: number;
  balance: number;
  totalPrice: number;
  address?: string;
  paymentPlan?: string;
}

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "Juan Dela Cruz",
      email: "juan.delacruz@example.com",
      phone: "+63 912 345 6789",
      property: "Naomi - Lot 45",
      lotNumber: "45",
      houseModel: "Naomi",
      status: "Active",
      joined: "Jan 15, 2026",
      totalPaid: 1100000,
      balance: 2700000,
      totalPrice: 3800000,
      address: "123 Main St, Candelaria",
      paymentPlan: "Monthly - 24 months"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@example.com",
      phone: "+63 923 456 7890",
      property: "Hannah - Lot 46",
      lotNumber: "46",
      houseModel: "Hannah",
      status: "Active",
      joined: "Feb 10, 2026",
      totalPaid: 850000,
      balance: 3650000,
      totalPrice: 4500000,
      address: "456 Oak Ave, Candelaria",
      paymentPlan: "Monthly - 36 months"
    },
    {
      id: 3,
      name: "Pedro Reyes",
      email: "pedro.reyes@example.com",
      phone: "+63 934 567 8901",
      property: "Lot 47 (Lot Only)",
      lotNumber: "47",
      status: "Pending",
      joined: "Mar 5, 2026",
      totalPaid: 200000,
      balance: 1200000,
      totalPrice: 1400000,
      address: "789 Pine Rd, Candelaria",
      paymentPlan: "Monthly - 12 months"
    },
    {
      id: 4,
      name: "Ana Garcia",
      email: "ana.garcia@example.com",
      phone: "+63 945 678 9012",
      property: "Nasiah - Lot 48",
      lotNumber: "48",
      houseModel: "Nasiah",
      status: "Active",
      joined: "Jan 20, 2026",
      totalPaid: 1500000,
      balance: 2700000,
      totalPrice: 4200000,
      address: "321 Elm St, Candelaria",
      paymentPlan: "Quarterly - 8 quarters"
    },
    {
      id: 5,
      name: "Carlos Lopez",
      email: "carlos.lopez@example.com",
      phone: "+63 956 789 0123",
      property: "Hannah - Lot 50",
      lotNumber: "50",
      houseModel: "Hannah",
      status: "Completed",
      joined: "Dec 1, 2025",
      totalPaid: 4500000,
      balance: 0,
      totalPrice: 4500000,
      address: "654 Maple Dr, Candelaria",
      paymentPlan: "Full Payment"
    },
  ]);

  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm) ||
      client.property.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All Status" || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleViewClient = (client: Client) => {
    setSelectedClient(client);
    setShowViewModal(true);
  };

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setShowEditModal(true);
  };

  const handleDeleteClient = (clientId: number) => {
    if (confirm("Are you sure you want to delete this client? This action cannot be undone.")) {
      setClients(clients.filter(c => c.id !== clientId));
    }
  };

  const handleSaveClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (selectedClient) {
      // Edit existing client
      const updatedClient: Client = {
        ...selectedClient,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        property: formData.get("property") as string,
        lotNumber: formData.get("lotNumber") as string,
        houseModel: formData.get("houseModel") as string || undefined,
        status: formData.get("status") as "Active" | "Pending" | "Completed",
        address: formData.get("address") as string,
        paymentPlan: formData.get("paymentPlan") as string,
        totalPaid: Number(formData.get("totalPaid")),
        totalPrice: Number(formData.get("totalPrice")),
        balance: Number(formData.get("totalPrice")) - Number(formData.get("totalPaid")),
      };
      setClients(clients.map(c => c.id === selectedClient.id ? updatedClient : c));
    }
    
    setShowEditModal(false);
    setSelectedClient(null);
  };

  const handleAddClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const newClient: Client = {
      id: clients.length + 1,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      property: formData.get("property") as string,
      lotNumber: formData.get("lotNumber") as string,
      houseModel: formData.get("houseModel") as string || undefined,
      status: formData.get("status") as "Active" | "Pending" | "Completed",
      joined: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      address: formData.get("address") as string,
      paymentPlan: formData.get("paymentPlan") as string,
      totalPaid: Number(formData.get("totalPaid")),
      totalPrice: Number(formData.get("totalPrice")),
      balance: Number(formData.get("totalPrice")) - Number(formData.get("totalPaid")),
    };
    
    setClients([...clients, newClient]);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Records</h1>
          <p className="text-gray-600">View and manage all client information and transaction history</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Client
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients by name, email, phone, or property..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{clients.length}</div>
          </div>
          <div className="text-sm text-gray-600">Total Clients</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{clients.filter(c => c.status === 'Active').length}</div>
          </div>
          <div className="text-sm text-gray-600">Active Clients</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{clients.filter(c => c.status === 'Pending').length}</div>
          </div>
          <div className="text-sm text-gray-600">Pending Verification</div>
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Property</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Paid</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Balance</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joined</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{client.name}</div>
                      <div className="text-sm text-gray-600 space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Mail className="h-3 w-3" />
                          <span>{client.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3 w-3" />
                          <span>{client.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{client.property}</div>
                    <div className="text-sm text-gray-600">Lot {client.lotNumber}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">₱{client.totalPaid.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`font-semibold ${client.balance > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                      ₱{client.balance.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {client.status === "Active" && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Active
                      </span>
                    )}
                    {client.status === "Pending" && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                        Pending
                      </span>
                    )}
                    {client.status === "Completed" && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{client.joined}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleViewClient(client)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>
                      <button 
                        onClick={() => handleEditClient(client)}
                        className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteClient(client.id)}
                        className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Client Modal */}
      {showViewModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Client Details</h3>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedClient(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Personal Information
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.name}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.address}</div>
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Property Information
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.property}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lot Number</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">Lot {selectedClient.lotNumber}</div>
                  </div>
                  {selectedClient.houseModel && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">House Model</label>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.houseModel}</div>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">
                      {selectedClient.status === "Active" && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Active
                        </span>
                      )}
                      {selectedClient.status === "Pending" && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                          Pending
                        </span>
                      )}
                      {selectedClient.status === "Completed" && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Price</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 font-bold">
                      ₱{selectedClient.totalPrice.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Paid</label>
                    <div className="px-4 py-3 bg-green-50 rounded-lg text-green-700 font-bold">
                      ₱{selectedClient.totalPaid.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Balance</label>
                    <div className={`px-4 py-3 rounded-lg font-bold ${
                      selectedClient.balance > 0 ? 'bg-orange-50 text-orange-700' : 'bg-green-50 text-green-700'
                    }`}>
                      ₱{selectedClient.balance.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Plan</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.paymentPlan}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Joined</label>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{selectedClient.joined}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    handleEditClient(selectedClient);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Edit Client
                </button>
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    setSelectedClient(null);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {showEditModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Edit Client</h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedClient(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveClient} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={selectedClient.name}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={selectedClient.email}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue={selectedClient.phone}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      defaultValue={selectedClient.address}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property</label>
                    <input
                      type="text"
                      name="property"
                      defaultValue={selectedClient.property}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lot Number</label>
                    <input
                      type="text"
                      name="lotNumber"
                      defaultValue={selectedClient.lotNumber}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">House Model</label>
                    <select
                      name="houseModel"
                      defaultValue={selectedClient.houseModel || ""}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">None (Lot Only)</option>
                      <option value="Naomi">Naomi</option>
                      <option value="Hannah">Hannah</option>
                      <option value="Nasiah">Nasiah</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      defaultValue={selectedClient.status}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Price (₱)</label>
                    <input
                      type="number"
                      name="totalPrice"
                      defaultValue={selectedClient.totalPrice}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Paid (₱)</label>
                    <input
                      type="number"
                      name="totalPaid"
                      defaultValue={selectedClient.totalPaid}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Plan</label>
                    <input
                      type="text"
                      name="paymentPlan"
                      defaultValue={selectedClient.paymentPlan}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedClient(null);
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

      {/* Add Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Add New Client</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddClient} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g., Juan Dela Cruz"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g., juan@example.com"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="e.g., +63 912 345 6789"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g., 123 Main St, Candelaria"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property</label>
                    <input
                      type="text"
                      name="property"
                      placeholder="e.g., Naomi - Lot 45"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Lot Number</label>
                    <input
                      type="text"
                      name="lotNumber"
                      placeholder="e.g., 45"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">House Model</label>
                    <select
                      name="houseModel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">None (Lot Only)</option>
                      <option value="Naomi">Naomi</option>
                      <option value="Hannah">Hannah</option>
                      <option value="Nasiah">Nasiah</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      defaultValue="Pending"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Price (₱)</label>
                    <input
                      type="number"
                      name="totalPrice"
                      placeholder="e.g., 3800000"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Total Paid (₱)</label>
                    <input
                      type="number"
                      name="totalPaid"
                      placeholder="e.g., 1100000"
                      defaultValue="0"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Plan</label>
                    <input
                      type="text"
                      name="paymentPlan"
                      placeholder="e.g., Monthly - 24 months"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
