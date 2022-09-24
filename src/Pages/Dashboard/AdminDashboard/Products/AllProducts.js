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
  const [selectCategory, setSelectCategory] = useState("");
  const [searchName, setSearchName] = useState("");
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
  const productFilter = () => {
    let sortedProduct = currentProducts;
    if (searchName) {
      sortedProduct = data?.allProducts?.filter(
        (item) =>
          item.title.toLowerCase().includes(searchName.toLowerCase()) ||
          item.description.toLowerCase().includes(searchName.toLowerCase())
      );
    }
    if (selectCategory && data) {
      sortedProduct = data?.allProducts?.filter(
        (item) => item.category === selectCategory
      );
    }
    return sortedProduct;
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-4">Products</h2>
      <div className="antialiased text-gray-900 font-JosefinSans">
        <FilterDashboard>
          <input
            type="text"
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            placeholder="Search by product name or description"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <select
            name="category"
            className="px-4 py-3 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray dark:text-darkCard"
            required
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option selected value="">
              Select Category
            </option>
            {isSuccess &&
              categories.allCategory.map((category) => (
                <option value={category.categoryName} key={category._id}>
                  {category.categoryName}
                </option>
              ))}
          </select>
          <Link
            to="/admin/addProduct"
            className="btn-primary whitespace-nowrap py-3 w-full md:w-auto text-center dark:text-darkCard"
          >
            Add Product
          </Link>
        </FilterDashboard>
        <div className="container mx-auto">
          {isLoading ? (
            <MenuLoader />
          ) : (
            (!data?.allProducts.length && (
              <NotFound>Product Not Found</NotFound>
            )) || (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 -mx-4">
                  {productFilter()
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
