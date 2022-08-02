import React from "react";
import { useAllUsersQuery } from "../../../../store/services/authServices";
import AllUserTable from "./AllUserTable";
const AllUsers = () => {
  const { data } = useAllUsersQuery();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 whitespace-nowrap">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Profile
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[16px]">
            {data?.allUser
              .map((user) => <AllUserTable key={user._id} user={user} />)
              .reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
