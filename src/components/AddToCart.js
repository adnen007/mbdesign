import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product: { colors, stock, id, name, price, images } }) => {
  const { addToCart } = useCartContext();

  const [color, setColor] = useState(colors[0]);

  const [currentProduct, setProduct] = useState({
    id,
    stock,
    color,
    amount: 1,
    price,
    name,
    image: images[0].url,
  });

  const toggleAmount = (value) => {
    setProduct({ ...currentProduct, amount: currentProduct.amount + value });
  };

  const onColorClick = (i) => {
    setColor(colors[i]);
    setProduct({ ...currentProduct, color: colors[i] });
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>Couleurs:</p>
        <div>
          {colors.map((item, i) => {
            return (
              <span
                onClick={() => onColorClick(i)}
                className={color === colors[i] ? "active" : null}
                style={{ backgroundColor: item }}
                key={i}
              >
                <FaCheck />
              </span>
            );
          })}
        </div>
      </div>
      <AmountButtons
        amount={currentProduct.amount}
        stock={stock}
        toggleAmount={toggleAmount}
        id={id}
      />
      <Link to="/cart" onClick={() => addToCart(currentProduct)} className="btn">
        AJOUTER AU PANIER
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 0;
  .colors {
    display: flex;
    gap: 50px;
    margin-bottom: 35px;
  }
  .colors > p {
    font-weight: bold;
  }
  .colors > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .colors span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    opacity: 0.7;
  }
  .colors span.active {
    opacity: 1;
  }
  .colors span svg {
    display: block;
    opacity: 0;
    color: white;
    font-size: 12px;
  }
  .colors span.active svg {
    display: block;
    opacity: 1;
  }
  .btn {
    margin-top: 20px;
  }
`;

export default AddToCart;
