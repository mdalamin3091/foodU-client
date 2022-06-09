import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import ProductDetailsTab from "./ProductDetailsTab/ProductDetailsTab";
import RelatedProduct from "./RelatedProduct";
import ProductDetailsBottom from "./ProductDetailsBottom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import { useSingleProductQuery } from "../../store/services/productServices";
import { useAddWishlistMutation } from "../../store/services/userServices";
const ProductDetails = () => {
  const [productCount, setProductCount] = useState(1);
  const { productId } = useParams();
  const { data, isSuccess, isLoading } = useSingleProductQuery({
    productId,
  });
  const [addProductWishlist, result] = useAddWishlistMutation();
  const handleWishlist = () => {
    addProductWishlist({ productId });
  };
  console.log(data)
  return (
    <div>
      <NavBar />
      <Breadcrumb data={data}/>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 section-padding font-JosefinSans px-5 lg:px-0">
          <div>
            {/* big image  */}
            <div className="border-2 border-gray-200 rounded-2xl p-2 h-auto">
              <div className="bg-light-gray h-full overflow-hidden">
                <img
                  className="h-full hover:scale-125 transition-all ease-linear duration-300 w-full"
                  src={data?.getProduct?.images[0]}
                  alt="single food"
                />
              </div>
            </div>
            {/* small images */}
            <div className="flex items-start gap-3 mt-4">
              <div className="border-2 border-gray-200 rounded-2xl p-2">
                <div className="bg-light-gray cursor-pointer opacity-70 hover:opacity-100">
                  <img
                    src={require("../../assets/images/single_food_1.png")}
                    alt="small food"
                  />
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-2xl p-2">
                <div className="bg-light-gray cursor-pointer opacity-70 hover:opacity-100">
                  <img
                    src={require("../../assets/images/single_food_1.png")}
                    alt="small food"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              {data?.getProduct?.title}
            </h2>
            <div className="flex items-center justify-start gap-1 text-primary text-lg mb-4">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p
                className="text-gray-400 hover:text-primary ml-2 "
              >
                (5 Customer Reviews)
              </p>
            </div>
            <p className="text-gray-600 text-xl mb-8">
              {data?.getProduct?.shortDescription}
            </p>
            <p className="text-primary text-4xl font-bold mb-4">
              £{data?.getProduct?.price}
            </p>
            <div className="flex items-center justify-between border-t-2 border-t-gray-200 border-b-2 border-b-gray-200 py-4 mb-6">
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
                    onClick={() =>
                      setProductCount((prevCount) => prevCount + 1)
                    }
                  >
                    +
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="btn-primary px-12 lg:px-32 mr-3 whitespace-nowrap">
                  Add to cart
                </button>
                <span className="text-xl text-gray-400 cursor-pointer hover:text-black px-4 py-5 rounded-lg bg-light-gray" onClick={()=>handleWishlist(data?.getProduct?._id)}>
                  <BsSuitHeartFill />
                </span>
              </div>
            </div>
            <h4 className="text-black">
              Category: <span className="font-bold">{data?.getProduct?.category}</span>
            </h4>
          </div>
        </div>
        {/* tab */}
        <ProductDetailsTab data={data}/>
        {/* related product */}
        <RelatedProduct data={data}/>
      </div>
      {/* product details bottom */}
      <ProductDetailsBottom data={data}/>
      <Footer />
    </div>
  );
};

export default ProductDetails;
