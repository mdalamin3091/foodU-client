import React from "react";

const AddProduct = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <div className="grid grid-cols-1 bg-white shadow-md p-6 rounded-md mx-0 lg:mx-16">
        <div className="mb-4">
          <label htmlFor="title" className="text-xl font-bold">
            Product Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            className="mt-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            placeholder="Product title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-xl font-bold">
            Product Price
          </label>
          <br />
          <input
            type="text"
            name="price"
            className="mt-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            placeholder="Product Price"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-xl font-bold">
            Select Category
          </label>
          <br />
          <select
            name="category"
            class="bg-light-gray border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
          >
            <option selected value="Burger">
              Burger
            </option>
            <option value="Pizza">Pizza</option>
            <option value="Pusta">Pusta</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="text-xl font-bold">
            Product Images
          </label>
          <br />
          <div className="form-group border-none my-2 bg-light-gray py-2">
            <span class="sr-only">Choose File</span>
            <input
              type="file"
              // onChange={(e) => handleImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              name="profilePic"
              multiple
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription" className="text-xl font-bold">
            Product Short Description
          </label>
          <br />
          <textarea
            name="shortDescription"
            className="mt-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            placeholder=" Product Short Description"
            rows="5"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-xl font-bold">
            Product Description
          </label>
          <br />
          <textarea
            name="Description"
            className="mt-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            placeholder=" Product Description"
            rows="5"
          ></textarea>
        </div>
        <button className="btn-primary py-2">Add Product</button>
      </div>
    </>
  );
};

export default AddProduct;
