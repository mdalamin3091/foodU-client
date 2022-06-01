import React from "react";
import { BiDrink } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const categories = [
    {
      icon: <FaHamburger />,
      text: "Burgers",
    },
    {
      icon: <BiDrink />,
      text: "Cold Drinks",
    },
    {
      icon: <GiFullPizza />,
      text: "Pizza",
    },
  ];
  return (
    <>
      {/* sidebar  */}
      <div className="col-span-1">
        <div className="border-2 border-gray-200 rounded-2xl p-2 pt-5 mb-7">
          <h3 className="text-xl font-bold mb-3 pl-2">Categories</h3>
          <div className="bg-light-gray p-4 rounded-xl space-y-4">
            {categories.map((category, index) => (
              <div className="flex items-start justify-start text-lg text-gray-500 hover:text-primary border-b-[1px] border-dashed border-gray-300 w-full cursor-pointer">
                <span className="text-xl" key={index}>
                  {category.icon}
                </span>
                <p className="ml-2">{category.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* search bar */}
        <div className="outline-none text-lg px-8 py-3 bg-light-gray text-black rounded-md relative mb-7">
          <input
            type="search"
            name="search"
            placeholder="Search product"
            className="outline-none py-3 w-full bg-transparent"
          />
          <span className="absolute right-3 text-xl text-gray-400 top-8 cursor-pointer">
            <FaSearch />
          </span>
        </div>

        {/* best deals */}
        <h3 className="text-xl font-bold mb-6 border-b-[1px] border-dashed border-gray-300">
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
