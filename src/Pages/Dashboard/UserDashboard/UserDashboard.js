import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
const UserDashboard = () => {
  return (
    <>
      <div className="h-screen bg-gray-100 overflow-hidden font-JosefinSans">
        <div className="flex">
          <UserSidebar />
          <div className="flex-1 bg-gray-100 flex-col">
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
      </div>
    </>
  );
};

export default UserDashboard;
