import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import Order from "../components/Order";

const CartPage = () => {
  const { cart, order } = useCartContext();
  if (cart.length === 0) {
    return (
      <Wrapper className="page_10">
        <div>
          <h1>your cart is empty</h1>
          <Link to="/products">fill it</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <PageHero title="Cart" />
      <CartContent />
      <div className={order ? "order active" : "order"}>
        <Order />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .order {
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background-color: #eee;
    transform: translatex(-100%);
    transition: 0.6s;
    opacity: 0;
  }
  .order.active {
    transform: translatex(0%);
    opacity: 1;
  }
`;

export default CartPage;
