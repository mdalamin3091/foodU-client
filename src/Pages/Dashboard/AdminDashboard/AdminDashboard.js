import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
const AdminDashboard = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100 font-JosefinSans">
        <AdminSidebar />
        <div className="flex flex-col flex-1 w-full">
          <header className="bg-white shadow-md py-4 px-8 w-full z-40">
            <div className="container flex items-center justify-between">
              <h2 className="text-3xl font-bold">Admin Dashboard</h2>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={require("../../../assets/images/review-avatar.jpeg")}
                alt="avatar"
              />
            </div>
          </header>
          <div className="h-full overflow-y-auto p-6">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
