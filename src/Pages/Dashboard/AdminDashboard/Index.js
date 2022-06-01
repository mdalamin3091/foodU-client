import React from 'react'
import { FaShoppingCart, FaUsers, FaHeart } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits, MdOutlineReviews } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
const Index = () => {
  const sidebarMenu = [
    {
      icon: <FaShoppingCart />,
      title: "Total Orders",
      numbers: 50,
    },
    {
      icon: <FaUsers />,
      title: "Total User",
      numbers: 15,
    },
    {
      icon: <FaHeart />,
      title: "Total Wishlist",
      numbers: 10,
    },
    {
      icon: <MdOutlineProductionQuantityLimits />,
      title: "Total Product",
      numbers: 5,
    },
    {
      icon: <BiCategoryAlt />,
      title: "Total Category",
      numbers: 10,
    },
    {
      icon: <MdOutlineReviews />,
      title: "Total Review",
      numbers: 10,
    },
  ];
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {sidebarMenu.map((item, index) => (
          <div
            class="p-4 flex items-center bg-white border border-border rounded-md shadow-md"
            key={index}
          >
            <div class="p-3 rounded-full text-orange-500 bg-orange-100 mr-4 text-2xl">
              {item.icon}
            </div>
            <div>
              <p class="text-xl font-medium  text-gray-600 ">{item.title}</p>
              <p class="text-xl font-semibold text-gray-700">{item.numbers}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        
      </div>
    </>
  )
}

export default Index