import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authServices = createApi({
    reducerPath: "auth",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (signupData) => ({
                headers: { "Content-Type": "application/json" },
                url: "auth/signup",
                method: "POST",
                body: signupData,
            }),
            invalidatesTags: ["auth"],
        }),
        login: builder.mutation({
            query: (loginData) => ({
                headers: { "Content-Type": "application/json" },
                url: "auth/login",
                method: "POST",
                body: loginData,
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation } =
    authServices;
export default authServices;