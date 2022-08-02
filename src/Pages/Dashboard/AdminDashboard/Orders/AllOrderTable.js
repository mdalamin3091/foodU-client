import React from "react";
import { useState } from "react";
import { useUpdateOrderStatusMutation } from "../../../../store/services/orderService";
import { toast } from "react-toastify";
const AllOrderTable = ({ order }) => {
  // const [selectStatus, setSelectStatus] = useState("");
  const [sendUpdateStatus] = useUpdateOrderStatusMutation();
  const handleChange = (e) => {
    // setSelectStatus(e.target.value)
    sendUpdateStatus({
      selectStatus: e.target.value,
      _id: order._id,
    }).then((res) => {
      if (res.data) {
        toast.success(res?.data?.msg, {
          theme: "colored",
          closeOnClick: true,
          hideProgressBar: false,
        });
      }
    });
  };
  return (
    <>
      <tr className="bg-white border-b">
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {order.personalDetails.email}
        </td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {new Date(order.createdAt).toLocaleDateString()}
        </td>
        <td className="px-6 py-4">
          {order.shippingCostAndMethod.shippingMethod === "Cash on Delivery"
            ? "COD"
            : "Card"}
        </td>
        <td className="px-6 py-4">${order.paymentDetails.totalCost}</td>
        <td
          className={`${
            order?.orderStatus === "Pending"
              ? "text-yellow-500"
              : order?.orderStatus === "Processing"
              ? "text-blue-500"
              : order?.orderStatus === "Delivered"
              ? "text-green-500"
              : order?.orderStatus === "Cencel"
              ? "text-red-500"
              : null
          } px-6 py-4`}
        >
          {order?.orderStatus}
        </td>
        <td className="px-6 py-4">
          <select
            name="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block lg:w-full w-[150px] p-2.5 outline-none"
            onChange={handleChange}
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Processing">Processing</option>
            <option value="Cencel">Cencel</option>
          </select>
        </td>
      </tr>
    </>
  );
};

export default AllOrderTable;
