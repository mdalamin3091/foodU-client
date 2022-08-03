import React from "react";

const NotFound = ({ children }) => {
  return (
    <div className="w-full text-center">
      <h2 className="text-xl font-bold text-white bg-primary p-2 rounded-md">
        {children ? children : "Order Not Found"}
      </h2>
    </div>
  );
};

export default NotFound;
