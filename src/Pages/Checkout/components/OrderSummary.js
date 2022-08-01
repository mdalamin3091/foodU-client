import React from "react";
import { useSelector } from "react-redux";
import DrawerCart from "../../../Shared/Drawer/DrawerCart";

const OrderSummary = ({shippingCost}) => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <div className="bg-light-gray p-5 border-2 border-gray-200 rounded-lg">
        <h3 className="text-2xl font-bold text-left">Order Summary</h3>
        <div className="w-full h-[220px] overflow-y-auto hide-scrollbar">
          {/* <DrawperCart /> */}
          {cart.cartItems.length === 0
            ? "Product Not Found"
            : cart.cartItems.map((product) => {
                return <DrawerCart key={product._id} product={product} />;
              })}
        </div>
        {/* coupon */}
        <div className="flex items-center justify-between gap-3">
          <input
            className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-white"
            type="text"
            placeholder="Apply Coupon Code"
          />
          <button className="btn-primary py-2">Apply</button>
        </div>
        <div className="py-5 border-b-2 border-border">
          <div className="flex items-center justify-between text-lg">
            <h5>Subtotal</h5>
            <span> ${cart.totalAmount + Number(shippingCost)}</span>
          </div>
          <div className="flex items-center justify-between text-lg">
            <h5>Shipping Cost</h5>
            <span> $0.00</span>
          </div>
          <div className="flex items-center justify-between text-lg">
            <h5>Discount</h5>
            <span className="text-primary"> $10.00</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg uppercase font-bold mt-4">
          <h5>Total Cost</h5>
          <span> $90.00</span>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
