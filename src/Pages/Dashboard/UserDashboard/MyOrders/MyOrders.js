import React from "react";
import { useGetSingleUserQuery } from "../../../../store/services/userServices";
import MyOrderTable from "./MyOrderTable";
const MyOrders = () => {
  const { data, isLoading, isSuccess } = useGetSingleUserQuery();
  const pendingOrder = data?.user?.order?.map(
    (item) => item.orderStatus === "Pending"
  );
  const processingOrder = data?.user?.order?.map(
    (item) => item.orderStatus === "Processing"
  );
  const completeOrder = data?.user?.order?.map(
    (item) => item.orderStatus === "Delivered"
  );
  const cencleOrder = data?.user?.order?.map(
    (item) => item.orderStatus === "Cancel"
  );
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-gray-500 dark:text-gray-400 whitespace-nowrap">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Order time
                </th>

                <th scope="col" className="px-6 py-3">
                  Method
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              {!data?.user?.order.length
                ? "Order Not Found"
                : data?.user?.order?.map((item) => (
                    <MyOrderTable order={item} />
                  ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyOrders;
