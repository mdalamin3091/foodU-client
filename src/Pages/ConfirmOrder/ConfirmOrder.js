import React from "react";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";
const ConfirmOrder = () => {
  return (
    <>
      <div className="bg-light-gray font-JosefinSans section-padding">
        <div className="container text-center flex items-center justify-center">
          <div>
            <p className="text-6xl lg:text-9xl text-secondary flex items-center justify-center mb-5">
              <GiConfirmed />
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-heading">
              Your order is complete
            </h2>
            <p className="text-gray-500 text-xl mb-16">
              We are accept your order. Thanks your order
            </p>
            <Link to="/shop" className="btn-primary mt-5">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
