import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../../../store/services/productServices";
import { toast } from "react-toastify";
import ViewProductModal from "./ViewProductModal";
const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [sendProductId] = useDeleteProductMutation();
  const handleNavigate = (id) => {
    navigate(`updateProduct/${id}`);
  };
  const handleDelete = (id) => {
    sendProductId(id).then((res) => {
      if (res?.data) {
        toast.success(res?.data?.msg, {
          theme: "colored",
        });
      }
    });
  };
  const handleViewProduct = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="w-full p-4">
        <div className="product border-2 border-gray-200 bg-white rounded-2xl p-2 relative group font-JosefinSans">
          {/* image */}
          <div
            className="product-image basis-2/6"
            onClick={() => handleViewProduct(product._id)}
          >
            <img
              className="group-hover:scale-110 transition-all ease-linear duration-200 w-full"
              src={product.images[0]}
              alt="food"
            />
          </div>

          <div className="absolute top-4 right-4 flex items-center justify-end gap-4 translate-x-16 group-hover:-translate-x-0 origin-left transition-all ease-linear duration-300 z-20 opacity-0 group-hover:opacity-100">
            <span
              className="text-2xl font-bold text-green-600 cursor-pointer"
              onClick={() => handleNavigate(product._id)}
            >
              <FaEdit />
            </span>
            <span
              className="text-2xl font-bold text-red-600 cursor-pointer"
              onClick={() => handleDelete(product._id)}
            >
              <MdDelete />
            </span>
          </div>

          {/* product content */}
          <div className="content text-left p-4 pt-5 basis-4/6">
            <div
              className="text-2xl font-bold text-heading hover:text-primary_hover cursor-pointer"
              onClick={() => handleViewProduct(product._id)}
            >
              {product.title}
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-lg font-bold">Category:</span>&nbsp;
              <span class="font-semibold text-lg">{product.category}</span>
            </div>
            <p className="text-lg text-gray-500 ">{product.shortDescription}</p>
          </div>
        </div>
      </div>
      {
        <ViewProductModal
          product={product}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </>
  );
};

export default SingleProduct;
