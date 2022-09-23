import React, { useState } from "react";
import NotFound from "../../../../Shared/DataNotFound";
import TableLoader from "../../../../Shared/Loader/TableLoader";
import { useAllOrderQuery } from "../../../../store/services/userServices";
import FilterDashboard from "../shared/FilterDashboard";
import AllOrderTable from "./AllOrderTable";
import isValidEmail from "../../../../utils/isValidEmail";
const AllOrders = () => {
  const { data: allOrders, isLoading } = useAllOrderQuery();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const filterByEmail = (item) => {
    let filteredOrder = true;
    if (!isLoading && allOrders?.allOrder && isValidEmail(email)) {
      filteredOrder = item?.personalDetails?.email === email;
    }
    return filteredOrder;
  };
  const filterByStatus = (item) => {
    let filteredOrder = true;
    if (!isLoading && allOrders?.allOrder && status) {
      filteredOrder = item?.orderStatus === status;
    }
    return filteredOrder;
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-4">All Orders</h2>
      {isLoading ? (
        <TableLoader />
      ) : !allOrders?.allOrder?.length ? (
        <NotFound />
      ) : (
        <>
          <FilterDashboard>
            <input
              type="text"
              className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
              placeholder="Search by user email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              name="category"
              className="px-4 py-3 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected value="">
                status
              </option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Processing">Processing</option>
              <option value="Cencel">Cencel</option>
            </select>
          </FilterDashboard>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-gray-500 dark:text-white whitespace-nowrap">
              <thead className="text-[16px] text-gray-700 dark:text-white dark:bg-darkTableHead uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Method
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[16px]">
                {allOrders?.allOrder
                  ?.filter(filterByEmail)
                  .filter(filterByStatus)
                  .map((item) => <AllOrderTable order={item} />)
                  .reverse()}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AllOrders;
