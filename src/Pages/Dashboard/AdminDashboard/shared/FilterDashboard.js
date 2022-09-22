import React from "react";

const FilterDashboard = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center bg-white p-6 shadow-sm rounded-lg border border-gray-300 gap-4 mb-10 flex-wrap md:flex-nowrap">
        {children}
      </div>
    </>
  );
};

export default FilterDashboard;
