import React, { useState } from "react";
import ScreenHeader from "../../Shared/ScreenHeader";
import { Link } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";
import NavBar from "../../Shared/NavBar";

const Checkout = () => {
  return (
    <>
    <NavBar />
      <ScreenHeader>
        <div>
          <h1 className="font-JosefinSans font-bold text-5xl text-center">
            Checkout
          </h1>
          <Link to="/" className="text-gray-400 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-400 space-x-3"> {">"} </span>
          <span>Checkout</span>
        </div>
      </ScreenHeader>
      <div className="bg-gray-50 font-JosefinSans">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-0 gap-8">
            {/* shipping details */}
            <CheckoutForm />

            {/* cart details */}
            <div className="col-span-3 lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
