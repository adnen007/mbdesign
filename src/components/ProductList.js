import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();

  console.log("2: products in the products list", filtered_products);

  if (filtered_products < 1) {
    return <h2>there isn't any products to display</h2>;
  }
  if (grid_view) {
    return <GridView filtered_products={filtered_products} />;
  }
  return <ListView filtered_products={filtered_products} />;
};

export default ProductList;
