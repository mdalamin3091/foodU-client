import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import {FiMenu} from "react-icons/fi";
const UserDashboard = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <div className="flex h-screen bg-gray-100 font-JosefinSans">
        <UserSidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="flex flex-col flex-1 w-full">
          <header className="bg-white shadow-md py-4 px-8 w-full z-20 fixed mb-16">
            <div className="container flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <span className="text-gray-600 block lg:hidden text-2xl font-bold cursor-pointer !text-primary" onClick={() => setOpenMenu(!openMenu)}>
                  <FiMenu />
                </span>
                <h2 className="text-xl font-bold lg:text-3xl">User Dashboard</h2>
              </div>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={require("../../../assets/images/review-avatar.jpeg")}
                alt="avatar"
              />
            </div>
          </header>
          <div className="h-screen overflow-y-auto p-6 mt-[5rem]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
