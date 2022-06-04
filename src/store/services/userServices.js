import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userServices = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (updateData) => ({
        headers: { "Content-Type": "application/json" },
        url: "auth/updateProfile",
        method: "PUT",
        body: updateData,
      }),
    }),
    changePassword: builder.mutation({
      query: (updatePassword) => ({
        headers: { "Content-Type": "application/json" },
        url: "auth/changePassword",
        method: "PUT",
        body: updatePassword,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation, useChangePasswordMutation } = userServices;
export default userServices;
