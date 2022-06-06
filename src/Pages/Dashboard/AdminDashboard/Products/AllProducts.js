import React from "react";
import SingleProduct from "./SingleProduct";
import { useAllProductQuery } from "../../../../store/services/productServices";
const AllProducts = () => {
  const { data, isLoading, isSuccess } = useAllProductQuery();
  console.log(data?.allProducts)
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <body class="antialiased text-gray-900 font-JosefinSans">
        <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            {isLoading
              ? "Loading..."
              : data?.allProducts?.map((product) => (
                  <SingleProduct product={product} />
                ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default AllProducts;
