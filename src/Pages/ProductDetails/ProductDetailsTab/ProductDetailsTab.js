import React, { useState } from "react";
import ReviewTabContent from "./ReviewTabContent";

const ProductDetailsTab = () => {
  const [selectTab, setSelectTab] = useState("Description");
  return (
    <div className="font-JosefinSans section-padding pt-0">
      {/* tab */}
      <div className="space-x-6 flex items-center justify-center mb-10">
        <button
          className={
            selectTab === "Description"
              ? "btn-primary px-[2rem] md:px-[2.5rem] text-white"
              : "btn-primary px-[2rem] md:px-[2.5rem] bg-transparent"
          }
          onClick={() => setSelectTab("Description")}
        >
          Description
        </button>
        <button
          className={
            selectTab === "Review"
              ? "btn-primary px-[2rem] md:px-[2.5rem] text-white whitespace-nowrap"
              : "btn-primary  px-[2rem] md:px-[2.5rem] bg-transparent whitespace-nowrap"
          }
          onClick={() => setSelectTab("Review")}
        >
          Reviews (2)
        </button>
      </div>
      {/* Description tab content  */}
      <div className={selectTab === "Description" ? "block px-16" : "hidden"}>
        <p className="text-gray-500 text-xl">
          Although the legendary Double Burger really needs no introduction,
          please allow us… Tucked in between three soft buns are two all-beef
          patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce.
          Hesburger’s own paprika and cucumber mayonnaise add the crowning
          touch. Oh baby!
        </p>
      </div>
      {/* Review tab content  */}
      <div className={selectTab === "Review" ? "block" : "hidden"}>
        <ReviewTabContent />
      </div>
    </div>
  );
};

export default ProductDetailsTab;
