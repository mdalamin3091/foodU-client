import React from "react";
import { Link } from "react-router-dom";
import { BsMinecart } from "react-icons/bs";
import { useAddToCartMutation } from "../../../store/services/userServices";
const MenuItem = ({product}) => {
  const [sendAddtoCart, cart] = useAddToCartMutation();
  const handleAddToCart = id =>{
    sendAddtoCart(id)
  }
  return (
    <>
      <div className="recipe border-2 border-gray-200 rounded-3xl p-2">
        <div className="bg-light-gray flex items-center justify-between rounded-3xl gap-2">
          <div className="basis-1/3">
            <img
              className="w-full"
              src={product.images[0]}
              alt="food"
            />
          </div>
          <div className="content basis-2/3 text-left mt-5 relative">
            <Link
              to="/shop"
              className="text-2xl font-bold text-heading hover:text-primary cursor-pointer"
            >
              {product.title}
            </Link>
            <p className="text-gray-500 text-lg">
              {product.shortDescription}
            </p>
            <span className="text-primary text-lg font-bold">${" "}{product.price}</span>
            <span className="cart-icon absolute right-3 bottom-[-20px]" onClick={()=>handleAddToCart(product._id)}>
              <BsMinecart />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
