import React, { useState } from "react";
import Product from "../../Shared/Product";
const RelatedProduct = ({data}) => {
  const [gridView, setGridView] = useState(true);
  return (
    <div className="section-padding pt-0 font-JosefinSans">
      <h2 className="text-4xl py-8 text-black font-bold text-center">
        Related Product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-0">
        <Product gridView={gridView} product={data?.getProduct} />
        <Product gridView={gridView} product={data?.getProduct} />
        <Product gridView={gridView} product={data?.getProduct} />
        <Product gridView={gridView} product={data?.getProduct} />
      </div>
    </div>
  );
};

export default RelatedProduct;
