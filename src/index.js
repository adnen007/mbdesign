import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
import AuthWrapper from "./pages/AuthWrapper";

// <Auth0Provider/> is a component that the auth0 package provide. it has its own state and
// context. whenever you call this component with domain , and clientId .
// first it will return its children and through it context it will pass useful method and
// properties like "login,logout, isAuthenticated, user.." you will be able to get those methods
// and properties from any child using the auth0 hook.

const root = ReactDOM.createRoot(document.getElementById("root"));

//6NW4L6X1T4GDYRV43G3EJ8Y6 security key

root.render(
  <Auth0Provider
    domain="dev-wovv2r1ycycrxesr.us.auth0.com"
    clientId="j12fYt1VRBteue4FprX66n8AKYxBmcGQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <FilterProvider>
            <AuthWrapper>
              <App />
            </AuthWrapper>
          </FilterProvider>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
