// services/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginForm, Message } from "../../../type";
// import {
//   BookingOrderFormInput,
//   BookingOrderForms,
//   Message,
// } from "../../../../type";

// Define a service using a base URL and expected endpoints
export const ORDER_API = createApi({
  tagTypes: ["Login"], // Define tag types for cache
  reducerPath: "Order",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    User_login: builder.mutation<Message, LoginForm>({
      query: (Data) => ({
        url: `/Login`,
        body: Data,
        method: "POST",
      }),
      invalidatesTags: ["Login"], // Invalidate cache after submission
    }),
    // User__Order: builder.query<BookingOrderFormInput[], string>({
    //   query: (Data) => ({
    //     url: `/Booking?_id=${Data}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Order"], // Provide tags for cache
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUser_loginMutation,
  //   useUser__OrderQuery,
} = ORDER_API;
