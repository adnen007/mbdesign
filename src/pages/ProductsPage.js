import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper className="products_page">
        <div className="container">
          <Filters />
          <div className="right">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  > .container {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .right {
    flex-grow: 1;
  }
  @media (width >= 768px) {
    .container {
      flex-direction: row;
    }
  }
`;

export default ProductsPage;
