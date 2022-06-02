import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
const UserDashboard = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 font-JosefinSans">
          <UserSidebar />
          <div className="flex flex-col flex-1 w-full">
            <header className="bg-white shadow-md py-4 px-8">
              <div className="container flex items-center justify-between">
                <h2 className="text-2xl font-bold">User Dashboard</h2>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={require("../../../assets/images/review-avatar.jpeg")}
                  alt="avatar"
                />
              </div>
            </header>
            <div className="h-screen overflow-y-auto p-6">
              <Outlet />
            </div>
          </div>
      </div>
    </>
  );
};

export default UserDashboard;
