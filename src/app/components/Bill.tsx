"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, Plus, Trash2 } from "lucide-react";
import { useUser_BillMutation } from "../Services/BillingServices";

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: string;
  gst: string;
}

const predefinedProducts = [
  { id: 1, name: "CTTOMAB 100 MG IN", price: "4400.00" },
  { id: 2, name: "CTTOMAB 500 MG IN", price: "22000.00" },
  { id: 3, name: "PARACETAMOL 650MG", price: "150.00" },
  { id: 4, name: "OMEPRAZOLE 20MG", price: "300.00" },
];

export default function ProductForm() {
  const [getBill, { isError, isSuccess }] = useUser_BillMutation();

  const [customerName, setCustomerName] = useState("");
  const [customerGST, setCustomerGST] = useState("");
  const [customerLicence, setCustomerLicence] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"paid" | "unpaid">(
    "unpaid"
  );
  const [products, setProducts] = useState<Product[]>([
    {
      id: Date.now(),
      name: "",
      quantity: 1,
      price: "",
      gst: "",
    },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      const price = parseFloat(product.price) || 0;
      const subtotal = price * product.quantity;
      const gst = subtotal * 0.06;
      return acc + subtotal + gst;
    }, 0);
    setTotalPrice(total);
  }, [products]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (customerName && products.every((p) => p.name && p.price)) {
      await getBill({
        customerName,
        paymentStatus,
        customerGST,
        customerLicence,
        products,
        totalPrice,
      });
    }
  };

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "",
      quantity: 1,
      price: "",
      gst: "0.00", // Initialize with a default value
    };

    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (
    productId: number,
    field: keyof Product,
    value: string
  ) => {
    setProducts(
      products.map((p) => {
        if (p.id === productId) {
          const updatedProduct = { ...p, [field]: value };

          // If price or quantity changed, recalculate GST
          if (field === "price" || field === "quantity") {
            const price = parseFloat(field === "price" ? value : p.price) || 0;
            const quantity =
              field === "quantity" ? parseInt(value) : p.quantity;
            const subtotal = price * quantity;
            updatedProduct.gst = (subtotal * 0.06).toFixed(2);
          }

          // Handle predefined product selection
          if (field === "name") {
            const selectedProduct = predefinedProducts.find(
              (prod) => prod.name === value
            );
            if (selectedProduct) {
              updatedProduct.price = selectedProduct.price;
              // Recalculate GST when price changes due to product selection
              const subtotal =
                parseFloat(selectedProduct.price) * updatedProduct.quantity;
              updatedProduct.gst = (subtotal * 0.06).toFixed(2);
            }
          }

          return updatedProduct;
        }
        return p;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Pharmaceutical Billing System
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Customer Info Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                submitted && !customerName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              } focus:ring-2 focus:ring-blue-200`}
              placeholder="Enter customer name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Status
            </label>
            <select
              value={paymentStatus}
              onChange={(e) =>
                setPaymentStatus(e.target.value as "paid" | "unpaid")
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
        </div>

        {/* Add Product Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer GST
          </label>
          <input
            type="text"
            value={customerGST}
            onChange={(e) => setCustomerGST(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              submitted && !customerGST
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-200`}
            placeholder="Enter customer name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Customer license
          </label>
          <input
            type="text"
            value={customerLicence}
            onChange={(e) => setCustomerLicence(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border ${
              submitted && !customerLicence
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-200`}
            placeholder="Enter customer name"
          />
        </div>

        {/* Products Grid */}
        <div className="space-y-6">
          {products.map((product) => {
            const subtotal =
              (parseFloat(product.price) || 0) * product.quantity;
            const gst = subtotal * 0.06;
            const total = subtotal + gst;

            return (
              <div
                key={product.id}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative"
              >
                <button
                  type="button"
                  onClick={() => removeProduct(product.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Remove product"
                >
                  <Trash2 className="h-5 w-5" />
                </button>

                <div className="space-y-4">
                  {/* Product Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Medicine
                    </label>
                    <select
                      value={product.name}
                      onChange={(e) =>
                        updateProduct(product.id, "name", e.target.value)
                      }
                      className={`w-full px-4 py-2 rounded-lg border ${
                        submitted && !product.name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      } focus:ring-2 focus:ring-blue-200`}
                    >
                      <option value="">Select a medicine</option>
                      {predefinedProducts.map((medicine) => (
                        <option key={medicine.id} value={medicine.name}>
                          {medicine.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity and Price Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity
                      </label>
                      <select
                        value={product.quantity}
                        onChange={(e) =>
                          updateProduct(product.id, "quantity", e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Unit Price (₹)
                      </label>
                      <input
                        type="number"
                        value={product.price}
                        onChange={(e) =>
                          updateProduct(product.id, "price", e.target.value)
                        }
                        className={`w-full px-4 py-2 rounded-lg border ${
                          submitted && !product.price
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        } focus:ring-2 focus:ring-blue-200`}
                        placeholder="Enter price"
                        min="0"
                        step="0.01"
                      />
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="text-sm space-y-1 mt-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (6%):</span>
                      <span>₹{gst.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-1">
                      <span>Product Total:</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Product Button */}
        <button
          type="button"
          onClick={addProduct}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Medicine
        </button>

        {/* Total Price and Submission */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Grand Total:</h3>
            <div className="text-2xl font-bold text-blue-600">
              ₹{totalPrice.toFixed(2)}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {submitted &&
              customerName &&
              products.every((p) => p.name && p.price) ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span>All fields are valid!</span>
                </div>
              ) : submitted ? (
                <div className="flex items-center text-red-600">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span>Please fill all required fields</span>
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              Generate Invoice
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
