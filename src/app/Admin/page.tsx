"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "../../../type";
import { useUser_loginMutation } from "../Services/loginServices";

export default function Login() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [Order_Submit, { data, isLoading, isError, isSuccess }] =
    useUser_loginMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      Order_Submit(formData);
    } catch (error) {
      console.log(error);
    }
    // Implement authentication logic here
    // Redirect on successful login
  };
  console.log(data, "success data");
  if (data?.data) {
    router.push("/dashboard");
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>An error occurred: {isError}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
