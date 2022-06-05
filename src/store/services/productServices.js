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
    allCategory: builder.query({
      query: () => ({
        url: `category`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    singleCategory: builder.query({
      query: ({ categoryId }) => ({
        url: `category/${categoryId}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    addCategory: builder.mutation({
      query: (categoryInfo) => ({
        url: `category/createCategory`,
        method: "POST",
        body: categoryInfo,
      }),
      invalidatesTags: ["products"],
    }),
    updateCategory: builder.mutation({
      query: (updateCateInfo) => ({
        url: `category/updateCategory/${updateCateInfo.id}`,
        method: "PUT",
        body: updateCateInfo,
      }),
      invalidatesTags: ["products"],
    }),
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `category/deleteCategory/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useAllCategoryQuery,
  useSingleCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productServices;
export default productServices;