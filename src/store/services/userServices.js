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
  }),
});

export const { useUpdateProfileMutation } = userServices;
export default userServices;
