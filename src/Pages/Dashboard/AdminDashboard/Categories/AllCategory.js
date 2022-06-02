import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const AllCategory = () => {
  const navigate = useNavigate();
  const categorys = [
    "Burger",
    "Kids Menus",
    "Burger",
    "Box Meals",
    "Chiken",
    "Sauces",
    "Drinks",
    "Pizza",
    "Pizza",
    "Pizza",
  ];
  const handleNavigate = () => {
    navigate("updateCategory/categoryId");
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">All Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {categorys.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col cursor-pointer hover:text-primary transition-all duration-150 group bg-white p-6 relative"
          >
            <div className="mx-auto">
              <img
                className="group-hover:scale-125 transition-all duration-300 ease-in-out"
                src={require("../../../../assets/images/category-img.png")}
                alt="category-img"
              />
            </div>
            <h2 className="uppercase text-sm font-bold text-center">
              {category}
            </h2>

            <div className="absolute top-4 right-2 flex items-center justify-end gap-2 translate-x-0 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 origin-left transition-all ease-linear duration-300">
              <span
                className="text-2xl font-bold text-green-600"
                onClick={handleNavigate}
              >
                <FaEdit />
              </span>
              <span className="text-2xl font-bold text-red-600">
                <MdDelete />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCategory;
