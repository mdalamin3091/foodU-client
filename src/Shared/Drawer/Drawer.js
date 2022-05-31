import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawerOpenFalse } from "../../store/reducers/drawerSlice";
const Drawer = () => {
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.drawer);
  return (
    <div
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out font-JosefinSans" +
        (drawerOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          " w-screen md:w-[420px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (drawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        {/* drawer header */}
        <div className="relative pb-10 flex flex-col space-y-6 overflow-hidden h-full">
          <div className="bg-gray-100">
            <header className="p-4 font-bold text-lg">Shopping Cart</header>
            <button
              className="absolute top-4 right-4 -rotate-45 text-3xl hover:text-red-500"
              onClick={() => dispatch(drawerOpenFalse(false))}
            >
              +
            </button>
          </div>
        </div>
        <h2>Your card is Empty</h2>
        {/* <div className="bg-primary text-white font-bold flex items-center justify-between px-4 py-4 rounded-xl absolute bottom-0 right-0 w-full cursor-pointer">
          Proceed to Checkout
          <div className="bg-white text-primary p-2 rounded-lg">$99.00</div>
        </div> */}
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
