"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: string;
}

export default function ProductForm() {
  const [customerName, setCustomerName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<"paid" | "unpaid">(
    "unpaid"
  );

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "", quantity: 1, price: "" },
    { id: 2, name: "", quantity: 1, price: "" },
    { id: 3, name: "", quantity: 1, price: "" },
    { id: 4, name: "", quantity: 1, price: "" },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      const price = parseFloat(product.price) || 0;
      return acc + price * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (customerName && products.every((p) => p.name && p.price)) {
      console.log("Form submitted:", {
        customerName,
        paymentStatus,
        products,
        totalPrice,
      });
    }
  };

  const updateProduct = (id: number, field: keyof Product, value: any) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Product Order Form
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

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => {
            const productTotal =
              (parseFloat(product.price) || 0) * product.quantity;

            return (
              <div
                key={product.id}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="space-y-4">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) =>
                        updateProduct(product.id, "name", e.target.value)
                      }
                      className={`w-full px-4 py-2 rounded-lg border ${
                        submitted && !product.name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      } focus:ring-2 focus:ring-blue-200`}
                      placeholder="Enter product name"
                    />
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
                          updateProduct(
                            product.id,
                            "quantity",
                            parseInt(e.target.value)
                          )
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
                        Unit Price ($)
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

                  {/* Product Total */}
                  <div className="flex justify-end">
                    <div className="text-sm font-medium">
                      Product Total: ${productTotal.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Price and Submission */}
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Grand Total:</h3>
            <div className="text-2xl font-bold text-blue-600">
              ${totalPrice.toFixed(2)}
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
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
