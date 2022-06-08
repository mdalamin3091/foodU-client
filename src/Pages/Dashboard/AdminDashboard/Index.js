import React from "react";
import { FaShoppingCart, FaUsers, FaHeart } from "react-icons/fa";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineReviews,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import SingleProduct from "./Products/SingleProduct";
import AllUserTable from "./Users/AllUserTable";
import AllOrderTable from "./Orders/AllOrderTable";
import { useAllUsersQuery } from "../../../store/services/userServices";
import {
  useAllCategoryQuery,
  useAllProductQuery,
} from "../../../store/services/productServices";
const Index = () => {
  const { data: userData } = useAllUsersQuery();
  const { data: categories } = useAllCategoryQuery();
  const { data: allProducts, isLoading, isSuccess } = useAllProductQuery();
  console.log(allProducts?.allProducts);
  const sidebarMenu = [
    {
      icon: <FaShoppingCart />,
      title: "Total Orders",
      numbers: 50,
    },
    {
      icon: <FaUsers />,
      title: "Total User",
      numbers: userData?.allUser ? userData?.allUser.length : 0,
    },
    {
      icon: <FaHeart />,
      title: "Total Wishlist",
      numbers: 10,
    },
    {
      icon: <MdOutlineProductionQuantityLimits />,
      title: "Total Product",
      numbers: allProducts?.allProducts ? allProducts?.allProducts.length : 0,
    },
    {
      icon: <BiCategoryAlt />,
      title: "Total Category",
      numbers: categories?.allCategory ? categories?.allCategory?.length : 0,
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
            className="p-4 flex items-center bg-white border border-border rounded-md shadow-md"
            key={index}
          >
            <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4 text-2xl">
              {item.icon}
            </div>
            <div>
              <p className="text-xl font-medium  text-gray-600 ">{item.title}</p>
              <p className="text-xl font-semibold text-gray-700">{item.numbers}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-4">Dashboard Summary</h2>
      <h2 className="text-xl font-bold mb-4">Some Products</h2>
      <div className="flex flex-wrap -mx-4">
        {isLoading
          ? "Loading..."
          : allProducts?.allProducts
              ?.slice(0, 3)
              .map((product) => <SingleProduct product={product} />)
              .reverse()}
      </div>
      <h2 className="text-xl font-bold my-4">Some Users</h2>
      <AllUserTable />
      <h2 className="text-xl font-bold my-4">Some Orders</h2>
      <AllOrderTable />
    </>
  );
};

export default Index;
