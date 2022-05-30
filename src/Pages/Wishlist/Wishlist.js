import React from "react";
import ScreenHeader from "../../Shared/ScreenHeader";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Wishlist = () => {
  return (
    <>
      <ScreenHeader>
        <div>
          <h1 className="font-JosefinSans font-bold text-5xl text-center">
            Wishlist
          </h1>
          <Link to="/" className="text-gray-400 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-400 space-x-3"> {">"} </span>
          <span>Wishlist</span>
        </div>
      </ScreenHeader>
      <div className="container section-padding">
        <table className="w-full">
          <tbody>
            {/* 1 */}
            <tr className="w-full">
              <td className="border border-gray-400 w-1/6">
                <img
                  className="w-36 mx-auto"
                  src={require("../../assets/images/food_1.png")}
                  alt="food one"
                />
              </td>
              <td className="border border-gray-400 w-3/6 pl-5">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-primary font-bold hover:text-primary_hover">
                    Primo Meat
                  </h3>
                  <p className="text-gray-600 font-bold"> £9.00</p>
                </div>
              </td>
              <td className="border border-gray-400 w-2/6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl cursor-pointer font-bold text-primary hover:text-primary_hover">
                    <AiOutlineShoppingCart />
                  </span>
                  <span className="text-3xl cursor-pointer font-bold text-red-500 hover;text-red-600">
                    <MdDelete />
                  </span>
                </div>
              </td>
            </tr>
            {/* 2 */}
            <tr className="w-full">
              <td className="border border-gray-400 w-1/6">
                <img
                  className="w-36 mx-auto"
                  src={require("../../assets/images/food_1.png")}
                  alt="food one"
                />
              </td>
              <td className="border border-gray-400 w-3/6 pl-5">
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-primary font-bold hover:text-primary_hover">
                    Primo Meat
                  </h3>
                  <p className="text-gray-600 font-bold"> £9.00</p>
                </div>
              </td>
              <td className="border border-gray-400 w-2/6">
                <div className="flex items-center justify-center">
                  <span className="text-3xl cursor-pointer font-bold text-primary hover:text-primary_hover">
                    <AiOutlineShoppingCart />
                  </span>
                  <span className="text-3xl cursor-pointer font-bold text-red-500 hover;text-red-600">
                    <MdDelete />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Wishlist;
