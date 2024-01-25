import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, { type, payload }) => {
  if (type === ADD_TO_CART) {
    if (state.cart.some((element) => element.id === payload.id + payload.color)) {
      const tempCart = state.cart.map((i) => {
        if (i.id === payload.id + payload.color) {
          console.log(i.stock);
          const newAmount = i.amount + payload.amount;
          if (newAmount > i.stock) {
            i.amount = i.stock;
          } else {
            i.amount = newAmount;
          }
        }
        return i;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = { ...payload, id: payload.id + payload.color };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (type === TOGGLE_CART_ITEM_AMOUNT) {
    const newCart = state.cart.map((element) => {
      if (element.id === payload.id) {
        element.amount = element.amount + payload.value;
        return element;
      }
      return element;
    });
    return { ...state, cart: newCart };
  }
  if (type === REMOVE_CART_ITEM) {
    const newCart = state.cart.filter((element) => {
      return !(payload === element.id);
    });
    return { ...state, cart: newCart };
  }
  if (type === CLEAR_CART) {
    return { ...state, cart: [], total_amount: 0, total: 0, shipping_fee: 534 };
  }
  if (type === COUNT_CART_TOTALS) {
    const totalAmount = state.cart.reduce((total, current) => {
      return total + current.amount;
    }, 0);
    const total = state.cart.reduce((total, current) => {
      return total + current.amount * current.price;
    }, 0);
    return { ...state, total, totalAmount };
  }
  throw new Error(`No Matching "${type}" - action type`);
};

export default cart_reducer;
