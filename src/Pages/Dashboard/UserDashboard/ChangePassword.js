import React from "react";

const ChangePassword = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <div className="grid grid-cols-1">
        <div className="mb-3">
          <label htmlFor="Email" className="text-gray-600 text-lg">
            Email
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-white"
            type="email"
            placeholder="Email"
            value="alamin@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="text-gray-600 text-lg">
            Old Password
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-white"
            type="password"
            placeholder="Old Password"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="text-gray-600 text-lg">
            New Password
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-white"
            type="password"
            placeholder="New Password"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button className="btn-primary py-2">Change Password</button>
      </div>
    </>
  );
};

export default ChangePassword;
