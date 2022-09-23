import React, { useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "../../../../Shared/DataNotFound";
import TableLoader from "../../../../Shared/Loader/TableLoader";
import { useAllUsersQuery } from "../../../../store/services/authServices";
import FilterDashboard from "../shared/FilterDashboard";
import AllUserTable from "./AllUserTable";
import isValidEmail from "../../../../utils/isValidEmail";

const AllUsers = () => {
  const { data, isLoading } = useAllUsersQuery();
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState("");
  let allUser;
  if (!isLoading) {
    allUser = data?.allUser?.filter((user) => user.email !== email);
  }
  const filterUser = (user) => {
    const { fullname, email, role } = user || {};
    let filteredUser = true;
    console.log(user);
    if (
      !isLoading &&
      inputValue &&
      fullname &&
      role
    ) {
      filteredUser =
        fullname?.toLowerCase().includes(inputValue.toLowerCase()) ||
        role?.toLowerCase().includes(inputValue.toLowerCase()) ||
        email?.toLowerCase().includes(inputValue.toLowerCase());
    }
    return filteredUser;
  };
  return (
    <>
      {isLoading ? (
        <TableLoader />
      ) : !data?.allUser?.length ? (
        <NotFound> Any User Not Found</NotFound>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 mt-4">All Users</h2>
          <FilterDashboard>
            <input
              type="text"
              className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
              placeholder="Search by name, email or user role"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </FilterDashboard>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-gray-500 table-auto whitespace-nowrap">
              <thead className="text-[16px] text-gray-700 dark:text-white uppercase bg-gray-50 dark:bg-darkTableHead">
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
                    Update Role
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
                {allUser
                  .filter(filterUser)
                  .map((user) => <AllUserTable key={user._id} user={user} />)
                  .reverse()}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AllUsers;
