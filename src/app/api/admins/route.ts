import DbConnect from "@/lib/Connection";
import { NextRequest, NextResponse } from "next/server";
import LoginFormModel from "../../../../Schema/loginSchema";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await DbConnect();

    // Parse the request body
    const BODY = await req.json();
    console.log(BODY);
    const emailVerifying = await LoginFormModel.findOne({ email: BODY.email });
    if (emailVerifying) {
      return NextResponse.json({
        message: "Email already exists",
        data: "email already exists",
      });
    }

    await LoginFormModel.create(BODY);
    return NextResponse.json({
      message: "Registration successful",
      data: "Registration successful",
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { message: "Server error", error: error },
      { status: 500 }
    );
  }
}
