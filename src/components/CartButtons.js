import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { useProductsContext } from "../context/products_context";
//import { useCartContext } from "../context/cart_context";
//import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  return (
    <Wrapper>
      <Link to="/cart" className="cart">
        <p>Cart</p>
        <FaShoppingCart />
        <span>5</span>
      </Link>
      <Link to="/checkout" className="login">
        <p>Login</p>
        <FaUserPlus />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  gap: 20px;
  > a {
    display: block;
    gap: 8px;
    background-color: transparent;
    text-decoration: none;
    color: #102a42;
    display: flex;
    font-size: 26px;
  }
  .cart {
    font-size: 26px;
    position: relative;
  }
  .cart p {
  }
  .cart svg {
  }
  .cart span {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
    top: -11px;
    right: -11px;
    font-size: 18px;
    width: 20px;
    height: 20px;
  }
  @media (width>= 992px) {
    display: flex;
  }
`;

/*
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`*/
export default CartButtons;
