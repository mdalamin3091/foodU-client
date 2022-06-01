import React from "react";
import { FaHome } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { FiUnlock } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits, MdOutlineAddShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/admin/dashboard",
    },
    {
      title: "All Orders",
      icon: <GoListUnordered />,
      path: "/admin/allOrders",
    },
    {
      title: "All User",
      icon: <FaUsers />,
      path: "/admin/allUsers",
    },
    {
      title: "All Products",
      icon: <MdOutlineProductionQuantityLimits />,
      path: "/admin/allProducts",
    },
    {
      title: "All Category",
      icon: <BiCategoryAlt />,
      path: "/admin/allCategorys",
    },
    {
      title: "Add Product",
      icon: <MdOutlineAddShoppingCart />,
      path: "/admin/addProduct",
    },
    {
      title: "Add Category",
      icon: <GrAdd />,
      path: "/admin/addCategory",
    },
    {
      title: "Logout",
      icon: <FiUnlock />,
      path: "/",
    },
  ];
  return (
    <>
      <aside className="w-64 flex-shrink-0 bg-white shadow-lg h-screen overflow-y-auto hidden lg:block z-10">
        <h3 className="px-6 py-3 text-3xl font-bold uppercase mt-4">
          Md. Al Amin
        </h3>
        {sidebarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "border-l-4 border-primary bg-light-gray px-6 py-3 flex items-center justify-start text-lg"
                : "px-6 py-3 flex items-center justify-start text-lg"
            }
          >
            <span className="mr-3">{item?.icon}</span>
            {item?.title}
          </NavLink>
        ))}
      </aside>
    </>
  );
};

export default AdminSidebar;
