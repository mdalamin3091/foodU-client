import React from "react";

const UpdateCateogory = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Update Category</h2>
      <div className="grid grid-cols-1 bg-white shadow-md p-6 rounded-md mx-0 lg:mx-16">
        <div className="mb-4">
          <label htmlFor="category name" className="text-xl font-bold">
            Category Name
          </label>
          <br />
          <input
            type="text"
            name="categoryName"
            className="mt-2 px-4 py-2 w-full focus:outline-none border-2 border-transparent focus:border-primary rounded-md bg-light-gray"
            placeholder="Category Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="text-xl font-bold">
            Category Image
          </label>
          <br />
          <div className="form-group border-none my-2 bg-light-gray py-2">
            <span class="sr-only">Choose File</span>
            <input
              type="file"
              // onChange={(e) => handleImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              name="categoryImage"
            />
          </div>
        </div>
        <button className="btn-primary py-2">Update Category</button>
      </div>
    </>
  );
};

export default UpdateCateogory;
