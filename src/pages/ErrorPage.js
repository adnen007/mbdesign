import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page_10">
      <div className="container">
        <h5>404</h5>
        <p>sorry the page you tried can not be found</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h5 {
    font-size: 92px;
  }
  p {
    font-weight: 800;
    font-size: 18px;
  }
  @media (max-width: 772px) {
    p {
      font-weight: 600;
      font-size: 16px;
    }
  }
  a {
    text-decoration: none;
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
    margin-top: 20px;
    padding: 4px 6px;
    border-radius: 5px;
  }
`;

export default ErrorPage;
