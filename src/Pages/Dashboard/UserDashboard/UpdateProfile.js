import React from "react";

const UpdateProfile = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <label htmlFor="Full Name" className="text-gray-600 text-lg">
          Change Image
        </label>
        <div className="form-group border-none col-span-2 bg-white py-2">
          <span class="sr-only">Choose File</span>
          <input
            type="file"
            // onChange={(e) => handleImage(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            name="profilePic"
          />
        </div>
        <div className="mb-3 col-span-2 lg:col-span-1">
          <label htmlFor="Full Name" className="text-gray-600 text-lg">
            Full Name
          </label>
          <br />
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-white"
            type="text"
            placeholder="Full Name"
            value="Al Amin"
          />
        </div>
        <div className="mb-3 col-span-2 lg:col-span-1">
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
      </div>
      <div className="flex items-center justify-end">
        <button className="btn-primary py-2">Update Profile</button>
      </div>
    </>
  );
};

export default UpdateProfile;
