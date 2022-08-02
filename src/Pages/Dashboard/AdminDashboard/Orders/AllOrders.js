import React from "react";
import { useAllOrderQuery } from "../../../../store/services/orderService";
import AllOrderTable from "./AllOrderTable";

const AllOrders = () => {
  const { data: allOrders } = useAllOrderQuery();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500 whitespace-nowrap">
          <thead className="text-[16px] text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Method
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[16px]">
            {allOrders?.allOrder?.map((item) => (
              <AllOrderTable order={item} />
            )).reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrders;
