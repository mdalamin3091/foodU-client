import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productServices = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.auth?.token;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (categoryInfo) => ({
        url: `category/createCategory`,
        method: "POST",
        body: categoryInfo,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useAddCategoryMutation } = productServices;
export default productServices;
