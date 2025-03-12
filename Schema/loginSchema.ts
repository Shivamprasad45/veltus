import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Booking

// Check if the model already exists, otherwise compile it

// Define the interface for LoginForm
export interface LoginForm {
  email: string;
  password: string;
}

// Define the schema for LoginForm
const LoginFormSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Check if the model already exists, otherwise compile it
const LoginFormModel =
  mongoose.models.LoginForm ||
  mongoose.model<LoginForm>("LoginForm", LoginFormSchema);

export default LoginFormModel;
