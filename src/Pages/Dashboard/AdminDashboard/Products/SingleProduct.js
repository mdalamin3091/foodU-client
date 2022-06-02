import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import {useNavigate} from "react-router-dom";
const SingleProduct = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate("updateProduct/productId")
  }
  return (
    <>
      <div class="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer">
        <div class="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden group">
          <div class="relative pb-48 overflow-hidden">
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <div className="absolute top-4 right-4 flex items-center justify-end gap-4 translate-x-20 group-hover:-translate-x-0 origin-left transition-all ease-linear duration-300">
              <span className="text-2xl font-bold text-[#ffffff]">
                <HiEye />
              </span>
              <span className="text-2xl font-bold text-green-600" onClick={handleNavigate}>
                <FaEdit />
              </span>
              <span className="text-2xl font-bold text-red-600">
                <MdDelete />
              </span>
            </div>
          </div>
          <div class="p-4">
            <h2 class="mt-2 mb-2  font-bold text-xl">
              Purus Ullamcorper Inceptos Nibh
            </h2>
            <div class="mt-3 flex items-center">
              <span class="text-lg font-bold">Category:</span>&nbsp;
              <span class="font-semibold text-lg">Burger</span>
            </div>
            <p class="text-lg">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
