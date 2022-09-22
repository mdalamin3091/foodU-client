import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from "../../../../Shared/DataNotFound";
import TableLoader from "../../../../Shared/Loader/TableLoader";
import { useAllUsersQuery } from "../../../../store/services/authServices";
import FilterDashboard from "../shared/FilterDashboard";
import AllUserTable from "./AllUserTable";
const AllUsers = () => {
  const { data, isLoading } = useAllUsersQuery();
  const { user: { email } } = useSelector(state => state.auth);
  let allUser;
  if (!isLoading) {
    allUser = data?.allUser?.filter(user => user.email !== email)
    console.log(allUser)
  }
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
              className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
              placeholder="Search by name, email or user role"
            />
            {/* <Link
              to="/admin/addCategory"
              className="btn-primary whitespace-nowrap py-3 w-full md:w-auto text-center"
            >
              Add Category
            </Link> */}
          </FilterDashboard>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-gray-500 table-auto whitespace-nowrap">
              <thead className="text-[16px] text-gray-700 uppercase bg-gray-50">
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
