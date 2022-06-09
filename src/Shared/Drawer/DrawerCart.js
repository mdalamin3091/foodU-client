import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const DrawerCart = ({ productCount, setProductCount, product }) => {
  // const [sendAddtoCart, cartResult] = useAddToCartMutation();
  // const handleRemoveAddToCat = (id) =>{
  //   sendAddtoCart(id)
  // }
  return (
    <>
      <div className="flex items-end justify-between border-b-2 border-border mb-2">
        <div className="flex items-center justify-start">
          <div>
            <img
              className="w-[80px] rounded-full"
              src={product.images[0]}
              alt="food"
            />
          </div>
          <div>
            <h3 className="text-heading font-semibold text-lg">{product.title}</h3>
            <p className="text-gray-500">
              Price: ${product.price * productCount}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center justify-between">
            <div>
              <p
                className="w-8 h-8 rounded-full bg-light-gray text-black flex items-center justify-center text-3xl cursor-pointer"
                onClick={() =>
                  setProductCount((prevCount) =>
                    prevCount > 1 ? prevCount - 1 : prevCount
                  )
                }
              >
                -
              </p>
            </div>
            <p className="text-black px-3 text-xl">{productCount}</p>
            <div>
              <p
                className="w-8 h-8 rounded-full bg-light-gray text-black flex items-center justify-center text-3xl cursor-pointer"
                onClick={() => setProductCount((prevCount) => prevCount + 1)}
              >
                +
              </p>
            </div>
          </div>
        </div>
        <span
          className="text-2xl text-red-600 cursor-pointer py-5" /// onClick={()=>handleRemoveAddToCat(product._id)}
        >
          <MdDelete />
        </span>
      </div>
    </>
  );
};

export default DrawerCart;
