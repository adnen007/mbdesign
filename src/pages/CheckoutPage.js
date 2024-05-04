import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <PageHero title="checkout" />
      <div className="container">
        <section className="page_20">checkout is here</section>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
