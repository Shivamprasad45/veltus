// // app/super-admin/page.tsx
// "use client";

// import { useAdmin_createMutation } from "@/app/Services/loginServices";
// import { useState } from "react";
// // import { useAdmin_createMutation } from "../Services/loginServices";

// interface Office {
//   id: string;
//   name: string;
// }

// export default function SuperAdminPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [officeId, setOfficeId] = useState("");
//   const [offices, setOffices] = useState<Office[]>([
//     { id: "1", name: "Main Office" },
//     { id: "2", name: "Downtown Branch" },
//     { id: "3", name: "Westside Campus" },
//   ]);
//   const [message, setMessage] = useState("");

//   const [Create_Admin, { isError, isSuccess, data }] =
//     useAdmin_createMutation();

//   if (data?.data) {
//     setMessage("Admin created successfully!");
//     setEmail("");
//     setPassword("");
//     setOfficeId("");
//   }
//   if (isError) {
//     setMessage("Error creating admin!");
//   }

//   const handleSubmit = async () => {
//     console.log(email, password, officeId);

//     try {
//       await Create_Admin({ email, password, officeId });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">
//           Create New Admin
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Office
//             </label>
//             <select
//               value={officeId}
//               onChange={(e) => setOfficeId(e.target.value)}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               required
//             >
//               <option value="">Select Office</option>
//               {offices.map((office) => (
//                 <option key={office.id} value={office.id}>
//                   {office.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Create Admin
//           </button>

//           {message && (
//             <p
//               className={`mt-4 text-sm ${
//                 message.includes("success") ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {message}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
