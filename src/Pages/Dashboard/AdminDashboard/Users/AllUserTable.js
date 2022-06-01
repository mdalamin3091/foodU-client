import React from "react";

const AllUserTable = () => {
  return (
    <>
      <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-gray-500 dark:text-gray-400">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  Profile
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px]">
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Al Amin
                </th>
                <td class="px-6 py-4">alamin@gmail.com</td>
                <td class="px-6 py-4">
                  <select
                    name="role"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
                  >
                    <option selected value="User">
                      User
                    </option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td class="px-6 py-4">
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={require("../../../../assets/images/review-avatar.jpeg")}
                    alt="avatar"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default AllUserTable;
