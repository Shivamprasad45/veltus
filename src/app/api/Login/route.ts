import DbConnect from "@/lib/Connection";

import { NextRequest, NextResponse } from "next/server"; // These are used for the new Next.js API routes in the app directory
import LoginFormModel from "../../../../Schema/loginSchema";
// Use Zod for validation

// Define Zod schema for validation

// POST request handler to create a new booking
export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await DbConnect();

    // Parse the request body
    const BODY = await req.json();

    const verify = await LoginFormModel.findOne({ email: BODY.email });
    console.log(verify, "Verified");
    if (verify) {
      return NextResponse.json(
        { message: "Account found", data: verify },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Account NOT found" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { message: "Server error", error: error },
      { status: 500 }
    );
  }
}
