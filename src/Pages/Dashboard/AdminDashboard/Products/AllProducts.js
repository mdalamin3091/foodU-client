import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import {
  useAllCategoryQuery,
  useAllProductQuery,
} from "../../../../store/services/productServices";
import NotFound from "../../../../Shared/DataNotFound";
import MenuLoader from "../../../../Shared/Loader/MenuLoader";
import Pagination from "../../../../Shared/Pagination";
import { Link } from "react-router-dom";
import FilterDashboard from "../shared/FilterDashboard";
const AllProducts = () => {
  const { data, isLoading } = useAllProductQuery();
  const { data: categories, isSuccess } = useAllCategoryQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = data?.allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-4">Products</h2>
      <div className="antialiased text-gray-900 font-JosefinSans">
        {/* <FilterDashboard>
          <input
            type="text"
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            placeholder="Search by product name"
          />
          <select
            name="category"
            className="px-4 py-3 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            required
          // onChange={handleCategoryChange}
          >
            <option selected value="">
              Select Category
            </option>
            {isSuccess &&
              categories.allCategory.map((category) => (
                <option
                  value={category.categoryName}
                  key={category._id}
                >
                  {category.categoryName}
                </option>
              ))}
          </select>
          <select
            name="category"
            className="px-4 py-3 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            required
          // onChange={handleCategoryChange}
          >
            <option selected value="">
              Price
            </option>
            <option selected value="high_to_low">
              High to low
            </option>
            <option selected value="low_to_high">
              Low to High
            </option>
          </select>
          <Link
            to="/admin/addProduct"
            className="btn-primary whitespace-nowrap py-3 w-full md:w-auto text-center dark:text-darkCard"
          >
            Add Product
          </Link>
        </FilterDashboard> */}
        <div className="container mx-auto">
          {isLoading ? (
            <MenuLoader />
          ) : (
            (!data?.allProducts.length && (
              <NotFound>Product Not Found</NotFound>
            )) || (
              <>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 -mx-4">
                  {currentProducts
                    ?.map((product) => <SingleProduct product={product} />)
                    .reverse()}
                </div>
              </>
            )
          )}
          <Pagination
            currentPage={currentPage}
            productPerPage={productPerPage}
            totalProducts={data?.allProducts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default AllProducts;
