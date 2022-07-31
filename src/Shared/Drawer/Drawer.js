import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModalTrue } from "../../store/reducers/authSlice";
import { drawerOpenFalse } from "../../store/reducers/drawerSlice";
import { useGetSingleUserQuery } from "../../store/services/userServices";
import DrawerCart from "./DrawerCart";
const Drawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { drawerOpen } = useSelector((state) => state.drawer);
  const { user } = useSelector((state) => state.auth);
  const { data, isSuccess, isLoading } = useGetSingleUserQuery();
  const [totalPrice, setTotalPrice] = useState(0);
  const handleNavigate = () => {
    if (user) {
      navigate("/checkout");
      dispatch(drawerOpenFalse(false));
    } else {
      dispatch(drawerOpenFalse(false));
      dispatch(showModalTrue(true));
    }
  };
  return (
    <div
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out font-JosefinSans" +
        (drawerOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <div
        className={
          "w-screen md:w-[420px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (drawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="pb-5 flex flex-col space-y-6 overflow-hidden h-full">
          {/* drawer header */}
          <div className="bg-gray-100">
            <header className="p-4 font-bold text-lg">Shopping Cart</header>
            <button
              className="absolute top-4 right-4 -rotate-45 text-3xl hover:text-red-500"
              onClick={() => dispatch(drawerOpenFalse(false))}
            >
              +
            </button>
          </div>
          {/* drawer body */}
          <div className="text-black overflow-auto ml-5 mt-2 !mb-[85px]">
            {isLoading
              ? "Loading..."
              : data?.user?.cart?.map((product) => {
                  return (
                    <DrawerCart product={product} />
                  );
                })}
          </div>
          {/* drawer checkout button */}
          <div class="fixed bottom-5 left-5 right-5 w-[90%]">
            <span>
              <div>
                <button
                  class="w-full py-3 px-3 rounded-lg bg-primary hover:bg-primary_hover flex items-center justify-between text-sm sm:text-base text-white focus:outline-none transition duration-300"
                  onClick={handleNavigate}
                >
                  <span class="align-middle font-medium">
                    Proceed To Checkout
                  </span>
                  <span class="rounded-lg font-bold py-2 px-3 bg-white text-secondary">
                    $ 100
                  </span>
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div
        className="h-full"
        onClick={() => {
          dispatch(drawerOpenFalse(false));
        }}
      ></div>
    </div>
  );
};

export default Drawer;
