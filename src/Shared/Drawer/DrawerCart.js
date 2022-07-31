import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useAddToCartMutation } from "../../store/services/userServices";
const DrawerCart = ({ product }) => {
  const [sendAddtoCart] = useAddToCartMutation();
  const [productCount, setProductCount] = useState(1);
  const handleRemoveAddToCat = (id) => {
    sendAddtoCart(id);
  };
  return (
    <>
      <div className="grid grid-cols-10 border-b border-border mb-2">
        <div className="col-span-2 m-2">
          <img
            className="w-[60px] rounded-full"
            src={product.images[0]}
            alt="food"
          />
        </div>
        <div className="col-span-8">
          <div className="flex items-start">
            <div>
              <h3 className="text-heading font-semibold text-lg">
                {product.title}
              </h3>
              <p className="text-gray-500">
                Price: ${product.price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">${product.price * productCount}</h3>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="w-8 h-8 rounded-full bg-light-gray text-black flex items-center justify-center text-3xl cursor-pointer"
                  onClick={() => {
                    setProductCount((prevCount) =>
                      prevCount > 1 ? prevCount - 1 : prevCount
                    );
                  }}
                >
                  -
                </p>
              </div>
              <p className="text-black px-3 text-xl">{productCount}</p>
              <div>
                <p
                  className="w-8 h-8 rounded-full bg-light-gray text-black flex items-center justify-center text-3xl cursor-pointer"
                  onClick={() => {
                    setProductCount((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </p>
              </div>
            </div>
            <span
              className="text-2xl text-red-600 cursor-pointer"
              onClick={() => handleRemoveAddToCat(product._id)}
            >
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerCart;
