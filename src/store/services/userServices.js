import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userServices = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.auth?.token;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
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
