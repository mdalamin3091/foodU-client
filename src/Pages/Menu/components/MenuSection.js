import React, { useState } from "react";
import Tab from "../../../Shared/Tab";
import { useAllProductQuery } from "../../../store/services/productServices";
import MenuItem from "./MenuItem";
const MenuSection = () => {
  const [openTab, setOpenTab] = useState("Pizza");
  const { data, isLoading, isSuccess } = useAllProductQuery();
  const filteredData = data?.allProducts.filter(product => product.category === openTab);
  return (
    <div className="container section-padding font-JosefinSans">
      <h2 className="section-title text-center text-4xl">Menus Of The Day</h2>
      <Tab openTab={openTab} setOpenTab={setOpenTab} />
      {/* menu item */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0">
        {isLoading
          ? "Loading..."
          : filteredData?.slice(0, 6).map((product) => <MenuItem product={product} />)}
      </div>
    </div>
  );
};

export default MenuSection;
