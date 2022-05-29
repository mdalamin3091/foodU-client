import React, { useState } from "react";
import ScreenHeader from "../../Shared/ScreenHeader";
import Product from "../../Shared/Product";
import { Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaList} from "react-icons/fa";
import Sidebar from "./components/Sidebar"
const Shop = () => {
  const [gridView, setGridView] = useState(true);

  return (
    <>
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
                <select className="outline-none text-lg px-8 py-4 bg-[#fff7e2] text-black rounded-md">
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
              <Product gridView={gridView} />
              <Product gridView={gridView} />
              <Product gridView={gridView} />
              <Product gridView={gridView} />
              <Product gridView={gridView} />
              <Product gridView={gridView} />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Shop;
