import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

//6NW4L6X1T4GDYRV43G3EJ8Y6 security key

root.render(
  <ProductsProvider>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </ProductsProvider>
);
