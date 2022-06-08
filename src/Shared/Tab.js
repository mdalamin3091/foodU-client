import React, { useState } from "react";
import { useAllCategoryQuery } from "../store/services/productServices";

const Tab = ({ openTab, setOpenTab }) => {
  const { data, isSuccess, isLoading } = useAllCategoryQuery();
  return (
    <>
      <div className="tab-wrapper flex flex-wrap items-center justify-center gap-4 mb-12">
        {isLoading
          ? "Loading..."
          : data?.allCategory?.slice(0, 5).map((category, index) => (
              <button
                className={
                  openTab === category.categoryName
                    ? "btn-tab bg-primary border-primary text-white"
                    : "btn-tab"
                }
                onClick={() => setOpenTab(category.categoryName)}
              >
                {category.categoryName}
              </button>
            ))}
      </div>
    </>
  );
};

export default Tab;
