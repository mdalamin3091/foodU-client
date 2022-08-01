import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  personalInfo,
  shippingInfo,
  shippinCost,
  paymentInfo,
} from "../userData";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
const CheckoutForm = ({ shippingCost, setShippingCost }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [shippingDetails, setshippingDetails] = useState({});
  const [cardNumber, setCardNumber] = useState("");

  const handleNavigate = () => {};

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleCost = (e) => {
    setShippingCost(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setshippingDetails({ ...shippingDetails, [name]: value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const checkOutInfo = {
      ...shippingDetails,
      cardNumber,
      paymentMethod,
      shippingCost
    }
  }
  return (
    <>
      <form className="col-span-3 lg:col-span-2" onSubmit={handleSubmit}>
        {/* personal info */}
        <h2 className="text-xl text-black mb-3">01. Personal Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {personalInfo.map((item, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={item.label} className="text-gray-600">
                {item.label}
              </label>
              <br />
              <input
                onChange={handleChange}
                className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                required
              />
            </div>
          ))}
        </div>
        {/* shipping info */}
        <h2 className="text-xl text-black mb-3">02. Shipping Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {shippingInfo.map((item, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={item.label} className="text-gray-600">
                {item.label}
              </label>
              <br />
              <input
                className="px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                required
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {/* shipping cost */}
        <h2 className="text-xl text-black mb-3">03. Shipping Cost</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {shippinCost.map((item, index) => (
            <div
              key={index}
              className="mb-3 border-2 border-gray-200 bg-light-gray rounded-md p-3 flex items-center justify-between"
            >
              <div className="flex items-center ">
                <span className="text-5xl color-gray-300 mr-3">
                  {item.icon}
                </span>
                <div>
                  <label htmlFor={item.name} className="text-gray-600 ">
                    {item.title}
                  </label>
                  <p>{item.text}</p>
                </div>
              </div>
              <br />
              <input
                onChange={handleCost}
                className="bg-light-gray w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                value={item.cost}
                required
              />
            </div>
          ))}
        </div>
        {/* payment method */}
        <h2 className="text-xl text-black mb-3">04. Payment Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
          {paymentMethod === "Credit Card" ? (
            <input
              className="col-span-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
              type="text"
              placeholder="Card Number"
              name="cardNumber"
              required
              onChange={(e) => setCardNumber(e.target.value)}
            />
          ) : null}
          {paymentInfo.map((item, index) => (
            <div className="col-span-2 lg:col-span-1">
              {/* select method */}
              <div
                key={index}
                className="mb-3 border-2 border-gray-200 bg-light-gray rounded-md p-3 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="text-4xl color-gray-300 mr-3">
                    {item.icon}
                  </span>
                  <div>
                    <label>{item.text}</label>
                  </div>
                </div>
                <input
                  onChange={handlePaymentMethod}
                  className=" bg-light-gray w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  name={item.name}
                  type={item.type}
                  value={item.text}
                  required
                />
              </div>
            </div>
          ))}
        </div>
        {/* confirm order btn */}
        <div className="grid gric-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <Link
            to="/shop"
            className="bg-gray-200 text-black py-2 px-4 flex items-center justify-center rounded-md hover:bg-gray-300"
          >
            <span className="text-xl mr-2">
              <IoReturnUpBackOutline />
            </span>
            Continue Shopping
          </Link>
          <button
            type="submit"
            onClick={handleNavigate}
            className="bg-primary text-black py-2 px-4 flex items-center justify-center rounded-md hover:bg-primary_hover hover:text-white"
          >
            Confirm Order
            <span className="text-xl ml-2">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
