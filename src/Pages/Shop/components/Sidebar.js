import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAllCategoryQuery } from "../../../store/services/productServices";
const Sidebar = ({
  selectCate,
  setSelectCate,
  searchProducts,
  setSearchProducts,
  products,
}) => {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, isSuccess } = useAllCategoryQuery();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (searchText.length > 1) {
      let filterProducts = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase()) ||
          product.shortDescription
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.description.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchProducts(filterProducts);
    } else {
      setSearchProducts("");
    }
  };
  const filterByCategory = (categoryName) => {
    setSelectCate(categoryName);
  };
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      {/* sidebar  */}
      <div className="col-span-1">
        <div className="border-2 border-gray-200 rounded-2xl p-2 pt-5 mb-7">
          <h3 className="text-xl font-bold mb-3 pl-2">Categories</h3>
          <div className="bg-light-gray p-4 rounded-xl">
            {data?.allCategory.map((category, index) => (
              <div
                key={category._id}
                className={
                  selectCate === category.categoryName
                    ? "flex items-start justify-start text-lg border-gray-300 w-full cursor-pointer bg-primary text-white py-2 rounded-lg"
                    : "flex items-start justify-start text-lg text-gray-500 hover:text-primary border-b-[1px] border-dashed border-gray-300 w-full cursor-pointer  py-2 rounded-lg"
                }
              >
                <p
                  className="ml-2"
                  onClick={() => filterByCategory(category.categoryName)}
                >
                  {category.categoryName}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* search bar */}
        <div className="outline-none text-lg px-8 py-3 bg-light-gray text-black rounded-md relative">
          <input
            type="search"
            name="search"
            placeholder="Search product"
            className="outline-none py-3 w-full bg-transparent"
            onChange={handleSearch}
          />
          <span className="absolute right-3 text-xl text-gray-400 top-8 cursor-pointer">
            <FaSearch />
          </span>
        </div>
        {searchProducts.length > 0 ? (
          <div className="search-result bg-white h-96 w-full overflow-y-auto shadow-lg p-5">
            {searchProducts.map((product) => (
              <div
                className="flex items-center justify-start border-b-2 border-border mb-2 cursor-pointer"
                onClick={() => handleNavigate(product._id)}
              >
                <div>
                  <img
                    className="w-[80px] rounded-full "
                    src={product.images[0]}
                    alt="food"
                  />
                </div>
                <div>
                  <h3 className="text-heading font-bold text-lg">
                    {product.title}
                  </h3>
                  <p className="text-gray-500">Price: ${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* best deals */}
        <h3 className="text-xl font-bold mb-6 border-b-[1px] border-dashed border-gray-300 mt-7">
          Best Deals
        </h3>
        <div className="recipe border-2 border-gray-200 rounded-3xl p-2">
          <div className="bg-light-gray flex items-center justify-between rounded-3xl gap-2">
            <div className="basis-1/3">
              <img
                className="w-full"
                src={require("../../../assets/images/food_2.png")}
                alt="food"
              />
            </div>
            <div className="content basis-2/3 text-left mt-6 relative py-1">
              <div className="flex items-center justify-start gap-1 text-primary text-lg mb-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <Link
                to="/shop"
                className="text-lg font-bold text-heading hover:text-primary cursor-pointer"
              >
                BBQ chicken breast
              </Link>
              <p className="text-primary text-lg font-bold">£8.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
