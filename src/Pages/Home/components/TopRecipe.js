import React from "react";
import { Link } from "react-router-dom";
import { BsMinecart } from "react-icons/bs";
const TopRecipe = () => {
  return (
    <div className="section-padding font-JosefinSans">
      <div className="container grid grid-cols-3 gap-8">
        <div className="col-span-3 md:col-span-2">
          {/* header */}
          <div className="flex items-center justify-between mb-12 px-5 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold text-heading">Top recipes</h2>
            <Link to="/shop" className="flex items-center justify-center">
              <span className="hover:text-primary mr-2">see All</span>
              <span className="bg-secondary w-6 h-6 rounded-lg flex items-center justify-center text-white text-sm ">
                {">"}
              </span>
            </Link>
          </div>
          {/* product items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0">
            {/* 1 */}
            <div className="recipe border-2 border-gray-200 rounded-3xl p-2">
              <div className="bg-light-gray flex items-center justify-between rounded-3xl gap-2">
                <div className="basis-1/3">
                  <img
                    className="w-full"
                    src={require("../../../assets/images/food_2.png")}
                    alt="food"
                  />
                </div>
                <div className="content basis-2/3 text-left mt-5 relative">
                  <Link
                    to="/shop"
                    className="text-lg font-bold text-heading hover:text-primary cursor-pointer"
                  >
                    BBQ chicken breast
                  </Link>
                  <h3>Pizza</h3>
                  <span className="text-primary text-lg font-bold">£8.00</span>
                  <span className="cart-icon absolute right-2 bottom-[-8px]">
                    <BsMinecart />
                  </span>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="recipe border-2 border-gray-200 rounded-3xl p-2">
              <div className="bg-light-gray flex items-center justify-between rounded-3xl gap-2">
                <div className="basis-1/3">
                  <img
                    className="w-full"
                    src={require("../../../assets/images/food_2.png")}
                    alt="food"
                  />
                </div>
                <div className="content basis-2/3 text-left mt-5 relative">
                  <Link
                    to="/shop"
                    className="text-lg font-bold text-heading hover:text-primary cursor-pointer"
                  >
                    BBQ chicken breast
                  </Link>
                  <h3>Pizza</h3>
                  <span className="text-primary text-lg font-bold">£8.00</span>
                  <span className="cart-icon absolute right-2 bottom-[-8px]">
                    <BsMinecart />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner part */}
        <div className="hidden md:col-span-1 md:block">
          <div className="relative text-center">
            <img className="rounded-lg w-full" src={require("../../../assets/images/top_recipe_banner.jpg")} alt="recipe banner" />
            <div className="banner-content absolute top-10 left-0 right-0">
              <h2 className="font-Norican font-bold text-3xl mb-2 text-white">Super Delicious</h2>
              <h1 className="text-6xl text-red-500 font-bold my-3">CHICKEN</h1>
              <p className="text-xl font-bold text-white">CALL US NOW:</p>
              <p className="text-3xl font-bold text-red-500">1-800-555-333</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecipe;
