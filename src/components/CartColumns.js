import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <p>Article</p>
      <p>Prix</p>
      <p>Quantité</p>
      <p>Sous-total</p>
      <p></p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  > p {
    text-align: center;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 80px 80px 80px 80px;
    justify-content: space-between;
    color: var(--clr-grey-5);
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export default CartColumns;
