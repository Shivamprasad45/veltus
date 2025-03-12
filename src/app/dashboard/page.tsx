"use client";

import { useState } from "react";
import { Eye, MoreHorizontal, Plus, Search } from "lucide-react";

interface InventoryItem {
  id: string;
  userName: string;
  quantity: number;
  paymentStatus: "paid" | "unpaid";
  invoiceNumber: string;
  totalSeal: number;
  totalBill: number;
  bill: number;
}

const initialInventory: InventoryItem[] = [
  {
    id: "1",
    userName: "John Doe",
    quantity: 10,
    paymentStatus: "paid",
    invoiceNumber: "INV001",
    totalSeal: 100,
    totalBill: 1000,
    bill: 100,
  },
  {
    id: "2",
    userName: "Jane Smith",
    quantity: 5,
    paymentStatus: "unpaid",
    invoiceNumber: "INV002",
    totalSeal: 50,
    totalBill: 500,
    bill: 100,
  },
  {
    id: "3",
    userName: "Alice Johnson",
    quantity: 8,
    paymentStatus: "paid",
    invoiceNumber: "INV003",
    totalSeal: 80,
    totalBill: 800,
    bill: 100,
  },
];

export default function InventoryDashboard() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);

  const filteredInventory = inventory.filter(
    (item) =>
      item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.invoiceNumber.includes(searchTerm)
  );

  const totalSealSum = inventory.reduce((sum, item) => sum + item.totalSeal, 0);
  const totalBillSum = inventory.reduce((sum, item) => sum + item.totalBill, 0);
  const paidItems = inventory.filter(
    (item) => item.paymentStatus === "paid"
  ).length;

  // ... (keep your existing calculations)

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-500 mb-2">Total Seal</div>
          <div className="text-2xl font-bold">{totalSealSum}</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-500 mb-2">Total Bill</div>
          <div className="text-2xl font-bold">${totalBillSum}</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-500 mb-2">Bill Per Unit</div>
          <div className="text-2xl font-bold">${inventory[0]?.bill || 0}</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-sm text-gray-500 mb-2">Payment Status</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              {paidItems}/{inventory.length}
            </div>
            <span className="text-sm text-gray-500">paid</span>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Inventory Items</h2>
            <p className="text-gray-500 mt-1">
              Manage your inventory and track payments
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search by name or invoice..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    User Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Invoice #
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredInventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {item.userName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.quantity}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.invoiceNumber}
                    </td>

                    <td className="px-4 py-3 text-right">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setIsMenuOpen(
                              isMenuOpen === item.id ? null : item.id
                            )
                          }
                          className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-600" />
                        </button>

                        {isMenuOpen === item.id && (
                          <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </button>
                              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Edit
                              </button>
                              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
