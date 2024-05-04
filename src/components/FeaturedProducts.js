import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    featured_products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <Error />;
  }
  return (
    <Wrapper>
      <div className="title">
        <h2>featured products</h2>
      </div>
      <div className="container">
        {featured_products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="all_products btn">
        <Link to="/products">all products</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-grey-10);
  padding: 80px 0;
  .title {
    h2 {
      text-transform: capitalize;
      margin: auto auto 80px;
      width: fit-content;
      font-size: 33px;
      letter-spacing: 1px;
      position: relative;
      &:after {
        content: "";
        height: 4px;
        width: 30%;
        background-color: var(--clr-primary-5);
        position: absolute;
        bottom: -18px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  .all_products {
    margin: auto;
    display: block;
    width: fit-content;
    margin-top: 50px;
    padding: 9px 13px;
  }
  .all_products a {
    color: var(--clr-white);
  }
`;

export default FeaturedProducts;
