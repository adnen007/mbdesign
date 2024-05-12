import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Order = () => {
  const { toggleOrder, cart } = useCartContext();
  const [formState, setFormState] = useState({ name: "", number: "", cart });
  const [isLoad, setIsLoad] = useState(false);

  const onInputChange = (e) => {
    if (e.target.name === "name") {
      setFormState({ ...formState, name: e.target.value });
    }
    if (e.target.name === "number") {
      setFormState({ ...formState, number: e.target.value });
    }
  };
  const onLoad = () => {
    if (formState.name && formState.number) {
      setIsLoad(true);
    }
  };
  const load = <div className="load"></div>;

  return (
    <Wrapper>
      <div className="content">
        <div className="close" onClick={toggleOrder}>
          <FaTimes />
        </div>
        <h2>Place Order</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="bb4ed03a-df5b-4c57-aa3a-ebd05a8aaa00"
          />
          <input
            type="hidden"
            name="redirect"
            value="http://localhost:3000/thank"
          ></input>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={onInputChange}
              type="text"
              id="name"
              name="name"
              value={formState.name}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input
              onChange={onInputChange}
              type="tel"
              id="number"
              name="number"
              value={formState.number}
              required
            />
          </div>
          <input
            hidden
            type="email"
            name="email"
            value="adnensoltaniii3@gmail.com"
            required
          />

          <input
            hidden
            type="text"
            name="cart"
            value={JSON.stringify(formState.cart)}
            required
          />

          <button onClick={onLoad} type="submit">
            {isLoad ? load : "Send"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  .content {
    max-width: 600px;
    background-color: white;
    margin: auto;
    padding: 30px 15px;
    flex-grow: 1;
    border-radius: 15px;
    position: relative;
    box-shadow: var(--dark-shadow);
    border-top: var(--clr-primary-5) 7px solid;
  }
  form {
    display: grid;
    gap: 30px;
    margin-top: 30px;
  }
  form > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  form input {
    height: 50px;
    padding-left: 10px;
    border-radius: 6px;
  }
  form label {
    text-transform: capitalize;
    font-weight: 500;
  }
  form button {
    height: 50px;
    margin-top: 15px;
    border-radius: 6px;
    font-size: 18px;
    background-color: var(--clr-primary-5);
    color: white;
    font-weight: 500;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 28px;
  }
  .load {
    border: solid 2px white;
    border-left-color: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto;
    animation: load 0.5s linear infinite;
    transform: rotate(0deg);
  }

  @keyframes load {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Order;
