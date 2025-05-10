import mongoose, { Schema, Document } from "mongoose";

// Product Interface
export interface IProduct extends Document {
  id: number;
  name: string;
  quantity: number;
  price: string;
  gst: string;
}

// Product_Billing Interface
export interface IProductBilling extends Document {
  customerName: string;
  paymentStatus: string;
  products: mongoose.Types.ObjectId[]; // Use ObjectId instead of IProduct[]
  totalPrice: number;
  customerGST: string;
  customerLicence: string;
}

// Product Schema
const ProductSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: String, required: true },
  gst: { type: String, required: true },
});

// Product_Billing Schema
const ProductBillingSchema: Schema = new Schema(
  {
    customerName: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }], // Fix here
    totalPrice: { type: Number, required: true },
    customerGST: { type: String, required: true },
    customerLicence: { type: String, required: true },
  },
  { timestamps: true }
);

// Export Models
export const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export const ProductBilling =
  mongoose.models.ProductBilling ||
  mongoose.model<IProductBilling>("ProductBilling", ProductBillingSchema);
