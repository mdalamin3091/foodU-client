import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderServices = createApi({
  reducerPath: "order",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.auth?.token;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    allOrder: builder.query({
      query: () => ({
        url: `product/allOrder`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    createOrder: builder.mutation({
      query: (totalCost) => ({
        url: `product/create-payment-intent`,
        method: "POST",
        body: totalCost,
      }),
      invalidatesTags: ["order"],
    }),
    saveOrderInfo: builder.mutation({
      query: (orderInfo) => ({
        url: `product/saveOrderInfo`,
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["order"],
    }),
    updateOrderStatus: builder.mutation({
      query: (updateInfo) => ({
        url: `product/updateOrder/${updateInfo._id}`,
        method: "PUT",
        body: updateInfo,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAllOrderQuery,
  useCreateOrderMutation,
  useSaveOrderInfoMutation,
  useUpdateOrderStatusMutation,
} = orderServices;
export default orderServices;
