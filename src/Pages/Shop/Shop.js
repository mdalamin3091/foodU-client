import React, { useEffect, useState } from "react";
import ScreenHeader from "../../Shared/ScreenHeader";
import Product from "../../Shared/Product";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import { useAllProductQuery } from "../../store/services/productServices";
import Pagination from "./components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { sortProduct } from "../../store/reducers/cartSlice";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const [selectCate, setSelectCate] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);
  const { data, isLoading } = useAllProductQuery();
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.cart);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = data?.allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleChange = (e) => {
    dispatch(sortProduct(e.target.value));
  };
  const productSortByPrice = () =>{
    let sortedProduct;
    if (sort && data) {
      sortedProduct = currentProducts.sort((a, b) => 
        sort === "high_to_low" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProduct
  }
  return (
    <>
      <NavBar />
      <ScreenHeader>
        <div>
          <h1 className="font-JosefinSans font-bold text-5xl text-center">
            Shop
          </h1>
          <Link to="/" className="text-gray-400 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-400 space-x-3"> {">"} </span>
          <span>Shop</span>
        </div>
      </ScreenHeader>
      <div className="container section-padding font-JosefinSans">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-3">
            {/* sorting product part */}
            <div className="flex items-center justify-center md:justify-between mb-12">
              <p className="text-black text-lg hidden md:block">
                Showing results 10
                {/* Showing results {filteredProduct?.length || 0} */}
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={
                      gridView
                        ? "text-primary cursor-pointer"
                        : "text-gray-500 cursor-pointer"
                    }
                    onClick={() => setGridView(true)}
                  >
                    <BsFillGridFill />
                  </span>
                  <span
                    className={
                      !gridView
                        ? "text-primary cursor-pointer"
                        : "text-gray-500 cursor-pointer"
                    }
                    onClick={() => setGridView(false)}
                  >
                    <FaList />
                  </span>
                </div>
                <select
                  className="outline-none text-lg px-8 py-4 bg-light-gray text-black rounded-md"
                  onClick={handleChange}
                >
                  <option className="text-black text-lg" value="high_to_low">
                    High to low
                  </option>
                  <option className="text-black text-lg" value="low_to_high">
                    Low to high
                  </option>
                </select>
              </div>
            </div>
            {/* product part */}
            <div
              className={
                gridView
                  ? `grid grid-cols-2 lg:grid-cols-3 gap-6`
                  : `grid grid-cols-1 gap-6`
              }
            >
              {isLoading
                ? "Loading..."
                : !data?.allProducts
                ? "Product Not Found"
                : productSortByPrice()
                    ?.map((product) => (
                      <Product
                        key={product._id}
                        gridView={gridView}
                        product={product}
                      />
                    ))
                    .reverse()}
            </div>
            <Pagination
              currentPage={currentPage}
              productPerPage={productPerPage}
              totalProducts={data?.allProducts.length}
              paginate={paginate}
            />
          </div>
          <Sidebar
            selectCate={selectCate}
            setSelectCate={setSelectCate}
            searchProducts={searchProducts}
            setSearchProducts={setSearchProducts}
            products={data?.allProducts}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
