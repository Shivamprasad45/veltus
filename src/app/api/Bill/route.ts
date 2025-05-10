import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import DbConnect from "@/lib/Connection";
import { Product, ProductBilling, IProduct } from "../../../../Schema/Billing";

export async function POST(req: NextRequest) {
  try {
    // Log connection state
    await DbConnect();
    const connectionState = mongoose.connection.readyState;
    console.log("MongoDB connection state:", connectionState);

    // Parse request body
    const body = await req.json();
    console.log("Received data:", body);

    // Validate required fields
    if (
      !body.products ||
      !Array.isArray(body.products) ||
      body.products.length === 0
    ) {
      return NextResponse.json(
        { message: "Products array is required" },
        { status: 400 }
      );
    }

    // Save products with proper typing
    const productIds = await Promise.all(
      body.products.map(
        async (product: Omit<IProduct, "_id" | "id"> & { id: number }) => {
          try {
            const newProduct = new Product(product);
            const savedProduct = await newProduct.save();
            console.log("Saved product:", savedProduct._id.toString());
            return savedProduct._id;
          } catch (productError) {
            console.error("Error saving product:", productError);
            throw productError;
          }
        }
      )
    );

    // Create billing document with proper typing
    const billingData = {
      customerName: body.customerName,
      paymentStatus: body.paymentStatus,
      products: productIds,
      totalPrice: body.totalPrice,
      customerGST: body.customerGST || "N/A", // Provide default if empty
      customerLicence: body.customerLicence || "N/A", // Provide default if empty
    };

    const newBilling = new ProductBilling(billingData);
    const savedBilling = await newBilling.save();
    console.log("Saved billing:", savedBilling._id.toString());

    return NextResponse.json({
      message: "Success",
      billingId: savedBilling._id.toString(),
      productIds: productIds.map((id) => id.toString()),
    });
  } catch (error) {
    console.error("Full error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    const errorStack = error instanceof Error ? error.stack : undefined;

    return NextResponse.json(
      {
        message: errorMessage,
        stack: errorStack,
        success: false,
      },
      { status: 500 }
    );
  }
}
