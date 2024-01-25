import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

let initialState = { cart: [], total_amount: 0, total: 0, shipping_fee: 534 };
const oldCart = JSON.parse(localStorage.getItem("oldCart"));
if (oldCart) {
  // here we will check if we have data reltated to the cart in the localStorage we will
  // use that data as our intial state
  // if we don't we will just use the initial state.
  initialState = { ...initialState, cart: oldCart };
}

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // as what we always say it is convient and good practice to create all the function that will
  // update our state here so first from naming you will know what that function is doing.
  // and because you have a strict rule that to don't use dispatch outside of here if any thing
  // wrong happened you will konw you first should check this palce.

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    const stringState = JSON.stringify(state.cart);
    localStorage.setItem("oldCart", stringState);
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const toggleAmount = (value, id) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { value, id } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  // it is a very good practice use the dispatch only in the context . and if you want
  // to update the state from a children component just create a function does that using the dispatch
  // but make sure to create that function in the context so in your mind you know that there
  // isn't any updating of the state happening that don't first go through the context.
  // also if an error happen you will know where that error happened from the functions names.
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
