// services/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Message, Product_Billing } from "../../../type";

// Define a service using a base URL and expected endpoints
export const Bill_API = createApi({
  tagTypes: ["Bill"], // Define tag types for cache
  reducerPath: "Bill",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    User_Bill: builder.mutation<Message, Product_Billing>({
      query: (Data) => ({
        url: `/Bill`,
        body: Data,
        method: "POST",
      }),
      invalidatesTags: ["Bill"], // Invalidate cache after submission
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUser_BillMutation } = Bill_API;
