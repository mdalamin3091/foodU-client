import React from "react";
import SingleProduct from "./SingleProduct";
import { useAllProductQuery } from "../../../../store/services/productServices";
import NotFound from "../../../../Shared/DataNotFound";
const AllProducts = () => {
  const { data, isLoading, isSuccess } = useAllProductQuery();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-4">All Products</h2>
      <body className="antialiased text-gray-900 font-JosefinSans">
        <div className="container mx-auto">
          {isLoading
            ? "Loading..."
            : (!data?.allProducts.length && (
                <NotFound>Product Not Found</NotFound>
              )) || (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 -mx-4">
                  {data?.allProducts
                    ?.map((product) => <SingleProduct product={product} />)
                    .reverse()}
                </div>
              )}
        </div>
      </body>
    </>
  );
};

export default AllProducts;
