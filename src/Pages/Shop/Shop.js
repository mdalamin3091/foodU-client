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

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const [selectCate, setSelectCate] = useState(null);
  const { data, isLoading, isSuccess } = useAllProductQuery();
  // const [matchProduct, setMatchProduct] = useState(data?.allProducts);
  const [allProducts, setAllProducts] = useState(data?.allProducts);
  const filteredProduct = data?.allProducts?.filter(
    (product) => product.category === selectCate
  );
  console.log(filteredProduct)
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
                Showing results 25
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
                <select className="outline-none text-lg px-8 py-4 bg-light-gray text-black rounded-md">
                  <option className="text-black text-lg" value="">
                    Default sorting
                  </option>
                  <option className="text-black text-lg" value="high_to_low">
                    High to low
                  </option>
                  <option className="text-black text-lg" value="low_to_high">
                    Low to high
                  </option>
                  <option className="text-black text-lg" value="average_rating">
                    Average rating
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
                : data?.allProducts
                    ?.map((product) => (
                      <Product
                        key={product._id}
                        gridView={gridView}
                        product={product}
                      />
                    ))
                    .reverse()}
            </div>
          </div>
          <Sidebar selectCate={selectCate} setSelectCate={setSelectCate} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
