import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FcProcess } from "react-icons/fc";
import { GiConfirmed } from "react-icons/gi";
import { GiScooter } from "react-icons/gi";
import MyOrderTable from "./MyOrders/MyOrderTable";
const Index = () => {
  const userOrders = [
    {
      icon: <FaShoppingCart />,
      title: "Total Orders",
      numbers: 50,
    },
    {
      icon: <FcProcess />,
      title: "Pending Orders",
      numbers: 15,
    },
    {
      icon: <GiScooter />,
      title: "Processing Orders",
      numbers: 5,
    },
    {
      icon: <GiConfirmed />,
      title: "Complete Orders",
      numbers: 10,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {userOrders.map((item, index) => (
          <div
            className="p-4 flex items-center bg-white border border-border rounded-md shadow-md"
            key={index}
          >
            <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4 text-xl">
              {item.icon}
            </div>
            <div>
              <p className="text-lg font-medium  text-gray-600 ">{item.title}</p>
              <p className="text-lg font-semibold text-gray-700">{item.numbers}</p>
            </div>
          </div>
        ))}
      </div>
      {/* my orders */}
      <h2 className="text-2xl font-bold mb-3">Recent Orders</h2>
      <MyOrderTable />
    </>
  );
};

export default Index;
