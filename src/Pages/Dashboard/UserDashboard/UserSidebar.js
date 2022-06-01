import React from "react";
import { FaHome } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { AiOutlineSetting } from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/user/dashboard",
    },
    {
      title: "My Orders",
      icon: <GoListUnordered />,
      path: "/user/myOrders",
    },
    {
      title: "Update Profile",
      icon: <AiOutlineSetting />,
      path: "/user/updateProfile",
    },
    {
      title: "Change Password",
      icon: <FaExchangeAlt />,
      path: "/user/changePassword",
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

export default UserSidebar;
