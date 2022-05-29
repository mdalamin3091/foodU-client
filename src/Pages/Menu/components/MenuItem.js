import React from "react";
import { Link } from "react-router-dom";
import { BsMinecart } from "react-icons/bs";
const MenuItem = () => {
  return (
    <>
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
              className="text-2xl font-bold text-heading hover:text-primary cursor-pointer"
            >
              BBQ chicken breast
            </Link>
            <p className="text-gray-500 text-lg">
              A mighty meaty double helping of all the reasons you love our burger.
            </p>
            <span className="text-primary text-lg font-bold">£8.00</span>
            <span className="cart-icon absolute right-2 bottom-[-8px]">
              <BsMinecart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
