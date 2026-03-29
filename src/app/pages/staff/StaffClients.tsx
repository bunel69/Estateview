import { useState } from "react";
import { Users, Search, Eye, Mail, Phone, Home, CreditCard } from "lucide-react";

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

export function StaffClients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const clients: Client[] = [
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
  ];

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Records</h1>
        <p className="text-gray-600">View and manage client information and transaction history</p>
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
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <button 
                      onClick={() => handleViewClient(client)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
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
                <span className="text-2xl">&times;</span>
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

              <div className="pt-4">
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    setSelectedClient(null);
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
