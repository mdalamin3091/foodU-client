import React from "react";
import SingleProduct from "./SingleProduct";
const AllProducts = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <body class="antialiased text-gray-900 font-JosefinSans">
        <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </div>
      </body>
    </>
  );
};

export default AllProducts;
