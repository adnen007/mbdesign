import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
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
    <>
      <PageHero title="Cart" />
      <CartContent />
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    transform: translateY(-100%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 42px;
    text-transform: capitalize;
  }
  a {
    background-color: var(--clr-primary-5);
    color: white;
    font-size: 20px;
    padding: 10px 18px;
    border-radius: 5px;
    text-transform: uppercase;
    display: block;
  }
`;

export default CartPage;
