import React from "react";

const AllOrderTable = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-gray-500 whitespace-nowrap">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Order time
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="text-[16px]">
            <tr className="bg-white border-b">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                amin@gmail.com
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </td>
              <td className="px-6 py-4">May 31, 2022</td>
              <td className="px-6 py-4">
                <select
                  name="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block lg:w-full w-[150px] p-2.5 outline-none"
                >
                  <option selected value="pending">
                    Pending
                  </option>
                  <option value="success">Success</option>
                  <option value="processing">Processing</option>
                  <option value="cencle">Cencle</option>
                </select>
              </td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrderTable;
